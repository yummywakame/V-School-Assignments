/**
 * Small HTTP service: builds a deduped cocktail name list from TheCocktailDB
 * (search.php?f= per letter/digit), caches JSON on disk, refreshes weekly.
 *
 * Usage:
 *   node server/index.js              → listen on PORT (default 3001)
 *   node server/index.js --refresh  → fetch once, write cache, exit
 *
 * Env (same as the SPA):
 *   VITE_API_KEY | REACT_APP_API_KEY | COCKTAILDB_API_KEY → v2 root if set
 *   PORT → listen port (default 3001)
 */

const http = require("http")
const https = require("https")
const fs = require("fs")
const path = require("path")
const { URL } = require("url")

/** Load project `.env` into `process.env` so `npm run dev` matches Vite (Node does not read .env by default). */
function loadDotEnv() {
  const envPath = path.join(__dirname, "..", ".env")
  try {
    const raw = fs.readFileSync(envPath, "utf8")
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith("#")) continue
      const eq = trimmed.indexOf("=")
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      let val = trimmed.slice(eq + 1).trim()
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1)
      }
      if (!Object.prototype.hasOwnProperty.call(process.env, key) || process.env[key] === "") {
        process.env[key] = val
      }
    }
  } catch {
    // no .env file
  }
}

loadDotEnv()

const PORT = Number(process.env.PORT) || 3001
const CACHE_DIR = path.join(__dirname, "cache")
const CACHE_FILE = path.join(CACHE_DIR, "cocktail-names.json")
const WEEK_MS = 7 * 24 * 60 * 60 * 1000
const REQUEST_GAP_MS = 150

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getApiRoot() {
  const k = String(
    process.env.VITE_API_KEY ||
      process.env.REACT_APP_API_KEY ||
      process.env.COCKTAILDB_API_KEY ||
      ""
  ).trim()
  return k
    ? `https://www.thecocktaildb.com/api/json/v2/${encodeURIComponent(k)}`
    : "https://www.thecocktaildb.com/api/json/v1/1"
}

function httpsGetJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = ""
        res.on("data", (chunk) => {
          body += chunk
        })
        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`HTTP ${res.statusCode} for ${url}`))
            return
          }
          try {
            resolve(JSON.parse(body))
          } catch (e) {
            reject(e)
          }
        })
      })
      .on("error", reject)
  })
}

async function fetchAllCocktailNames() {
  const apiRoot = getApiRoot()
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz".split("")
  const names = new Set()

  for (const c of chars) {
    const url = `${apiRoot}/search.php?f=${encodeURIComponent(c)}`
    try {
      const json = await httpsGetJson(url)
      const drinks = json && Array.isArray(json.drinks) ? json.drinks : []
      for (const d of drinks) {
        if (d && d.strDrink) names.add(d.strDrink)
      }
    } catch (err) {
      console.warn(`[cocktail-names] skip letter ${c}:`, err && err.message ? err.message : err)
    }
    await sleep(REQUEST_GAP_MS)
  }

  return [...names].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
}

function readCacheFromDisk() {
  try {
    const raw = fs.readFileSync(CACHE_FILE, "utf8")
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function writeCacheToDisk(payload) {
  fs.mkdirSync(CACHE_DIR, { recursive: true })
  fs.writeFileSync(CACHE_FILE, JSON.stringify(payload), "utf8")
}

function cacheIsFresh(payload) {
  if (!payload || !payload.updatedAt || !Array.isArray(payload.names) || !payload.names.length) {
    return false
  }
  const age = Date.now() - new Date(payload.updatedAt).getTime()
  return age >= 0 && age < WEEK_MS
}

/** In-flight full rebuild (cold start or explicit refresh). Never await in HTTP handler. */
let rebuildPromise = null

function kickRebuild() {
  if (!rebuildPromise) {
    rebuildPromise = fetchAllCocktailNames()
      .then((names) => {
        writeCacheToDisk({ updatedAt: new Date().toISOString(), names })
      })
      .catch((err) => {
        console.warn("[cocktail-names] rebuild failed:", err && err.message ? err.message : err)
      })
      .finally(() => {
        rebuildPromise = null
      })
  }
}

/**
 * Non-blocking for the HTTP response:
 * - Fresh cache → return it
 * - Stale cache with names → return immediately (stale-while-revalidate), rebuild in background
 * - Cold / empty → return { building: true, names: [] } immediately; first GET kicks rebuild
 */
function loadOrRefreshNamesForResponse() {
  const disk = readCacheFromDisk()
  if (cacheIsFresh(disk)) {
    return disk
  }

  if (disk && Array.isArray(disk.names) && disk.names.length > 0) {
    kickRebuild()
    return disk
  }

  if (rebuildPromise) {
    const partial = readCacheFromDisk()
    if (partial && Array.isArray(partial.names) && partial.names.length > 0) {
      return partial
    }
    return {
      updatedAt: new Date().toISOString(),
      names: [],
      building: true
    }
  }

  kickRebuild()
  const afterKick = readCacheFromDisk()
  if (afterKick && Array.isArray(afterKick.names) && afterKick.names.length > 0) {
    return afterKick
  }
  return {
    updatedAt: new Date().toISOString(),
    names: [],
    building: true
  }
}

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj)
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  })
  res.end(body)
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    res.writeHead(204)
    res.end()
    return
  }

  const host = `http://127.0.0.1:${PORT}`
  let pathname = "/"
  try {
    pathname = new URL(req.url || "/", host).pathname
  } catch {
    pathname = "/"
  }

  if (req.method === "GET" && pathname === "/api/cocktail-names") {
    try {
      const payload = loadOrRefreshNamesForResponse()
      sendJson(res, 200, payload)
    } catch (e) {
      sendJson(res, 500, { error: String(e && e.message ? e.message : e) })
    }
    return
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
  res.end("Not found")
})

if (process.argv.includes("--refresh")) {
  fetchAllCocktailNames()
    .then((names) => {
      const payload = { updatedAt: new Date().toISOString(), names }
      writeCacheToDisk(payload)
      console.log(`[cocktail-names] wrote ${names.length} names → ${CACHE_FILE}`)
      process.exit(0)
    })
    .catch((err) => {
      console.error("[cocktail-names] refresh failed:", err)
      process.exit(1)
    })
} else {
  server.listen(PORT, () => {
    console.log(`[cocktail-names] server http://localhost:${PORT}  (GET /api/cocktail-names)`)
  })
}

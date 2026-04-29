#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const args = new Set(process.argv.slice(2))
const useDeep = args.has("--deep")
const useApply = args.has("--apply")
const useHelp = args.has("--help") || args.has("-h")

if (useHelp) {
  printHelp()
  process.exit(0)
}

const startDir = process.cwd()
const targets = useDeep ? discoverTargets(startDir) : [startDir]
const reports = targets.map((dir) => analyzeTarget(dir, useApply))
const written = writeReport(startDir, reports, { useDeep, useApply })

const totalFindings = reports.reduce((sum, r) => sum + r.findings.length, 0)
const totalActions = reports.reduce((sum, r) => sum + r.actions.length, 0)

console.log(`\nmodernize scan complete`)
console.log(`- mode: ${useApply ? "apply + report" : "report only"}`)
console.log(`- scanned targets: ${reports.length}`)
console.log(`- findings: ${totalFindings}`)
console.log(`- apply actions run: ${totalActions}`)
console.log(`- report: ${written}`)
console.log(`\nTip: use --deep for recursive scan, --apply for safe automated dependency fixes.`)

function printHelp() {
  console.log(`
modernize - analyze V-School project folders for modernization and security risks

Usage:
  modernize               Analyze current folder, report only
  modernize --deep        Analyze current folder + nested project folders
  modernize --apply       Run safe fixes (npm audit fix) + report
  modernize --deep --apply

Notes:
- Default mode is report-only (no code changes).
- --apply currently performs safe dependency maintenance only:
  - npm audit fix (without --force) in npm-based targets.
- After --apply, test in browser before committing/pushing.
`.trim())
}

function discoverTargets(rootDir) {
  const found = new Set()
  walk(rootDir, (dir) => {
    if (hasFile(dir, "package.json") || looksLikeStaticProject(dir)) {
      found.add(dir)
    }
  })
  if (found.size === 0) found.add(rootDir)
  return [...found]
}

function walk(rootDir, onDir) {
  const stack = [rootDir]
  const skipNames = new Set([
    ".git",
    "node_modules",
    "dist",
    "build",
    ".next",
    ".cache",
    "coverage",
  ])

  while (stack.length) {
    const dir = stack.pop()
    if (!dir) continue
    onDir(dir)
    let entries = []
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true })
    } catch {
      continue
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      if (skipNames.has(entry.name)) continue
      stack.push(path.join(dir, entry.name))
    }
  }
}

function analyzeTarget(dir, allowApply) {
  const findings = []
  const actions = []
  const rel = path.relative(startDir, dir) || "."
  const packageJsonPath = path.join(dir, "package.json")
  const hasPackage = fs.existsSync(packageJsonPath)
  const type = detectType(dir, hasPackage)

  if (hasPackage) {
    const pkg = readJson(packageJsonPath)
    const deps = {
      ...((pkg && pkg.dependencies) || {}),
      ...((pkg && pkg.devDependencies) || {}),
    }

    if (deps["react-scripts"]) {
      findings.push({
        severity: "medium",
        title: "Legacy CRA tooling detected",
        detail: "react-scripts found; candidate for Vite migration.",
      })
    }

    if (!hasFile(dir, "package-lock.json") && !hasFile(dir, "yarn.lock")) {
      findings.push({
        severity: "medium",
        title: "No lockfile found",
        detail: "Dependency lockfile missing can cause non-reproducible installs.",
      })
    }

    const audit = runNpmAudit(dir)
    findings.push(...audit.findings)

    const outdated = runNpmOutdated(dir)
    findings.push(...outdated.findings)

    if (allowApply) {
      const applyRes = run("npm", ["audit", "fix"], dir)
      actions.push({
        title: "npm audit fix",
        status: applyRes.status === 0 ? "ok" : "needs-review",
        detail: summarizeOutput(applyRes),
      })
    }
  } else {
    if (looksLikeStaticProject(dir)) {
      findings.push({
        severity: "low",
        title: "Static project (no package manifest)",
        detail: "No package.json found; Dependabot package alerts unlikely for this folder.",
      })
      findings.push(...scanStaticRisks(dir))
    } else {
      findings.push({
        severity: "info",
        title: "No recognized project files",
        detail: "Folder does not look like npm or static web project.",
      })
    }
  }

  return { dir, rel, type, findings, actions }
}

function detectType(dir, hasPackage) {
  if (hasPackage) {
    const pkg = readJson(path.join(dir, "package.json")) || {}
    const deps = {
      ...(pkg.dependencies || {}),
      ...(pkg.devDependencies || {}),
    }
    if (deps.react || deps["react-dom"]) return "react-npm"
    return "npm"
  }
  if (looksLikeStaticProject(dir)) return "static-web"
  return "unknown"
}

function runNpmAudit(dir) {
  const res = run("npm", ["audit", "--json"], dir)
  const findings = []
  const payload = parseJsonSafe(res.stdout) || parseJsonSafe(res.stderr)
  if (!payload || !payload.metadata || !payload.metadata.vulnerabilities) {
    findings.push({
      severity: "info",
      title: "npm audit result unavailable",
      detail: "Could not parse npm audit JSON; inspect command output manually.",
    })
    return { findings }
  }
  const vulns = payload.metadata.vulnerabilities
  const total =
    (vulns.info || 0) +
    (vulns.low || 0) +
    (vulns.moderate || 0) +
    (vulns.high || 0) +
    (vulns.critical || 0)

  if (total === 0) {
    findings.push({
      severity: "info",
      title: "npm audit clean",
      detail: "No known vulnerabilities reported.",
    })
  } else {
    findings.push({
      severity: vulns.critical || vulns.high ? "high" : "medium",
      title: "npm vulnerabilities detected",
      detail: `critical:${vulns.critical || 0}, high:${vulns.high || 0}, moderate:${vulns.moderate || 0}, low:${vulns.low || 0}`,
    })
  }
  return { findings }
}

function runNpmOutdated(dir) {
  const res = run("npm", ["outdated", "--json"], dir)
  const findings = []
  const payload = parseJsonSafe(res.stdout) || parseJsonSafe(res.stderr) || {}
  const names = Object.keys(payload)
  if (names.length === 0) {
    findings.push({
      severity: "info",
      title: "Dependencies up-to-date (or none reported)",
      detail: "npm outdated reported no outdated dependencies.",
    })
  } else {
    findings.push({
      severity: "low",
      title: "Outdated dependencies found",
      detail: `${names.length} package(s) outdated.`,
    })
  }
  return { findings }
}

function scanStaticRisks(dir) {
  const findings = []
  const files = collectFiles(dir, new Set([".html", ".js", ".mjs", ".cjs"]))
  let evalHits = 0
  let innerHtmlHits = 0
  let documentWriteHits = 0
  let insecureHttpHits = 0

  for (const file of files) {
    let text = ""
    try {
      text = fs.readFileSync(file, "utf8")
    } catch {
      continue
    }
    evalHits += countMatches(text, /\beval\s*\(/g)
    innerHtmlHits += countMatches(text, /\.innerHTML\s*=/g)
    documentWriteHits += countMatches(text, /document\.write\s*\(/g)
    insecureHttpHits += countMatches(text, /http:\/\//g)
  }

  if (evalHits > 0) {
    findings.push({
      severity: "high",
      title: "eval() usage detected",
      detail: `${evalHits} occurrence(s) found.`,
    })
  }
  if (innerHtmlHits > 0) {
    findings.push({
      severity: "medium",
      title: "innerHTML assignments detected",
      detail: `${innerHtmlHits} occurrence(s) found; validate sanitization.`,
    })
  }
  if (documentWriteHits > 0) {
    findings.push({
      severity: "medium",
      title: "document.write usage detected",
      detail: `${documentWriteHits} occurrence(s) found.`,
    })
  }
  if (insecureHttpHits > 0) {
    findings.push({
      severity: "low",
      title: "Insecure http:// references detected",
      detail: `${insecureHttpHits} occurrence(s) found.`,
    })
  }

  if (
    evalHits === 0 &&
    innerHtmlHits === 0 &&
    documentWriteHits === 0 &&
    insecureHttpHits === 0
  ) {
    findings.push({
      severity: "info",
      title: "No obvious static JS risk patterns found",
      detail: "No eval/innerHTML/document.write/http patterns detected.",
    })
  }
  return findings
}

function collectFiles(dir, extensions) {
  const out = []
  walk(dir, (current) => {
    let entries = []
    try {
      entries = fs.readdirSync(current, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      if (!entry.isFile()) continue
      const ext = path.extname(entry.name).toLowerCase()
      if (extensions.has(ext)) out.push(path.join(current, entry.name))
    }
  })
  return out
}

function countMatches(text, regex) {
  const matches = text.match(regex)
  return matches ? matches.length : 0
}

function writeReport(rootDir, reports, opts) {
  const now = new Date().toISOString()
  const lines = []
  lines.push("# MODERNIZE Report")
  lines.push("")
  lines.push(`- Generated: ${now}`)
  lines.push(`- Root: \`${rootDir}\``)
  lines.push(`- Mode: ${opts.useApply ? "apply + report" : "report only"}`)
  lines.push(`- Deep scan: ${opts.useDeep ? "yes" : "no"}`)
  lines.push("")
  lines.push("> Reminder: run with `--deep` to scan nested projects and `--apply` for safe dependency fixes.")
  lines.push("")

  for (const item of reports) {
    lines.push(`## ${item.rel}`)
    lines.push(`- Type: \`${item.type}\``)
    lines.push(`- Findings: ${item.findings.length}`)
    if (item.actions.length) lines.push(`- Apply actions: ${item.actions.length}`)
    lines.push("")
    lines.push("### Findings")
    for (const f of item.findings) {
      lines.push(`- [${f.severity}] **${f.title}** - ${f.detail}`)
    }
    if (item.findings.length === 0) {
      lines.push("- None")
    }
    lines.push("")
    if (item.actions.length) {
      lines.push("### Apply Actions")
      for (const a of item.actions) {
        lines.push(`- [${a.status}] **${a.title}** - ${a.detail}`)
      }
      lines.push("")
    }
  }

  lines.push("## Next Steps")
  lines.push("- Review findings and choose target folders to modernize.")
  lines.push("- For code-changing upgrades, run in branch, test in browser, then commit/push after approval.")
  lines.push("- For repo-wide vulnerability reduction, run from repo root with `--deep`.")
  lines.push("")

  const reportPath = path.join(rootDir, "MODERNIZE_REPORT.md")
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8")
  return reportPath
}

function summarizeOutput(result) {
  const text = `${result.stdout || ""}\n${result.stderr || ""}`.trim()
  if (!text) return "No output."
  const oneLine = text.split(/\r?\n/).slice(0, 2).join(" | ")
  return oneLine.length > 220 ? `${oneLine.slice(0, 217)}...` : oneLine
}

function run(command, commandArgs, cwd) {
  const res = spawnSync(command, commandArgs, {
    cwd,
    encoding: "utf8",
    shell: process.platform === "win32",
  })
  return {
    status: typeof res.status === "number" ? res.status : 1,
    stdout: res.stdout || "",
    stderr: res.stderr || "",
  }
}

function parseJsonSafe(text) {
  if (!text || !text.trim()) return null
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"))
  } catch {
    return null
  }
}

function hasFile(dir, fileName) {
  return fs.existsSync(path.join(dir, fileName))
}

function looksLikeStaticProject(dir) {
  const html = listFilesByExt(dir, ".html")
  const js = listFilesByExt(dir, ".js")
  const css = listFilesByExt(dir, ".css")
  return html + js + css > 0
}

function listFilesByExt(dir, ext) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    return entries.filter((e) => e.isFile() && path.extname(e.name).toLowerCase() === ext).length
  } catch {
    return 0
  }
}

const fs = require("fs")
const path = require("path")

const projectRoot = path.join(__dirname, "..")
const sourceFile = path.join(projectRoot, "server", "cache", "cocktail-names.json")
const targetDir = path.join(projectRoot, "public", "data")
const targetFile = path.join(targetDir, "cocktail-names.json")

if (!fs.existsSync(sourceFile)) {
  console.error(`Missing source cache file: ${sourceFile}`)
  console.error("Run `npm run refresh-cocktail-names` first.")
  process.exit(1)
}

fs.mkdirSync(targetDir, { recursive: true })
fs.copyFileSync(sourceFile, targetFile)
console.log(`Copied static cache: ${targetFile}`)

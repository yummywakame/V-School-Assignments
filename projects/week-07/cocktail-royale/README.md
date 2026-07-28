# Cocktail Royale v2

Modernized V School project (originally January 2019 cohort). Preserves the original look and behavior while updating the stack for current Node tooling and dependency security.

Data comes from [TheCocktailDB API](https://www.thecocktaildb.com/) via axios. This is the **assignment-era** app — separate from **Cocktail Royale v3** (`cocktail-royale-v3`), which uses its own MySQL database and Express API at `/demos/cocktail-royale/`.

## Tech stack

- React 18
- React Router 5
- Axios
- Vite (replaces legacy Create React App tooling)

## Live site

- [Cocktail Royale v2 (V School demo)](https://yummy-wakame.com/demos/cocktail-royale-vschool/)
- Server path: `/home/yummywak/public_html/demos/cocktail-royale-vschool/`

Production is **static hosting only** (Apache serves files from `dist/`). There is no Node or Vite process on the server — upload a fresh build and you are done. No cPanel Node restart required.

## Features

- Theme chooser
- Fully responsive on any device
- Discover cocktails by ingredient
- Cocktail Roulette randomly selects a cocktail for you
- Non-alcoholic cocktail options
- Most recently added cocktails
- Most popular cocktails
- High-res images of cocktails and ingredients
- Autocomplete on ingredient and cocktail name search

See the [live demo](https://yummy-wakame.com/demos/cocktail-royale-vschool/) for desktop (pink) and mobile (blue) themes.

## Recent updates

- **2026-07-28:** Redeployed Mochahost demo with refreshed cocktail-names cache; dependency security baseline clean (`axios`, `postcss`, `shell-quote` via Dependabot).
- Added autocomplete to both search inputs (ingredient and cocktail name suggestions).
- Updated the Popular Cocktails page with a curated list (alphabetical ordering).
- Updated Latest Cocktails behavior to improve how recent drinks are sourced and displayed.

## Local development

### Prerequisites

- Node.js (current LTS recommended)
- npm
- A [CocktailDB](https://www.thecocktaildb.com/) API key in `.env` (see [Environment variables](#environment-variables))

### Install

```bash
npm install
```

### Run development server (frontend only)

Starts Vite on port **5173**.

```bash
npm start
```

### Run frontend + cocktail-name cache API (recommended locally)

Starts Vite and a small Node server on port **3001** that serves **`/api/cocktail-names`** (weekly disk cache under `server/cache/`).

The names API responds immediately on a **cold** cache (`building: true`, empty `names`) while it fills the cache in the background; the app retries until names are ready. The SPA also **defers** the first fetch until the browser is idle so the welcome screen is not blocked.

```bash
npm run dev
```

### Cocktail name list server (standalone)

```bash
npm run server
```

Refresh the on-disk cache once (writes `server/cache/cocktail-names.json`), for example before a production build or from a weekly cron job:

```bash
npm run refresh-cocktail-names
```

### Build production bundle (generic)

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

## How cocktail names work (dev vs production)

| Context | Names source |
|---|---|
| **Local dev** (`npm run dev`) | Live Node cache at `/api/cocktail-names` |
| **Production static build** | Baked file at `data/cocktail-names.json` inside `dist/` |
| **Override** | Set `VITE_COCKTAIL_NAMES_URL` to any absolute JSON URL |

The Mochahost demo uses the static file path. The Node cache server is for local development and for generating that file before you build.

## Deploy to Mochahost (V School demo)

From the project root, with `VITE_API_KEY` set in `.env`:

```bash
npm run build:vschool-demo
```

That script:

1. Refreshes `server/cache/cocktail-names.json` from TheCocktailDB
2. Copies it to `public/data/cocktail-names.json`
3. Runs `vite build --base=/demos/cocktail-royale-vschool/`

Upload **everything inside `dist/`** to:

`/home/yummywak/public_html/demos/cocktail-royale-vschool/`

Example via SCP (adjust key path if needed):

```powershell
# Create archive locally (from dist/)
tar -a -cf cocktail-royale-vschool-deploy.zip -C dist .

# Upload and extract on server
scp -i "$env:USERPROFILE\.ssh\olivi_mochahost_nopass" cocktail-royale-vschool-deploy.zip yummywak@65.181.116.152:/home/yummywak/public_html/demos/cocktail-royale-vschool/
ssh -i "$env:USERPROFILE\.ssh\olivi_mochahost_nopass" yummywak@65.181.116.152 "cd /home/yummywak/public_html/demos/cocktail-royale-vschool && rm -rf assets && unzip -o cocktail-royale-vschool-deploy.zip && rm -f cocktail-royale-vschool-deploy.zip"
```

Remove the old `assets/` folder before extracting so stale hashed JS/CSS files are not left behind.

**No server restart** is required after deploy — Apache serves the new static files immediately.

### Rollback

Keep the previous `dist/` zip locally. Re-upload and extract over the demo folder if needed.

## Environment variables

The app expects a [CocktailDB](https://www.thecocktaildb.com/) API key.

- Preferred (Vite): `VITE_API_KEY`
- Backward-compatible fallback: `REACT_APP_API_KEY`

Optional — only if the names JSON is hosted somewhere other than the default static path:

- `VITE_COCKTAIL_NAMES_URL` — e.g. `https://yummy-wakame.com/demos/cocktail-royale-vschool/data/cocktail-names.json`

Create a `.env` file in the project root (see `.env.example`):

```bash
VITE_API_KEY=your_api_key_here
# VITE_COCKTAIL_NAMES_URL=https://your-host/data/cocktail-names.json
```

## Other scripts

- `npm run prepare-static-cache` — copy `server/cache/cocktail-names.json` to `public/data/` (used by `build:vschool-demo`)
- `npm run deploy` — legacy Surge.sh one-liner; **not used** for the Mochahost demo

## Git (line endings)

The repo includes a `.gitattributes` file so text files stay **LF** in Git and you avoid whole-file “changed” noise from CRLF/LF alone. Commit with `git add -A`, then `git commit` and `git push` as usual.

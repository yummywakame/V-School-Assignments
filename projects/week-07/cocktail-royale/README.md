# Cocktail Royale v2

### Modernized V School project (originally January 2019 cohort)

This is the modernized v2 of Cocktail Royale. It preserves the original look and behavior while updating the stack for current Node tooling and dependency security.

#### Tech Stack (v2)

- React
- React Router
- Axios
- Vite (replaces legacy Create React App tooling)

#### Live Site:

- [Cocktail Royale](https://yummy-wakame.com/demos/cocktail-royale-vschool)

#### Features:

- Theme chooser
- Fully responsive on any device
- Discover cocktails by ingredient
- Cocktail Roulette randomly selects a cocktail for you
- Non-Alcoholic cocktail options
- Most recently added cocktails
- Most popular cocktails
- High res images of cocktails and ingredients

#### Screenshots:

- LEFT: Desktop - pink color scheme
- RIGHT: Responsive - blue color scheme

## Recent Project Updates

- Added autocomplete to both search inputs:
  - Ingredient search suggestions
  - Cocktail name search suggestions
- Updated the Popular Cocktails page with a curated list (and alphabetical ordering).
- Updated Latest Cocktails behavior to improve how recent drinks are sourced and displayed.

## Local Development

### Prerequisites

- Node.js (current LTS recommended)
- npm

### Install

```bash
npm install
```

### Run development server (frontend only)

```bash
npm start
```

### Run frontend + cocktail-name cache API (recommended locally)

Starts Vite and a small Node server on port **3001** that proxies as `**/api/cocktail-names`** (weekly disk cache under `server/cache/`).

The names API responds immediately on a **cold** cache (`building: true`, empty `names`) while it fills the cache in the background; the app retries until names are ready. The SPA also **defers** the first fetch until the browser is idle so the welcome screen is not blocked.

```bash
npm run dev
```

### Cocktail name list server (production-style)

```bash
npm run server
```

Refresh the on-disk cache once (writes `server/cache/cocktail-names.json`), for example from a weekly cron job:

```bash
npm run refresh-cocktail-names
```

### Build production bundle

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

## Environment Variables

The app expects a [CocktailDB](https://www.thecocktaildb.com/) API key.

- Preferred (v2 / Vite): `VITE_API_KEY`
- Backward-compatible fallback: `REACT_APP_API_KEY`

Optional (production / static hosting): absolute URL to the cocktail-names JSON API if it is **not** same-origin as the SPA (defaults to `**/api/cocktail-names`** at build time):

- `VITE_COCKTAIL_NAMES_URL` — e.g. `https://your-cache-host.example.com/api/cocktail-names`

Create a `.env` file in the project root, for example:

```bash
VITE_API_KEY=your_api_key_here
# VITE_COCKTAIL_NAMES_URL=https://your-api-host/api/cocktail-names
```

## Git (line endings)

The repo includes a `**.gitattributes**` file so text files stay **LF** in Git and you avoid whole-file “changed” noise from CRLF/LF alone. Commit with `git add -A`, then `git commit` and `git push` as usual.
# PolyTrack Online

A fast, ad-free place to play [PolyTrack](https://www.kodub.com) in the browser, with a
bilingual (EN/ES) SEO-first guide site around it. Built with [Astro](https://astro.build/),
[Tailwind CSS v4](https://tailwindcss.com/) and zero client-side framework code; deployed as
a static site to GitHub Pages.

**Live:** https://polytrack-labs.github.io/

---

## What this is

- **One game, nothing else.** The homepage loads a self-hosted copy of PolyTrack `0.6.3`
  (`public/poly-track/`) in a click-to-load iframe. No other games, no categories.
- **Guides for search.** How to Play, Controls, Track Editor, Unblocked, About, Privacy and
  Terms — each in English (`/`) and Spanish (`/es/`).
- **Structured data everywhere.** `VideoGame`, `WebSite`, `HowTo`, `Article`, `FAQPage` and
  `BreadcrumbList` JSON-LD, generated from the same content objects that render the pages, so
  markup and copy can never drift apart.
- **No backend.** Pure static output. No accounts, no cookies, no ads. Page views are counted
  with cookie-less Cloudflare Web Analytics (token in `src/config/site.ts`, empty to disable).

## Requirements

- Node.js **>= 22.23.4** (Astro 7 refuses older runtimes — use Node 24 if in doubt)
- npm

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:4321
npm run build    # static build into ./dist
npm run preview  # serve ./dist locally
```

## Deploying to GitHub Pages

The site deploys to the **user page** `polytrack-labs.github.io`, so it is served from the
domain root. The origin and any sub-path are declared in exactly two places and must agree:

| File | Field |
| --- | --- |
| `astro.config.mjs` | `site` + `base` |
| `src/config/site.ts` | `SITE_ORIGIN` + `BASE_PATH` |

Everything else — canonical URLs, hreflang, Open Graph, sitemap, JSON-LD, internal links —
goes through `href()`, `asset()`, `absolute()` and `absoluteAsset()` in `src/config/site.ts`.
Never hard-code a leading `/`, or links will break on GitHub Pages.

To ship it:

1. Push to `main`. `.github/workflows/deploy.yml` builds with Node 24 and deploys `dist/`.
2. In **Settings → Pages**, set *Source* to **GitHub Actions**.
3. `public/.nojekyll` is committed so the `_astro/` asset folder is not stripped by Jekyll.

If you rename the repository or move to a custom domain, edit only the two rows above.

## Project layout

```
public/
  poly-track/           mirrored PolyTrack 0.6.3 build (332 files, ~16 MB)
  robots.txt            sitemap pointer
  llms.txt              short machine-readable site summary
  favicon.svg  apple-touch-icon.png  og-cover.jpg  game-poster.jpg
src/
  config/site.ts        base path, origin, brand, path helpers
  data/pages.ts         ALL long-form copy (EN + ES) as typed objects
  i18n/ui.ts            UI chrome strings (nav, buttons, footer, 404)
  i18n/utils.ts         language detection, localized hrefs, hreflang pairs
  lib/inline.ts         tiny inline-markdown renderer (links only)
  layouts/BaseLayout    <head>: title, canonical, hreflang, OG, Twitter, favicon
  layouts/PageLayout    breadcrumbs, TOC, section renderer, FAQ, JSON-LD
  components/game/      click-to-load player, poster, fullscreen, 16:9 frame
  components/home/      homepage composition
  components/ui/        Steps, DataTable, FaqAccordion, FeatureGrid
  components/seo/       JsonLd, Breadcrumbs
  pages/index.astro     EN home        pages/es/index.astro   ES home
  pages/[slug].astro    EN guide pages pages/es/[slug].astro  ES guide pages
  pages/404.astro       static 404, noindex self-referencing
```

### Editing content

All copy lives in `src/data/pages.ts`. A page is a `PageContent` object with `title`,
`description`, `updated`, and an array of sections; a section may hold paragraphs, a bullet
list, numbered `steps`, or a key/action `table`. Add a slug to `pages.en` **and** `pages.es`
and the routes, sitemap entries and JSON-LD follow automatically — the only manual step is the
nav list in `src/components/layout/Header.astro`.

## SEO notes

- Self-referencing canonical on every page, plus `hreflang` for `en-US`, `es-ES` and
  `x-default`; `prefixDefaultLocale: false` keeps English at the root.
- `trailingSlash: 'always'` matches how GitHub Pages serves `/dir/index.html`, so no internal
  link ever triggers a redirect hop.
- The sitemap intentionally excludes the mirrored game directory (`/poly-track/`) — raw game
  assets should not compete with the guide pages in search results.
- The 404 page is `noindex` and links back to the game.

## Game asset & licensing

PolyTrack is created and owned by **Kodub**. This repository is an unofficial fan mirror: it
hosts the unmodified `0.6.3` web build because the official build cannot be embedded (its
Content-Security-Policy allows framing only from `kodub.com` and `webgamer.io`). The mirror
follows the conditions in Kodub's Terms of Service, §4 *Mods and Reuploads*:

- the site is non-commercial — no ads, no tracking, no paywall;
- the game is credited to Kodub, with links to [kodub.com](https://www.kodub.com) and
  [CrazyGames](https://www.crazygames.com/game/polytrack);
- the in-game "unofficial version" notice is **left intact** (it is rendered in amber by the
  build's own mod styling and must not be removed);
- the build is unmodified apart from a `window.polytrackModConfiguration` snippet
  (`modName`, `author`) and a favicon link in `public/poly-track/index.html`.

The site code in `src/` is MIT licensed. Game art, models, audio and tracks remain the
property of their respective authors and are **not** covered by that license.

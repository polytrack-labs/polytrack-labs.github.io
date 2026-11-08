/**
 * Central site configuration.
 *
 * Everything that depends on where the site is deployed lives here, so a
 * rename of the GitHub repository (or a move to a custom domain) is a one-line
 * change instead of a find-and-replace across the codebase.
 */

/** Sub-path the site is served from on GitHub Pages (no trailing slash).
 *  '/' for a user/organization page (polytrack-labs.github.io). */
export const BASE_PATH = '/';

/** Origin of the deployment. Keep in sync with `site` in astro.config.mjs. */
export const SITE_ORIGIN = 'https://polytrack-labs.github.io';

export const SITE = {
  name: 'PolyTrack Online',
  /** Used inside <title> when the page title is not the brand itself. */
  tagline: 'Play PolyTrack Free in Your Browser',
  description:
    'Play PolyTrack online for free — a low-poly 3D racing game with a built-in track editor, community tracks, ghost replays and online leaderboards. No download, no login.',
  locale: 'en_US',
  localeEs: 'es_ES',
  twitter: '@polytrackonline',
  /** Version of the mirrored game build in /public/poly-track. */
  gameVersion: '0.6.3',
  /** Upstream publisher of the game. */
  author: 'Kodub',
  authorUrl: 'https://www.kodub.com',
  themeColor: '#0b1020',
} as const;

/**
 * Prefix a site-relative path with the deployment base path and normalise the
 * trailing slash so internal links never trigger a GitHub Pages redirect.
 *
 *   href('/about')  -> '/about/'      (root deployment)
 *   href('/about')  -> '/repo/about/' (project-page deployment)
 *   href('/play?x') -> '/play/?x'
 */
export function href(path = '/'): string {
  const [pathname, ...rest] = path.split(/(?=[?#])/);
  let p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!p.endsWith('/') && !/\.[a-z0-9]+$/i.test(p)) p = `${p}/`;
  const withBase = BASE_PATH === '/' ? p : p === '/' ? `${BASE_PATH}/` : `${BASE_PATH}${p}`;
  return rest.length ? `${withBase}${rest.join('')}` : withBase;
}

/** Same as `href()` but never appends a trailing slash (files, iframes). */
export function asset(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return BASE_PATH === '/' ? p : `${BASE_PATH}${p}`;
}

/** Absolute URL for canonical tags, Open Graph and structured data. */
export function absolute(path = '/'): string {
  return new URL(href(path), SITE_ORIGIN).toString();
}

/** Absolute URL for a static asset. */
export function absoluteAsset(path: string): string {
  return new URL(asset(path), SITE_ORIGIN).toString();
}

/** The self-hosted game entry point. */
export const GAME_SRC = asset('/poly-track/index.html');

/**
 * Traffic measurement. Cloudflare Web Analytics is cookie-less and reports
 * aggregate numbers only; there is no identifier to opt out of and nothing to
 * store in the browser. Leave the token empty to disable the beacon entirely.
 */
export const ANALYTICS = {
  cloudflareToken: '6a01ded1cabd493aac922a141f11d487',
} as const;

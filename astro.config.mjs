// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages user site: https://polytrack-labs.github.io/
  // If you rename the repository, update BASE_PATH in src/config/site.ts too.
  site: 'https://polytrack-labs.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
        },
      },
      // The game bundle and its assets are not pages.
      filter: (page) => !page.includes('/poly-track/'),
    }),
  ],

  build: {
    inlineStylesheets: 'always',
  },
});

// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pro-home.mvp5000.com',
  integrations: [react(), sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        es: 'es-CL',
        en: 'en-US',
      },
    },
  })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
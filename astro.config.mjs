// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.renesena.com.br',
  integrations: [sitemap()],
  // CSS inline no HTML: elimina requests bloqueantes no primeiro paint
  build: { inlineStylesheets: 'always' },
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light-high-contrast', dark: 'github-dark-high-contrast' },
    },
  },
});

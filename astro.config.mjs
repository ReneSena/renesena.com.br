// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.renesena.com.br',
  // páginas de "obrigado" do formulário não entram no sitemap (também são noindex)
  integrations: [sitemap({ filter: (page) => !page.includes('/obrigado/') })],
  // CSS inline no HTML: elimina requests bloqueantes no primeiro paint
  build: { inlineStylesheets: 'always' },
  // CSP via <meta> com hash de cada script/estilo inline, gerado no build.
  // frame-ancestors não funciona em <meta>: fica nos cabeçalhos do netlify.toml
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        // Umami: o script vem do cloud.umami.is e envia os eventos para o gateway
        "connect-src 'self' https://cloud.umami.is https://gateway.umami.is",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
      ],
      scriptDirective: { resources: ["'self'", 'https://cloud.umami.is'] },
      // style="--i:0" e afins (variáveis CSS por item) precisam de inline nos atributos
      styleDirective: { resources: ["'self'", { resource: "'unsafe-inline'", kind: 'attribute' }] },
    },
  },
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

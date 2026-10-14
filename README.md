# renesena.com.br — portfólio

Astro 5 + GSAP (ScrollTrigger/SplitText) + Lenis. PT em `/`, EN em `/en/`, blog em `/blog/`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build estático em dist/
```

- **Conteúdo da carreira:** `src/data/career.ts` (fases do paraquedista, números calculados daqui) e `src/data/stack.ts`.
- **Textos/i18n:** `src/i18n/ui.ts` — `[trecho]` vira destaque laranja em itálico.
- **Posts:** `src/content/blog/*.md` (imagens em `public/assets/img/`).
- **Formulário:** Netlify Forms (`name="contato"`). Ative notificação por e-mail em Netlify → Forms → Notifications.
- **Analytics:** copie `.env.example` para `.env` e preencha `PUBLIC_UMAMI_WEBSITE_ID` (também nas env vars da Netlify). Só carrega em produção.

> O blog antigo em Gatsby está preservado na branch [`legacy`](../../tree/legacy) (tag `gatsby-legacy`).

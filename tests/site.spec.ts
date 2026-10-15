import { test, expect, type Page } from '@playwright/test';

const pages = ['/', '/en/', '/trajetoria/', '/en/journey/', '/blog/', '/blog/2026-10-13-inversao-de-dependencia-no-design-system/'];

/** Borda esquerda do conteúdo do .container: o "eixo" em que tudo deve alinhar */
async function rail(page: Page) {
  return page.evaluate(() => {
    const c = document.querySelector('main .container')!;
    return c.getBoundingClientRect().left + parseFloat(getComputedStyle(c).paddingLeft);
  });
}

async function expectOnRail(page: Page, selectors: string[]) {
  const x = await rail(page);
  for (const selector of selectors) {
    const box = await page.locator(selector).first().boundingBox();
    expect(box, `${selector} existe`).not.toBeNull();
    expect.soft(Math.abs(box!.x - x), `${selector} alinhado ao eixo (${Math.round(box!.x)} vs ${Math.round(x)})`).toBeLessThanOrEqual(1);
  }
}

test.describe('todas as páginas', () => {
  for (const path of pages) {
    test(`${path} carrega sem erros e sem rolagem horizontal`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await page.waitForLoadState('networkidle');

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, 'largura extra na página').toBeLessThanOrEqual(0);
      expect(errors).toEqual([]);
    });
  }
});

test.describe('home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('título e cargo', async ({ page }) => {
    await expect(page).toHaveTitle(/Senior Software Engineer · Front-end/);
    await expect(page.locator('.hero__eyebrow')).toContainText('Senior Software Engineer');
    await expect(page.locator('h1')).toHaveCount(1);
  });

  test('elementos alinhados ao mesmo eixo', async ({ page }) => {
    await expectOnRail(page, [
      '.hero__eyebrow',
      '.hero__title',
      '.hero__pitch',
      '.hero__ctas',
      '.hero__proof',
      '#sobre .eyebrow',
      '#trajetoria-resumo .eyebrow',
      '#trajetoria-resumo .display',
      '#servicos .eyebrow',
      '#servicos .display',
      '#servicos .service',
      '#blog .eyebrow',
      '#blog .post-card',
      '#contato .eyebrow',
    ]);
  });

  test('no celular, a foto fica centralizada e o texto alinhado à esquerda, com as redes na base da foto', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'só no layout empilhado');
    const box = (s: string) => page.locator(s).first().boundingBox();
    const [visual, title, pitch, ctas, social] = await Promise.all(
      ['.hero__visual', '.hero__title', '.hero__pitch', '.hero__ctas', '.hero__social'].map(box),
    );
    const axis = page.viewportSize()!.width / 2;
    expect(Math.abs(visual!.x + visual!.width / 2 - axis)).toBeLessThan(2);
    for (const b of [pitch, ctas]) expect(Math.abs(b!.x - title!.x)).toBeLessThan(2);
    expect(Math.abs(social!.x + social!.width / 2 - (visual!.x + visual!.width / 2))).toBeLessThan(2);
    expect(social!.y + social!.height).toBeGreaterThan(visual!.y + visual!.height);
    await expect(page.locator('.hero__social a')).toHaveCount(2);
    await expect(page.locator('.hero__eyebrow')).toHaveCSS('text-align', 'center');
  });

  test('só o último artigo aparece, em destaque e com capa', async ({ page }) => {
    const cards = page.locator('#blog .post-card');
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toHaveClass(/post-card--featured/);
    await expect(cards.locator('.post-card__cat')).toBeHidden();
    const img = cards.locator('img');
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0);
  });

  test('serviços: 4 cards e o botão já marca "Freelance / projeto" no formulário', async ({ page }) => {
    await expect(page.locator('#servicos .service')).toHaveCount(4);
    await page.locator('#servicos .services__cta').click();
    await expect(page.locator('input[name="tipo"][value="freelance"]')).toBeChecked();
  });

  test('link com ?tipo=freelance já marca o tipo no formulário', async ({ page }) => {
    await page.goto('/?tipo=freelance#contato');
    await expect(page.locator('input[name="tipo"][value="freelance"]')).toBeChecked();
  });

  // simula a resposta do Netlify Forms, que só existe em produção
  const fillContact = async (page: Page, status: number) => {
    await page.route('/', (r) => (r.request().method() === 'POST' ? r.fulfill({ status, body: '' }) : r.continue()));
    await page.locator('#f-name').fill('Teste');
    await page.locator('#f-email').fill('teste@exemplo.com');
    await page.locator('#f-msg').fill('Olá!');
    await page.locator('.form__submit').click();
  };

  test('depois do envio o formulário fica limpo', async ({ page }) => {
    await fillContact(page, 200);
    await expect(page.locator('[data-form-success]')).toBeVisible();
    for (const id of ['#f-name', '#f-email', '#f-msg']) await expect(page.locator(id)).toHaveValue('');
  });

  test('se o envio falha, a mensagem continua no formulário', async ({ page }) => {
    await fillContact(page, 500);
    await expect(page.locator('[data-form-error]')).toBeVisible();
    await expect(page.locator('#f-msg')).toHaveValue('Olá!');
  });

  test('faixa "Por onde passei" lista as empresas', async ({ page }) => {
    for (const name of ['Tata Consultancy Services', 'NTT DATA', 'Docket', 'Ambev', 'C6 Bank', 'Ticket']) {
      await expect(page.locator('.hero__proof')).toContainText(name);
    }
  });

  test('favicons respondem', async ({ page, request }) => {
    const hrefs = await page.locator('link[rel="icon"], link[rel="apple-touch-icon"]').evaluateAll((els) =>
      els.map((el) => el.getAttribute('href')!),
    );
    expect(hrefs.length).toBeGreaterThanOrEqual(3);
    for (const href of hrefs) expect((await request.get(href)).status(), href).toBe(200);
  });
});

test.describe('trajetória', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/trajetoria/');
  });

  test('título visível com os anos calculados, alinhado à esquerda', async ({ page }) => {
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toHaveText(/^Do estoque ao código: \d+ anos perto de quem opera\.$/);
    await expectOnRail(page, ['.intro .eyebrow', '.intro__title', '.intro__cta', '#destaques .eyebrow', '#trajetoria .eyebrow']);
  });

  test('ordem: destaques → trajetória → stack', async ({ page }) => {
    const order = await page.evaluate(() =>
      ['destaques', 'trajetoria', 'stack'].map((id) => document.getElementById(id)!.getBoundingClientRect().top + window.scrollY),
    );
    expect(order).toEqual([...order].sort((a, b) => a - b));
  });

  test('link "Ver os destaques" leva aos destaques', async ({ page }) => {
    await page.locator('.intro__cta').click();
    await expect(page).toHaveURL(/#destaques$/);
  });

  test('troca de idioma vai para a página equivalente', async ({ page }) => {
    await page.locator('a[hreflang="en"]').click();
    await expect(page).toHaveURL(/\/en\/journey\/$/);
  });

  test('órbita é só visual: sem botões, com lista para leitores de tela', async ({ page }) => {
    await expect(page.locator('#stack button')).toHaveCount(0);
    await expect(page.locator('#stack .sr-only li', { hasText: 'Storybook' })).toHaveCount(1);
  });

  test('termina com chamada para o formulário de contato', async ({ page }) => {
    await page.locator('section.cta .pill--solid').click();
    await expect(page).toHaveURL(/\/#contato$/);
  });
});

test.describe('navegação', () => {
  test('aba Trajetória leva à página nova e o menu não tem Stack', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-nav-link="stack"]')).toHaveCount(0);
    await page.locator('[data-nav-link="trajetoria"]:visible').click();
    await expect(page).toHaveURL(/\/trajetoria\/$/);
  });

  test('botão de tema diz o que o clique faz', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    const btn = page.locator('[data-theme-toggle]');
    await expect(btn).toHaveAttribute('aria-label', 'Ativar tema escuro');
    await btn.click();
    await expect(btn).toHaveAttribute('aria-label', 'Ativar tema claro');
  });

  test('Contato a partir da trajetória volta para a home', async ({ page }) => {
    await page.goto('/trajetoria/');
    await page.locator('[data-nav-link="contato"]:visible').click();
    await expect(page).toHaveURL(/\/#contato$/);
  });
});

test.describe('artigo', () => {
  test('capa no og:image e nenhuma menção ao cliente (compliance)', async ({ page }) => {
    await page.goto('/blog/2026-10-13-inversao-de-dependencia-no-design-system/');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /inversao-dependencia\.png$/);
    await expect(page.locator('main')).not.toContainText(/ticket/i);
  });

  test('termina com chamada para o formulário de contato', async ({ page }) => {
    await page.goto('/blog/2026-10-13-inversao-de-dependencia-no-design-system/');
    await expect(page.locator('section.cta .pill--solid')).toHaveAttribute('href', '/#contato');
  });
});

test.describe('cards de post', () => {
  for (const path of ['/blog/', '/blog/2026-10-13-inversao-de-dependencia-no-design-system/']) {
    test(`${path}: cards da mesma linha com a mesma altura e o "Ler artigo" na mesma linha`, async ({ page }) => {
      await page.goto(path);
      const cards = await page.locator('.post-card').evaluateAll((els) =>
        els.map((el) => {
          const r = el.getBoundingClientRect();
          const cta = el.querySelector('.post-card__cta')!.getBoundingClientRect();
          return { top: Math.round(r.top + scrollY), height: Math.round(r.height), cta: Math.round(cta.top - r.top) };
        }),
      );
      expect(cards.length).toBeGreaterThan(0);
      const rows = new Map<number, typeof cards>();
      for (const c of cards) rows.set(c.top, [...(rows.get(c.top) ?? []), c]);
      for (const row of rows.values()) {
        expect.soft(new Set(row.map((c) => c.height)).size, 'alturas na mesma linha').toBe(1);
        expect.soft(new Set(row.map((c) => c.cta)).size, '"Ler artigo" na mesma altura').toBe(1);
      }
    });
  }

});

test('descrição dos cards respeita o corte de 3 linhas', async ({ page }) => {
  await page.goto('/blog/');
  const overflowing = await page.locator('.post-card:not(.post-card--featured) .post-card__desc').evaluateAll((els) =>
    els.filter((el) => el.getBoundingClientRect().height > parseFloat(getComputedStyle(el).lineHeight) * 3 + 1).length,
  );
  expect(overflowing).toBe(0);
});

test.describe('acessibilidade', () => {
  for (const path of pages) {
    test(`${path}: títulos não pulam nível`, async ({ page }) => {
      await page.goto(path);
      const levels = await page.evaluate(() =>
        [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')]
          .filter((h) => !h.closest('.sr-only, [hidden], template'))
          .map((h) => Number(h.tagName[1])),
      );
      expect(levels[0], 'começa com h1').toBe(1);
      levels.forEach((lv, i) => i > 0 && expect(lv - levels[i - 1], `h${levels[i - 1]} → h${lv}`).toBeLessThanOrEqual(1));
    });
  }

  test('marca do menu fica visível quando recebe foco no topo da home', async ({ page, isMobile }) => {
    test.skip(isMobile, 'teclado no desktop');
    await page.goto('/');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    const brand = page.locator('.nav__brand');
    await expect(brand).toBeFocused();
    await expect(brand).toHaveCSS('opacity', '1');
  });

  test('anel de foco usa a cor com contraste ≥3:1', async ({ page, isMobile }) => {
    test.skip(isMobile, 'teclado no desktop');
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.locator('.skip-link')).toHaveCSS('outline-color', 'rgb(194, 65, 12)');
  });

  test('na versão EN, os artigos (em português) são marcados como pt-BR', async ({ page }) => {
    await page.goto('/en/');
    await expect(page.locator('#blog .post-card__title')).toHaveAttribute('lang', 'pt-BR');
    await expect(page.locator('#blog .post-card__desc')).toHaveAttribute('lang', 'pt-BR');
  });

  test('alvos de toque do rodapé e do "voltar" têm 44px no celular', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'só no celular');
    await page.goto('/blog/2026-10-13-inversao-de-dependencia-no-design-system/');
    for (const selector of ['.footer a', '.post__back']) {
      for (const box of await page.locator(selector).evaluateAll((els) => els.map((el) => el.getBoundingClientRect().height))) {
        expect(box, selector).toBeGreaterThanOrEqual(44);
      }
    }
  });

  test('artigo não vaza para os lados em 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto('/blog/2026-10-13-inversao-de-dependencia-no-design-system/');
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  });
});

/** WCAG AA: 4.5:1 para texto normal, 3:1 para texto grande (≥24px ou ≥18.66px em negrito) */
test.describe('contraste', () => {
  for (const theme of ['light', 'dark'] as const) {
    for (const path of [...pages, '/nao-existe/', '/obrigado/']) {
      test(`${theme} ${path}`, async ({ page, isMobile }) => {
        test.skip(isMobile, 'as cores não mudam com a largura');
        await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
        await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: theme });
        await page.goto(path);
        const failures = await page.evaluate(() => {
          const parse = (c: string) => {
            const m = c.match(/[\d.]+/g)!.map(Number);
            const k = c.startsWith('color(') ? 255 : 1; // color-mix() devolve color(srgb 0–1)
            return { r: m[0] * k, g: m[1] * k, b: m[2] * k, a: m[3] ?? 1 };
          };
          type C = ReturnType<typeof parse>;
          const blend = (fg: C, bg: C): C => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
          const lum = ({ r, g, b }: C) => {
            const f = (x: number) => ((x /= 255) <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
            return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
          };
          const bgOf = (el: Element) => {
            const layers: C[] = [];
            for (let e: Element | null = el; e; e = e.parentElement) {
              const c = parse(getComputedStyle(e).backgroundColor);
              if (c.a > 0) layers.push(c);
              if (c.a >= 1) break;
            }
            return layers.reduceRight((acc, c) => blend(c, acc), { r: 255, g: 255, b: 255, a: 1 } as C);
          };
          const out: string[] = [];
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          const seen = new Set<Element>();
          while (walker.nextNode()) {
            const el = walker.currentNode.parentElement!;
            if (!walker.currentNode.textContent!.trim() || seen.has(el)) continue;
            seen.add(el);
            const cs = getComputedStyle(el);
            if (!el.getClientRects().length || cs.visibility === 'hidden' || el.closest('[hidden], [aria-hidden="true"], .sr-only, dialog:not([open])')) continue;
            const bg = bgOf(el);
            const fg = blend(parse(cs.color), bg);
            const [hi, lo] = [lum(fg), lum(bg)].sort((a, b) => b - a);
            const ratio = (hi + 0.05) / (lo + 0.05);
            const size = parseFloat(cs.fontSize);
            const min = size >= 24 || (parseInt(cs.fontWeight) >= 700 && size >= 18.66) ? 3 : 4.5;
            if (ratio < min) out.push(`${ratio.toFixed(2)}:1 "${el.textContent!.trim().slice(0, 30)}"`);
          }
          return out;
        });
        expect(failures).toEqual([]);
      });
    }
  }
});

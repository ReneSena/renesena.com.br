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
      '#blog .eyebrow',
      '#blog .post-card',
      '#contato .eyebrow',
    ]);
  });

  test('no celular, a foto do hero segue o eixo do texto', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'só no layout empilhado');
    await expectOnRail(page, ['.hero__visual', '.hero__loc']);
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

  test('um número só, alinhado à esquerda', async ({ page }) => {
    await expect(page.locator('.numbers [data-count]')).toHaveCount(1);
    await expect(page.locator('.numbers__label')).toHaveText(/anos de carreira/i);
    await expectOnRail(page, ['.numbers__label', '.numbers__cta', '#destaques .eyebrow', '#trajetoria .eyebrow']);
  });

  test('ordem: destaques → trajetória → stack', async ({ page }) => {
    const order = await page.evaluate(() =>
      ['destaques', 'trajetoria', 'stack'].map((id) => document.getElementById(id)!.getBoundingClientRect().top + window.scrollY),
    );
    expect(order).toEqual([...order].sort((a, b) => a - b));
  });

  test('link "Role para ver a trajetória" leva aos destaques', async ({ page }) => {
    await page.locator('.numbers__cta').click();
    await expect(page).toHaveURL(/#destaques$/);
  });

  test('troca de idioma vai para a página equivalente', async ({ page }) => {
    await page.locator('a[hreflang="en"]').click();
    await expect(page).toHaveURL(/\/en\/journey\/$/);
  });
});

test.describe('navegação', () => {
  test('aba Trajetória e Stack levam à página nova', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-nav-link="trajetoria"]:visible').click();
    await expect(page).toHaveURL(/\/trajetoria\/$/);

    await page.goto('/blog/');
    await page.locator('[data-nav-link="stack"]:visible').click();
    await expect(page).toHaveURL(/\/trajetoria\/#stack$/);
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

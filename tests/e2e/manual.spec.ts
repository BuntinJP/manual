import { expect, test } from '@playwright/test';
import catalog from '../../src/data/manual-catalog.json' with { type: 'json' };
import type { CatalogEntry } from '../../src/lib/catalog';

const find = (catalog as CatalogEntry[]).find(
  (entry) => entry.provider === 'freebsd' && entry.name === 'find',
);
if (!find) throw new Error('The FreeBSD find sample must be generated before browser tests.');

test('manual has dark Cica typography, edition metadata, structural headings and stable anchors', async ({
  page,
}) => {
  await page.addInitScript(() => localStorage.setItem('starlight-theme', 'light'));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(find.href);
  await expect(page.locator('h1')).toHaveText('find(1)');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('starlight-theme-select')).toHaveCount(0);
  await expect(page.locator('.manual-edition')).toContainText('15.quarterly');
  await expect(page.getByRole('link', { name: '英語の原文' })).toHaveAttribute(
    'href',
    find.sourceUrl ?? '',
  );
  await expect(page.locator('.sl-markdown-content h2')).toHaveCount(13);
  expect(
    await page.locator('starlight-toc a').evaluateAll((links) =>
      links.every((a) => {
        const href = a.getAttribute('href');
        return (
          !href?.startsWith('#') ||
          document.getElementById(decodeURIComponent(href.slice(1))) !== null
        );
      }),
    ),
  ).toBe(true);
  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(async () => {
      await document.fonts.load('16px Cica');
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas 2D context is required to measure font width.');
      context.font = '16px Cica';
      return {
        loaded: document.fonts.check('16px Cica'),
        ratio: context.measureText('日').width / context.measureText('M').width,
      };
    }),
  ).toEqual({ loaded: true, ratio: 2 });
  await page.screenshot({ path: 'test-results/manual-desktop.png' });
});

for (const width of [320, 390, 720]) {
  test(`manual remains usable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(find.href);
    await expect(page.locator('h1')).toHaveText('find(1)');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    await expect(page.locator('.command-search input')).toBeVisible();
    await page.screenshot({ path: `test-results/manual-${width}.png` });
  });
}

test('command search keeps same-name implementations and routes section-qualified commands', async ({
  page,
}) => {
  await page.goto('/search/?q=find');
  await expect(page.locator('.catalog-results li:visible')).toHaveCount(2);
  await expect(page.locator('.catalog-results li:visible')).toContainText(['freebsd', 'megacmd']);
  await page.goto('/search/?q=man%201%20find');
  await expect(page).toHaveURL(new RegExp(find.href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  await page.goto('/search/?q=not-a-real-command');
  await expect(page.locator('.catalog-empty')).toBeVisible();
});

test('Japanese full-text search works in the built site and loads no third-party services', async ({
  page,
}) => {
  const thirdParty: string[] = [];
  page.on('request', (request) => {
    if (request.url().startsWith('http') && new URL(request.url()).hostname !== '127.0.0.1')
      thirdParty.push(request.url());
  });
  await page.goto(find.href);
  await page.locator('site-search button[data-open-modal]').click();
  const search = page.locator('.pagefind-ui__search-input');
  await search.fill('シンボリックリンク');
  await expect(page.locator('.pagefind-ui__result-link').first()).toBeVisible({ timeout: 15000 });
  expect(thirdParty).toEqual([]);
  await page.keyboard.press('Escape');
  await expect(page.locator('site-search dialog')).not.toBeVisible();
  await page.keyboard.press('Control+k');
  await expect(page.locator('site-search dialog')).toBeVisible();
});

test('manual is readable with JavaScript disabled', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, colorScheme: 'light' });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:4322${find.href}`);
  await expect(page.locator('h1')).toHaveText('find(1)');
  expect(
    await page.locator('body').evaluate((body) => getComputedStyle(body).backgroundColor),
  ).toBe('rgb(19, 22, 25)');
  await context.close();
});

for (const query of ['find', 'シンボリックリンク']) {
  test(`full-text provider filtering works for ${query}`, async ({ page }) => {
    await page.goto('/');
    await page.locator('site-search button[data-open-modal]').click();
    const input = page.locator('site-search input');
    const provider = page
      .getByRole('dialog')
      .getByRole('combobox', { name: '提供元', exact: true });
    const results = page.locator('site-search .search-results li');
    await provider.selectOption('freebsd');
    await input.fill(query);
    await expect(results).toHaveCount(1);
    await expect(results.first()).toHaveAttribute('data-provider', 'freebsd');
    await expect(results.first().locator('a')).toHaveText('find(1)');
    await provider.selectOption('megacmd');
    await expect(results.first()).toHaveAttribute('data-provider', 'megacmd');
    expect(
      await results.evaluateAll((items) =>
        items.every((item) => item.getAttribute('data-provider') === 'megacmd'),
      ),
    ).toBe(true);
    await provider.selectOption('');
    await expect(results.locator('[href*="/manuals/freebsd/"]')).toHaveCount(1);
    if (query === 'シンボリックリンク') {
      await provider.selectOption('isync');
      await expect(results).toHaveCount(0);
      await expect(page.locator('site-search .search-status')).toContainText('見つかりません');
    }
    await page.setViewportSize({ width: 320, height: 844 });
    await expect(provider).toBeVisible();
    expect(
      await page.locator('site-search dialog').evaluate((el) => el.scrollWidth <= el.clientWidth),
    ).toBe(true);
    await page.screenshot({
      path: `test-results/provider-filter-${query === 'find' ? 'primary' : 'fallback'}.png`,
    });
  });
}

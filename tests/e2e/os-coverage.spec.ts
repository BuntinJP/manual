import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import type { CatalogEntry } from '../../src/lib/catalog';
import { isManPage } from '../../src/lib/os-coverage';
const catalog = JSON.parse(
  readFileSync(new URL('../../src/data/manual-catalog.json', import.meta.url), 'utf8'),
);

test('OS table filters, empty results and repeated reset preserve links and full table', async ({
  page,
}) => {
  await page.goto('/os-support/');
  const table = page.locator('manual-os-coverage');
  await expect(table.getByRole('columnheader')).toHaveText([
    'コマンド',
    'Linux (GNU)',
    'Linux (BSD)',
    'Apple',
    'FreeBSD',
    'OpenBSD',
    'AIX',
  ]);
  const query = table.getByRole('searchbox');
  await query.fill('cut');
  await expect(table.locator('tbody tr:visible')).toHaveCount(1);
  await table.getByLabel('OS・実装').selectOption('linux-bsd');
  await table.getByLabel('状態', { exact: true }).selectOption('translated');
  await expect(table.locator('.coverage-empty')).toBeVisible();
  for (let i = 0; i < 2; i++) {
    await table.getByRole('button', { name: 'リセット' }).click();
    await expect(query).toHaveValue('');
    await expect(table.locator('.coverage-empty')).toBeHidden();
  }
  await expect(table.locator('td a').first()).toHaveAttribute('href', /^(\/|https:\/\/)/);
  await page.setViewportSize({ width: 320, height: 700 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
  await expect(table.locator('.coverage-scroll')).toBeVisible();
});

test('OS table remains readable without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/os-support/`);
  await expect(page.locator('manual-os-coverage tbody tr').first()).toBeVisible();
  await expect(page.locator('manual-os-coverage td a').first()).toBeVisible();
  await context.close();
});

// Runs standalone with no imported Linux man pages and against the combined
// content tree once those independent source additions are present.
test('formal GNU and explicit Linux BSD lineage link exactly the imported man editions', async ({
  page,
}) => {
  await page.goto('/os-support/');
  const entries = (catalog as CatalogEntry[]).filter(isManPage);
  const expected = [
    ['gnu', entries.filter((entry) => entry.provider === 'gnu')],
    [
      'linux-bsd',
      entries.filter(
        (entry) =>
          entry.provider === 'linux-bsd' ||
          (entry.provider === 'util-linux' &&
            entry.product === 'bsd-utils' &&
            entry.variant === 'linux-upstream'),
      ),
    ],
  ] as const;
  for (const [column, manuals] of expected) {
    const cells = page.locator(`manual-os-coverage td[data-os="${column}"]`);
    await expect(cells.locator('a[href^="/manuals/"]')).toHaveCount(manuals.length);
    for (const manual of manuals) {
      await expect(cells.locator(`a[href="${manual.href}"]`)).toBeVisible();
    }
  }
  await expect(
    page.locator('manual-os-coverage td[data-os="aix"][data-status="translated"]'),
  ).toHaveCount(
    new Set(
      entries
        .filter(
          (entry) =>
            entry.provider === 'aix' || (entry.provider === 'ibm' && entry.product === 'aix'),
        )
        .map((entry) => entry.name),
    ).size,
  );
});

import { expect, test } from '@playwright/test';

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

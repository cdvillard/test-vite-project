import { test, expect } from './baseFixtures.ts';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Vite + TS");
});

test('Count increments', async ({ page }) => {
  // Click the get started link.
  const button = await page.locator('button#counter');
  const count = await button.locator('.count');
  await expect(count).toHaveText('0');
});

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

 // 2 Go to search bar menu, 
 await page.getByRole('button', { name: 'Search' }).click();
 
 //3 type 'test'
  await page.locator('id=docsearch-input').fill("test");

// 4 Select "Migrating from Testing Library"
  await page.getByText('Migrating from ').dblclick();

 // 5 Validate Migrating from Testing Library is displayed on page 
  await expect(page.locator('#migration-principles')).toBeVisible();
  //Validate the text: This guide describes migration to Playwright's Experimental Component Testing from DOM Testing Library, React Testing Library, Vue Testing Library and Svelte Testing Library.
  //exists, is visible and matches.
  const text = "This guide describes migration to Playwright's Experimental Component Testing from DOM Testing Library, React Testing Library, Vue Testing Library and Svelte Testing Library.";
  //await page.$$("text='This guide describes migration to Playwright's Experimental Component Testing from DOM Testing Library, React Testing Library, Vue Testing Library and Svelte Testing Library.'");

  await expect(page.locator('#migration-principles + p')).toBeVisible();
  await expect(page.locator('#migration-principles + p')).toHaveText(text);
});

/* test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}); */

// go to playwrith page
//2 Go to search bar menu
//3 type 'test'
// 4 Select "Migrating from Testing Library"
// 5 Validate Migrating from Testing Library is displayed on page




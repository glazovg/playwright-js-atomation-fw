/*
Exercise 
1. Account creation OK
a. Expected: Validate the account has been created successfully.
Account page is displayed.

2. Login with a valid user
a. Expected: Validate the user navigates to the account page when logged in.

3. Loginwithaninvaliduser
a. Expected:Validate error messageisdisplayed.

4. Logoutfrommyaccount’spage
a. Expected:Validatetheusernavigatestotheloginpage.

page https://courses.ultimateqa.com/users/sign_in

*/
//Code here
import { test, expect } from '@playwright/test';

test.describe('Register a User', () => {
    test.beforeEach(async ({ context }) => {
        // Clears all cookies in the context before each test
        await context.clearCookies();
    });

    test.afterEach(async ({ context }) => {
        // Optionally, clear cookies after the test as well
        await context.clearCookies();
    });

    test('Validation', async ({ page }) => {
        const randomNumber = function generateThreeDigitRandomNumber() {
            // Generate a random number between 100 (inclusive) and 999 (inclusive)
            return Math.floor(Math.random() * 900) + 100;
        };
        const email = `satana${randomNumber()}@profilelocked.com`;

        await page.goto('https://courses.ultimateqa.com/users/sign_in');
        await page.getByText('Create a new account').click();
        await expect(page.locator('id=user[first_name]')).toBeVisible();

        await page.locator('id=user[first_name]').fill("test");
        //Fill info for new account
        await page.locator('id=user[last_name]').fill("User");
        await page.locator('id=user[email]').fill(email);
        await page.locator('id=user[password]').fill("12345678");
        await page.locator('id=user[terms]').check();
        await page.locator('button[type="submit"]').click();
        //Wait for Home page
        await expect(page.getByText(' All Courses ')).toBeVisible();
        console.log("Logged succesfully");

        //Go to account page
        /* await page.locator('button[class="dropdown__toggle-button"]').click();
        await page.getByText(' My Account ').click();
        await expect (page.getByText('Edit Profile')).toBeVisible();
        await page.locator('button[class="dropdown__toggle-button"]').click();
        await page.getByText(' Sign Out ').click();
        await expect (page.getByText(' Sign In')).toBeVisible(); */

    })
});


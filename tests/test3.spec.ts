//Code here
//Exercise 
//2. Login with a valid user
//a. Expected: Validate the user navigates to the account page when logged in.


import { test, expect } from '@playwright/test';
test('Login with a valid account', async ({ page }) => {
    const email = 'borisgalina@adsensekorea.com';
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    await expect (page.getByText(' Welcome Back! ')).toBeVisible(); 
    //Enter valid email and password
    await page.locator('id=user[email]').fill(email);
    await page.locator('id=user[password]').fill("12345678");
    await page.locator('button[type="submit"]').click();

    //Go to account page
    await page.locator('button[class="dropdown__toggle-button"]').click();
    await page.getByText(' My Account ').click();
    await expect (page.getByText('Edit Profile')).toBeVisible();
    
    


})




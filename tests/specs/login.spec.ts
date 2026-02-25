import { swagLabs as test } from '../fixtures/swagLabs.fixtures';
import { expect } from '@playwright/test';
import { SAUCE_INVALID_PASSWORD, SAUCE_PASSWORD, SAUCE_USERNAME } from '../utils/env';

test('Should successfully log in with valid credentials', { tag: ['@smoke', '@P0'] }, async ({ login, page }) => {
  await login.navigate();
  await login.submitForm(SAUCE_USERNAME, SAUCE_PASSWORD);
  await expect(page.locator('[data-test="title"]:has-text("Products")')).toBeVisible();
});

test('Should display error message for invalid credentials', { tag: ['@regression', '@P1'] }, async ({ login }) => {
  await login.navigate();
  await login.submitForm(SAUCE_USERNAME, SAUCE_INVALID_PASSWORD);
  await expect(login.loginError).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});

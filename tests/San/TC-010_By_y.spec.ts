import { test, expect } from '@playwright/test';

test(
  'By y',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-010' },
    tag: ['@QADENCE_TC_ID:TC-010'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to https://my-stage.reya.net/', async () => {
      await page.goto('https://my-stage.reya.net/');
    });

    await test.step('#02 - Verify that text \'reya\' is present on the page', async () => {
      await expect(page.getByText("reya", { exact: true })).toBeVisible();
    });

    await test.step('#03 - Click the \'Book Now →\' button', async () => {
      await page.getByRole("button", { name: "Book Now →", exact: true }).click();
    });

    await test.step('#04 - Click the first service card element', async () => {
      await page.locator('div.svc-card').click();
    });

    await test.step('#05 - Click the textbox with placeholder \'60614\'', async () => {
      await page.getByRole("textbox", { name: "60614" }).click();
    });

    await test.step('#06 - Fill the textbox with value \'123456\'', async () => {
      await page.getByRole("textbox", { name: "60614" }).fill('123456');
    });

    await test.step('#07 - assert hasText', async () => {
      await expect(page.getByText("How would you like your service?", { exact: true })).toBeVisible();
    });

  }
);


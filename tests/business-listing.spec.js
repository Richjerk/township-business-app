import { test, expect } from '@playwright/test';

test('submit business listing form', async ({ page }) => {
  // Go to the business listing form page
  await page.goto('https://your-app-url.com/business-listing');

  // Fill in the form fields
  await page.fill('input[name="businessName"]', 'Example Business');
  await page.fill('textarea[name="businessDescription"]', 'We provide awesome services.');
  await page.fill('input[name="businessAddress"]', '123 Example St.');
  await page.fill('input[name="businessPhone"]', '123-456-7890');
  
  // Optionally upload an image of products/services
  await page.setInputFiles('input[type="file"]', 'path/to/your/image.png');

  // Submit the form
  await page.click('button[type="submit"]');

  // Verify that the form submission was successful
  await expect(page).toHaveURL(/thank-you/); // Adjust this according to your app's behavior
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://app.magento2.test/');

  //Select a product under Men / Tops / Marco Lightweight Active
  await page.getByRole('menuitem', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Tops' }).click();
  await page.getByRole('link', { name: 'Marco Lightweight Active Hoodie' }).first().click();

  //Select Size and Colour, add 2 to Cart
  await page.getByLabel('XS').click();
  await page.getByLabel('Blue').click();
  await page.getByLabel('Qty').click();
  await page.getByLabel('Qty').fill('2');
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  //Check that a success Message appears
  await expect(page.getByText('You added Marco Lightweight')).toBeVisible();

  await page.getByRole('link', { name: ' My Cart 2 2 items' }).click();
  await page.getByRole('link', { name: 'View and Edit Cart' }).click();

  //Check that the total is calculated correctly for 2 products
  await expect(page.locator('#shopping-cart-table')).toContainText('$74.00');
  await expect(page.locator('#shopping-cart-table')).toContainText('$148.00');

  await page.getByRole('link', { name: ' My Cart 2 2 items' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).first().click();

  //Check that checkout can be opened
  await expect(page.locator("li[id='shipping'] div[data-role='title']")).toBeVisible();

  //Fill in the Shipping address Form
  await page.getByRole('textbox', { name: 'Email Address*' }).click();
  await page.getByRole('textbox', { name: 'Email Address*' }).fill('test@test.com');

  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Test');

  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Testelton');

  await page.getByLabel('Street Address: Line 1').click();
  await page.getByLabel('Street Address: Line 1').fill('Test Road');

  await page.locator('select[name="region_id"]').selectOption('1');

  await page.getByLabel('City').click();
  await page.getByLabel('City').fill('Test City');

  await page.getByLabel('Zip/Postal Code').click();
  await page.getByLabel('Zip/Postal Code').fill('12345');

  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('0987654321');

  //Check that Shipping rates are working
  await expect(page.getByRole('cell', { name: 'Flat Rate', exact: true })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Best Way', exact: true })).toBeVisible();

  //Select Fixed shipping rate
  await page.getByLabel('Fixed').check();

  await page.getByRole('button', { name: 'Next' }).click();

  //Check that ckeckmo is available as a payment
  await expect(page.getByText('Check / Money order')).toBeVisible();

  //NO order will be placed
});
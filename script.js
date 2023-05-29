import { chromium } from 'k6/experimental/browser';
import { check } from 'k6'

export default async function () {
  const browser = chromium.launch({ headless: false });
  const page = browser.newPage();

  try {
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

    // page.locator('input[name="login"]').type('admin');
    // page.locator('input[name="password"]').type('123');

    // const submitButton = page.locator('input[type="submit"]');

    // await Promise.all([
    //   page.waitForNavigation(),
    //   submitButton.click(),
    // ]);

    // check(page, {
    //   'header': page.locator('h2').textContent() == 'Welcome, admin!',
    // });
  } finally {
    page.close();
    browser.close();
  }
}

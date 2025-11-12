const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:5173/challenges/unaffordability', { timeout: 120000 });
  await page.screenshot({ path: 'verify-unaffordability.spec.js-snapshots/screenshot.png' });
  await browser.close();
})();

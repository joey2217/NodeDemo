const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });
  const page = await browser.newPage()
  await page.goto('https://www.google.com/', {
    waitUntil: 'networkidle0'
  });
  await page.type('#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input', 'Google', {
    delay: 100
  })
  await page.screenshot({
    path: 'google1.png'
  });
  await page.keyboard.press('Enter')
  // await page.waitForNavigation({ waitUntil: 'networkidle2'})
  await page.waitFor(2000)
  await page.screenshot({
    path: 'google2.png'
  });
  await browser.close();
})();
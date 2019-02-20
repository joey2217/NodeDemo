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
  await Promise.all([
    page.waitForNavigation({
      waitUntil: 'networkidle0'
    }),
    page.click('#gbw > div > div > div.gb_Pe.gb_R.gb_3g.gb_Tg > div:nth-child(2) > a'),
  ]);
  await page.type('#sbtc > div > div.a4bIc > input','Google', {delay: 100})
  await page.keyboard.press('Enter')
  await page.waitFor(2000)
  
  await page.evaluate(()=>{
    let h=5000
    const top=document.documentElement.scrollTop
    while (condition) {
      document.documentElement.scrollTop()
    }
  })
  await page.screenshot({
    path: 'google2.png'
  });
  await browser.close();
})();
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
  
  async function scrollPage(i) {
    await page.evaluate(function () {
     /* 这里做的是渐进滚动，如果一次性滚动则不会触发获取新数据的监听 */
     for (var y = 0; y <= 1000*i; y += 100) {
      window.scrollTo(0,y)
     }
    })
   }
   let i = 0
   while (i < 3) {
    li = await scrollPage(++i)
    i++
   }
})();
const puppeteer = require('puppeteer');




(async () => {
  const sleep = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
  })

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });
  const page = await browser.newPage()
  await page.goto('https://cn.bing.com/', {
    waitUntil: 'networkidle0'
  });

  await Promise.all([
    page.waitForNavigation({
      waitUntil: 'networkidle0'
    }),
    page.click('#scpl0'),
  ]);

  await page.type('#sb_form_q', 'Google', {
    delay: 100
  })

  await page.keyboard.press('Enter')
  // await page.waitForNavigation({ waitUntil: 'networkidle2'})
  await page.waitFor(1000)


  const result = await page.evaluate(x => {
    return Promise.resolve(8 * x);
  }, 7); 
  console.log(result);
  sleep(1000)
  const top=await page.evaluateHandle(()=>{
    let top=1200
    document.documentElement.scrollTop=top
    top+=700
    while(top>0){
      document.documentElement.scrollTop=top
      let h=document.documentElement.scrollTop
      if (top<=h) {
        console.log(top,h)
        top=-1
      }
    }
    return Promise.resolve(top);
  })
  console.log(top)
})();
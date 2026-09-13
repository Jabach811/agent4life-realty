const {chromium} = require('C:/Users/mabac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage();
 const errors=[];page.on('pageerror', e=>errors.push(e.message));
 for(const width of [1280,390,320]){
  await page.setViewportSize({width,height:900});await page.goto('http://127.0.0.1:8778/',{waitUntil:'networkidle'});await page.locator('h1').waitFor();await page.locator('img[loading]').evaluateAll(imgs=>imgs.forEach(i=>i.loading='eager'));await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode().catch(()=>{}))));await page.screenshot({path:`qa/home-${width}.png`,fullPage:true});
  console.log(JSON.stringify({width,overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),broken:await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src))}));
 }
 for(const id of ['waterwell','roger','shrute']){await page.locator(`[data-property=${id}]`).click();await page.locator('#property-dialog').waitFor({state:'visible'});console.log('Dialog',await page.locator('#dialog-title').textContent());await page.keyboard.press('Escape');if(await page.locator('#property-dialog').isVisible())throw Error('Escape failed');}
 for(const city of ['tracy','mountain-house','lathrop','manteca','dublin','livermore']){await page.locator(`[data-city="${city}"]`).click();console.log('City',await page.locator('#city-caption').textContent());}
 await page.locator('.menu-toggle').click();if(await page.locator('.menu-toggle').getAttribute('aria-expanded')!=='true')throw Error('Menu did not open');await page.keyboard.press('Escape');
 await page.locator('.menu-toggle').click();await page.locator('#navigation a[href="#team"]').click();if(await page.locator('.menu-toggle').getAttribute('aria-expanded')!=='false')throw Error('Menu did not close');
 const links=await page.locator('a[href^="#"]').evaluateAll(as=>as.filter(a=>a.hash&&!document.querySelector(a.hash)).map(a=>a.hash)); console.log({brokenAnchors:links,errors});
 await page.emulateMedia({reducedMotion:'reduce'});console.log('Reduced motion',await page.locator('h1').evaluate(el=>getComputedStyle(el).animationName));
 await browser.close();
})();



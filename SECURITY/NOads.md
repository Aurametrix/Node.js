Crippling Facebook
Facebook works with advertisers to target you. These instructions are one of the many ways to begin crippling that relationship. When AI targeting is crippled, your psychosecurity improves :)

On your desktop machine, goto https://accountscenter.facebook.com/ads/audience_based_advertising
or
https://www.facebook.com/adpreferences/ad_settings/?section=audience_based_advertising&entry_product=accounts_center

Maximize the browser window
Press F12 and click on the Console tab
Select the code below, copy it, paste it upon the Console line (The area next to the > character in the Console window), and press enter:
const wait = async (watcher, timeout = 10000, interval = 100) => {
  const startTime = Date.now()

  return new Promise((resolve, reject) => {
    const checkForElement = () => {
      const elements = watcher()

      if (elements.length > 0) {
        clearInterval(intervalId)
        resolve(elements);
      } else if (Date.now() - startTime > timeout) {
        clearInterval(intervalId)
        reject(new Error(`Timeout: Elements not found`))
      }
    }

    const intervalId = setInterval(checkForElement, interval)

    checkForElement()
  })
}

const delay = () => new Promise(resolve => setTimeout(resolve, 3000))
const getElementsByAriaLabel = (label) => document.querySelectorAll(`[aria-label="${label}"]`)
const getElementsByRoleAndWidth = (role, width) => 
    Array.from(document.querySelectorAll(`[role="${role}"]`)).filter(el => el.clientWidth === width)
const getElementsByText = (text) => Array.from(document.querySelectorAll('*')).filter(el => 
    Array.from(el.childNodes).some(node => node.nodeType === Node.TEXT_NODE && node.textContent.includes(text))
)

const ads = getElementsByRoleAndWidth('listitem', 508)

for (const ad of ads) {
    console.log(ad.childNodes[0].textContent)
    ad.childNodes[0].click()
    await delay()

    const a = await wait(() => getElementsByText('They uploaded or used a list to reach you.'))
    a[0].click()
    await delay()

    const b = await wait(() => getElementsByText('Don\'t allow'))
    b[1].click()
    await delay()

    const c = await wait(() => getElementsByText('Don\'t allow'))
    c[0].click()
    await delay()

    const d = await wait(() => getElementsByAriaLabel('Back'))
    d[2].click()
    await delay()

    const e = await wait(() => getElementsByAriaLabel('Back'))
    e[2].click()
    await delay()
}

============ for Firefox


(async function() {

const wait = () => new Promise(resolve => setTimeout(resolve, 1500))
const getElementsByAriaLabel = (label) => document.querySelectorAll(`[aria-label="${label}"]`)
const getElementsByRoleAndWidth = (role, width) => 
    Array.from(document.querySelectorAll(`[role="${role}"]`)).filter(el => el.clientWidth === width)
const getElementsByText = (text) => Array.from(document.querySelectorAll('*')).filter(el => 
    Array.from(el.childNodes).some(node => node.nodeType === Node.TEXT_NODE && node.textContent?.includes(text))
)

getElementsByText('See more').forEach(el => el.click())
await wait()

const ads = getElementsByRoleAndWidth('listitem', 508)
console.log(`Found ${ads.length} ads`)

for (const ad of ads) {
    console.log('ad: ' + ad.childNodes[0].textContent)
    ad.childNodes[0].click()
    await wait()
    const usedList = getElementsByText('They uploaded or used a list to reach you.').length
    if (usedList) {
        console.log('ad used list')
        getElementsByText('They uploaded or used a list to reach you.')[0].click()
        await wait()
        getElementsByText('Don\'t allow').forEach(el => el.click())
        await wait()
        getElementsByAriaLabel('Back')[2].click()
        await wait()
    }
    getElementsByAriaLabel('Back')[2].click()
    await wait()
}

})()

========================
  const wait = () => new Promise(resolve => setTimeout(resolve, 1000));
    const getElementsByAriaLabel = (label) => document.querySelectorAll(`[aria-label="${label}"]`);
    const getElementsByRoleAndWidth = (role, width) =>
        Array.from(document.querySelectorAll(`[role="${role}"]`)).filter(el => el.clientWidth === width);
    const getElementsByText = (text) => Array.from(document.querySelectorAll('*')).filter(el =>
        Array.from(el.childNodes).some(node => node.nodeType === Node.TEXT_NODE && node.textContent.includes(text))
    );

    async function clickAndWait(elem) {
        if (!elem)
            return;
        elem.click();
        await wait();
    }

    await clickAndWait(getElementsByText("See more")[0]);

    const ads = getElementsByRoleAndWidth('listitem', 508);

    for (const ad of ads) {
        console.log(ad.childNodes[0].textContent)
        await clickAndWait(ad.childNodes[0]);

        await clickAndWait(getElementsByText('They uploaded or used a list to reach you.')[0]);

        const dont_allow_btns = getElementsByText('Don\'t allow');
        for (const btn of dont_allow_btns) {
            btn.click();
        }
        await wait();

        await clickAndWait(getElementsByAriaLabel('Back')[2]);
        await clickAndWait(getElementsByAriaLabel('Back')[2]);
    }

const puppeteer = require('puppeteer')

describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false,
    })
    let page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 500,
        height: 500,
      },
      userAgent: 'test',
    })

    await page.goto('http://localhost:3000/')
    await page.waitForSelector('h1')

    const html = await page.$eval('h1', e => e.innerHTML)
    expect(html).toBe('Hello world! - user agent: <!-- -->test<!-- -->.')

    browser.close()
  }, 5000)
})

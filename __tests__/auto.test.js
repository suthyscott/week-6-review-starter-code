const { Builder, Browser, By, until} = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("http://127.0.0.1:5500/public/index.html");
});

afterEach(async () => {
  await driver.quit();
});

describe('Sushi Tests', () => {
  test('checks the the first sushi is a div', async () => {
    const isDiv = await driver.findElement(By.id('1')).getTagName()
    expect(isDiv).toBe('div')
  })

  test('adds sushi', async () => {
    await driver.findElement(By.id('name')).sendKeys('Avocado Roll')
    await driver.findElement(By.css('input[name="form-image"]')).sendKeys('https://brokebankvegan.com/wp-content/uploads/2022/06/Avocado-Roll-39.jpg')
    await driver.findElement(By.xpath('//input[@id="fish"]')).sendKeys('no fish')
    await driver.findElement(By.name('form-submit')).click()
    let renderedRolls = await driver.wait(until.elementLocated(By.css('section[id="sushi-section"]')))
    let totalRolls = await renderedRolls.getAttribute('childElementCount')
    expect(totalRolls).toEqual("6")
  })
})
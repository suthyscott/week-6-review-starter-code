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

})
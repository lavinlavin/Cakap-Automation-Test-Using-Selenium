
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login Cakap', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Login Cakap', async function() {
    await driver.get("https://staging.student.cakap.com/login")
    await driver.setRect(1374, 732)
    await driver.findElement(By.css(".form-group:nth-child(1) > .text-center")).click()
    await driver.findElement(By.xpath("//input[@placeholder=\'youremail@email.com\']")).sendKeys("l4v1nlidner@gmail.com")
    await driver.findElement(By.css(".mt > .text-center")).click()
    await driver.findElement(By.xpath("//input[@placeholder=\'Password\']")).sendKeys("12345678")
    await driver.findElement(By.css(".btn-login")).click()
    await driver.close()
  })
})

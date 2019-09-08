
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Default Suite', function() {
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
  it('Register Cakap', async function() {
    await driver.get("https://staging.student.cakap.com/login/register/email")
    await driver.setRect(550, 691)
    await driver.findElement(By.id("inputemail")).click()
    await driver.findElement(By.id("inputemail")).sendKeys("iniadalahemail3@gmail.com")
    await driver.findElement(By.css(".blueborder > span")).click()
    await driver.findElement(By.id("inputfirst")).click()
    await driver.findElement(By.id("inputfirst")).sendKeys("Lavin")
    await driver.findElement(By.id("inputlast")).click()
    await driver.findElement(By.id("inputlast")).sendKeys("Bassam")
    await driver.findElement(By.id("inputpassword")).click()
    await driver.findElement(By.id("inputpassword")).sendKeys("12345678")
    await driver.findElement(By.id("inputconfirmpass")).click()
    await driver.findElement(By.id("inputconfirmpass")).sendKeys("12345678")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.css(".col-md-6:nth-child(2) .country-text")).click()
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.id("input-phone")).click()
    await driver.findElement(By.id("input-phone")).sendKeys("895391510812")
    await driver.findElement(By.css(".btn")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css(".btn")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css(".btn-info")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.close()
  })
})

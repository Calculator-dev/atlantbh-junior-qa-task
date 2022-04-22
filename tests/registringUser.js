const {Builder, By, Key} = require("selenium-webdriver")

async function example() {
    //launch the browser
    
    let driver = await new Builder().forBrowser("chrome").build()   
    //navigate to our application
    await driver.get("http://automationpractice.com/index.php")
    
    //add a todo
    await driver.findElement(By.className("login")).click()
    await driver.findElement(By.name("email_create")).sendKeys("farisaksalic@gmail.com")
    await driver.findElement(By.id("SubmitCreate")).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//input[@id="id_gender1"]')).click()
    await driver.findElement(By.id("customer_firstname")).sendKeys("Faris")
    await driver.findElement(By.name("customer_lastname")).sendKeys("Aksalic")
    await driver.findElement(By.name("passwd")).sendKeys("12345")
    await driver.findElement(By.xpath('//select[@id="days"]')).sendKeys("10")
    await driver.findElement(By.xpath('//select[@id="months"]')).sendKeys("April")
    await driver.findElement(By.xpath('//select[@id="years"]')).sendKeys("1997")
    await driver.findElement(By.xpath('//input[@id="firstname"]')).sendKeys("Faris")
    await driver.findElement(By.id("company")).sendKeys("Freelancer")   
    await driver.findElement(By.id("address1")).sendKeys("Oslobodilaca Sarajeva 6")   
    await driver.findElement(By.id("city")).sendKeys("Sarajevo")   
    await driver.findElement(By.xpath('//select[@id="id_country"]')).sendKeys("United States")
    await driver.findElement(By.xpath('//select[@id="id_state"]')).sendKeys("Alabama")
    await driver.findElement(By.xpath('//input[@id="postcode"]')).sendKeys("71000")
    await driver.findElement(By.id("phone_mobile")).sendKeys("+38761848661")   
    await driver.findElement(By.id("submitAccount")).click()
    //close the browser
}       

example()
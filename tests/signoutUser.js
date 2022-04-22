const {Builder, By, Key} = require("selenium-webdriver")

async function example() {
    //launch the browser
    
    let driver = await new Builder().forBrowser("chrome").build()   
    //navigate to our application
    await driver.get("http://automationpractice.com/index.php")
    await driver.findElement(By.className("login")).click()
    await driver.findElement(By.name("email")).sendKeys("haris_aksalic@hotmail.com")
    await driver.findElement(By.name("passwd")).sendKeys("12345", Key.RETURN)
    await driver.findElement(By.className("logout")).click()
    //close the browser
   
}       

example()
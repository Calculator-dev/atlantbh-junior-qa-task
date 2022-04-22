const {Builder, By, Key} = require("selenium-webdriver")

async function example() {
    //launch the browser
    
    let driver = await new Builder().forBrowser("chrome").build()   
    //navigate to our application
    await driver.get("http://automationpractice.com/index.php")
    
    //add a todo
    await driver.findElement(By.name("search_query")).sendKeys("dresses", Key.RETURN)
    //close the browser
}       

example()
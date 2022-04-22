const {Builder, By, Key} = require("selenium-webdriver")

async function example() {
    //launch the browser
    
    let driver = await new Builder().forBrowser("chrome").build()   
    //navigate to our application
    await driver.get("http://automationpractice.com/index.php")
    
    //add a todo
    await driver.findElement(By.className("button ajax_add_to_cart_button btn btn-default")).click()
    await driver.findElement(By.xpath("//a[@title='Proceed to checkout']")).click()
    //close the browser
}       

example()
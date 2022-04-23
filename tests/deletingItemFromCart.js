const {Builder, By, Key} = require("selenium-webdriver")

async function example() {
    //launch the browser
    
    let driver = await new Builder().forBrowser("chrome").build()   
    //navigate to our application
    await driver.get("http://automationpractice.com/index.php")

    await driver.findElement(By.className("button ajax_add_to_cart_button btn btn-default")).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a')).click()
    await driver.sleep(2000)
    await driver.findElement(By.className('cart_quantity_delete')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="header_logo"]/a')).click()

    //close the browser
   
}       

example()
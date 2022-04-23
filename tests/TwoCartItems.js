const {Builder, By, Key} = require("selenium-webdriver")

async function example() {
    //launch the browser
    
    let driver = await new Builder().forBrowser("chrome").build()   
    //navigate to our application
    await driver.get("http://automationpractice.com/index.php")
    
    //add a todo
    await driver.findElement(By.className("button ajax_add_to_cart_button btn btn-default")).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/span')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="homefeatured"]/li[2]/div/div[2]/div[2]/a[1]')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/span')).click()
    
}       

example()
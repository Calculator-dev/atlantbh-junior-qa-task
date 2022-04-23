const {Builder, By, Key} = require("selenium-webdriver")

async function example() {
    //launch the browser
    
    let driver = await new Builder().forBrowser("chrome").build()   
    //navigate to our application
    await driver.get("http://automationpractice.com/index.php")
    
    await driver.findElement(By.xpath('//*[@id="homefeatured"]/li[1]/div/div[1]/div/a[1]')).click()

    //close the browser
   
}       

example()
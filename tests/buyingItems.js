const {Builder, By, Key} = require("selenium-webdriver")

async function example() {
    //launch the browser
    
    let driver = await new Builder().forBrowser("chrome").build()   
    //navigate to our application
    await driver.get("http://automationpractice.com/index.php")
    
    //add a todo
    await driver.findElement(By.className("login")).click()
    await driver.findElement(By.name("email")).sendKeys("haris_aksalic@hotmail.com")
    await driver.findElement(By.name("passwd")).sendKeys("12345", Key.RETURN)
    await driver.findElement(By.xpath("//*[@id='center_column']/ul/li/a")).click()
    await driver.sleep(2000)
    await driver.findElement(By.className("button ajax_add_to_cart_button btn btn-default")).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a")).click()
    await driver.findElement(By.xpath("//a/b[contains(text(),'Cart')]")).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//*[@id='center_column']/p[2]/a[1]")).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//*[@id='center_column']/form/p/button")).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="cgv"]')).click();
    await driver.findElement(By.xpath('//*[@id="form"]/p/button')).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a')).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="cart_navigation"]/button')).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="center_column"]/p/a')).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="center_column"]/ul/li[2]/a')).click();
    //close the browser
}       

example()
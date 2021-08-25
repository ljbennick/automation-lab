import { Builder, Capabilities, By } from "selenium-webdriver";
const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () =>{
    await driver.get("http://localhost:5500/movieList/index.html")
})

afterAll(async () => {
    await driver.quit()
})


test ('Adding a movie to movieList', async() => {
    let inputBar = await driver.findElement(By.xpath('//input'))
    
    let addBtn = await driver.findElement(By.xpath('//button'))
    
    await inputBar.sendKeys('Lion King')
    
    await driver.sleep(10000)
})

test ('Adding a movie to movieList', async() => {
    let inputBar = await driver.findElement(By.xpath('//input'))
    
    let addBtn = await driver.findElement(By.xpath('//button'))

    await inputBar.sendKeys('Emperors New Groove')
    await addBtn.click()

    await driver.sleep(5000)
})

test ('Deleting a movie off of the movieList', async() =>{

    let xBtn = await driver.findElement(By.xpath('//*[@id="EmperorsNewGroove"]'))

    await xBtn.click()

    await driver.sleep(5000)
})

test ('Cross off function', async() => {
    let crossOff = await driver.findElement(By.xpath('/html/body/main/ul/li/span'))

    await crossOff.click()
    await driver.sleep(7000)
})

test ('Unmark a crossed off value', async() =>{
    let unCross = await driver.findElement(By.xpath('/html/body/main/ul/li/span'))

    await unCross.click()
    await driver.sleep(5000)
})
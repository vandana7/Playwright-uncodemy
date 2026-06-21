
export class RegistrationPage
{
    constructor(page)
    {
        this.page = page
        this.firstName = page.locator("//input[@id='customer.firstName']")
        this.lastName = page.locator("//input[@id='customer.lastName']")
        this.address = page.locator("//input[@id='customer.address.street']")
        this.city = page.locator("//input[@id='customer.address.city']")
        this.state = page.locator("//input[@id='customer.address.state']")
        this.zipCode = page.locator("//input[@id='customer.address.zipCode']")
        this.phoneNumber = page.locator("//input[@id='customer.phoneNumber']")
        this.ssn = page.locator("//input[@id='customer.ssn']")
        this.userName = page.locator("//input[@id='customer.username']")
        this.password = page.locator("//input[@id='customer.password']")
        this.confirm = page.locator("//input[@id='repeatedPassword']")
        this.registerButton = page.locator("//input[@value='Register']")
    }

    async registerUser(fname,lname,address,city,state,zipcode,phone,ssn,username,password)
    {
        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.address.fill(address)
        await this.city.fill(city)
        await this.state.fill(state)
        await this.zipCode.fill(zipcode)
        await this.phoneNumber.fill(phone)
        await this.ssn.fill(ssn)
        await this.userName.fill(username)
        await this.password.fill(password)
        await this.confirm.fill(password)

    }

    async registerButtonClick()
    {
        await this.registerButton.click()
    }
}
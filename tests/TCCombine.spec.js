import { POManager } from "../pageObjects/POManager";
import { customtest as test,expect } from "../fixtures/testFixtures";

test.describe.serial('parabank test',()=>
{


test('@smokeregister',async({page, testdataForregistration})=>{
     //const homepage = new HomePage(page)
     const pomanager = new POManager(page)
     const homepage = pomanager.getHomePage()
      await  homepage.goTo()
      await homepage.clickOnRegisterLINK()

     // const registerpage = new RegistrationPage(page)
     const registerpage = pomanager.getRegistrationPage()
     await  registerpage.registerUser(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword

     )
      await registerpage.registerButtonClick()

    }) 

    test('@regressionlogin',async({page, testdataForregistration})=>{

   
     const pomanager = new POManager(page)
     const homepage = pomanager.getHomePage()
      await  homepage.goTo()

        const loginpage = pomanager.getLoginPage()
        await loginpage.loginToApplication(
            testdataForregistration.username,
            testdataForregistration.password

        )
       

    }) 
    })
//import {test,expect} from '@playwright/test'
//import { HomePage } from '../pageObjects/HomePage'
//import { RegistrationPage } from '../pageObjects/RegistrationPage'
import { POManager } from '../pageObjects/POManager'
//import testData from '../utils/parabank.json' assert {type:'json'}
import { customtest as test,expect } from '../fixtures/testFixtures'

//test('register',async({page})=>
//{

  //  const homepage = new HomePage(page)
    //  await  homepage.goTo()
    //   await homepage.clickOnRegisterLINK()

   // const registerpage = new RegistrationPage(page)
    //  await  registerpage.registerUser('Vandana','Yadav','india','New Delhi','Delhi','110085','1122334455','1234567','vyadav','asdf','asfd')

     //   await registerpage.registerButtonClick()

//})

test('register',async({page, testdataForregistration})=>{
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
import {test,expect} from '@playwright/test'
//import { HomePage } from '../pageObjects/HomePage'
//import { RegistrationPage } from '../pageObjects/RegistrationPage'
import { POManager } from '../pageObjects/POManager'
import testData from '../utils/parabank.json' assert {type:'json'}


//test('register',async({page})=>
//{

  //  const homepage = new HomePage(page)
    //  await  homepage.goTo()
    //   await homepage.clickOnRegisterLINK()

   // const registerpage = new RegistrationPage(page)
    //  await  registerpage.registerUser('Vandana','Yadav','india','New Delhi','Delhi','110085','1122334455','1234567','vyadav','asdf','asfd')

     //   await registerpage.registerButtonClick()

//})

for (const  data of testData){
    test(`register ${data.username}`, async({page})=> {
     //const homepage = new HomePage(page)
     const pomanager = new POManager(page)
     const homepage = pomanager.getHomePage()
      await  homepage.goTo()
      await homepage.clickOnRegisterLINK()

     // const registerpage = new RegistrationPage(page)
     const registerpage = pomanager.getRegistrationPage()
     await  registerpage.registerUser(
        data.firstname,
        data.lastname,
        data.address,
        data.city,
        data.state,
        data.zipcode,
        data.phonenumber,
        data.ssn,
        data.username,
        data.password,
        data.confirmpassword

     )
      await registerpage.registerButtonClick()

    }) 

    
}
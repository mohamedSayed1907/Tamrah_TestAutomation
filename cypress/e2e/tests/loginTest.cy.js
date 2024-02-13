/// <reference types="cypress" />
import { LoginPage } from "../pages/loginPage.cy.js";
import loginSelector from "../selectors/loginSelectors.cy.js"
require('cypress-xpath');
import 'cypress-wait-until';

 
const loginPage = new LoginPage();
let  passwordValid,passwordInvalid,invalidEmail,validEmail,invalidEmailFormat;
  
describe("Login Test Cases", () => {
 
beforeEach(()=>{
  /* 
      "username": "Mohamed",
    "passwordValid": "123456",
    "passwordInvalid": "123",
    "emailInvalidFormat": "mohamed",
    "emailNotExist": "mohamedmohamed@gmail.com",

    "exisitingPhone":"01143808983",
    "exisitingEmail":"mm@gmail.com"
  
  */
    
      cy.visit("/login")
      cy.fixture("userData").then((userData)=>{
        validEmail = userData.validEmail;
        passwordValid = userData.passwordValid
        invalidEmail = userData.invalidEmail;
        passwordInvalid = userData.passwordInvalid;
        invalidEmailFormat = userData.emailInvalidFormat

      })
 
})
  it("Login With Valid Data", () => {
    loginPage.loginWithValidData(validEmail,passwordValid)
     cy.xpath(loginSelector.assertionLoginSuccessXpath).should("have.text","Welcome")

}); 

 
it("Login With Invalid Data", () => {
    loginPage.loginWithInvalidData(invalidEmailFormat,passwordInvalid)
    cy.get(loginSelector.assertLoginFail).should("have.text","Invalid user name or password!")
  
   
  }); 
  it("Login With Empty Data", () => {
    loginPage.loginWithEmptyData()
     cy.get(loginSelector.emailError).should("be.visible").should("have.text","Please enter your email address")
    cy.get(loginSelector.passwordError).should("be.visible").should("contain.text","Please enter your password!")

  }); 

  it("Verify the UI of Login Page", () => {
   cy.get(loginSelector.tamrahLogo).should("be.visible")
   cy.get(loginSelector.changeLanguage).should("be.visible")
   cy.get(loginSelector.loginTitle).should("be.visible").should("contain.text","Log in")
    cy.get(loginSelector.emailField).should("be.visible")
    cy.get(loginSelector.passwordField).should("be.visible")
   cy.get(loginSelector.loginButton).should("be.visible")
   cy.xpath(loginSelector.needRegister).should("be.visible")


   
  }); 

  it("Verify Change Language of Login Page", () => {
 
    cy.xpath(loginSelector.languageTextXpath).invoke("text").then((lang)=>{
        if(lang=="English")
        {
            cy.get(loginSelector.changeLanguage).click({force:true});
    

            cy.xpath(loginSelector.changeToArabicXpath).click({force:true});

            cy.get(loginSelector.loginTitle).should("contain.text","تسجيل الدخول");
             cy.xpath(loginSelector.emailTitleXpath).should("contain.text","البريد الالكتروني");
             cy.xpath(loginSelector.passwordTitleXpath).should("contain.text","كلمة السر");
            cy.get(loginSelector.loginButton).should("contain.text","تسجيل");
            cy.xpath(loginSelector.needRegister).should("contain.text","ليس لديك حساب؟");


        }

    })
 
 
 
    
   }); 
    
   
});



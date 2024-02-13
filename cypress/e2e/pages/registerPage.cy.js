/// <reference types="cypress" />
require('cypress-xpath');


 import registerSelector from "../selectors/registerSelectors.cy.js"

export class RegisterPage {
 

    setUsername(username) {
        cy.get(registerSelector.usernameField).type(username);
    }
    setEmail(email) {
        cy.get(registerSelector.emailField).type(email);
    }
    setPassword(password) {
        cy.get(registerSelector.passwordField).type(password);
    }
    setPhone(phone) {
        cy.get(registerSelector.phoneField).type(phone);
    }
    clickRegister() {
        cy.get(registerSelector.registerButton).click({timeout:50000});
    }
  
    registerUserWithValidDataWithPhone(username,email,phone,password) {
      this.setUsername(username);
      this.setEmail(email);
      this.setPhone(phone);

      this.setPassword(password);
      this.clickRegister();
    }
    registerUserWithValidDataWithoutPhone(username,email,password) {
        this.setUsername(username);
        this.setEmail(email);
        this.setPassword(password);
        this.clickRegister();
      }
    registerUserWithInvalidData(email,password) {
        this.setEmail(email);
        this.setPassword(password);
        this.clickRegister();
      }
      registerUserWithEmptyData(username,email,password) {
        this.setUsername(username);
      this.setEmail(email);
       this.setPassword(password);
      this.clickRegister();
      }

      changeLanguage()
      {
        cy.get(registerSelector.changeLanguage).click();
      }
 
 
   


  
  }
  
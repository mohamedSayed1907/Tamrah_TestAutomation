/// <reference types="cypress" />
require('cypress-xpath');


 import loginSelector from "../selectors/loginSelectors.cy.js"

export class LoginPage {
 
 
    setEmail(email) {
        cy.get(loginSelector.emailField).type(email);
    }
    setPassword(password) {
        cy.get(loginSelector.passwordField).type(password);
    }
 
    clickLogin() {
        cy.get(loginSelector.loginButton).click( );
    }
  
    loginWithValidData(email,password) {
       this.setEmail(email);
 
      this.setPassword(password);
      this.clickLogin();
    }
    loginWithInvalidData(email,password) {
         this.setEmail(email);
        this.setPassword(password);
        this.clickLogin();
      }
 
      loginWithEmptyData() {
      
       this.clickLogin();
     }


      changeLanguage()
      {
        cy.get(registerSelector.changeLanguage).click();
      }
 
      
 
        waitForNextPage = new Cypress.Promise((resolve, reject) => {
        const maxRetries = 20; // Adjust the number of retries as needed
        let retryCount = 0;
  
        function checkPage() {
          cy.url().then(url => {
            if (url.includes('/dashboard')) {
              resolve();
            } else if (retryCount < maxRetries) {
              retryCount++;
              setTimeout(checkPage, 1000); // Check again after 1 second
            } else {
              reject('Timeout: Next page did not load.');
            }
          });
        }
  
        checkPage();
      });

  
  }
  
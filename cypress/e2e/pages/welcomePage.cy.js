/// <reference types="cypress" />
require('cypress-xpath');


 import welcomeSelectors from "../selectors/welcomeSelectors.cy.js"

export class WelcomePage {
 
    clickOnGetStarted()
      {

         cy.get(welcomeSelectors.getStartedButton).click()
      }
 

      changeLanguage()
      {
        cy.get(welcomeSelectors.changeLanguage).click();
      }
    
      
  
  
  }
  
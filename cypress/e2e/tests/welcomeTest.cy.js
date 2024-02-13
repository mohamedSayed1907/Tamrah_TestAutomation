/// <reference types="cypress" />
import { LoginPage } from "../pages/loginPage.cy.js";
import { WelcomePage } from "../pages/welcomePage.cy.js";
 require('cypress-xpath');
import 'cypress-wait-until';
import welcomeSelectors from "../selectors/welcomeSelectors.cy.js";

 
const welcomePage = new WelcomePage();
   
describe("Welcome Page Test Cases", () => {
 
before(()=>{
    
      cy.visit("/")
 
})
  it("Validate The Ui of Welcome Page", () => {
    cy.get(welcomeSelectors.tamrahLogo).should("be.visible")
    cy.get(welcomeSelectors.changeLanguage).should("be.visible")
    cy.get(welcomeSelectors.welcomeTextTitle).should("be.visible")
    cy.get(welcomeSelectors.letText).should("be.visible")
    cy.get(welcomeSelectors.readyText).should("be.visible")
    cy.get(welcomeSelectors.getStartedButton).should("be.visible")


}); 
it("Verify Change Language of Welcome Page", () => {
 
    cy.xpath(welcomeSelectors.languageTextXpath).invoke("text").then((lang)=>{
        if(lang=="English")
        {
            cy.get(welcomeSelectors.changeLanguage).click({force:true});
    

            cy.xpath(welcomeSelectors.changeToArabicXpath).click({force:true});

            cy.get(welcomeSelectors.welcomeTextTitle).should("contain.text","مرحبا بكم");
            cy.get(welcomeSelectors.letText).should("contain.text","هيا بنا نخصصتمرة لأهدافك");
            cy.get(welcomeSelectors.readyText).should("contain.text","هل أنت مستعد؟");
            cy.get(welcomeSelectors.getStartedButton).should("contain.text","ابدأ");

 

        }

    })
 
 
 
    
   }); 

it("Verify Click On Get Started Button", () => {
 welcomePage.clickOnGetStarted();
 cy.wait(1000)
 cy.url().then((t)=>{
    expect(t).equal("https://dev.dv2pt6nppfhmi.amplifyapp.com/demographic")

 })
 
 
 
    
   }); 
   
 
    
   
});



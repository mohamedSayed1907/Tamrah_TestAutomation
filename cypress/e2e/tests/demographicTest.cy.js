/// <reference types="cypress" />
 import { DemographicPage } from "../pages/demographicPage.cy.js";
import { LoginPage } from "../pages/loginPage.cy.js";
import demographicSelector from "../selectors/demographicSelector.cy.js"
import getDate from "../../support/getDate.js"

require('cypress-xpath');

 
const demographicPage = new DemographicPage();
let weightLoss,currentWeight,age,height,email,userEmail;
  
describe("Demographic Test Cases", () => {
 
beforeEach( ()=>{
 
      cy.visit("/")
      cy.get(demographicSelector.getStartedButton).click()
      cy.fixture("demographicData").then((demo)=>{
        weightLoss = demo.weighLoss;
        currentWeight = demo.currentWeight
        age = demo.age;
        email = demo.email;
        height = demo.height;   
        userEmail = `${email}+${Math.random().toString().slice(2, 6)}@gmail.com`

      })


})
 
it("Validate Weight Loss UI",()=>{
  cy.get(demographicSelector.lossWeightTitle).should("be.visible")
  cy.get(demographicSelector.lossWeightDescription).should("be.visible")
  cy.get(demographicSelector.lossWeightField).should("be.visible");
  cy.xpath(demographicSelector.NextButtonXpath).should('have.attr', 'disabled');

  //  cy.get(demographicSelector.lossWeightField).should("be.visible").invoke("val").then((val)=>{
  //   if(val==""||val.length==0)
  //   {
  //     console.log("Empty");
  //   }else{
  //     console.log("Not Empty");

  //   }

  // })   
 


})
it("Validate Weight Loss UI",()=>{
  cy.get(demographicSelector.lossWeightTitle).should("be.visible")
  cy.get(demographicSelector.lossWeightDescription).should("be.visible")
  cy.get(demographicSelector.lossWeightField).should("be.visible");
  cy.xpath(demographicSelector.NextButtonXpath).should('have.attr', 'disabled');
  

  //  cy.get(demographicSelector.lossWeightField).should("be.visible").invoke("val").then((val)=>{
  //   if(val==""||val.length==0)
  //   {
  //     console.log("Empty");
  //   }else{
  //     console.log("Not Empty");

  //   }

  // })   
 


})
it("Validate The Next Button Is Disabled Till enter Valid Data",()=>{
  cy.get(demographicSelector.lossWeightField).type("5");
  cy.get(demographicSelector.lossWeightField).should("be.visible").invoke("val").then((val)=>{
    //let data = demographicPage.checkDisabledButton(val)
    
      cy.xpath(demographicSelector.NextButtonXpath).should('not.have.attr', 'disabled');

 

  })
 

})

it.only("Validate Get Plan With Valid Data",async()=>{

 demographicPage.fillQuestions(weightLoss,age,height,currentWeight,userEmail);
 cy.getDate(currentWeight,height,weightLoss,age,userEmail).then((res)=>{
  const numOfWeeks = res.body["timeData"]["numberOfWeeks"];
  const needyPeople = res.body["timeData"]["people_fed"];
    cy.get(demographicSelector.numberOfNeedyPeople).should("contain.text",needyPeople)
    cy.get(demographicSelector.numberOfWeeks).should("contain.text",numOfWeeks)


 }) 

})

 
 
 
 
   
});



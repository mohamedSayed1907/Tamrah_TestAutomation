/// <reference types="cypress" />
import { RegisterPage } from "../pages/registerPage.cy.js";
import registerSelector, {
  changeLanguage,
  emailTitleXpath,
  passwordTitleXpath,
  phoneTitleXpath,
  registerTitle,
  usernameTitleXpath,
} from "../selectors/registerSelectors.cy.js";
require("cypress-xpath");

const registerPage = new RegisterPage();
let username, passwordValid, passwordInvalid, emailInvalid, email, phoneNumber;

describe("Register Test Cases", () => {
  beforeEach(() => {
    cy.visit("/register");
    cy.fixture("userData").then((adminData) => {
      username = adminData.username;
      passwordValid = adminData.passwordValid;
      emailInvalid = adminData.emailInvalidFormat;
      passwordInvalid = adminData.passwordInvalid;
    });
    phoneNumber = `011${Math.random().toString().slice(2, 10)}`;
    email = `eng.mohamedsayed14${Math.random()
      .toString()
      .slice(2, 4)}@gmail.com`;
  });
  it("Register With Valid Data With Phone Number", () => {
    registerPage.registerUserWithValidDataWithPhone(
      username,
      email,
      phoneNumber,
      passwordValid
    );
    cy.get(registerSelector.alertSuccessRegister)
      .should("be.visible")
      .should("contain.text", "You have been registered Successfully");
  });
  it("Register With Valid Data Without Phone Number", () => {
    registerPage.registerUserWithValidDataWithoutPhone(
      username,
      email,
      passwordValid
    );
    cy.get(registerSelector.alertSuccessRegister)
      .should("be.visible")
      .should("contain.text", "You have been registered Successfully");
  });

  it("Register With Invalid Data", () => {
    registerPage.registerUserWithInvalidData(emailInvalid, passwordInvalid);
    cy.get(registerSelector.alertInvalidEmail)
      .should("be.visible")
      .should("contain.text", `Please enter a valid email address`);
    cy.get(registerSelector.alertInvalidPassword)
      .should("be.visible")
      .should("contain.text", `The password Must Be At Least 6 Character`);
  });
  it.only("Register With Empty Data", () => {
    registerPage.registerUserWithEmptyData(
      "{backspace}",
      "{backspace}",
      "{backspace}"
    );
    cy.get(registerSelector.alertEmptyUsername)
      .should("be.visible")
      .should("contain.text", "Please enter your username");
    cy.get(registerSelector.alertInvalidEmail)
      .should("be.visible")
      .should("contain.text", "Please enter your email address");
    cy.get(registerSelector.alertInvalidPassword)
      .should("be.visible")
      .should("contain.text", "Please enter your password!");
  });

  it("Verify the UI of Register Page", () => {
    cy.get(registerSelector.tamrahLogo).should("be.visible");
    cy.get(registerSelector.changeLanguage).should("be.visible");
    cy.get(registerSelector.registerTitle)
      .should("be.visible")
      .should("contain.text", "Sign Up");
    cy.get(registerSelector.usernameField).should("be.visible");
    cy.get(registerSelector.emailField).should("be.visible");
    cy.get(registerSelector.phoneField).should("be.visible");
    cy.get(registerSelector.passwordField).should("be.visible");
    cy.get(registerSelector.registerButton).should("be.visible");
    cy.xpath(registerSelector.alreadyHaveEmailXpath).should("be.visible");
  });

  it.only("Verify Change Language of Register Page", () => {
    cy.xpath(registerSelector.languageTextXpath)
      .invoke("text")
      .then((lang) => {
        if (lang == "English") {
          cy.get(registerSelector.changeLanguage).click({ force: true });

          cy.xpath(registerSelector.changeToArabicXpath).click({ force: true });

          cy.get(registerSelector.registerTitle).should(
            "contain.text",
            "انشاء حساب"
          );
          cy.xpath(registerSelector.usernameTitleXpath).should(
            "contain.text",
            "الاسم"
          );
          cy.xpath(registerSelector.emailTitleXpath).should(
            "contain.text",
            "البريد الالكتروني"
          );
          cy.xpath(registerSelector.phoneTitleXpath).should(
            "contain.text",
            "رقم الهاتف"
          );
          cy.xpath(registerSelector.passwordTitleXpath).should(
            "contain.text",
            "كلمة السر"
          );
          cy.get(registerSelector.registerButton).should(
            "contain.text",
            "انشاء حساب"
          );
          cy.xpath(registerSelector.alreadyHaveEmailXpath).should(
            "contain.text",
            "لديك حساب؟"
          );
        }
      });
  });
});

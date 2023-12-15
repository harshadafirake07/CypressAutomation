import fish from "../fixtures/fish.json";
import locators from "../fixtures/locators.json";
import orderplaced from "../fixtures/orderplaced.json";
import payment from "../fixtures/payment.json";
import register from "../fixtures/register.json";
import shoppingcart from "../fixtures/shoppingcart.json";
import welcome from "../fixtures/welcome.json";
import {
    password,
    randomEmail,
    randomString,
} from "C:/Users/harshada.firake/CypressAutomation/cypress/Constants/constants.js";
// beforeEach(function () {
//     cy.fixture('locators').then(function(data)
//     {
//       this.data=data;
//     })
//   });
const {
  signInbutton,
  signInPassword,
  signInUsername,
  signOnbutton,
  signInSuccessfull,
  url,
} = locators;
const {
  registerAddressLine1,
  registerButton,
  registerCity,
  registerCountry,
  registerCreateAccount,
  registerEmail,
  registerFirstname,
  regsiterLastname,
  registerPassword,
  registerZipcode,
  registerUsername,
  registerState,
  registerRepeatPassword,
  registerPhoneNumber,
} = register;

const { welcome_text, welcome_Fishmenu } = welcome;
const { angleFish, angleFish_addToCart } = fish;
const { proceedToCheckout } = shoppingcart;
const { paymentContinueButton, paymentProceedButton } = payment;
const { orderPlacedSuccessMessage } = orderplaced;

export function registration() {
  // cy.fixture('locators').then((data) =>{
  //     const loginLocators = data.login;
  //     const registerLocators = data.register;
  //cy.commonWait();
  cy.visit(url);
  cy.get(signInbutton).click();
  cy.get(registerButton).click();
  cy.get(registerUsername).type(randomString);
  cy.get(registerPassword).type(password);
  cy.get(registerRepeatPassword).type(password);
  cy.get(registerFirstname).type(randomString);
  cy.get(regsiterLastname).type("firake");
  cy.get(registerPhoneNumber).type("2345678900");
  cy.get(registerEmail).type(randomEmail);
  cy.get(registerAddressLine1).type("test");
  cy.get(registerCity).type("chicago");
  cy.get(registerState).type("IL");
  cy.get(registerZipcode).type("60647");
  cy.get(registerCountry).type("US");
  cy.get(registerCreateAccount).click();
  cy.get(signInSuccessfull).should("be.visible");
}

export function login() {
  //   cy.fixture("locators").then((data) => {
  //     const loginLocators = data.login;

  cy.visit(url);
  cy.get(signInbutton).click();
  cy.get(signInUsername).clear().type(randomString);
  cy.get(signInPassword).clear().type(password);
  cy.wait(2000);
  cy.get(signOnbutton).click();
}

export function welcomeMenu() {
  cy.get(welcome_text)
    .invoke("text")
    .invoke("trim")
    .should("eq", `Welcome ${randomString}!`);
  cy.get(welcome_Fishmenu).click();
}

export function add_to_cart() {
  cy.get(angleFish).click();
  cy.get(angleFish_addToCart).click();
}

export function proceed_to_checkout() {
  cy.get(proceedToCheckout).click();
}

export function proceed_to_payment() {
  cy.get(paymentContinueButton).click();
  cy.get(paymentProceedButton).click();
}

export function order_placed_verification() {
  cy.get(orderPlacedSuccessMessage)
  .should('have.text', 'Thank you, your order has been submitted.');
}

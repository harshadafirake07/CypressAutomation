import {
  password,
  randomEmail,
  randomString,
} from "../../cypress/Constants/constants.js";
import fishstorepage from "../fixtures/fishstorepage.json";
import ordersuccesspage from "../fixtures/ordersuccesspage.json";
import paymentpage from "../fixtures/paymentpage.json";
import registerpage from "../fixtures/registerpage.json";
import cartpage from "../fixtures/cartpage.json";
import signinpage from "../fixtures/signinpage.json";
import welcomepage from "../fixtures/welcomepage.json";

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
  Url,
} = signinpage;
const {
  registerAddressLine1,
  registerButton,
  registerCity,
  registerCountry,
  registerCreateAccount,
  registerEmail,
  registerFirstName,
  registerLastName,
  registerPassword,
  registerZipCode,
  registerUsername,
  registerState,
  registerRepeatPassword,
  registerPhoneNumber,
} = registerpage;

const { welcomeText, welcomeFishMenu } = welcomepage;
const { angelFish, angelFishAddToCart } = fishstorepage;
const { proceedToCheckout } = cartpage;
const { paymentContinueButton, paymentProceedButton } = paymentpage;
const { orderPlacedSuccessMessage } = ordersuccesspage;

export function registration() {
  // cy.fixture('locators').then((data) =>{
  //     const loginLocators = data.login;
  //     const registerLocators = data.register;
  //cy.commonWait();
  cy.visit(Url);
  cy.get(signInbutton).click();
  cy.get(registerButton).click();
  cy.get(registerUsername).type(randomString);
  cy.get(registerPassword).type(password);
  cy.get(registerRepeatPassword).type(password);
  cy.get(registerFirstName).type(randomString);
  cy.get(registerLastName).type(randomString);
  cy.get(registerPhoneNumber).type(randomString);
  cy.get(registerEmail).type(randomEmail);
  cy.get(registerAddressLine1).type(randomString);
  cy.get(registerCity).type(randomString);
  cy.get(registerState).type(randomString);
  cy.get(registerZipCode).type(randomString);
  cy.get(registerCountry).type(randomString);
  cy.get(registerCreateAccount).click();
  cy.get(signInSuccessfull).should("be.visible");
}

export function login() {
  //   cy.fixture("locators").then((data) => {
  //     const loginLocators = data.login;

  cy.visit(Url);
  cy.get(signInbutton).click();
  cy.get(signInUsername).clear().type(randomString);
  cy.get(signInPassword).clear().type(password);
  cy.wait(2000);
  cy.get(signOnbutton).click();
}

export function welcomeMenu() {
  cy.get(welcomeText)
    .invoke("text")
    .invoke("trim")
    .should("eq", `Welcome ${randomString}!`);
  cy.get(welcomeFishMenu).click();
}

export function add_to_cart() {
  cy.get(angelFish).click();
  cy.get(angelFishAddToCart).click();
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

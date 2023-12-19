import {
  add_to_cart,
  login,
  order_placed_verification,
  proceed_to_checkout,
  proceed_to_payment,
  registration, welcomeMenu
} from "../../utilities/general.js";

describe("Registration test suite", function () {
  it("Registration form test case", function () {
    registration();
  });

  it("login test case", function () {
    login();
  });



  it("place order test case", function () {
    login();
    cy.wait(3000);
    welcomeMenu();
    add_to_cart();
    cy.wait(2000);
    proceed_to_checkout();
    proceed_to_payment();
    order_placed_verification();
    registration();
  });
});

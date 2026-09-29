import LoginPage from "../pages/loginPage";
import ProductsPage from "../pages/productPage";
import CartPage from "../pages/cardPage";
import CheckoutPage from "../pages/checkOutPage";

describe("Checkout Test Suite", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
    ProductsPage.addFirstProductToCart();
    CartPage.openCart();
    CartPage.checkout();
  });

  it("TC-016 - Should show an error when checkout information is empty", () => {
    CheckoutPage.continueCheckout();

    CheckoutPage.verifyCheckoutError("Error: First Name is required");
  });

  it("TC-017 - Should complete an order successfully", () => {
    CheckoutPage.enterCustomerInformation("Oshada", "Kaushalya", "10250");

    CheckoutPage.continueCheckout();

    cy.get(CheckoutPage.pageTitle).should("have.text", "Checkout: Overview");

    CheckoutPage.finishCheckout();

    CheckoutPage.verifyOrderComplete();

    cy.url().should("include", "/checkout-complete.html");
  });
});

import LoginPage from "../pages/loginPage";
import ProductsPage from "../pages/productPage";
import CartPage from "../pages/cardPage";

describe("Cart Test Suite", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
    ProductsPage.addFirstProductToCart();
  });

  it("TC-012 - Should open the shopping cart", () => {
    CartPage.openCart();

    cy.url().should("include", "/cart.html");
  });

  it("TC-013 - Should display the added product", () => {
    CartPage.openCart();

    CartPage.verifyCartItemCount(1);
    CartPage.verifyProductName("Sauce Labs Backpack");
  });

  it("TC-014 - Should continue shopping", () => {
    CartPage.openCart();
    CartPage.continueShopping();

    cy.url().should("include", "/inventory.html");
  });

  it("TC-015 - Should navigate to checkout", () => {
    CartPage.openCart();
    CartPage.checkout();

    cy.url().should("include", "/checkout-step-one.html");
    cy.get(".title").should("have.text", "Checkout: Your Information");
  });
});

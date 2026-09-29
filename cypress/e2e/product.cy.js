import LoginPage from "../pages/loginPage";
import ProductsPage from "../pages/productPage";

describe("Products Test Suite", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
  });

  it("TC-007 - Should display the Products page", () => {
    ProductsPage.verifyProductsPage();
  });

  it("TC-008 - Should display products", () => {
    ProductsPage.verifyProductsDisplayed();
  });

  it("TC-009 - Should display product prices", () => {
    ProductsPage.verifyPricesDisplayed();
  });

  it("TC-010 - Should add a product to the cart", () => {
    ProductsPage.addFirstProductToCart();

    cy.get(ProductsPage.cartBadge).should("have.text", "1");
  });

  it("TC-011 - Should remove a product from the cart", () => {
    ProductsPage.addFirstProductToCart();

    ProductsPage.removeFirstProductFromCart();

    cy.get(ProductsPage.cartBadge).should("not.exist");
  });
});

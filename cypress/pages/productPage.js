class ProductsPage {
  pageTitle = ".title";
  inventoryItems = ".inventory_item";
  productPrices = ".inventory_item_price";
  addToCartButton = '[data-test^="add-to-cart"]';
  removeButton = '[data-test^="remove"]';
  cartLink = ".shopping_cart_link";
  cartBadge = ".shopping_cart_badge";

  verifyProductsPage() {
    cy.get(this.pageTitle).should("have.text", "Products");
  }

  verifyProductsDisplayed() {
    cy.get(this.inventoryItems).should("have.length.greaterThan", 0);
  }

  verifyPricesDisplayed() {
    cy.get(this.productPrices).should("be.visible");
  }

  addFirstProductToCart() {
    cy.get(this.addToCartButton).first().click();
  }

  removeFirstProductFromCart() {
    cy.get(this.removeButton).first().click();
  }

  openCart() {
    cy.get(this.cartLink).click();
  }
}

export default new ProductsPage();

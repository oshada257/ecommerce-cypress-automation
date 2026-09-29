class CartPage {
  cartLink = ".shopping_cart_link";
  cartItems = ".cart_item";
  itemName = ".inventory_item_name";
  continueShoppingButton = '[data-test="continue-shopping"]';
  checkoutButton = '[data-test="checkout"]';

  openCart() {
    cy.get(this.cartLink).click();
  }

  verifyCartItemCount(count) {
    cy.get(this.cartItems).should("have.length", count);
  }

  verifyProductName(name) {
    cy.get(this.itemName).should("contain.text", name);
  }

  continueShopping() {
    cy.get(this.continueShoppingButton).click();
  }

  checkout() {
    cy.get(this.checkoutButton).click();
  }
}

export default new CartPage();

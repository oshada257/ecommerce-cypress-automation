class CheckoutPage {
  firstName = '[data-test="firstName"]';
  lastName = '[data-test="lastName"]';
  postalCode = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  finishButton = '[data-test="finish"]';
  errorMessage = '[data-test="error"]';
  pageTitle = ".title";
  summaryTotal = ".summary_total_label";
  completeHeader = ".complete-header";

  enterCustomerInformation(first, last, postal) {
    cy.get(this.firstName).type(first);
    cy.get(this.lastName).type(last);
    cy.get(this.postalCode).type(postal);
  }

  continueCheckout() {
    cy.get(this.continueButton).click();
  }

  finishCheckout() {
    cy.get(this.finishButton).click();
  }

  verifyCheckoutError(message) {
    cy.get(this.errorMessage).should("be.visible").and("contain.text", message);
  }

  verifyOrderComplete() {
    cy.get(this.completeHeader).should(
      "have.text",
      "Thank you for your order!",
    );
  }
}

export default new CheckoutPage();

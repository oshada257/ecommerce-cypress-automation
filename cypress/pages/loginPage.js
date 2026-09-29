class LoginPage {
  // Page elements
  usernameField = '[data-test="username"]';
  passwordField = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  errorMessage = '[data-test="error"]';

  // Open login page
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  // Enter username
  enterUsername(username) {
    cy.get(this.usernameField).type(username);
  }

  // Enter password
  enterPassword(password) {
    cy.get(this.passwordField).type(password);
  }

  // Click login
  clickLogin() {
    cy.get(this.loginButton).click();
  }

  // Complete login
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  // Get error message
  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default new LoginPage();

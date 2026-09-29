import LoginPage from "../pages/loginPage";
import loginData from "../fixtures/loginData.json";

// Login Page Test Suite
describe("Login Test Suite", () => {
  it("TC-001 - Should login successfully with valid credentials", () => {
    // Open application
    cy.fixture("loginData.json").then((data) => {
      LoginPage.visit();
      LoginPage.login(data.validUser.username, data.validUser.password);
    });

    // Verify successful login
    cy.url().should("include", "/inventory.html");

    // Verify Products page
    cy.get(".title").should("have.text", "Products");
  });

  // TC-002 - Should display error for invalid password

  it("TC-002 - Should display error for invalid password", () => {
    // Open application
    cy.visit("https://www.saucedemo.com/");

    // Enter valid username
    cy.get('[data-test="username"]').type("standard_user");

    // Enter invalid password
    cy.get('[data-test="password"]').type("wrong_password");

    // Click Login
    cy.get('[data-test="login-button"]').click();

    // Verify error message is displayed
    cy.get('[data-test="error"]').should("be.visible");

    // Verify error message text
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username and password do not match",
    );
  });

  // TC-003 - Should display error for invalid username

  it("TC-003 - Should display error for invalid username", () => {
    // Open application
    cy.visit("https://www.saucedemo.com/");

    // Enter invalid username
    cy.get('[data-test="username"]').type("wrong_user");

    // Enter valid password
    cy.get('[data-test="password"]').type("secret_sauce");

    // Click Login
    cy.get('[data-test="login-button"]').click();

    // Verify error message is displayed
    cy.get('[data-test="error"]').should("be.visible");

    // Verify error message
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username and password do not match",
    );
  });

  // TC-004 - Should display error for empty username

  it("TC-004 - Should display error for empty username", () => {
    // Open application
    cy.visit("https://www.saucedemo.com/");

    // Enter valid password
    cy.get('[data-test="password"]').type("secret_sauce");

    // Click Login
    cy.get('[data-test="login-button"]').click();

    // Verify error message is displayed
    cy.get('[data-test="error"]').should("be.visible");

    // Verify error message
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Epic sadface: Username is required",
    );
  });

  // TC-005 - Should display error when password is empty

  it("TC-005 - Should display error when password is empty", () => {
    // Open application
    cy.visit("https://www.saucedemo.com/");

    // Enter valid username
    cy.get('[data-test="username"]').type("standard_user");

    // Leave password empty

    // Click Login
    cy.get('[data-test="login-button"]').click();

    // Verify error message is displayed
    cy.get('[data-test="error"]').should("be.visible");

    // Verify error message
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Password is required",
    );
  });

  // TC-006 - Should prevent login for locked user

  it("TC-006 - Should prevent login for locked user", () => {
    // Open application
    cy.visit("https://www.saucedemo.com/");

    // Enter locked username
    cy.get('[data-test="username"]').type("locked_out_user");

    // Enter password
    cy.get('[data-test="password"]').type("secret_sauce");

    // Click Login
    cy.get('[data-test="login-button"]').click();

    // Verify error message is displayed
    cy.get('[data-test="error"]').should("be.visible");

    // Verify locked user error
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Sorry, this user has been locked out",
    );
  });
});

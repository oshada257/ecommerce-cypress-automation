# E-Commerce QA Automation Framework

A professional QA automation framework built using **Cypress and JavaScript** for testing an e-commerce web application.

The project includes **UI testing, API testing, Page Object Model (POM), test data management, custom commands, and automated test reporting**.

## Technologies Used

- Cypress
- JavaScript
- Node.js
- Git & GitHub
- Mochawesome Reporter
- Page Object Model (POM)
- JSON Fixtures
- REST API Testing

## Test Coverage

### UI Testing

- Login functionality
- Invalid login scenarios
- Locked user validation
- Product page validation
- Product availability
- Product price validation
- Add product to cart
- Remove product from cart
- Cart validation
- Checkout validation
- Successful order placement

### API Testing

- GET single resource
- GET multiple resources
- POST request
- PUT request
- DELETE request
- Invalid endpoint validation
- Response structure validation

## Current Test Results

**24 automated test cases**

- Login: 6 tests
- Products: 5 tests
- Cart: 4 tests
- Checkout: 2 tests
- API: 7 tests

**Result: 24/24 Passed **

## Framework Structure

```text
ecommerce-cypress-automation/
│
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   └── products-api.cy.js
│   │   ├── login.cy.js
│   │   ├── product.cy.js
│   │   ├── card.cy.js
│   │   └── checkout.cy.js
│   │
│   ├── fixtures/
│   │   └── loginData.json
│   │
│   ├── pages/
│   │   ├── loginPage.js
│   │   ├── productPage.js
│   │   ├── cardPage.js
│   │   └── checkOutPage.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Design Pattern

This framework uses the **Page Object Model (POM)** to separate page elements and actions from test cases.

Benefits:

- Better code organization
- Reusable page methods
- Easier maintenance
- Reduced duplication
- Improved test readability

## Test Data Management

Test data is maintained using Cypress fixtures.

Example:

```json
{
  "validUser": {
    "username": "standard_user",
    "password": "secret_sauce"
  }
}
```

This keeps test data separate from test logic.

## Custom Commands

Reusable Cypress commands are created for common operations such as login.

Example:

```javascript
cy.login(username, password);
```

## Test Reporting

The project uses **Mochawesome Reporter** to generate HTML test reports.

Run tests:

```bash
npx cypress run
```

The report is generated under:

```text
cypress/reports/html/index.html
```

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/oshada257/ecommerce-cypress-automation.git
```

### 2. Navigate to the project

```bash
cd ecommerce-cypress-automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Open Cypress

```bash
npx cypress open
```

### 5. Run all tests

```bash
npx cypress run
```

## Test Applications

### UI Application

SauceDemo is used as the demo e-commerce application.

```text
https://www.saucedemo.com/
```

### API Application

JSONPlaceholder is used for API testing.

```text
https://jsonplaceholder.typicode.com/
```

## Project Objectives

- Automate important e-commerce user workflows
- Practice professional UI automation
- Implement API testing
- Apply Page Object Model
- Improve test maintainability
- Generate automated test reports
- Build practical QA automation experience

## Future Improvements

- GitHub Actions CI/CD
- Cross-browser testing
- More negative test scenarios
- Environment-based configuration
- Improved test data management
- Automated test execution on every code push

## Author

**Oshada Kaushalya**

Aspiring QA Engineer | Software Testing & Automation

---

⭐ This project is continuously being improved as part of my QA Automation learning journey.

# Playwright UI & API Test Automation

![Playwright Tests](https://github.com/knapix/playwright-ui-api-demo/actions/workflows/playwright.yml/badge.svg)

This project demonstrates automated testing using Playwright with TypeScript, covering both UI and API scenarios across multiple systems.

---

## 🔧 Tech Stack

* Playwright
* TypeScript
* Node.js
* Git
* GitHub Actions (CI)

---

## 📁 Project Structure

```
project/
├── tests/
│   ├── ui/
│   │   ├── login.spec.ts
│   │   ├── login-negative.spec.ts
│   │   ├── cart.spec.ts
│   ├── api/
│   │   ├── restful-booker/
│   │   │   ├── auth.spec.ts
│   │   │   ├── create-booking.spec.ts
│   │   │   ├── get-booking.spec.ts
│   │   │   ├── update-booking.spec.ts
│   │   │   ├── delete-booking.spec.ts
│   │   ├── automation-exercise/
│   │   │   ├── products.spec.ts
│   │   │   ├── search-product.spec.ts
│   │   │   ├── products-invalid-method.spec.ts
├── clients/
│   ├── RestfulBookerClient.ts
│   ├── AutomationExerciseClient.ts
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
├── utils/
│   ├── apiClient.ts
│   ├── testData.ts
│   ├── restfulBookerData.ts
├── playwright.config.ts
```

---

## 🚀 Features

### UI Tests

* Login (positive and negative scenarios)
* Add product to cart
* End-to-end user flow validation

### API Tests

#### Restful Booker

* Full CRUD flow (Create, Read, Update, Delete)
* Authentication with token
* Validation of response structure and data consistency

#### Automation Exercise

* Get all products
* Search products
* Validation of business responses

### Negative Test Coverage

* Unauthorized access (missing or invalid token)
* Invalid HTTP methods
* Non-existing resources (404 scenarios)
* API-specific error handling

### Framework Design

* Page Object Model (POM)
* Separation of concerns (tests, clients, data)
* Reusable API clients for different services
* Externalized test data
* Scalable and maintainable structure

---

## ▶️ Running Tests

Install dependencies:

```
npm install
```

Run all tests:

```
npx playwright test
```

Run UI tests:

```
npx playwright test tests/ui
```

Run API tests:

```
npx playwright test tests/api
```

Run with visible browser:

```
npx playwright test --headed
```

---

## ⚙️ CI Integration

The project is integrated with GitHub Actions.
Tests are automatically executed on every push and pull request.

* Runs UI and API tests in CI environment
* Generates Playwright HTML reports
* Stores reports as build artifacts

---

## 🧠 Approach

* Focus on critical user and business scenarios
* Combine UI and API testing in a single framework
* Use stable selectors (`data-test`) for UI
* Avoid hard waits, rely on Playwright auto-waiting
* Validate both HTTP status and response body
* Cover both positive and negative scenarios

---

## 📌 Notes

This project was created as part of preparation for QA Automation role interviews, with focus on:

* Real-world test scenarios
* Clean test architecture
* API + UI integration
* CI pipeline setup

---

## 🔗 Repository

https://github.com/knapix/playwright-ui-api-demo

---

## 👤 Author

Created by Paweł

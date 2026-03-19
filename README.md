# Playwright UI & API Test Automation

This project demonstrates automated testing using Playwright with TypeScript, covering both UI and API scenarios.

---

## 🔧 Tech Stack

* Playwright
* TypeScript
* Node.js
* Git

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
│   │   ├── users.spec.ts
│   │   ├── create-post.spec.ts
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
├── utils/
│   ├── apiClient.ts
│   ├── testData.ts
├── playwright.config.ts
```

---

## 🚀 Features

### UI Tests

* Login (positive and negative scenarios)
* Add product to cart
* Validation of user flow

### API Tests

* GET request validation
* POST request validation
* Response structure verification

### Framework Design

* Page Object Model (POM)
* Separation of test logic and UI layer
* Reusable API client
* Externalized test data

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

Run specific tests:

```
npx playwright test tests/ui
npx playwright test tests/api
```

Run with visible browser:

```
npx playwright test --headed
```

---

## 🧠 Approach

* Focus on critical user scenarios (login, cart)
* Use stable selectors (`data-test`)
* Avoid hard waits, rely on Playwright auto-waiting
* Keep tests readable and maintainable

---

## 📌 Notes

This project was created as part of preparation for QA Automation role interviews, focusing on:

* UI + API automation
* Clean test architecture
* Practical usage of Playwright

---

## 🔗 Repository

https://github.com/knapix/playwright-ui-api-demo

---

## 👤 Author

Created by [Pawel]

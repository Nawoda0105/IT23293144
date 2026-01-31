# SwiftTranslator Test Automation Suite

This repository contains an automated test suite for the **SwiftTranslator** web application, which performs **Singlish to Sinhala text conversion**, implemented using **Playwright**.

## Project Overview

The objective of this project is to validate the functional correctness and UI behavior of the SwiftTranslator system through automated testing. The test suite includes:

- 24 positive functional test scenarios  
- 10 negative functional test scenarios  
- 1 UI-related test scenario  

These tests collectively verify translation accuracy, robustness against malformed input, and real-time UI responsiveness.

## Prerequisites

Before executing the test suite, ensure the following software is installed on your system:

- **Node.js** (version 16 or later)
- **npm** (included with Node.js)

## Installation

### Step 1: Clone or Download the Repository

If the project is provided as a ZIP file, extract it locally.  
If using Git, clone the repository as follows:

```bash
git clone <repository-url>
cd <project-directory>
````

### Step 2: Install Project Dependencies

Navigate to the project root directory and install dependencies:

```bash
npm install
```

### Step 3: Install Playwright Browsers

Install the required browser binaries for Playwright:

```bash
npx playwright install chromium
```

## Project Structure

```
.
├── swift-translator-tests.spec.js    # Main test specification file
├── playwright.config.js              # Playwright configuration
├── package.json                      # Project metadata and dependencies
└── README.md                         # Project documentation
```

## Running the Tests

### Execute All Tests

```bash
npm test
```

### Run Tests in Headed Mode (Visible Browser)

```bash
npm run test:headed
```

### Run Tests Using Playwright UI Mode

```bash
npm run test:ui
```

### Run Tests in Debug Mode

```bash
npm run test:debug
```

### View Test Reports

After test execution, generate and view the HTML report:

```bash
npm run report
```

## Test Coverage

### Positive Functional Tests (24 Scenarios)

The following aspects are validated:

* **Sentence Structures**: Simple, compound, and complex
* **Question Forms**: Interrogative sentence patterns
* **Command Forms**: Direct and polite imperatives
* **Tense Handling**: Past, present, and future
* **Negation Handling**: Various negative constructions
* **Greetings and Responses**: Common conversational usage
* **Mixed Language Inputs**: Embedded English words and brand names
* **Punctuation Handling**: Special characters and formatting
* **Numerical Data**: Numbers, currency, and amounts

### Negative Functional Tests (10 Scenarios)

Robustness and error-handling are evaluated using inputs such as:

* Missing spaces between words
* Excessive consecutive spaces
* Line breaks within sentences
* Informal slang and colloquial expressions
* Incorrectly formatted mixed-language inputs
* Abbreviations and technical terms
* Typographical and segmentation errors

### UI Test (1 Scenario)

* Verifies **real-time translation output**
* Ensures translated Sinhala text updates dynamically as the user types

## Test Data Structure

Each test case includes the following attributes:

* **Test Case ID**: Unique identifier (e.g., `Pos_Fun_001`)
* **Test Name**: Descriptive title of the scenario
* **Input**: Singlish text provided to the system
* **Expected Output**: Expected Sinhala translation
* **Category**: Usage type (e.g., daily language usage)
* **Grammar Focus**: Sentence structure or linguistic feature
* **Input Length**: Classification (S / M / L)

## Configuration

Execution settings can be adjusted in `playwright.config.js`, including:

* Default test timeout: 60 seconds
* Assertion timeout: 10 seconds
* Retry attempts: 0 (configurable)
* Workers: 1 (sequential execution)

## Troubleshooting

### Test Failures

If tests fail, consider the following:

1. **Network Stability**: Ensure a reliable internet connection
2. **Application Changes**: Verify UI selectors if the website has changed
3. **Timeout Issues**: Increase timeout values where necessary

### Installation Problems

Check your Node.js version:

```bash
node --version
```

If npm issues occur, clear the cache and reinstall:

```bash
npm cache clean --force
npm install
```

### Browser Setup Issues

Reinstall Playwright browser dependencies if required:

```bash
npx playwright install --force chromium
```

## Test Results

All test artifacts are stored in the `test-results/` directory:

* HTML Report: `test-results/html-report/`
* JSON Results: `test-results/test-results.json`
* Screenshots and Videos: `test-results/artifacts/`

## Additional Notes

* Tests are executed sequentially to prevent state conflicts
* A short delay is introduced between test executions for stability
* Screenshots and videos are recorded only when a test fails
* The base URL is centrally managed in `playwright.config.js`

## License

This project is developed strictly for **educational purposes** as part of
**IT3040 – IT Project Management (Assignment 01)**.

## Author

* **Index Number:** IT23293144
* **Academic Semester:** 3rd Year 2nd Semester
* **Degree Program:** BSc (Hons) in Information Technology



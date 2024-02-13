# Collection of Playwright tests for local Magneto 2

- [Main Functionalities](#markdown-header-main-functionalities)
- [Installation](#markdown-header-installation)
- [Configuration](#markdown-header-configuration)
- [Specifications](#markdown-header-how-to-use-it)


## Main Functionalities
Module to test a local installation of Magento 2 using Playwright

## How to use it

Run all tests in the `/tests` directory

```shell
npx playwright test --headed
```

Generate new test

```shell
npx playwright codegen https://app.magento2.test/
```

Show test report

```shell
npx playwright show-report
```
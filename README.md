# Collection of Playwright tests for local Magneto 2

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
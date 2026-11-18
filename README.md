# Playwright TypeScript POC

A minimal Playwright test project written in TypeScript.

## Setup

```sh
npm install
npx playwright install chromium
```

## Run

```sh
npm test
npm run typecheck
```

The sample test opens `https://example.com` and checks that the page heading is visible.

## Project structure

- `src/pages/` contains page objects.
- `src/tests/` contains Playwright tests.
- `src/utils/` contains reusable test helpers.
- `playwright.config.ts` configures the test runner.
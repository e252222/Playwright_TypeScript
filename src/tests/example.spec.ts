import { expect, test } from "@playwright/test";
import { openExamplePage } from "../utils/testHelper";

test("displays the Example Domain heading", async ({ page }) => {
  await page.route("https://example.com/", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<html><body><h1>Example Domain</h1></body></html>",
    }),
  );
  const examplePage = await openExamplePage(page);
  await expect(examplePage.heading).toBeVisible();
});

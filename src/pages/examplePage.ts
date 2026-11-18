import type { Locator, Page } from "@playwright/test";

export class ExamplePage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto("https://example.com");
  }

  get heading(): Locator {
    return this.page.getByRole("heading", { name: "Example Domain" });
  }
}

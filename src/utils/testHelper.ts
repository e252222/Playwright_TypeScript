import type { Page } from "@playwright/test";
import { ExamplePage } from "../pages/examplePage";

export async function openExamplePage(page: Page): Promise<ExamplePage> {
  const examplePage = new ExamplePage(page);
  await examplePage.goto();
  return examplePage;
}

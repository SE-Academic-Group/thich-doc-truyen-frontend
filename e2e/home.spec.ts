import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test("has search form with relevant input", async ({ page }) => {
  expect(await page.isVisible("input[type=search]#search-input")).toBeTruthy();
});

test("has the website logo displayed", async ({ page }) => {
  expect(await page.$("a[href='/']")).toBeTruthy();
  expect(page.getByText(/thích đọc truyện/i)).toBeDefined();
});

test("has the link to the '/lich-su' page", async ({ page }) => {
  expect(await page.$("a[href='/lich-su']")).toBeTruthy();
});

test("when typing in the search input and hit Enter, the url should be updated", async ({
  page,
}) => {
  const searchInput = await page.$("input[type=search]#search-input");

  // if the search input is null, we can't continue
  expect(searchInput).toBeTruthy();

  // the line of code above ensures that searchInput is not null
  await searchInput!.fill("test");
  await searchInput!.press("Enter");

  // then wait for the page to load
  await page.waitForURL("http://localhost:3000/tim-kiem?q=test");

  expect(page.url()).toBe("http://localhost:3000/tim-kiem?q=test");
});

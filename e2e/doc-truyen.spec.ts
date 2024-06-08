import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "http://localhost:3000/doc-truyen?chapterUrl=https://thichtruyen.vn/doc-truyen/mot-cong-mot-bang-bon-mo-dau&novelUrl=https://thichtruyen.vn/truyen-ngon-tinh/mot-cong-mot-bang-bon&chapterIndex=1&currentPlugin=thichTruyen",
  );

  await page.waitForSelector("section");
});

test("the chapter detail page should have the chapter title and the story title", async ({
  page,
}) => {
  // the story title
  expect(await page.isVisible("h3")).toBeTruthy();
  // the chapter title
  expect(await page.isVisible("h2")).toBeTruthy();
});

test("the chapter detail page should have the chapter content", async ({
  page,
}) => {
  await page.goto(
    "http://localhost:3000/doc-truyen?chapterUrl=https://thichtruyen.vn/doc-truyen/mot-cong-mot-bang-bon-mo-dau&novelUrl=https://thichtruyen.vn/truyen-ngon-tinh/mot-cong-mot-bang-bon&chapterIndex=1&currentPlugin=thichTruyen",
  );

  await page.waitForSelector("section");

  // the story content (a dive the the class `whitespace-pre-line`)
  expect(await page.isVisible("div.whitespace-pre-line")).toBeTruthy();
});

test("the chapter detail page should have the next and previous chapter buttons", async ({
  page,
}) => {
  expect(page.getByText(/chương trước/i)).toBeDefined();
  expect(page.getByText(/chương sau/i)).toBeDefined();
});

test("the chapter detail page should have the chapter list select element", async ({
  page,
}) => {
  expect(page.isVisible("select")).toBeTruthy();
});

test("the chapter detail page should let the user click on the next chapter link to navigate", async ({
  page,
}) => {
  await page.selectOption("select", "Chương 2");

  await page.waitForSelector("section");

  // click on the next chapter link
  await page.click("a:has-text('Chương sau')");

  // the url should change to the second chapter
  expect(page.url()).toContain("chapterIndex=2");
});

test("the chapter detail page should let the user click on the previous chapter link to navigate", async ({
  page,
}) => {
  await page.selectOption("select", "Chương 2");

  await page.waitForSelector("section");

  // click on the previous chapter link
  await page.click("a:has-text('Chương trước')");

  // wait for one second (I assume 1000ms is enough for the page to navigate)
  await page.waitForTimeout(1000);

  // the url should change to the first chapter
  expect(page.url()).toContain("chapterIndex=1");
});

test("the chapter detail page should let the user click on the chapter list option to navigate to the new chapter", async ({
  page,
}) => {
  await page.selectOption("select", "Chương 4");

  // wait for one second (I assume 1000ms is enough for the page to navigate)
  await page.waitForTimeout(1000);

  // the url should change to the first chapter
  expect(page.url()).toContain("chapterIndex=4");
});

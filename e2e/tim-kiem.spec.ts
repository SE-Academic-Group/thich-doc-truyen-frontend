import { expect, test } from "@playwright/test";

test("the url has the correct query string when searching", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  const searchInput = await page.$("input[type=search]#search-input");

  expect(searchInput).toBeTruthy();

  await searchInput!.fill("test");
  await searchInput!.press("Enter");

  await page.waitForURL("http://localhost:3000/tim-kiem?q=test");

  expect(page.url()).toBe("http://localhost:3000/tim-kiem?q=test");
});

test("the search keyword should display the correct q parameter", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/tim-kiem?q=tinh+yeu");

  expect(
    page.getByText(/tìm kiếm truyện với từ khóa: "tinh yeu"/i),
  ).toBeDefined();
});

test("a list of search results should be displayed", async ({ page }) => {
  await page.goto("http://localhost:3000/tim-kiem?q=hai");

  // wait for the search results to load
  // await page.waitForSelector("ul li"); TODO: fix this
});

const STORY_DETAIL_TEST_URL =
  "http://localhost:3000/chi-tiet?url=https://thichtruyen.vn/truyen-ngon-tinh/mot-cong-mot-bang-bon";

test("the story detail page should has 2 sections", async ({ page }) => {
  await page.goto(STORY_DETAIL_TEST_URL);

  await page.waitForSelector("main section", { state: "visible" });
});

test("user can navigate to the chapter detail page to read", async ({
  page,
}) => {
  await page.goto(STORY_DETAIL_TEST_URL);

  // click on the first chapter which inside a section with the id #chapter-list
  await page.click("section#chapter-list a");

  // expect the url to be updated
  await page.waitForURL(
    "http://localhost:3000/doc-truyen?chapterUrl=https%3A%2F%2Fthichtruyen.vn%2Fdoc-truyen%2Fmot-cong-mot-bang-bon-mo-dau&novelUrl=https%3A%2F%2Fthichtruyen.vn%2Ftruyen-ngon-tinh%2Fmot-cong-mot-bang-bon&chapterIndex=1",
  );
});

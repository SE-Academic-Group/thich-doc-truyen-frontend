import { getSearchParam, generatePagination } from "../src/lib/utils";
import { describe, test, expect } from "vitest";

describe("getSearchParam", () => {
  test("should return the value of the given key from the searchParams object", () => {
    const searchParams = { keyword: "hello" };
    const key = "keyword";

    expect(getSearchParam({ searchParams, key })).toBe("hello");
  });

  test("should return an empty string if the key does not exist in the searchParams object", () => {
    const searchParams = { keyword: "hello" };
    const key = "category";

    expect(getSearchParam({ searchParams, key })).toBe("");
  });

  test("should return the first value of the array if the value is an array", () => {
    const searchParams = { keyword: ["hello", "world"] };
    const key = "keyword";

    expect(getSearchParam({ searchParams, key })).toBe("hello");
  });

  test("should return an empty string if the search params is an empty object", () => {
    const searchParams = {};
    const key = "keyword";

    expect(getSearchParam({ searchParams, key })).toBe("");
  });

  test("should return the first value of the array if the value is an array", () => {
    const searchParams = { keyword: ["hello", "world"], page: ["1"] };

    expect(getSearchParam({ searchParams, key: "keyword" })).toBe("hello");
    expect(getSearchParam({ searchParams, key: "page" })).toBe("1");
  });
});

describe("generatePagination", () => {
  test("should return an empty array if totalPages is 1", () => {
    expect(
      generatePagination({
        currentPage: 1,
        totalPages: 1,
      }),
    ).toEqual([]);
  });

  test("should return an array of page numbers from 1 to totalPages if totalPages is 7 or less", () => {
    expect(
      generatePagination({
        currentPage: 1,
        totalPages: 5,
      }),
    ).toEqual([1, 2, 3, 4, 5]);
  });

  test("should return an array of page numbers with ellipsis if totalPages is more than 7", () => {
    expect(
      generatePagination({
        currentPage: 1,
        totalPages: 10,
      }),
    ).toEqual([1, 2, 3, "...", 9, 10]);
    expect(
      generatePagination({
        currentPage: 8,
        totalPages: 10,
      }),
    ).toEqual([1, 2, "...", 8, 9, 10]);
    expect(
      generatePagination({
        currentPage: 5,
        totalPages: 10,
      }),
    ).toEqual([1, "...", 4, 5, 6, "...", 10]);
    expect(
      generatePagination({
        currentPage: 10,
        totalPages: 10,
      }),
    ).toEqual([1, 2, "...", 8, 9, 10]);
  });
});

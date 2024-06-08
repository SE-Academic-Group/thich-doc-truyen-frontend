import { SKIP_PAGINATION_NUMBER } from "../lib/constants";
import {
  capitalize,
  cn,
  generatePagination,
  getSearchParam,
} from "../lib/utils";
import { describe, expect, test } from "vitest";

describe("getSearchParam: get a specified search param from the url", () => {
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

describe("generatePagination: receive currentPage and totalPages to generate an array of pagination", () => {
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
    ).toEqual([1, 2, 3, SKIP_PAGINATION_NUMBER, 9, 10]);
    expect(
      generatePagination({
        currentPage: 8,
        totalPages: 10,
      }),
    ).toEqual([1, SKIP_PAGINATION_NUMBER, 7, 8, 9, SKIP_PAGINATION_NUMBER, 10]);
    expect(
      generatePagination({
        currentPage: 5,
        totalPages: 10,
      }),
    ).toEqual([1, SKIP_PAGINATION_NUMBER, 4, 5, 6, SKIP_PAGINATION_NUMBER, 10]);
    expect(
      generatePagination({
        currentPage: 10,
        totalPages: 10,
      }),
    ).toEqual([1, 2, SKIP_PAGINATION_NUMBER, 8, 9, 10]);
  });
});

describe("cn: concatenate class names", () => {
  test("should concatenate class names", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
    expect(cn("class1", "class2", "class3")).toBe("class1 class2 class3");
  });

  test("should ignore falsy values", () => {
    expect(cn("class1", false && "class2")).toBe("class1");
    expect(cn("class1", undefined && "class2")).toBe("class1");
    expect(cn("class1", null && "class2")).toBe("class1");
  });

  test("should ignore empty strings", () => {
    expect(cn("class1", "")).toBe("class1");
    expect(cn("class1", "", "class2")).toBe("class1 class2");
  });

  test("shoud resolve tailwindcss classes", () => {
    expect(cn("text-center bg-white", "bg-red-500 text-end")).toBe(
      "bg-red-500 text-end",
    );
    expect(cn("px-2 m-1 text-red-500", "m-2.5 py-2")).toBe(
      "px-2 text-red-500 m-2.5 py-2",
    );
  });
});

describe("capitalize: capitalize the first letter of a string", () => {
  test("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
  });

  test("should not change the string if the first letter is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
    expect(capitalize("World")).toBe("World");
  });

  test("should return an empty string if the input is an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("should convert camelCase to Capital Case", () => {
    expect(capitalize("helloWorld")).toBe("Hello World");
    expect(capitalize("worldHello")).toBe("World Hello");
  });

  test("should convert snake_case to Capital Case", () => {
    expect(capitalize("hello_world")).toBe("Hello World");
    expect(capitalize("world_hello")).toBe("World Hello");
  });
});

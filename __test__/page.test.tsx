import { expect, it, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";

test("Page", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});

test("Link", () => {
  render(<Page />);
  expect(screen.getAllByText("About")).toBeDefined();
});

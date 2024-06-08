import SearchKeyword from "./search-keyword";
import { render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useSearchParams: vi.fn(),
}));

describe("SearchKeyword", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should display the search keyword from the search parameters", () => {
    const getMock = vi.fn().mockReturnValue("testKeyword");
    (useSearchParams as any).mockReturnValue({
      get: getMock,
    });

    render(<SearchKeyword />);
    expect(
      screen.getByText('Tìm kiếm truyện với từ khóa: "testKeyword"'),
    ).toBeDefined();
  });

  it("should display an empty search keyword when no search parameter is provided", () => {
    const getMock = vi.fn().mockReturnValue(null);
    (useSearchParams as any).mockReturnValue({
      get: getMock,
    });

    render(<SearchKeyword />);
    expect(screen.getByText('Tìm kiếm truyện với từ khóa: ""')).toBeDefined();
  });
});

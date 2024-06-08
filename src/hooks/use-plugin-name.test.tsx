import { usePluginName } from "./use-plugin-name";
import { cleanup, render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useCookie } from "react-use";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useSearchParams: vi.fn(),
}));

vi.mock("react-use", () => ({
  useCookie: vi.fn(),
}));

const TestComponent = () => {
  const { pluginName, setPluginName } = usePluginName();
  return (
    <div>
      <span data-testid="plugin-name">{pluginName}</span>
      <button onClick={() => setPluginName("newPlugin")}>
        Set Plugin Name
      </button>
    </div>
  );
};

describe("usePluginName", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("should use the plugin name from search parameters", () => {
    const getMock = vi.fn().mockReturnValue("searchParamPlugin");
    (useSearchParams as any).mockReturnValue({
      get: getMock,
    });
    (useCookie as any).mockReturnValue([null, vi.fn()]);

    render(<TestComponent />);
    expect(screen.getByTestId("plugin-name").textContent).toBe(
      "searchParamPlugin",
    );
  });

  it("should use the plugin name from cookie if search parameters are not available", () => {
    const getMock = vi.fn().mockReturnValue(null);
    (useSearchParams as any).mockReturnValue({
      get: getMock,
    });
    (useCookie as any).mockReturnValue(["cookiePlugin", vi.fn()]);

    render(<TestComponent />);
    expect(screen.getByTestId("plugin-name").textContent).toBe("cookiePlugin");
  });

  it("should use the default plugin name if neither search parameters nor cookie are available", () => {
    const getMock = vi.fn().mockReturnValue(null);
    (useSearchParams as any).mockReturnValue({
      get: getMock,
    });
    (useCookie as any).mockReturnValue([null, vi.fn()]);

    render(<TestComponent />);
    expect(screen.getByTestId("plugin-name").textContent).toBe(
      "DEFAULT_PLUGIN_NAME",
    );
  });

  it("should set the plugin name when setPluginName is called", () => {
    const getMock = vi.fn().mockReturnValue(null);
    const setCookieMock = vi.fn();
    (useSearchParams as any).mockReturnValue({
      get: getMock,
    });
    (useCookie as any).mockReturnValue([null, setCookieMock]);

    render(<TestComponent />);
    screen.getByText("Set Plugin Name").click();
    expect(setCookieMock).toHaveBeenCalledWith("newPlugin");
  });
});

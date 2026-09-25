import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ToggleThemeButton from "../ToggleThemeButton";

describe("ToggleThemeButton", () => {
  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();
    document.documentElement.className = "";
  });

  it("renders a button", () => {
    render(<ToggleThemeButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles theme on click", async () => {
    const user = userEvent.setup();
    render(<ToggleThemeButton />);

    const button = screen.getByRole("button");

    // Initial state: light
    expect(document.documentElement).not.toHaveClass("dark");

    await user.click(button);
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "dark");

    await user.click(button);
    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "light");
  });
});
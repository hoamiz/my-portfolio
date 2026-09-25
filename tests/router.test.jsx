import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Home from "./router";

describe("Home component", () => {
  test("renders the About link", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const link = screen.getByText("About");
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("/about");
    expect(
      screen.getByRole("link", { name: "About" })
    ).toHaveAttribute("href", "/about");
  });
});
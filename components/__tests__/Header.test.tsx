import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders the header with title, navbar, and theme toggle", () => {
    render(<Header />);

    expect(screen.getByText("My Portfolio")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument(); // Theme toggle button
  });
});
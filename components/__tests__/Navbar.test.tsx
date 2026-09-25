import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders all navigation links", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute("href", "/blog");
  });

  it("highlights the active link", () => {
    render(<Navbar />);

    // Since usePathname is mocked to "/", Home should be active
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveClass("font-semibold", "underline");
  });
});
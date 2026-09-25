import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the footer with copyright text", () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);

    expect(screen.getByText(`© ${currentYear} My Portfolio. All rights reserved.`)).toBeInTheDocument();
  });
});
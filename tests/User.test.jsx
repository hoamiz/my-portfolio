import { render, screen } from "@testing-library/react";
import User from "./User";


vi.mock("./api", () => ({
  fetchUser: vi.fn()
}));

test("shows loading", () => {
  render(<User />);

  expect(screen.getByText("Loading...")).toBeDefined();
});

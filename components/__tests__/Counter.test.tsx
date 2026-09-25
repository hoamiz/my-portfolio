import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";

describe("Counter", () => {
  it("renders initial count of 0", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("increments count when increment button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("decrements count when decrement button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("does not decrement below 0", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    await user.click(decrementButton);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("resets count to 0", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const resetButton = screen.getByRole("button", { name: "Reset" });

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(resetButton);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
});
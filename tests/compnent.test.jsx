import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Button from "./Button";

test("render button", () => {
  render(<Button />);
  expect(screen.getByRole("button")).toBeDefined();
});

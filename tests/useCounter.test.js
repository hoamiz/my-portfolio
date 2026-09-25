import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

test("increment counter", () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});

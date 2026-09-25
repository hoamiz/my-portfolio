import { renderHook } from "@testing-library/react";
import { useDebounce } from "./useDebounce";

test("debounces value", () => {
  vi.useFakeTimers();

  const { result, rerender } = renderHook(
    ({ value }) => useDebounce(value, 500),
    { initialProps: { value: "a" } }
  );

  rerender({ value: "abc" });

  expect(result.current).toBe("a");

  vi.advanceTimersByTime(500);

  expect(result.current).toBe("a");
});
import { renderHook, waitFor } from "@testing-library/react";
import { useUser } from "./useUser";

vi.mock("./api", () => ({
  fetchUser: vi.fn().mockResolvedValue("mocked user"),
}));

test("load user", async () => {
  const { result } = renderHook(() => useUser());
  await waitFor(() => {
    expect(result.current).toBe("mocked user");
  });
});

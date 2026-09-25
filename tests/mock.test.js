describe("mock function", () => {
  const fn = vi.fn();
  fn();
  fn();
  test("mock function", () => {
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(2);
  });
});

describe("mock function with argument", () => {
  const fn = vi.fn();
  fn("hello");
  test("mock function with argument", () => {
    expect(fn).toHaveBeenCalledWith("hello");
  });
});

describe("mock function with return value", () => {
  const fn = vi.fn().mockReturnValue(10);
  test("mock function with return value", () => {
    expect(fn()).toBe(10);
  });
});

describe("mock function with multiple calls", () => {
  const fn = vi.fn().mockReturnValueOnce(1).mockReturnValueOnce(2);
  test("mock function with multiple calls", () => {
    expect(fn()).toBe(1);
    expect(fn()).toBe(2);
  });
});

describe("mock function with async", () => {
  const fn = vi.fn().mockResolvedValue("data");
  test("should return data", async () => {
    const result = await fn();
    expect(result).toBe("data");
  });
});

describe("mock function with error", () => {
  const fn = vi.fn().mockRejectedValue(new Error("fail"));
  test("should throw error", async () => {
    await expect(fn()).rejects.toThrow("fail");
  });
});

function callFn(fn) {
  return fn("hello");
}

test("mock function with callback", () => {
  const fn = vi.fn();
  callFn(fn);
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledWith("hello");
});


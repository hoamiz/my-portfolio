function isEven(num) {
  return num % 2 === 0;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//tests

describe("isEven", () => {
  test("2 is even", () => {
    expect(isEven(2)).toBe(true);
  });

  test("3 is not even", () => {
    expect(isEven(3)).toBe(false);
  });
});

describe("capitalize", () => {
  test("is capitalized", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});

test("is inclued in array", () => {
    expect(["a", "b", "c"]).toContain("a");
})
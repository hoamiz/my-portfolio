import { cn } from "../utils";

describe("cn", () => {
  it("merges Tailwind classes correctly", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("handles conditional classes", () => {
    expect(cn("bg-red-500", true && "text-white", false && "hidden")).toBe("bg-red-500 text-white");
  });

  it("handles arrays and objects", () => {
    expect(cn(["bg-blue-500", "text-white"], { "font-bold": true })).toBe("bg-blue-500 text-white font-bold");
  });
});
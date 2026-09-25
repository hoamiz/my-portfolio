import { failApi } from "./api";
// describe("mock api test",()=>{
//   vi.mock("./api");

//   test("should return mocked user", async () => {
//     fetchUser.mockResolvedValue("mock user");

//     const result = await getUserName();

//     expect(result).toBe("mock user");
//   });
// })

test("should throw error", async () => {
  await expect(failApi()).rejects.toThrow("Network Error");
});

export async function retry(fn, times = 3) {
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch {}
  }

  throw new Error("failed");
}

test("retry success at second call", async () => {
  const fn = vi
    .fn()
    .mockRejectedValueOnce(new Error())
    .mockResolvedValueOnce("ok");

  const result = await retry(fn);

  expect(result).toBe("ok");
  expect(fn).toHaveBeenCalledTimes(2);
});

async function getProfile() {
  return { name: "Son" };
}

test("should return profile", async () => {
  const result = await getProfile();
  expect(result).toEqual({ name: "Son" });
});
test("should return mocked profile", async () => {
  const mockGetProfile = vi.fn().mockResolvedValue({ name: "saved" });
  const result = await mockGetProfile();
  expect(result).toEqual({ name: "saved" });
});

async function login() {
  throw new Error("wrong password");
}

test("should throw error", async () => {
  await expect(login()).rejects.toThrow("wrong password");
});

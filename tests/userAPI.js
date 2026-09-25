import { fetchUser } from "./api";

export async function getUserName() {
  return await fetchUser();
}

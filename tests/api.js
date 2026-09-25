export async function fetchUser() {
  return "real user";
}
export async function failApi() {
    return Promise.reject(new Error("Network Error"));
}
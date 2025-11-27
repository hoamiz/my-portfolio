"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function LoginButton() {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded"
      onClick={() => signIn("google")}
    >
      Login with Google
    </button>
  );
}

export function LogoutButton() {
  return (
    <button
      className="px-4 py-2 bg-red-600 text-white rounded"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}

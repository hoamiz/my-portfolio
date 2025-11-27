/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { SessionProvider } from "next-auth/react";

export function SessionProviderWrapper({ children }: any) {
    return <SessionProvider>{children}</SessionProvider>;
}

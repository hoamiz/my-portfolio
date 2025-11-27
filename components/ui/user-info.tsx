/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSession } from "next-auth/react";

export function UserInfo() {
    const { data: session } = useSession();
    console.log("xxxxx", session);
    if (!session) return <p>Not logged in</p>;

    return (
        <div>
            <p>Logged in as: {session.user?.email}</p>
            <p>User ID: {(session.user as any)?.id}</p>
        </div>
    );
}

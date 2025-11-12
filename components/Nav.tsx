"use client";
import { useRouter } from "next/navigation";

export default function Nav() {
    const router = useRouter();

    return (
        <button
            onMouseEnter={() => router.prefetch("/blog")}
            onClick={() => router.push("/blog")}
            className="p-2 border rounded"
        >
            Blog
        </button>
    );
}

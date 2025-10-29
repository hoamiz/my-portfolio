"use client";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="space-y-2">
            <p className="font-medium">Count: {count}</p>
            <button
                onClick={() => setCount(prev => prev + 1)}
                className="px-3 py-2 border rounded-md cursor-pointer"
            >
                Increment
            </button>
            <button
                onClick={() => count > 0 && setCount(prev => prev - 1)}
                className={`px-3 py-2 border rounded-md ` + (count === 0 ? " opacity-50 cursor-not-allowed" : "cursor-pointer")}
            >
                Decrement
            </button>
            <button
                onClick={() => setCount(0)}
                className="px-3 py-2 border rounded-md cursor-pointer"
            >
                Reset
            </button>
        </div>
    );
}

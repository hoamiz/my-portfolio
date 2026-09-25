"use client";

import { useEffect, useState } from "react";

export default function ToggleThemeButton() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);
    const handleClick = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
        window.dispatchEvent(new Event("theme-toggle"));

    };
    return (
        <button
            onClick={handleClick}
            aria-label="Toggle Dark Mode"
            className="
        relative w-14 h-7 rounded-full flex items-center
        transition border border-gray-400 dark:border-gray-600
      "
        >
            {/* Track */}
            <div
                className="
          absolute inset-0 rounded-full
          bg-gray-300 dark:bg-gray-800
          transition
        "
            />

            {/* Thumb */}
            <div
                className={`
          h-6 w-6 rounded-full bg-white dark:bg-black border border-gray-500
          transition-all duration-300
          translate-x-1
          ${isDark ? "translate-x-7" : ""}
        `}
            />

            {/* Sun / Moon */}
            <span className="absolute left-1 text-xs">☀️</span>
            <span className="absolute right-1 text-xs">🌙</span>
        </button>
    );

}

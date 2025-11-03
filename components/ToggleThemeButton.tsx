"use client";

import { useEffect, useState } from "react";

interface ButtonProps {
    variant?: "primary" | "secondary";
}

export default function ToggleThemeButton({
    variant = "primary",
}: ButtonProps) {
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
    const base =
        "px-5 py-2 rounded-lg font-semibold transition-colors duration-200";
    const styles =
        variant === "primary"
            ? "bg-gray-600 text-white hover:bg-gray-700"
            : "bg-black-200 text-gray-700 hover:bg-gray-300";
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

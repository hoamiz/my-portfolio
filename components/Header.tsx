"use client";

import Navbar from "./Navbar";
import ToggleThemeButton from "./buttons/ToggleThemeButton";

export default function Header() {
    return (
        <header className="w-full flex justify-between items-center py-4 border-b dark:border-gray-700">
            <div className="text-lg font-bold">My Portfolio</div>
            <Navbar />
            <ToggleThemeButton />
        </header>
    );
}

"use client";
import { useEffect, useState } from "react";

export default function ScreenInfo() {
    const [width, setWidth] = useState(0);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        setWidth(window.innerWidth);
        setTheme(localStorage.theme);
        window.addEventListener("theme-toggle", onLocalStorageChange);

        return () => {
            window.removeEventListener("theme-toggle", onLocalStorageChange);
        };
    }, []);
    const onLocalStorageChange = () => {
        setTheme(localStorage.theme);
    };

    return (
        <>
            <p>📱 Screen Width: {width}px</p>
            <p>📱 Screen Theme: {theme}</p>
        </>
    );
}

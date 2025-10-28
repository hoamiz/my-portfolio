"use client";

interface ButtonProps {
    children?: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}

export default function ButtonDark({
    children,
    variant = "primary",
    onClick,
}: ButtonProps) {
    const handleClick = () => {
        document.documentElement.classList.toggle("dark");
        if (onClick) onClick(); // vẫn hỗ trợ callback tuỳ chỉnh
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
            className={`${base} ${styles}`}
        >
            {children ?? "Toggle Dark Mode"}
        </button>
    );
}

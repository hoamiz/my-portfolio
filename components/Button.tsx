interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
    const base =
        "px-5 py-2 rounded-lg font-semibold transition-colors duration-200";
    const styles =
        variant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300";

    return (
        <button onClick={onClick} className={`${base} ${styles}`}>
            {children}
        </button>
    );
}

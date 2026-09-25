interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    color?: ButtonColor;
}
type ButtonColor = "green" | "blue" | "red" | "yellow" | "purple";

export default function Button({ children, onClick, variant = "primary", color = "blue" }: ButtonProps) {
    const base =
        "px-5 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer   ";
    const colorClasses = {
        green: "bg-green-500 text-white hover:bg-green-700",
        blue: "bg-blue-500 text-white hover:bg-blue-700",
        red: "bg-red-500 text-white hover:bg-red-700",
        yellow: "bg-yellow-500 text-white hover:bg-yellow-700",
        purple: "bg-purple-500 text-white hover:bg-purple-700",
    };

    const styles =
        variant === "secondary"
            ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
            : color && colorClasses[color]
                ? colorClasses[color]
                : "bg-blue-500 text-white hover:bg-blue-700";
    return (
        <button onClick={onClick} className={`${base} ${styles}`}>
            {children}
        </button>
    );
}

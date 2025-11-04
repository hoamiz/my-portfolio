const variants = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
};

interface AlertProps {
    variant?: keyof typeof variants;
    message: React.ReactNode;
}

export default function Alert({ variant = "info", message }: AlertProps) {
    return (
        <div className={`p-3 rounded-md ${variants[variant]}`}>
            {message}
        </div>
    );
}

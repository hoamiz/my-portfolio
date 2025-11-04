interface CardProps {
    title?: string;
    children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
            {title && <h2 className="font-semibold mb-2">{title}</h2>}
            {children}
        </div>
    );
}

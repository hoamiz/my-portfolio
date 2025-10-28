import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-between px-6 py-3">
                <h1 className="text-xl font-bold text-gray-900">My Portfolio</h1>

                <nav>
                    <ul className="flex space-x-6 text-gray-600">
                        <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

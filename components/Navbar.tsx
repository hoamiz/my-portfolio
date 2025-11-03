'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type link = { href: string; label: string; };
const links: link[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];
export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-6">
            {links.map((link) => {
                const active = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-sm transition ${active ? "font-semibold underline"
                            : "text-gray-500 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
}
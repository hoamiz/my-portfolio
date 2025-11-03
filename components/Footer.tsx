export default function Footer() {
    return (
        <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 mt-16">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
    );
}

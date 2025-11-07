import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export const metadata = {
  title: "Portfolio – Sơn Lê",
  description: "Full-stack Developer – Next.js | React | Node.js",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Portfolio – Sơn Lê",
    description: "Full-stack Developer – Next.js | React | Node.js",
    url: "http://localhost:3000/",
    siteName: "Son Le Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Toaster richColors closeButton />
        <Footer />
      </body>
    </html>
  );
}

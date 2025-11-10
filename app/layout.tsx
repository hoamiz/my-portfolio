import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export const metadata = {
  title: "Sơn Lê — Portfolio & Blog",
  description: "Personal website, blogs, projects and tutorials by Sơn Lê.",
  keywords: ["Sơn Lê", "Portfolio", "Blog", "Next.js", "Frontend"],
  openGraph: {
    title: "Sơn Lê — Portfolio & Blog",
    description: "Personal website, blogs, and projects.",
    url: "https://yourdomain.com",
    siteName: "Sơn Lê Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
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

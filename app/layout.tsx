import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import { Toaster } from "sonner";

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

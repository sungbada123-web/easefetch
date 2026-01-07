import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for that clean industrial look
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EaseFetch | Smart Locker Ecosystem",
  description: "Advanced autonomous delivery and asset management solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

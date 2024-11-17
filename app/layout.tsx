import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Jin",
  description: "Photos Collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20 opacity-0 animate-fade-in transition duration-500`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

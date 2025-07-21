import type { Metadata } from "next";
import { Geist, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Glotra Enterprises",
    description: "Glotra Enterprises is a trading support company specializing in indenting and import/export solutions for businesses around the world.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
} : Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${rubik.variable} antialiased w-screen h-screen overflow-x-hidden relative`}>
            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer className="absolute bottom-2 left-0 w-full bg-background">
                <p className='font-rubik text-center text-xs sm:text-md'>© {new Date().getFullYear()} Glotra Enterprises. All rights reserved.</p>
            </footer>
        </body>
        </html>
    );
}

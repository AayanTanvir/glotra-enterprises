import type { Metadata } from "next";
import { Geist, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AppContextProvider } from "@/context/AppContext";
import Sidebar from "@/components/Sidebar";

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
        <body className={`${geistSans.variable} ${rubik.variable} antialiased w-screen h-fit overflow-x-hidden relative flex flex-col `}>
            <AppContextProvider>
                <header>
                    <Navbar />
                </header>

                <aside>
                    <Sidebar />
                </aside>

                <main>
                    {children}
                </main>

                <footer className="w-full bg-background p-2 mt-4">
                    <p className='font-rubik text-center text-xs sm:text-md'>© {new Date().getFullYear()} Glotra Enterprises. All rights reserved.</p>
                </footer>
            </AppContextProvider>
        </body>
        </html>
    );
}

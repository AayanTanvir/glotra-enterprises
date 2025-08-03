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
    description:
        "Glotra Enterprises is a global trading support company offering expert indenting, import/export, and sourcing solutions for businesses worldwide.",
    keywords: [
        "Glotra Enterprises",
        "Trading Company",
        "Indenting Services",
        "Import Export",
        "Sourcing Agents",
        "International Trade",
        "Global Trade Support",
        "B2B Trading Pakistan",
        "Business Solutions"
    ],
    metadataBase: new URL("https://glotraent.com"),
    alternates: {
        canonical: "https://glotraent.com/",
    },
    openGraph: {
        title: "Glotra Enterprises",
        description:
        "Expert import/export and trading support across the globe. Glotra Enterprises helps businesses connect with trusted suppliers and manufacturers worldwide.",
        url: "https://glotraent.com",
        siteName: "Glotra Enterprises",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Glotra Enterprises Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Glotra Enterprises | Global Trading & Indenting Solutions",
        description:
        "Helping businesses connect globally through expert trading and sourcing solutions.",
        images: ["/og-image.png"],
    },
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
        <body className={`${geistSans.variable} ${rubik.variable} antialiased w-screen min-h-screen flex flex-col `}>
            <AppContextProvider>
                <header>
                    <Navbar />
                </header>

                <aside>
                    <Sidebar />
                </aside>

                <main className="w-screen min-h-fit">
                    {children}
                </main>

                <footer className="w-full bg-background p-2 mt-4">
                    <p className='font-rubik text-center text-xs sm:text-md select-none'>© {new Date().getFullYear()} Glotra Enterprises. All rights reserved.</p>
                </footer>
            </AppContextProvider>
        </body>
        </html>
    );
}

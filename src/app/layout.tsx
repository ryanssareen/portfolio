import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";

const SITE_NAME = "Ryan Singh Sareen";
const SITE_TITLE = `${SITE_NAME} | Full-Stack Developer`;
const SITE_DESCRIPTION =
  "Full-stack developer building modern web apps with React, Next.js, and AI integration. View my portfolio of projects including Recipe Journal, Workout Tracker, and Finance Manager.";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Web Developer",
    "AI Integration",
    "Freelance Developer",
  ],
  authors: [{ name: SITE_NAME }],
  verification: {
    google: "bBqx5L03X5a-nFB0y7-EXrcKf_znxlbfzlR5JunMQjg",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

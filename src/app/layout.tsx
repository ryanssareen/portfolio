import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";

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
  title: "Ryan Singh Sareen | Full-Stack Developer",
  description:
    "Full-stack developer building modern web apps with React, Next.js, and AI integration. View my portfolio of projects including Recipe Journal, Workout Tracker, and Finance Manager.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Web Developer",
    "AI Integration",
    "Freelance Developer",
  ],
  authors: [{ name: "Ryan Singh Sareen" }],
  verification: {
    google: "bBqx5L03X5a-nFB0y7-EXrcKf_znxlbfzlR5JunMQjg",
  },
  openGraph: {
    title: "Ryan Singh Sareen | Full-Stack Developer",
    description:
      "Full-stack developer building modern web apps with React, Next.js, and AI integration.",
    type: "website",
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

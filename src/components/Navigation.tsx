"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/skills",   label: "Skills"   },
    { href: "/contact",  label: "Contact"  },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-white/75 dark:bg-[#0a0f1e]/80 backdrop-blur-2xl border-b border-slate-200/40 dark:border-white/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3.5">
        <div className="flex items-center justify-between">

          {/* Monogram logo */}
          <Link href="/" aria-label="Home">
            <div className="relative group w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200">
              <span className="text-white text-sm font-bold tracking-tight select-none">RS</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-foreground/55 hover:text-foreground"
                }`}
              >
                {isActive(link.href) && (
                  <span className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-blue-500/10" />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            ))}
            <div className="ml-3 pl-3 border-l border-slate-200 dark:border-slate-700/60">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2.5">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-slate-200/50 dark:border-white/5">
            <div className="flex flex-col gap-0.5 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.href)
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                      : "text-foreground/60 hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

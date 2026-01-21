"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Ryan Sareen
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Contact
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="pt-16 pb-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Theme toggle */}
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        {/* Main title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-300 dark:to-white bg-clip-text text-transparent">
          My Websites
        </h1>

        {/* Subtitle */}
        <p className="text-muted text-sm md:text-base mb-8 flex items-center justify-center gap-2 flex-wrap">
          <span>Made with</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-700 dark:text-orange-400 font-medium text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Claude Code
          </span>
          <span>•</span>
          <span>Deployed on</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 22.525H0l12-21.05 12 21.05z" />
            </svg>
            Vercel
          </span>
        </p>

        {/* Intro */}
        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
          Hi, I&apos;m <span className="font-semibold">Ryan</span> — a full-stack developer building modern web apps with{" "}
          <span className="text-blue-600 dark:text-blue-400 font-medium">React</span>,{" "}
          <span className="text-slate-800 dark:text-slate-200 font-medium">Next.js</span>, and{" "}
          <span className="text-purple-600 dark:text-purple-400 font-medium">AI integration</span>.
        </p>
      </div>
    </header>
  );
}

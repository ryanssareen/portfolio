"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Main heading with animation */}
        <div
          className={`transition-all duration-1000 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 font-light">
            Building modern web experiences with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React
            </span>
            ,{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Next.js
            </span>
            , and{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              AI
            </span>
          </p>
        </div>

        {/* Subtitle with delay */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            I create intelligent, user-focused applications that leverage AI to
            solve real-world problems. Specializing in full-stack development
            with modern technologies.
          </p>
        </div>

        {/* Tech badges */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-700 dark:text-orange-400 font-medium text-sm flex items-center gap-2 shadow-lg">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Built with Claude Code
            </span>
            <span className="px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm flex items-center gap-2 shadow-lg">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
              </svg>
              Deployed on Vercel
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-white dark:bg-slate-800 text-foreground rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-600 hover:scale-105 transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-foreground/40">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

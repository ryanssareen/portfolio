"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  accentColor: string;
  gradient: string;
  lightBg: string;
  darkBg: string;
  techStack: string[];
  apis: string[];
  description: string;
  features: string[];
  liveUrl: string;
  githubUrl: string;
  icon: string;
  image: string;
  number: string;
}

interface Category {
  name: string;
  icon: string;
  description: string;
  projects: Project[];
}

interface ProjectsProps {
  categories: Category[];
}

export function Projects({ categories }: ProjectsProps) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const totalProjects = categories.reduce((sum, c) => sum + c.projects.length, 0);

  const updateIndicator = useCallback(() => {
    const tab = tabRefs.current[active];
    if (tab) {
      const parent = tab.parentElement;
      if (parent) {
        setIndicatorStyle({
          left: tab.offsetLeft - parent.offsetLeft,
          width: tab.offsetWidth,
        });
      }
    }
  }, [active]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  function goTo(index: number) {
    if (index === active || isAnimating) return;
    setDirection(index > active ? "right" : "left");
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setDirection(null);
      setIsAnimating(false);
    }, 300);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }

  function handleTouchEnd() {
    const threshold = 50;
    if (touchDeltaX.current < -threshold && active < categories.length - 1) {
      goTo(active + 1);
    } else if (touchDeltaX.current > threshold && active > 0) {
      goTo(active - 1);
    }
  }

  const exitClass = direction === "right"
    ? "animate-slide-out-left"
    : direction === "left"
      ? "animate-slide-out-right"
      : "";

  const enterClass = !direction ? "animate-slide-in" : "";

  return (
    <section id="projects" className="min-h-screen pt-24 md:pt-28 pb-20 relative">
      {/* Header */}
      <div className="px-4 sm:px-6 pb-8 sm:pb-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse-soft" />
            {totalProjects} Projects
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Work
            </span>
          </h1>
          <p className="text-sm sm:text-base text-foreground/50 max-w-lg mx-auto">
            Full-stack applications built from the ground up with modern frameworks and AI.
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative flex gap-1 py-2 overflow-x-auto scrollbar-hide">
            <div
              className="absolute bottom-2 h-[calc(100%-16px)] rounded-xl bg-slate-100 dark:bg-white/10 transition-all duration-300 ease-out"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
            {categories.map((category, i) => (
              <button
                key={category.name}
                ref={(el) => { tabRefs.current[i] = el; }}
                onClick={() => goTo(i)}
                className={`relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  active === i
                    ? "text-foreground"
                    : "text-foreground/40 hover:text-foreground/70"
                }`}
              >
                <span className="text-base">{category.icon}</span>
                <span>{category.name}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold tabular-nums transition-colors duration-200 ${
                    active === i
                      ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                      : "bg-slate-100 dark:bg-white/5 text-foreground/30"
                  }`}
                >
                  {category.projects.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category description */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-2">
        <p className={`text-center text-foreground/45 text-sm ${enterClass}`}>
          {categories[active].description}
        </p>
      </div>

      {/* Project cards */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden"
      >
        <div className={`${isAnimating ? exitClass : enterClass}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
            {categories[active].projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Page dots + arrows */}
      <div className="flex items-center justify-center gap-4 pt-8">
        <button
          onClick={() => active > 0 && goTo(active - 1)}
          disabled={active === 0}
          className="hidden sm:block p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-foreground/40 hover:text-foreground hover:border-slate-400 dark:hover:border-slate-500 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i
                  ? "w-7 h-2 bg-gradient-to-r from-blue-500 to-purple-500"
                  : "w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => active < categories.length - 1 && goTo(active + 1)}
          disabled={active === categories.length - 1}
          className="hidden sm:block p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-foreground/40 hover:text-foreground hover:border-slate-400 dark:hover:border-slate-500 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

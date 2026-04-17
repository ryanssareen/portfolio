"use client";

import { useState, useRef, useCallback } from "react";
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

  const totalProjects = categories.reduce((sum, c) => sum + c.projects.length, 0);

  const goTo = useCallback(
    (index: number) => {
      if (index === active || isAnimating) return;
      setDirection(index > active ? "right" : "left");
      setIsAnimating(true);
      setTimeout(() => {
        setActive(index);
        setDirection(null);
        setIsAnimating(false);
      }, 300);
    },
    [active, isAnimating]
  );

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

  const exitClass =
    direction === "right"
      ? "animate-slide-out-left"
      : direction === "left"
        ? "animate-slide-out-right"
        : "";

  const enterClass = !direction ? "animate-slide-in" : "";

  return (
    <section id="projects" className="min-h-screen pt-24 md:pt-28 pb-20 relative">
      {/* Header */}
      <div className="px-4 sm:px-6 pb-8 sm:pb-10">
        <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
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

      {/* Mobile tabs */}
      <div className="md:hidden px-4 sm:px-6 pb-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((category, i) => (
            <button
              key={category.name}
              onClick={() => goTo(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                active === i
                  ? "bg-slate-100 dark:bg-white/10 text-foreground"
                  : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.name}</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold tabular-nums ${
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

      {/* Sidebar + Content layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex gap-8">
          {/* Sidebar — desktop only */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-1.5">
              {categories.map((category, i) => (
                <button
                  key={category.name}
                  onClick={() => goTo(i)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left ${
                    active === i
                      ? "bg-slate-100 dark:bg-white/[0.08] text-foreground shadow-sm"
                      : "text-foreground/40 hover:text-foreground/60 hover:bg-slate-50 dark:hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="flex-1">{category.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold tabular-nums ${
                      active === i
                        ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                        : "bg-slate-100 dark:bg-white/5 text-foreground/30"
                    }`}
                  >
                    {category.projects.length}
                  </span>
                </button>
              ))}

              {/* Category description */}
              <div className="pt-4 px-4">
                <p className={`text-foreground/40 text-xs leading-relaxed ${enterClass}`}>
                  {categories[active].description}
                </p>
              </div>
            </div>
          </aside>

          {/* Project cards */}
          <div
            className="flex-1 min-w-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`${isAnimating ? exitClass : enterClass}`}>
              <div className="space-y-6">
                {categories[active].projects.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

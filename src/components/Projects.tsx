"use client";

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
  number: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="min-h-screen pt-24 pb-20 relative">
      {/* Hero header */}
      <div className="relative overflow-hidden pb-16 px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-10 blur-3xl" />
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-10 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-soft" />
              {projects.length} Projects
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Work
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Each project is a full-stack application built from the ground up,
              combining modern frameworks with AI to solve real problems.
            </p>
          </div>
        </div>
      </div>

      {/* Projects list */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto px-6 pt-20 text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <div className="inline-flex flex-col items-center gap-4">
          <p className="text-foreground/50 text-sm">
            More projects coming soon
          </p>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                style={{ opacity: 1 - i * 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

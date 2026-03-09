"use client";

import Image from "next/image";
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
  featured?: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

function SideProjectCard({ project }: { project: Project }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-700/60 bg-gradient-to-br ${project.lightBg} dark:${project.darkBg} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/80 dark:from-slate-900/80 to-transparent" />
        <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-[10px] font-semibold shadow`}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-soft" />
          Live
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest opacity-40" style={{ color: project.accentColor }}>
            SIDE PROJECT
          </span>
          <h3 className="text-xl font-bold mt-1" style={{ color: project.accentColor }}>
            {project.title}
          </h3>
        </div>

        <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium shadow-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-white font-semibold text-xs transition-all hover:scale-105 bg-gradient-to-r ${project.gradient}`}
          >
            View Live
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-foreground/60 font-semibold text-xs border border-slate-200 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-400 transition-all hover:scale-105 bg-white/50 dark:bg-slate-800/50"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects({ projects }: ProjectsProps) {
  const featured = projects.find((p) => p.featured);
  const sideProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="min-h-screen pt-24 md:pt-28 pb-20 relative">
      {/* Hero header */}
      <div className="relative overflow-hidden pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-10 blur-3xl" />
          <div className="absolute top-10 right-1/4 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-10 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-soft" />
              {projects.length} Projects
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Work
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Each project is a full-stack application built from the ground up,
              combining modern frameworks with AI to solve real problems.
            </p>
          </div>
        </div>
      </div>

      {/* Featured project */}
      {featured && (
        <div className="relative">
          {/* Featured label */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured Project
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-amber-200 dark:from-amber-800 to-transparent" />
            </div>
          </div>
          <ProjectCard {...featured} index={0} />
        </div>
      )}

      {/* Side projects */}
      {sideProjects.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Side Projects
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            {sideProjects.map((project) => (
              <SideProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
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

"use client";

import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  accentColor: string;
  gradient: string;
  techStack: string[];
  apis: string[];
  description: string;
  features: string[];
  liveUrl: string;
  icon: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="min-h-screen pt-24 pb-20 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
            Explore my portfolio of AI-powered web applications built with
            modern technologies
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

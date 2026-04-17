"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  accentColor: string;
  gradient: string;
  techStack: string[];
  apis: string[];
  description: string;
  features: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  index: number;
}

export function ProjectCard({
  title,
  accentColor,
  gradient,
  techStack,
  apis,
  description,
  features,
  liveUrl,
  githubUrl,
  image,
  index,
}: ProjectCardProps) {
  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="rounded-2xl border border-slate-200/60 dark:border-white/8 bg-white dark:bg-white/[0.02] shadow-sm overflow-hidden">
        {/* Screenshot — full width on top */}
        <div className="relative">
          <Image
            src={image}
            alt={`${title} screenshot`}
            width={1280}
            height={720}
            className="block w-full h-auto"
            sizes="(max-width: 768px) 100vw, 90vw"
            priority={index < 2}
          />
          <div className="absolute top-3 left-3">
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r ${gradient} rounded-full text-white text-[10px] font-semibold shadow-lg`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-soft" />
              Live
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="space-y-5">
            <h2
              className="text-2xl sm:text-3xl font-bold leading-tight"
              style={{ color: accentColor }}
            >
              {title}
            </h2>

            <p className="text-foreground/55 text-sm leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
              {apis.map((api) => (
                <span
                  key={api}
                  className="px-2.5 py-1 text-[11px] rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 font-medium"
                >
                  {api}
                </span>
              ))}
            </div>

            <details className="group/features">
              <summary className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/50 cursor-pointer list-none hover:text-foreground/80 transition-colors select-none">
                Key features
                <svg
                  className="w-3 h-3 transition-transform group-open/features:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/65">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-foreground/30">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </details>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg bg-gradient-to-r ${gradient}`}
              >
                Live site
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-foreground/60 font-medium text-sm border border-foreground/15 hover:bg-foreground/5 hover:text-foreground/80 transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

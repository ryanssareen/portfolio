"use client";

import Image from "next/image";

interface ProjectCardProps {
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
  index: number;
}

export function ProjectCard({
  title,
  accentColor,
  gradient,
  lightBg,
  darkBg,
  techStack,
  apis,
  description,
  features,
  liveUrl,
  githubUrl,
  image,
  number,
  index,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative py-16 md:py-20 lg:py-28 bg-gradient-to-br ${lightBg} dark:${darkBg}`}>
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200/60 dark:bg-white/5" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center ${
            !isEven ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* ── Visual ── */}
          <div
            className={`${!isEven ? "lg:[direction:ltr]" : ""} animate-fade-in-up`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="relative group">
              {/* Glow backdrop */}
              <div
                className={`absolute -inset-6 bg-gradient-to-br ${gradient} rounded-[2rem] opacity-[0.12] blur-3xl group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/8 shadow-2xl shadow-slate-900/10 dark:shadow-black/40 group-hover:shadow-3xl group-hover:-translate-y-1.5 transition-all duration-500">

                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-slate-900">
                  <Image
                    src={image}
                    alt={`${title} screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Live badge */}
                  <div className="absolute top-3 left-3">
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r ${gradient} rounded-full text-white text-[10px] font-semibold shadow-lg`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-soft" />
                      Live
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div
            className={`${!isEven ? "lg:[direction:ltr]" : ""} animate-fade-in-up`}
            style={{ animationDelay: `${index * 80 + 120}ms` }}
          >
            <div className="space-y-6">
              {/* Label + title */}
              <div>
                <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase opacity-40 mb-2" style={{ color: accentColor }}>
                  Project {number}
                </p>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                  style={{ color: accentColor }}
                >
                  {title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-foreground/60 text-sm sm:text-base leading-relaxed">
                {description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-[11px] rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                    {tech}
                  </span>
                ))}
                {apis.map((api) => (
                  <span key={api} className="px-2.5 py-1 text-[11px] rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 font-medium">
                    {api}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2.5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground/65 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl bg-gradient-to-r ${gradient}`}
                >
                  View Live
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-foreground/70 font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 bg-white/50 dark:bg-white/[0.02] transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

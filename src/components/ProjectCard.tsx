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
  portfolioUrl?: string;
  icon: string;
  image: string;
  number: string;
  index: number;
  featured?: boolean;
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
  portfolioUrl,
  image,
  number,
  index,
  featured = false,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;

  // Strip protocol for the fake URL bar
  const displayUrl = liveUrl.replace(/^https?:\/\//, "");

  return (
    <div className={`relative ${featured ? "py-20 md:py-28 lg:py-36" : "py-16 md:py-20 lg:py-28"} bg-gradient-to-br ${lightBg} dark:${darkBg}`}>
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

              {/* Browser chrome wrapper */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/8 shadow-2xl shadow-slate-900/10 dark:shadow-black/40 group-hover:shadow-3xl group-hover:-translate-y-1.5 transition-all duration-500">

                {/* Browser chrome bar */}
                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-200/60 dark:border-white/8">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  {/* Fake address bar */}
                  <div className="flex-1 bg-white dark:bg-slate-700/60 rounded-md px-3 py-1.5 flex items-center gap-2 min-w-0">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate font-mono">
                      {displayUrl}
                    </span>
                  </div>
                </div>

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

                {/* Tech stack bar */}
                <div className="px-5 py-3.5 bg-white dark:bg-slate-900/80 border-t border-slate-200/60 dark:border-white/5">
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
                {featured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3 text-white shadow-lg"
                    style={{ background: `linear-gradient(to right, ${accentColor}, ${accentColor}cc)` }}>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Main Project
                  </div>
                )}
                <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase opacity-40 mb-2" style={{ color: accentColor }}>
                  Project {number}
                </p>
                <h2
                  className={`${featured ? "text-4xl sm:text-5xl md:text-6xl" : "text-3xl sm:text-4xl md:text-5xl"} font-bold leading-tight`}
                  style={{ color: accentColor }}
                >
                  {title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-foreground/60 text-sm sm:text-base leading-relaxed">
                {description}
              </p>

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
                {portfolioUrl && (
                  <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-foreground/70 font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 bg-white/50 dark:bg-white/[0.02] transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Portfolio
                  </a>
                )}
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

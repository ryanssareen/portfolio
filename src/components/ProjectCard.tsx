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
    <div className={`relative py-12 md:py-16 lg:py-24 bg-gradient-to-br ${lightBg} dark:${darkBg}`}>
      {/* Top separator line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${gradient.replace("from-", "via-").split(" ")[0]} to-transparent opacity-30`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center ${
            !isEven ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* Project Visual */}
          <div
            className={`${!isEven ? "lg:[direction:ltr]" : ""} animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative group">
              {/* Gradient backdrop */}
              <div
                className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Main visual card */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 bg-white dark:bg-slate-800 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={image}
                    alt={`${title} screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient overlay at bottom for smooth transition */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-slate-800 to-transparent" />

                  {/* Live badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 bg-gradient-to-r ${gradient} rounded-full text-white text-[11px] sm:text-xs font-semibold shadow-lg`}>
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse-soft" />
                      Live
                    </div>
                  </div>

                  {/* Project number */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-black/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                    {number}
                  </div>
                </div>

                {/* Tech stack bar */}
                <div className="px-4 sm:px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {apis.map((api) => (
                      <span
                        key={api}
                        className="px-3 py-1 text-xs rounded-full border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 font-medium"
                      >
                        {api}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div
            className={`${!isEven ? "lg:[direction:ltr]" : ""} animate-fade-in-up`}
            style={{ animationDelay: `${index * 100 + 150}ms` }}
          >
            <div className="space-y-6">
              {/* Number + title */}
              <div>
                <span
                  className="text-sm font-mono font-bold tracking-widest opacity-40"
                  style={{ color: accentColor }}
                >
                  PROJECT {number}
                </span>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 leading-tight"
                  style={{ color: accentColor }}
                >
                  {title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed">
                {description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-1.5 w-5 h-5 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground/70 text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-2">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-r ${gradient}`}
                >
                  <span>View Live</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-foreground/70 font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all hover:scale-105 bg-white/50 dark:bg-slate-800/50"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

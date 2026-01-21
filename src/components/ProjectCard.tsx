"use client";

interface ProjectCardProps {
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

export function ProjectCard({
  title,
  accentColor,
  gradient,
  techStack,
  apis,
  description,
  features,
  liveUrl,
  icon,
}: ProjectCardProps) {
  return (
    <div className="group h-full">
      <div className="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        {/* Gradient header */}
        <div className={`h-32 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          
          {/* Icon */}
          <div className="absolute bottom-4 left-6">
            <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              {icon}
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col h-[calc(100%-8rem)]">
          {/* Title */}
          <h3 className="text-2xl font-bold mb-3" style={{ color: accentColor }}>
            {title}
          </h3>

          {/* Description */}
          <p className="text-foreground/70 text-sm mb-4 leading-relaxed flex-grow">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* APIs */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
              APIs & Services
            </h4>
            <div className="flex flex-wrap gap-2">
              {apis.map((api) => (
                <span
                  key={api}
                  className="px-3 py-1 text-xs rounded-lg border border-slate-300 dark:border-slate-600 text-foreground/70 font-medium"
                >
                  {api}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
              Key Features
            </h4>
            <ul className="space-y-1.5">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-foreground/70 flex items-start gap-2"
                >
                  <span className="text-lg leading-none" style={{ color: accentColor }}>
                    •
                  </span>
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-r ${gradient}`}
          >
            <span>View Live Site</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </div>
  );
}

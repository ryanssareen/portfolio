"use client";

interface ProjectCardProps {
  title: string;
  accentColor: string;
  techStack: string[];
  apis: string[];
  description: string;
  features: string[];
  liveUrl: string;
}

export function ProjectCard({
  title,
  accentColor,
  techStack,
  apis,
  description,
  features,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="card rounded-2xl overflow-hidden flex flex-col h-full">
      {/* Accent bar */}
      <div className="h-2" style={{ backgroundColor: accentColor }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3" style={{ color: accentColor }}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm mb-4 leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* APIs */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            APIs
          </h4>
          <div className="flex flex-wrap gap-2">
            {apis.map((api) => (
              <span
                key={api}
                className="px-2 py-1 text-xs rounded-md border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400"
              >
                {api}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6 flex-1">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Features
          </h4>
          <ul className="space-y-1">
            {features.map((feature) => (
              <li key={feature} className="text-sm text-muted flex items-start gap-2">
                <span style={{ color: accentColor }}>•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white font-medium text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: accentColor }}
        >
          <span>View Live Site</span>
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
      </div>
    </div>
  );
}

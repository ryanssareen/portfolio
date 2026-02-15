type PieSlice = {
  label: string;
  value: number;
  color: string;
};

type SkillCategory = {
  category: string;
  icon: string;
  gradient: string;
  borderColor: string;
  summary: string;
  centerLabel: string;
  slices: PieSlice[];
  highlights: string[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "Vibe Coding Workflow",
    icon: "🧠",
    gradient: "from-purple-500 to-fuchsia-600",
    borderColor: "border-purple-200 dark:border-purple-800/50",
    summary:
      "Primary flow is Claude Desktop with local connectors, then Claude Code, then Codex for final passes.",
    centerLabel: "Workflow",
    slices: [
      {
        label: "Claude Desktop + Local Connectors",
        value: 60,
        color: "#8b5cf6",
      },
      { label: "Claude Code", value: 25, color: "#f97316" },
      { label: "Codex", value: 15, color: "#0ea5e9" },
    ],
    highlights: [
      "Primary daily environment: Claude Desktop",
      "Claude Code for implementation-heavy loops",
      "Codex for targeted polish and verification",
    ],
  },
  {
    category: "Frontend Stack",
    icon: "⚛️",
    gradient: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-200 dark:border-cyan-800/50",
    summary:
      "Most projects are built with Next.js and React; Vite is used when a lighter setup fits better.",
    centerLabel: "Frameworks",
    slices: [
      { label: "Next.js", value: 70, color: "#2563eb" },
      { label: "React + Vite", value: 30, color: "#14b8a6" },
    ],
    highlights: [
      "Next.js for most shipped sites",
      "React baseline across all projects",
      "Vite used for select builds",
    ],
  },
  {
    category: "AI Integration",
    icon: "🤖",
    gradient: "from-violet-500 to-pink-600",
    borderColor: "border-violet-200 dark:border-violet-800/50",
    summary:
      "Groq API is the main integration path across projects for AI-powered product features.",
    centerLabel: "AI APIs",
    slices: [
      { label: "Groq API", value: 85, color: "#7c3aed" },
      { label: "Other APIs", value: 15, color: "#ec4899" },
    ],
    highlights: [
      "Groq-first integrations in production apps",
      "Focused on practical AI features",
      "Lean API patterns for fast iteration",
    ],
  },
  {
    category: "Backend & Database",
    icon: "🗄️",
    gradient: "from-amber-500 to-orange-600",
    borderColor: "border-amber-200 dark:border-amber-800/50",
    summary:
      "Firebase is the standard backend for most apps; Supabase is currently used in the Recipe project.",
    centerLabel: "Data Layer",
    slices: [
      { label: "Firebase", value: 85, color: "#f59e0b" },
      { label: "Supabase (Recipe)", value: 15, color: "#22c55e" },
    ],
    highlights: [
      "Firebase for most deployed apps",
      "Supabase used in Recipe",
      "API integrations centered on product speed",
    ],
  },
];

function getPieGradient(slices: PieSlice[]) {
  let cursor = 0;
  const stops = slices.map((slice) => {
    const start = cursor;
    cursor += slice.value;
    return `${slice.color} ${start}% ${cursor}%`;
  });
  return `conic-gradient(${stops.join(", ")})`;
}

export function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Technical Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto">
              Real project stack distribution based on how you actually build:
              vibe coding flow, frameworks, AI integration, and backend usage.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <article
              key={category.category}
              className={`group bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden border ${category.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
              style={{ animationDelay: `${categoryIndex * 140}ms` }}
            >
              <div
                className={`bg-gradient-to-r p-5 sm:p-6 ${category.gradient} relative overflow-hidden`}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {category.category}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-xs text-white/90 mt-1 leading-relaxed">
                      {category.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-5">
                  <div className="sm:w-36 md:w-40 sm:shrink-0">
                    <div
                      className="mx-auto h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full relative border border-white/50 dark:border-slate-700/80 shadow-sm"
                      style={{
                        backgroundImage: getPieGradient(category.slices),
                      }}
                      aria-hidden
                    >
                      <div className="absolute inset-[17%] rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                        <span className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                          {category.centerLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <ul className="space-y-2">
                      {category.slices.map((slice) => (
                        <li
                          key={slice.label}
                          className="flex items-center justify-between gap-3 text-xs sm:text-sm"
                        >
                          <span className="flex items-center gap-2 text-foreground/80 leading-relaxed pr-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: slice.color }}
                            />
                            {slice.label}
                          </span>
                          <span className="font-semibold tabular-nums text-foreground/65">
                            {slice.value}%
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-1.5">
                      {category.highlights.map((highlight) => (
                        <p
                          key={highlight}
                          className="text-xs text-foreground/60 flex items-start gap-2"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                          <span>{highlight}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-14 text-center animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="inline-flex max-w-full items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full border border-blue-500/20 dark:border-blue-500/30">
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-foreground/70 text-left sm:text-center">
              Stack reflects real shipped usage, not generic skill lists
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

type SkillGroup = {
  title: string;
  outcome: string;
  primary: string[];
  supporting: string[];
  accent: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    outcome: "Fast, accessible interfaces that stay clean on mobile and desktop.",
    primary: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    supporting: ["shadcn/ui", "Framer Motion", "Responsive Design"],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend & Data",
    outcome: "Reliable APIs, authentication, and data flows for full-stack apps.",
    primary: ["Node.js", "Supabase", "Firebase", "REST APIs"],
    supporting: ["Authentication", "Server Actions", "Schema Design"],
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "AI Features",
    outcome: "Practical AI integrations that improve product workflows.",
    primary: ["OpenAI", "Claude API", "Groq"],
    supporting: ["Prompt Design", "Output Validation", "Rate Limit Handling"],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Delivery Workflow",
    outcome: "Consistent shipping from local development to production deploys.",
    primary: ["Git", "Vercel", "npm", "VS Code"],
    supporting: ["Env Management", "Debugging", "Performance Checks"],
    accent: "from-emerald-500 to-green-500",
  },
];

const focusAreas = [
  "Build end-to-end product features, not isolated screens.",
  "Keep UI quality high while shipping quickly.",
  "Use AI where it saves user time and improves outcomes.",
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-8 md:p-10 animate-fade-in-up">
          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-300/25 dark:bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-violet-300/25 dark:bg-violet-500/10 blur-3xl" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-soft" />
              Skills Overview
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                What I Use to Build
              </span>
            </h1>
            <p className="text-base md:text-lg text-foreground/65 max-w-3xl mx-auto leading-relaxed">
              This page is organized by outcome so it is easier to scan.
              <span className="font-semibold text-foreground/85"> Primary </span>
              means tools I use regularly.
              <span className="font-semibold text-foreground/85">
                {" "}
                Supporting{" "}
              </span>
              means tools I use when the project calls for them.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900/50 p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground/95">
                    {group.title}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                    {group.outcome}
                  </p>
                </div>
                <div
                  className={`h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br ${group.accent} opacity-90`}
                  aria-hidden
                />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                    Primary
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.primary.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                    Supporting
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.supporting.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-foreground/75"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900/40 p-6 animate-fade-in-up" style={{ animationDelay: "520ms" }}>
          <h2 className="text-lg font-semibold mb-3 text-foreground/90">
            Current Focus
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-foreground/65 leading-relaxed">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

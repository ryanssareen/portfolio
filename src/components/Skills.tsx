type AiTool = {
  name: string;
  icon: string;
  description: string;
  span?: string;
};

const aiTools: AiTool[] = [
  {
    name: "Claude Code",
    icon: "/icons/claude.svg",
    description: "Primary coding assistant — day-to-day driver for every project.",
    span: "sm:col-span-2",
  },
  {
    name: "Codex",
    icon: "/icons/codex.svg",
    description: "OpenAI coding agent for second opinions.",
  },
  {
    name: "Compound Engineering",
    icon: "/icons/every.svg",
    description: "Every's AI-native skills for planning, ideation, and code review.",
  },
];

type StackItem = {
  tech: string;
  icon?: string;
  usedIn: string;
  invert?: boolean;
};

const primaryStack: StackItem[] = [
  { tech: "Next.js",      icon: "/icons/nextjs.svg",       usedIn: "All 6 projects", invert: true },
  { tech: "React",        icon: "/icons/react.svg",        usedIn: "All 6 projects" },
  { tech: "TypeScript",   icon: "/icons/typescript.svg",   usedIn: "All 6 projects" },
  { tech: "Tailwind CSS", icon: "/icons/tailwindcss.svg",  usedIn: "All 6 projects" },
  { tech: "Firebase",     icon: "/icons/firebase.svg",     usedIn: "Daily Athlete, Finance Manager, Bank Brief, Voxelheim" },
];

const secondaryStack: StackItem[] = [
  { tech: "Supabase",  icon: "/icons/supabase.svg", usedIn: "Find Me a Race, Recipe Journal" },
  { tech: "Three.js",                               usedIn: "Voxelheim" },
  { tech: "Groq API",  icon: "/icons/groq.svg",     usedIn: "Daily Athlete, Finance Manager, Recipe Journal" },
  { tech: "Node.js",   icon: "/icons/nodejs.svg",   usedIn: "API routes across all projects" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen pt-24 pb-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-[#07091f] dark:to-slate-950 overflow-hidden"
    >
      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-400/10 dark:bg-indigo-600/8 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full bg-purple-400/10 dark:bg-purple-600/6 blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full bg-pink-400/10 dark:bg-pink-600/5 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Skills &amp; Stack
            </span>
          </h2>
        </div>

        {/* AI Disclaimer */}
        <div className="mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <div className="relative max-w-2xl mx-auto text-center p-8 rounded-2xl bg-white/80 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.08] backdrop-blur-lg shadow-sm dark:shadow-none">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-semibold tracking-wider uppercase mb-5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Full Transparency
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-3">
              I write code with AI
            </h3>
            <p className="text-foreground/50 dark:text-white/50 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              Every project in my portfolio was built using AI coding tools.
              I use AI to move fast, ship real products, and focus on solving
              problems — not typing boilerplate.
            </p>
          </div>
        </div>

        {/* AI Tools I Work With */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-white">
              AI tools I work with
            </h3>
            <span className="h-px flex-1 bg-gradient-to-r from-indigo-400/40 via-purple-400/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-5">
            {aiTools.map((tool, i) => (
              <div
                key={tool.name}
                className={`${tool.span ?? "sm:col-span-1"} group relative flex flex-col items-center text-center gap-3 p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.08] backdrop-blur-lg hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:border-slate-300 dark:hover:border-white/15 shadow-sm dark:shadow-none transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${(i + 3) * 65}ms` }}
              >
                <div className={`rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center ${tool.span ? "w-16 h-16" : "w-12 h-12"}`}>
                  <img src={tool.icon} alt={tool.name} className={tool.span ? "w-10 h-10" : "w-7 h-7"} />
                </div>
                <p className={`font-semibold text-foreground dark:text-white ${tool.span ? "text-lg" : "text-sm"}`}>
                  {tool.name}
                </p>
                <p className="text-xs text-foreground/50 dark:text-white/40 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack — grouped by usage */}
        <div>
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-white">
              Tech stack
            </h3>
            <span className="h-px flex-1 bg-gradient-to-r from-indigo-400/40 via-purple-400/30 to-transparent" />
          </div>

          {/* Primary — shipped in most projects */}
          <p className="text-xs text-foreground/40 dark:text-white/40 mb-4">
            Core stack, in almost every project
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
            {primaryStack.map((item, i) => (
              <div
                key={item.tech}
                className="flex items-start gap-4 bg-slate-50 dark:bg-white/[0.04] backdrop-blur-lg border border-slate-200/60 dark:border-white/[0.08] rounded-2xl p-5 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:border-slate-300 dark:hover:border-white/15 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.icon && (
                  <img src={item.icon} alt={item.tech} className={`w-7 h-7 flex-shrink-0 mt-0.5 ${item.invert ? "dark:invert" : ""}`} />
                )}
                <div className="min-w-0">
                  <p className="text-base font-semibold text-foreground dark:text-white leading-tight">
                    {item.tech}
                  </p>
                  <p className="text-xs text-foreground/50 dark:text-white/40 mt-1 leading-snug">
                    {item.usedIn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary — project-specific */}
          <p className="text-xs text-foreground/40 dark:text-white/40 mb-4">
            Project-specific additions
          </p>
          <div className="flex flex-wrap gap-2.5">
            {secondaryStack.map((item) => (
              <div
                key={item.tech}
                className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/15 transition-colors"
                title={item.usedIn}
              >
                {item.icon && <img src={item.icon} alt={item.tech} className="w-4 h-4" />}
                <span className="text-sm font-medium text-foreground/70 dark:text-white/70">
                  {item.tech}
                </span>
                <span className="text-[11px] text-foreground/35 dark:text-white/30">
                  · {item.usedIn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

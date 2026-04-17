const aiTools = [
  { name: "Claude Code", icon: "/icons/claude.svg", description: "Primary coding assistant" },
  { name: "Codex", icon: "/icons/codex.svg", description: "OpenAI coding agent" },
];

type Skill = {
  name: string;
  icon: string;
  invert?: boolean;
};

const skills: Skill[] = [
  { name: "React",        icon: "/icons/react.svg" },
  { name: "Next.js",      icon: "/icons/nextjs.svg", invert: true },
  { name: "TypeScript",   icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Groq API",     icon: "/icons/groq.svg" },
  { name: "Firebase",     icon: "/icons/firebase.svg" },
  { name: "Supabase",     icon: "/icons/supabase.svg" },
  { name: "Node.js",      icon: "/icons/nodejs.svg" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div
      className="group relative flex items-center gap-4 bg-slate-50 dark:bg-white/[0.04] backdrop-blur-lg border border-slate-200/60 dark:border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:border-slate-300 dark:hover:border-white/15 hover:shadow-md dark:hover:shadow-[0_8px_40px_rgba(99,102,241,0.3)] transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 65}ms` }}
    >
      <img src={skill.icon} alt={skill.name} className={`w-6 h-6 ${skill.invert ? "dark:invert" : ""}`} />
      <p className="text-base font-semibold text-foreground dark:text-white">{skill.name}</p>
    </div>
  );
}

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
          <p className="text-xs font-semibold tracking-widest uppercase text-foreground/30 dark:text-white/30 mb-4">
            How I Build
          </p>
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

        {/* AI Tools */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-center text-xs font-semibold tracking-widest uppercase text-foreground/30 dark:text-white/30 mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Tools I Use to Write Code
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto">
            {aiTools.map((tool, i) => (
              <div
                key={tool.name}
                className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/80 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.08] backdrop-blur-lg hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:border-slate-300 dark:hover:border-white/15 shadow-sm dark:shadow-none transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(i + 3) * 65}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center">
                  <img src={tool.icon} alt={tool.name} className="w-7 h-7" />
                </div>
                <p className="text-sm font-semibold text-foreground dark:text-white">{tool.name}</p>
                <p className="text-xs text-foreground/40 dark:text-white/35">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brainstorming */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-center text-xs font-semibold tracking-widest uppercase text-foreground/30 dark:text-white/30 mb-8 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            Brainstorming
          </h3>
          <div className="max-w-md mx-auto">
            <div
              className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/80 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.08] backdrop-blur-lg hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:border-slate-300 dark:hover:border-white/15 shadow-sm dark:shadow-none transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "350ms" }}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center">
                <img src="/icons/every.svg" alt="Every" className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-foreground dark:text-white">Compound Engineering</p>
              <p className="text-xs text-foreground/40 dark:text-white/35 text-center">Every&apos;s AI-native skills for planning, ideation, and code review</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-center text-xs font-semibold tracking-widest uppercase text-foreground/30 dark:text-white/30 mb-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            Tech Stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p
          className="mt-14 text-center text-xs text-foreground/20 dark:text-white/20 animate-fade-in-up"
          style={{ animationDelay: "700ms" }}
        >
          Stack reflects real shipped usage, not generic skill lists.
        </p>
      </div>
    </section>
  );
}

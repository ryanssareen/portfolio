import Link from "next/link";

const stack = [
  { name: "React", icon: "/icons/react.svg", invert: false },
  { name: "Next.js", icon: "/icons/nextjs.svg", invert: true },
  { name: "TypeScript", icon: "/icons/typescript.svg", invert: false },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", invert: false },
  { name: "Firebase", icon: "/icons/firebase.svg", invert: false },
  { name: "Supabase", icon: "/icons/supabase.svg", invert: false },
];

export function StackTeaser() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-foreground/30 mb-3">
              Built With
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground/90">
              Modern Stack, AI-First Workflow
            </h2>
            <p className="text-foreground/50 text-sm leading-relaxed mb-5">
              Every project is built with AI coding tools and shipped on modern infrastructure.
            </p>
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              See full stack & tools
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right — icons grid */}
          <div className="grid grid-cols-3 gap-4">
            {stack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2.5 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/8"
              >
                <img src={tech.icon} alt={tech.name} className={`w-7 h-7 ${tech.invert ? "dark:invert" : ""}`} />
                <span className="text-xs font-medium text-foreground/50">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

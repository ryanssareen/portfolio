import Link from "next/link";

const stack = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
];

export function StackTeaser() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — icons */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            {stack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-foreground/60">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Right — text */}
          <div className="lg:text-right">
            <p className="text-xs font-semibold tracking-widest uppercase text-foreground/30 mb-3">
              Built With
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground/90">
              Modern Stack
            </h2>
            <p className="text-foreground/50 text-sm leading-relaxed mb-5">
              Every project ships with AI coding tools on modern infrastructure.
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
        </div>
      </div>
    </section>
  );
}

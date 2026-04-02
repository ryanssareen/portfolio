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
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-foreground/30 mb-3">
          Built With
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground/90">
          Modern Stack, AI-First Workflow
        </h2>
        <p className="text-foreground/50 text-sm sm:text-base max-w-md mx-auto mb-10">
          Every project is built with AI coding tools and shipped on modern infrastructure.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-10">
          {stack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-medium text-foreground/40">{tech.name}</span>
            </div>
          ))}
        </div>

        <Link
          href="/skills"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-foreground transition-colors"
        >
          See full stack & tools
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

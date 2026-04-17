import Link from "next/link";

const stats = [
  { value: "5",  label: "Projects Shipped" },
  { value: "AI", label: "Powered Apps"      },
  { value: "∞",  label: "Curiosity"         },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden py-28 md:py-0"
    >
      {/* Dot-grid background */}
      <div className="absolute inset-0 dot-grid -z-20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_20%,var(--background)_90%)]" />

      {/* Colour blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 md:w-[500px] md:h-[500px] bg-blue-400 dark:bg-blue-700 rounded-full opacity-[0.07] blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-72 h-72 md:w-96 md:h-96 bg-purple-500 dark:bg-purple-700 rounded-full opacity-[0.07] blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 w-72 h-72 bg-pink-400 dark:bg-pink-700 rounded-full opacity-[0.06] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">

          {/* Left — intro */}
          <div>
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-200 dark:border-green-800/60 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold mb-6 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-soft" />
                Available for projects
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "75ms" }}>
              <p className="text-sm text-foreground/40 font-medium mb-3 tracking-widest uppercase">
                Ryan Singh Sareen
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-5">
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  Full-Stack
                </span>
                <br />
                <span className="text-foreground/90">Developer</span>
              </h1>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <p className="text-base sm:text-lg text-foreground/50 mb-8 max-w-md leading-relaxed font-light">
                Building intelligent web experiences with{" "}
                <span className="text-blue-500 dark:text-blue-400 font-medium">React</span>,{" "}
                <span className="text-foreground/70 font-medium">Next.js</span>, and{" "}
                <span className="text-violet-500 dark:text-violet-400 font-medium">AI</span>.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/projects"
                  className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm border border-slate-200 dark:border-slate-700 text-foreground/70 hover:text-foreground hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 bg-white/50 dark:bg-white/[0.02] transition-all duration-200 text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent leading-none mb-1">
                      {s.value}
                    </span>
                    <span className="text-[11px] text-foreground/40 font-medium tracking-wide whitespace-nowrap">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — about */}
          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <div className="rounded-2xl border border-slate-200/60 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/30 mb-3">
                  About Me
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  I&apos;m a full-stack developer who builds real products with AI.
                  I don&apos;t just write code — I use AI coding tools like Claude Code
                  and Codex to ship fast, iterate faster, and focus on solving actual problems.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/30 mb-3">
                  What I Build
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  SaaS apps across fitness, finance, and learning — each one a
                  production app with auth, real-time data, AI features, and users.
                  5 shipped so far, more in progress.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/30 mb-3">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Tailwind", "Firebase", "Supabase"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] rounded-full bg-slate-100 dark:bg-white/[0.06] text-foreground/50 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://github.com/ryanssareen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-foreground/35 hover:text-foreground/75 text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <span className="w-px h-3 bg-slate-300 dark:bg-slate-700" />
                <a
                  href="mailto:ryanssareen@gmail.com"
                  className="flex items-center gap-1.5 text-foreground/35 hover:text-foreground/75 text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

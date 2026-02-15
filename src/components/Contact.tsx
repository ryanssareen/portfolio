"use client";

export function Contact() {
  return (
    <section id="contact" className="min-h-[100svh] md:min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Availability badge */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-soft" />
            Open to opportunities
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let&apos;s Build Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <p className="text-base sm:text-lg md:text-xl text-foreground/60 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        {/* Primary CTA - Email */}
        <div className="animate-fade-in-up mb-7 sm:mb-8 max-w-xl mx-auto" style={{ animationDelay: "300ms" }}>
          <a
            href="mailto:ryanssareen@gmail.com"
            className="group relative block overflow-hidden rounded-2xl"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />

            <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-6">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="text-center md:text-left flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-1">
                    Get in touch
                  </p>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 break-all sm:break-normal">
                    ryanssareen@gmail.com
                  </p>
                  <p className="text-sm text-foreground/50">
                    Typically responds within 24 hours
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-foreground/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* GitHub - Secondary */}
        <div className="animate-fade-in-up mb-12 sm:mb-16 max-w-xl mx-auto" style={{ animationDelay: "400ms" }}>
          <a
            href="https://github.com/ryanssareen"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
          >
            <svg
              className="w-5 h-5 text-foreground/60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-foreground/70 break-all sm:break-normal">
              github.com/ryanssareen
            </span>
            <svg
              className="w-4 h-4 text-foreground/30 group-hover:text-foreground/60 group-hover:translate-x-0.5 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <div className="animate-fade-in-up pt-6 sm:pt-8 border-t border-slate-200/50 dark:border-slate-700/50" style={{ animationDelay: "500ms" }}>
          <p className="text-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} Ryan Singh Sareen
          </p>
          <p className="text-foreground/30 text-xs mt-1.5">
            Built with Next.js &middot; Tailwind CSS &middot; Claude Code
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          I&apos;m always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          <a
            href="mailto:ryanssareen@gmail.com"
            className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
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
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-sm text-foreground/60">ryanssareen@gmail.com</p>
          </a>

          <a
            href="https://github.com/ryanssareen"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-800 dark:hover:border-slate-400 hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-foreground/60">@ryanssareen</p>
          </a>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-700">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Ryan Sareen. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-foreground/40 text-xs mt-2">
            Designed and developed with Claude Code
          </p>
        </div>
      </div>
    </section>
  );
}

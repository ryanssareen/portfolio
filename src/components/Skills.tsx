"use client";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    gradient: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-200 dark:border-cyan-800/50",
    skills: [
      { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
      { name: "Next.js", level: 95, color: "from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200" },
      { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-teal-500" },
    ],
  },
  {
    category: "Backend & Database",
    icon: "⚙️",
    gradient: "from-amber-500 to-orange-600",
    borderColor: "border-amber-200 dark:border-amber-800/50",
    skills: [
      { name: "Firebase", level: 85, color: "from-yellow-500 to-orange-600" },
      { name: "Supabase", level: 85, color: "from-green-500 to-emerald-600" },
      { name: "Node.js", level: 80, color: "from-green-600 to-green-800 dark:from-green-400 dark:to-green-600" },
      { name: "REST APIs", level: 90, color: "from-purple-500 to-purple-700" },
    ],
  },
  {
    category: "AI & Integration",
    icon: "🤖",
    gradient: "from-purple-500 to-pink-600",
    borderColor: "border-purple-200 dark:border-purple-800/50",
    skills: [
      { name: "Groq AI", level: 90, color: "from-purple-500 to-pink-600" },
      { name: "Claude Code", level: 95, color: "from-orange-500 to-red-600" },
      { name: "AI Integration", level: 90, color: "from-violet-500 to-purple-600" },
      { name: "Brevo API", level: 85, color: "from-indigo-500 to-blue-600" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen pt-24 pb-20 px-6 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Technical Expertise
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
              Specializing in modern web technologies and AI-powered solutions
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`group bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden border ${category.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category header with gradient */}
              <div className={`bg-gradient-to-r ${category.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>
              </div>

              {/* Skills list */}
              <div className="p-6 space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-foreground/40 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full animate-width-grow`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 150 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full border border-blue-500/20 dark:border-blue-500/30">
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
            <span className="text-sm font-semibold text-foreground/70">
              Continuously learning and expanding my tech stack
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

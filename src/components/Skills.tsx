"use client";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
      { name: "Next.js", level: 95, color: "from-slate-600 to-slate-800" },
      { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-teal-500" },
    ],
  },
  {
    category: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "Firebase", level: 85, color: "from-yellow-500 to-orange-600" },
      { name: "Supabase", level: 85, color: "from-green-500 to-emerald-600" },
      { name: "Node.js", level: 80, color: "from-green-600 to-green-800" },
      { name: "REST APIs", level: 90, color: "from-purple-500 to-purple-700" },
    ],
  },
  {
    category: "AI & Integration",
    icon: "🤖",
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
    <section id="skills" className="min-h-screen pt-24 pb-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
            Specializing in modern web technologies and AI-powered solutions
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-foreground/50">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full border border-blue-500/20 dark:border-blue-500/30">
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
            <span className="text-sm font-semibold text-foreground/80">
              Continuously learning and expanding my tech stack
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

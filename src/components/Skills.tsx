"use client";

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Firebase", level: 85 },
  { name: "Supabase", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "REST APIs", level: 90 },
  { name: "Groq AI", level: 90 },
  { name: "AI Integration", level: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Core competencies and expertise levels
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-xl">
          <div className="space-y-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-base font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm font-mono text-foreground/50">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

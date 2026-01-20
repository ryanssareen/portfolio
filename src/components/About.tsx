"use client";

const skills = [
  { name: "React", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
  { name: "Next.js", color: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200" },
  { name: "Tailwind CSS", color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400" },
  { name: "TypeScript", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
  { name: "Supabase", color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
  { name: "Firebase", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" },
  { name: "Groq AI", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" },
  { name: "Brevo API", color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400" },
  { name: "Full-Stack Dev", color: "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400" },
  { name: "AI-Powered Apps", color: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400" },
];

export function About() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Skills & Technologies
        </h2>
        <p className="text-muted mb-8 max-w-2xl mx-auto">
          I specialize in building full-stack web applications with modern technologies,
          integrating AI capabilities to create intelligent, user-focused experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-transform hover:scale-105 ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

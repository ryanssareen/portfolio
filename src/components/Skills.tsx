"use client";

import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  icon: string;
  level: number;
  label: string;
};

const skills: Skill[] = [
  { name: "React",        icon: "⚛️",  level: 95, label: "Expert"     },
  { name: "Next.js",      icon: "▲",   level: 95, label: "Expert"     },
  { name: "TypeScript",   icon: "TS",  level: 90, label: "Advanced"   },
  { name: "Tailwind CSS", icon: "💨",  level: 95, label: "Expert"     },
  { name: "Claude AI",    icon: "🧠",  level: 95, label: "Expert"     },
  { name: "Groq API",     icon: "⚡",  level: 90, label: "Advanced"   },
  { name: "Firebase",     icon: "🔥",  level: 85, label: "Advanced"   },
  { name: "Supabase",     icon: "🟩",  level: 80, label: "Proficient" },
  { name: "Node.js",      icon: "🟢",  level: 80, label: "Proficient" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative bg-white/[0.04] backdrop-blur-lg border border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:bg-white/[0.08] hover:border-white/15 hover:shadow-[0_8px_40px_rgba(99,102,241,0.3)] transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 65}ms` }}
    >
      {/* Icon */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl leading-none">{skill.icon}</span>
        <span className="text-[10px] font-semibold tracking-widest uppercase text-white/30">
          {skill.label}
        </span>
      </div>

      {/* Skill name + percentage */}
      <div className="flex items-baseline justify-between mb-2.5">
        <p className="text-base font-semibold text-white">{skill.name}</p>
        <span className="text-sm font-semibold tabular-nums text-white/35">{skill.level}%</span>
      </div>

      {/* Bar track */}
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-[width] duration-1000 ease-out"
          style={{ width: visible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen pt-24 pb-24 px-4 sm:px-6 bg-gradient-to-b from-slate-950 via-[#07091f] to-slate-950 overflow-hidden"
    >
      {/* Floating background blobs — subtle texture, not focal points */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full bg-purple-600/6 blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full bg-pink-600/5 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
            Technical Expertise
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills &amp; Stack
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-xl mx-auto">
            Real tools I reach for — not a generic list padded to look impressive.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <p
          className="mt-14 text-center text-xs text-white/20 animate-fade-in-up"
          style={{ animationDelay: "700ms" }}
        >
          Stack reflects real shipped usage, not generic skill lists.
        </p>
      </div>
    </section>
  );
}

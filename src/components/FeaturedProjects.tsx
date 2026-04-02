import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    title: "The Daily Athlete",
    description: "Training app for self-disciplined athletes with AI coaching.",
    image: "/projects/daily-athlete.png",
    gradient: "from-red-500 to-rose-600",
    category: "Fitness",
  },
  {
    title: "Find Me a Race",
    description: "India's race directory — discover 200+ marathons and runs.",
    image: "/projects/find-me-a-race.png",
    gradient: "from-orange-500 to-amber-600",
    category: "Fitness",
  },
  {
    title: "Finance Manager",
    description: "Personal finance tracker with AI-powered spending insights.",
    image: "/projects/finance-manager.png",
    gradient: "from-blue-500 to-indigo-600",
    category: "Finance",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-widest uppercase text-foreground/30 mb-3">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground/90">
              Recent Projects
            </h2>
            <p className="text-foreground/50 text-sm leading-relaxed mb-6">
              Full-stack apps built from the ground up with modern frameworks and AI — each solving a real problem.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              View all 5 projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featured.map((project) => (
              <Link
                key={project.title}
                href="/projects"
                className="group relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/8 bg-white dark:bg-white/[0.02] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-foreground/35">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground/90 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

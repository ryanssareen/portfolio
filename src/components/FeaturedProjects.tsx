import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    title: "The Daily Athlete",
    description: "A training app for self-disciplined athletes. Track workouts, build streaks, and get AI-powered fitness coaching.",
    image: "/projects/daily-athlete.png",
    gradient: "from-red-500 to-rose-600",
    category: "Fitness",
  },
  {
    title: "Find Me a Race",
    description: "India's race directory — discover 200+ marathons, trail runs, ultras, and 5Ks. Search by city, distance, or location.",
    image: "/projects/find-me-a-race.png",
    gradient: "from-orange-500 to-amber-600",
    category: "Fitness",
  },
  {
    title: "Finance Manager",
    description: "Personal finance tracker with AI-powered spending insights, budget goals, and interactive charts.",
    image: "/projects/finance-manager.png",
    gradient: "from-blue-500 to-indigo-600",
    category: "Finance",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 sm:mb-18">
          <p className="text-xs font-semibold tracking-widest uppercase text-foreground/30 mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground/90">
            Recent Projects
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {featured.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <Link
                key={project.title}
                href="/projects"
                className={`group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center ${
                  !isEven ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className={`${!isEven ? "md:[direction:ltr]" : ""} relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/8 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/60 dark:from-slate-900/60 to-transparent" />
                  </div>
                </div>

                {/* Text */}
                <div className={`${!isEven ? "md:[direction:ltr]" : ""}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-foreground/35">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground/90 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/50 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-700 text-foreground/60 hover:text-foreground hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-0.5 bg-white/50 dark:bg-white/[0.02] transition-all"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

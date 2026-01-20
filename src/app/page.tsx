import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "Recipe Journal",
    accentColor: "#22c55e",
    techStack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    apis: ["Groq (AI)", "Brevo (Email)"],
    description:
      "A smart recipe app with AI-powered recipe suggestions and full CRUD functionality. Save your favorite recipes, generate new ones with AI, and organize your culinary journey.",
    features: [
      "User authentication",
      "Save, edit & delete recipes",
      "AI recipe generation",
      "Email notifications",
    ],
    liveUrl: "https://recipe-journal-beryl.vercel.app",
  },
  {
    title: "Workout Tracker",
    accentColor: "#ef4444",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    apis: ["Groq (AI Chatbot)", "Brevo", "Firebase Auth"],
    description:
      "Track your workouts with an AI fitness assistant. Log exercises, monitor your progress, and get personalized fitness advice from an intelligent chatbot.",
    features: [
      "User authentication",
      "Log workouts",
      "Progress tracking",
      "AI chatbot for fitness advice",
    ],
    liveUrl: "https://ryanssareen-workout-site-k6vl.vercel.app",
  },
  {
    title: "Finance Manager",
    accentColor: "#3b82f6",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    apis: ["Groq (AI Insights)", "Brevo", "Firebase Auth"],
    description:
      "Personal finance manager with AI-powered spending insights. Track income and expenses, set budgets, and visualize your financial health with interactive charts.",
    features: [
      "User authentication",
      "Track income & expenses",
      "Budget tracking",
      "Visual charts & AI insights",
    ],
    liveUrl: "https://finance-app-theta-ten.vercel.app",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Projects Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <About />
      <Footer />
    </main>
  );
}

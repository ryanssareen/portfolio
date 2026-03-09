import { Metadata } from "next";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects | Ryan Singh Sareen",
  description:
    "View my portfolio of AI-powered web applications including Recipe Journal, Workout Tracker, and Finance Manager.",
};

const projects = [
  {
    title: "The Daily Athlete",
    accentColor: "#ef4444",
    gradient: "from-red-500 to-rose-600",
    lightBg: "from-red-50 to-rose-50",
    darkBg: "from-red-950/30 to-rose-950/30",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    apis: ["Groq (AI Chatbot)", "Brevo", "Firebase Auth"],
    description:
      "A training app for self-disciplined athletes. Track workouts, build streaks, sync with Strava, and get AI-powered fitness coaching — all free during early access.",
    features: [
      "Firebase authentication & real-time sync",
      "Multi-sport workout logging (run, swim, bike, strength)",
      "Streak tracking & progress analytics",
      "AI chatbot for personalised fitness advice",
    ],
    liveUrl: "https://ryanssareen-workout-site-k6vl.vercel.app",
    portfolioUrl: "https://ryanssareen-workout-site-k6vl.vercel.app/portfolio",
    githubUrl: "https://github.com/ryanssareen/workout-site",
    icon: "💪",
    image: "/projects/workout-tracker.png",
    number: "01",
    featured: true,
  },
  {
    title: "Recipe Journal",
    accentColor: "#22c55e",
    gradient: "from-green-500 to-emerald-600",
    lightBg: "from-green-50 to-emerald-50",
    darkBg: "from-green-950/30 to-emerald-950/30",
    techStack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    apis: ["Groq (AI)", "Brevo (Email)"],
    description:
      "A smart recipe app with AI-powered recipe suggestions and full CRUD functionality. Save your favorite recipes, generate new ones with AI, and organize your culinary journey.",
    features: [
      "User authentication with secure sessions",
      "Full CRUD: save, edit & delete recipes",
      "AI-powered recipe generation via Groq",
      "Automated email notifications with Brevo",
    ],
    liveUrl: "https://recipe-journal-beryl.vercel.app",
    githubUrl: "https://github.com/ryanssareen/recipe-journal",
    icon: "🍳",
    image: "/projects/recipe-journal.png",
    number: "02",
    featured: false,
  },
  {
    title: "Finance Manager",
    accentColor: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "from-blue-50 to-indigo-50",
    darkBg: "from-blue-950/30 to-indigo-950/30",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    apis: ["Groq (AI Insights)", "Brevo", "Firebase Auth"],
    description:
      "Personal finance manager with AI-powered spending insights. Track income and expenses, set budgets, and visualize your financial health with interactive charts.",
    features: [
      "Secure user auth with Firebase",
      "Income & expense tracking dashboard",
      "Budget goals with progress indicators",
      "AI-powered spending insights & charts",
    ],
    liveUrl: "https://finance-app-theta-ten.vercel.app",
    githubUrl: "https://github.com/ryanssareen/finance-app",
    icon: "💰",
    image: "/projects/finance-manager.png",
    number: "03",
    featured: false,
  },
];

export default function ProjectsPage() {
  return <Projects projects={projects} />;
}

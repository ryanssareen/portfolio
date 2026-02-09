import { Metadata } from "next";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects | Ryan Sareen",
  description:
    "View my portfolio of AI-powered web applications including Recipe Journal, Workout Tracker, and Finance Manager.",
};

const projects = [
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
    number: "01",
  },
  {
    title: "Workout Tracker",
    accentColor: "#ef4444",
    gradient: "from-red-500 to-rose-600",
    lightBg: "from-red-50 to-rose-50",
    darkBg: "from-red-950/30 to-rose-950/30",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    apis: ["Groq (AI Chatbot)", "Brevo", "Firebase Auth"],
    description:
      "Track your workouts with an AI fitness assistant. Log exercises, monitor your progress over time, and get personalized fitness advice from an intelligent chatbot.",
    features: [
      "Firebase authentication & real-time sync",
      "Detailed workout logging with history",
      "Visual progress tracking & analytics",
      "AI chatbot for personalized fitness advice",
    ],
    liveUrl: "https://ryanssareen-workout-site-k6vl.vercel.app",
    githubUrl: "https://github.com/ryanssareen/workout-site",
    icon: "💪",
    image: "/projects/workout-tracker.png",
    number: "02",
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
  },
];

export default function ProjectsPage() {
  return <Projects projects={projects} />;
}

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
    icon: "🍳",
  },
  {
    title: "Workout Tracker",
    accentColor: "#ef4444",
    gradient: "from-red-500 to-rose-600",
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
    icon: "💪",
  },
  {
    title: "Finance Manager",
    accentColor: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600",
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
    icon: "💰",
  },
];

export default function ProjectsPage() {
  return <Projects projects={projects} />;
}

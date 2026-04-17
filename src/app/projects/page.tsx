import { Metadata } from "next";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects | Ryan Singh Sareen",
  description:
    "View my portfolio of 7 web applications across fitness, finance, productivity, and experiments — including The Daily Athlete, Find Me a Race, Finance Manager, Bank Brief, ReadStash, Recipe Journal, and Voxelheim.",
};

const categories = [
  {
    name: "Fitness SaaS",
    icon: "🏋️",
    description: "Apps built for athletes and runners to train smarter.",
    projects: [
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
        liveUrl: "https://thedailyathlete.in",
        githubUrl: "https://github.com/ryanssareen/workout-site",
        icon: "💪",
        image: "/projects/daily-athlete.png",
      },
      {
        title: "Find Me a Race",
        accentColor: "#f97316",
        gradient: "from-orange-500 to-amber-600",
        lightBg: "from-orange-50 to-amber-50",
        darkBg: "from-orange-950/30 to-amber-950/30",
        techStack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
        apis: ["Geolocation", "Race Aggregation"],
        description:
          "India's race directory — discover 200+ marathons, trail runs, ultras, and 5Ks across the country. Search by city, distance, or use location-based search to find races near you.",
        features: [
          "Search races by city, state, or race name",
          "Browse by distance: 5K, half marathon, marathon, ultra & trail",
          "Location-based 'Near me' race discovery",
          "One-click registration links for every race",
        ],
        liveUrl: "https://findmearace.com",
        githubUrl: "https://github.com/ryanssareen/find-me-a-race",
        icon: "🏃",
        image: "/projects/find-me-a-race.png",
      },
    ],
  },
  {
    name: "Financial SaaS",
    icon: "💳",
    description: "Tools to track, manage, and understand your money.",
    projects: [
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
      },
      {
        title: "Bank Brief",
        accentColor: "#1e3a5f",
        gradient: "from-slate-700 to-blue-900",
        lightBg: "from-slate-50 to-blue-50",
        darkBg: "from-slate-950/30 to-blue-950/30",
        techStack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
        apis: ["Firebase Auth", "Google Sign-In"],
        description:
          "Your finances, simplified. A personal banking dashboard to manage multiple bank accounts, track income, expenses, and savings, and monitor fixed deposits — all in one place.",
        features: [
          "Portfolio overview with income, expenses & savings",
          "Multi-bank account management with balance tracking",
          "Fixed deposit tracking & management",
          "Dark/light theme with user preferences",
        ],
        liveUrl: "https://bank-brief-phi.vercel.app",
        githubUrl: "https://github.com/ryanssareen/bank-brief",
        icon: "🏦",
        image: "/projects/bank-brief.png",
      },
    ],
  },
  {
    name: "Productivity",
    icon: "📚",
    description: "Tools built to save time and stay organised.",
    projects: [
      {
        title: "ReadStash",
        accentColor: "#f59e0b",
        gradient: "from-amber-500 to-orange-600",
        lightBg: "from-amber-50 to-orange-50",
        darkBg: "from-amber-950/30 to-orange-950/30",
        techStack: ["Next.js", "React", "Tailwind CSS", "Firebase", "TypeScript"],
        apis: ["Firebase Auth", "Firestore", "Google Sign-In"],
        description:
          "A free, open-source read-it-later app. Save articles from any browser with one click via Chrome and Safari extensions, then read them later across devices in a clean, distraction-free dashboard.",
        features: [
          "Chrome & Safari browser extensions for one-click saves",
          "Firebase auth with Google Sign-In",
          "Cross-device sync with real-time Firestore",
          "100% free & open-source",
        ],
        liveUrl: "https://readstash-ten.vercel.app",
        githubUrl: "https://github.com/ryanssareen/readstash",
        icon: "📚",
        image: "/projects/readstash.png",
      },
    ],
  },
  {
    name: "Experiments & Games",
    icon: "🧪",
    description: "Projects built to explore new tech and have fun with it.",
    projects: [
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
      },
      {
        title: "Voxelheim",
        accentColor: "#8b5cf6",
        gradient: "from-violet-500 to-purple-600",
        lightBg: "from-violet-50 to-purple-50",
        darkBg: "from-violet-950/30 to-purple-950/30",
        techStack: ["Next.js", "React", "Three.js", "Firebase"],
        apis: ["Firebase Auth", "Simplex Noise", "Zustand"],
        description:
          "A voxel-based survival game running entirely in the browser. Explore procedurally generated islands with 5 biomes, craft items, manage your inventory, and survive — all powered by Three.js and WebGL.",
        features: [
          "Procedural terrain with 5 biomes & snow-capped mountains",
          "Survival systems with crafting & inventory management",
          "Firebase auth with Google & Microsoft OAuth",
          "Real-time 3D voxel rendering with Three.js",
        ],
        liveUrl: "https://voxelheim.vercel.app",
        githubUrl: "https://github.com/ryanssareen/voxelheim",
        icon: "🧱",
        image: "/projects/voxelheim.png",
      },
    ],
  },
];

export default function ProjectsPage() {
  return <Projects categories={categories} />;
}

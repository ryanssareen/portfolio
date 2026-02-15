import { Metadata } from "next";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills | Ryan Singh Sareen",
  description:
    "Explore my technical skills and expertise in React, Next.js, TypeScript, Tailwind CSS, Firebase, Supabase, and AI integration.",
};

export default function SkillsPage() {
  return <Skills />;
}

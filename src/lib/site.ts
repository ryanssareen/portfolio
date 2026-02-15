const toHttpsUrl = (value: string) => {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return `https://${value}`;
};

const stripTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "http://localhost:3000";

export const SITE_URL = stripTrailingSlash(toHttpsUrl(fromEnv));
export const SITE_NAME = "Ryan Singh Sareen";
export const SITE_TITLE = `${SITE_NAME} | Full-Stack Developer`;
export const SITE_DESCRIPTION =
  "Full-stack developer building modern web apps with React, Next.js, and AI integration. View my portfolio of projects including Recipe Journal, Workout Tracker, and Finance Manager.";


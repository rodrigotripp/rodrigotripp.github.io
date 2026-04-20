/**
 * Seed script — populates MongoDB with the initial portfolio data.
 * Run with:  npm run seed
 * Reads MONGODB_URI from .env.local automatically.
 */
import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(process.cwd(), ".env.local") });

import mongoose from "mongoose";
import Experience from "../api/models/Experience";
import SkillCategory from "../api/models/SkillCategory";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌  MONGODB_URI environment variable is required.");
  process.exit(1);
}

const experiences = [
  {
    title: "Software Developer (Fullstack)",
    company: "Elisa",
    date: "June 2025 - Present",
    duties: [
      "Building customer-facing web experiences and internal tools.",
      "Contributing across the stack with a focus on maintainable frontend architecture.",
    ],
    order: 0,
  },
  {
    title: "Software Developer",
    company: "Trivore",
    date: "September 2024 - January 2025",
    duties: [
      "Developed responsive websites for client projects.",
      "Built product features in a Next.js-based architecture.",
      "Collaborated with design team on UI/UX improvements.",
    ],
    order: 1,
  },
  {
    title: "Front-end Developer and Scrum Master",
    company: "Marimekko",
    date: "February 2019 - April 2024",
    duties: [
      "Worked as an in-house frontend developer in close collaboration with backend teams.",
      "Delivered key ecommerce features that supported product growth over five years.",
      "Facilitated Scrum practices across multiple product teams.",
    ],
    order: 2,
  },
  {
    title: "Front-end Developer",
    company: "Nokia",
    date: "August 2017 - February 2019",
    duties: ["UI development for telecommunications and network services."],
    order: 3,
  },
  {
    title: "UI Developer",
    company: "Virta",
    date: "November 2016 - August 2017",
    duties: ["Designed and built UI experiences for an electric vehicle user platform."],
    order: 4,
  },
];

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Java", "PHP"],
    order: 0,
  },
  {
    title: "Frontend Development",
    skills: ["React", "Vue.js", "Next.js", "HTML5", "CSS3 / Sass"],
    order: 1,
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "MySQL"],
    order: 2,
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "Magento"],
    order: 3,
  },
];

async function seed() {
  console.log("🔌  Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI as string);
  console.log("✅  Connected.");

  console.log("🗑️   Clearing existing data...");
  await Experience.deleteMany({});
  await SkillCategory.deleteMany({});

  console.log("🌱  Inserting experience...");
  await Experience.insertMany(experiences);

  console.log("🌱  Inserting skills...");
  await SkillCategory.insertMany(skillCategories);

  console.log("✅  Seed complete.");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("❌  Seed failed:", err);
  process.exit(1);
});

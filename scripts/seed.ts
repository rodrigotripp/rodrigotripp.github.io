import { config } from "dotenv";
import { resolve } from "path";
import { readFileSync } from "fs";
config({ path: resolve(process.cwd(), ".env.local") });

import mongoose from "mongoose";
import Experience from "../api/models/Experience";
import SkillCategory from "../api/models/SkillCategory";
import BlogPost from "../api/models/BlogPost";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌  MONGODB_URI environment variable is required.");
  process.exit(1);
}

const read = (name: string) =>
  JSON.parse(
    readFileSync(resolve(process.cwd(), `public/api/${name}`), "utf-8"),
  );

const experiences = read("experience");
const skillCategories = read("skills");
const blogPosts = read("blog.json");

async function seed() {
  console.log("🔌  Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI as string);
  console.log("✅  Connected.");

  console.log("🗑️   Clearing existing data...");
  await Experience.deleteMany({});
  await SkillCategory.deleteMany({});
  await BlogPost.deleteMany({});

  console.log("🌱  Inserting experience...");
  await Experience.insertMany(experiences);

  console.log("🌱  Inserting skills...");
  await SkillCategory.insertMany(skillCategories);

  console.log("🌱  Inserting blog posts...");
  await BlogPost.insertMany(blogPosts);

  console.log("✅  Seed complete.");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("❌  Seed failed:", err);
  process.exit(1);
});

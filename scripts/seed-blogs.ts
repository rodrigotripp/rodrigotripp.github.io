import { config } from "dotenv";
import { resolve } from "path";
import { readFileSync } from "fs";
config({ path: resolve(process.cwd(), ".env.local") });

import mongoose from "mongoose";
import BlogPost from "../api/models/BlogPost";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌  MONGODB_URI environment variable is required.");
  process.exit(1);
}

const blogPosts = JSON.parse(
  readFileSync(resolve(process.cwd(), "public/api/blog.json"), "utf-8"),
);

async function seedBlogs() {
  console.log("🔌  Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI as string);
  console.log("✅  Connected.");

  console.log("🌱  Upserting blog posts...");
  for (const post of blogPosts) {
    await BlogPost.findOneAndUpdate({ slug: post.slug }, post, {
      upsert: true,
      new: true,
    });
    console.log(`   ✔ ${post.title}`);
  }

  console.log("✅  Blog seed complete.");
  await mongoose.disconnect();
}

seedBlogs().catch((err) => {
  console.error("❌  Seed failed:", err);
  process.exit(1);
});

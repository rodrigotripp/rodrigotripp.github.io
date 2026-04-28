import type { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "./lib/mongoose";
import BlogPost from "./models/BlogPost";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await connectToDatabase();
    const posts = await BlogPost.find()
      .sort({ order: -1 })
      .select("-content")
      .lean();
    return res.status(200).json(posts);
  } catch (error) {
    console.error("[/api/blog]", error);
    return res.status(500).json({ error: "Failed to fetch blog posts" });
  }
}

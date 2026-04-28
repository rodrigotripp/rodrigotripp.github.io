import type { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "../lib/mongoose";
import BlogPost from "../models/BlogPost";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { slug } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Invalid slug" });
  }

  try {
    await connectToDatabase();
    const post = await BlogPost.findOne({ slug }).lean();

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.error("[/api/blog/:slug]", error);
    return res.status(500).json({ error: "Failed to fetch blog post" });
  }
}

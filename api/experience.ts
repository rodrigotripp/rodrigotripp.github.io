import type { VercelRequest, VercelResponse } from "@vercel/node";
import { connectToDatabase } from "./lib/mongoose";
import Experience from "./models/Experience";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await connectToDatabase();
    const experiences = await Experience.find().sort({ order: 1 }).lean();
    return res.status(200).json(experiences);
  } catch (error) {
    console.error("[/api/experience]", error);
    return res.status(500).json({ error: "Failed to fetch experience data" });
  }
}

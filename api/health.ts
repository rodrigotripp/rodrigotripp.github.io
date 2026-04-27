import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    return res.status(200).json({
      ok: true,
      hasMongoUri: !!MONGODB_URI,
      nodeVersion: process.version,
      env: process.env.VERCEL_ENV,
    });
  } catch (error) {
    return res.status(500).json({ error: String(error) });
  }
}

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const steps: string[] = [];
  try {
    steps.push("start");
    const { connectToDatabase } = await import("./lib/mongoose");
    steps.push("imported mongoose");
    await connectToDatabase();
    steps.push("connected");
    return res.status(200).json({ ok: true, steps });
  } catch (error) {
    return res.status(500).json({ 
      error: String(error), 
      steps,
      stack: error instanceof Error ? error.stack : undefined
    });
  }
}

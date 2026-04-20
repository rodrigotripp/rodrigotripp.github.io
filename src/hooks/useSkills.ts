import { useQuery } from "@tanstack/react-query";
import type { SkillCategory } from "../types/api";

async function fetchSkills(): Promise<SkillCategory[]> {
  const res = await fetch("/api/skills");
  if (!res.ok) throw new Error("Failed to load skills data");
  return res.json() as Promise<SkillCategory[]>;
}

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
    staleTime: 1000 * 60 * 5,
  });
}

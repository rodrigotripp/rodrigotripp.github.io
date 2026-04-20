import { useQuery } from "@tanstack/react-query";
import type { Experience } from "../types/api";

async function fetchExperience(): Promise<Experience[]> {
  const res = await fetch("/api/experience");
  if (!res.ok) throw new Error("Failed to load experience data");
  return res.json() as Promise<Experience[]>;
}

export function useExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: fetchExperience,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

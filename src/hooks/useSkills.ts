import { useQuery } from "@tanstack/react-query";
import type { SkillCategory } from "../types/api";
import { sanityClient } from "../lib/sanity";

const query = `*[_type == "skillCategory"] | order(order asc) {
  _id, title, skills, order
}`;

export function useSkills() {
  return useQuery<SkillCategory[]>({
    queryKey: ["skills"],
    queryFn: () => sanityClient.fetch(query),
    staleTime: 1000 * 60 * 5,
  });
}

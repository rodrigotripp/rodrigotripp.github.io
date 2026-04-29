import { useQuery } from "@tanstack/react-query";
import type { Experience } from "../types/api";
import { sanityClient } from "../lib/sanity";

const query = `*[_type == "experience"] | order(order asc) {
  _id, title, company, date, duties, technologies, order
}`;

export function useExperience() {
  return useQuery<Experience[]>({
    queryKey: ["experience"],
    queryFn: () => sanityClient.fetch(query),
    staleTime: 1000 * 60 * 5,
  });
}

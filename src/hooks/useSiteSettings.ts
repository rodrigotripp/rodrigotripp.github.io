import { useQuery } from "@tanstack/react-query";
import type { SiteSettings } from "../types/api";
import { sanityClient } from "../lib/sanity";

const query = `*[_type == "siteSettings"][0] {
  name,
  photo { asset -> { url }, hotspot },
  bio,
  currentEmployer,
  location
}`;

export function useSiteSettings() {
  return useQuery<SiteSettings>({
    queryKey: ["siteSettings"],
    queryFn: () => sanityClient.fetch(query),
    staleTime: 1000 * 60 * 10,
  });
}

import { fetchSanityOrFallback } from "../../lib/sanity";
import type { SiteSettings } from "../../types/api";

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  name,
  photo { asset -> { url }, hotspot },
  bio,
  currentEmployer,
  location,
  socialLinks
}`;

export async function loadSiteSettings() {
  return fetchSanityOrFallback<SiteSettings | null>(siteSettingsQuery, null);
}

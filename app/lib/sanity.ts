import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "9kzufcna",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function fetchSanityOrFallback<T>(
  query: string,
  fallback: T,
  params?: Record<string, string | undefined>,
) {
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch {
    return fallback;
  }
}

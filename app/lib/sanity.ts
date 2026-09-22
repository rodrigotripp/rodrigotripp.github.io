import { createClient, type QueryParams } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "9kzufcna",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function fetchSanityWithFallback<T>(
  query: string,
  fallback: T,
  params?: QueryParams,
) {
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (error) {
    console.warn(
      "Failed to fetch data from Sanity, using fallback data instead.",
      error,
    );
    return fallback;
  }
}

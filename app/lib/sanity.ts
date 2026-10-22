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
  params?: Record<string, string | number | boolean | undefined>,
) {
  const sanitizedParams = params
    ? Object.fromEntries(
        Object.entries(params).filter(([, value]) => value !== undefined),
      )
    : undefined;

  try {
    if (!sanitizedParams) {
      return await sanityClient.fetch<T>(query);
    }

    return await sanityClient.fetch<T>(
      query,
      sanitizedParams as Record<string, string | number | boolean>,
    );
  } catch {
    return fallback;
  }
}

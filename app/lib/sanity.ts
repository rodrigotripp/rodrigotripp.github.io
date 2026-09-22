import { createClient, type QueryParams } from "@sanity/client";

const sanityFallbackErrorCodes = new Set([
  "EAI_AGAIN",
  "ECONNREFUSED",
  "ECONNRESET",
  "ENETUNREACH",
  "ENOTFOUND",
  "ETIMEDOUT",
]);

export const sanityClient = createClient({
  projectId: "9kzufcna",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

function shouldUseSanityFallback(error: unknown) {
  const code =
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof error.code === "string"
      ? error.code
      : null;

  return code !== null && sanityFallbackErrorCodes.has(code);
}

export async function fetchSanityWithFallback<T>(
  query: string,
  fallback: T,
  params?: QueryParams,
) {
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (error) {
    if (!shouldUseSanityFallback(error)) {
      throw error;
    }

    console.warn(
      "Failed to fetch data from Sanity, using fallback data instead.",
      error,
    );
    return fallback;
  }
}

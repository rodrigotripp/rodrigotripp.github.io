import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "9kzufcna",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

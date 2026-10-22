import { sanityClient } from "../../lib/sanity";
import type { BlogPost } from "../../types/api";
import { blogPostQuery } from "./data";

export async function loadBlogPost(slug: string | undefined) {
  if (!slug) {
    return null;
  }

  return sanityClient.fetch<BlogPost | null>(blogPostQuery, {
    slug,
  });
}

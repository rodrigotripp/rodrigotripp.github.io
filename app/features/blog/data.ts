import { fetchSanityOrFallback } from "../../lib/sanity";
import type { BlogPost } from "../../types/api";

export const blogListQuery = `*[_type == "blogPost" && defined(slug.current) && defined(publishedAt)] | order(order desc) {
  _id, title, slug, excerpt, tags, publishedAt, order
}`;

export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug && defined(slug.current) && defined(publishedAt)][0] {
  _id, title, slug, excerpt, content, tags, publishedAt, order
}`;

export async function loadBlogList() {
  return fetchSanityOrFallback<BlogPost[]>(blogListQuery, []);
}

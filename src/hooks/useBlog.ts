import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "../types/api";
import { sanityClient } from "../lib/sanity";

const blogListQuery = `*[_type == "blogPost"] | order(order desc) {
  _id, title, slug, excerpt, tags, publishedAt, order
}`;

const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id, title, slug, excerpt, content, tags, publishedAt, order
}`;

export function useBlogPosts() {
  return useQuery<BlogPost[]>({
    queryKey: ["blog"],
    queryFn: () => sanityClient.fetch(blogListQuery),
    staleTime: 1000 * 60 * 5,
  });
}

export function useBlogPost(slug: string) {
  return useQuery<BlogPost>({
    queryKey: ["blog", slug],
    queryFn: () => sanityClient.fetch(blogPostQuery, { slug }),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

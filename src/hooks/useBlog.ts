import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "../types/api";

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch("/api/blog");
  if (!res.ok) throw new Error("Failed to load blog posts");
  return res.json() as Promise<BlogPost[]>;
}

async function fetchBlogPost(slug: string): Promise<BlogPost> {
  const res = await fetch(`/api/blog/${slug}`);
  if (!res.ok) throw new Error("Failed to load blog post");
  return res.json() as Promise<BlogPost>;
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogPosts,
    staleTime: 1000 * 60 * 5,
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlogPost(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

import type { Config } from "@react-router/dev/config";
import { fetchSanityWithFallback } from "./app/lib/sanity";

export default {
  appDirectory: "app",
  routeDiscovery: {
    mode: "initial",
  },
  async prerender() {
    const slugs = await fetchSanityWithFallback<
      { slug: { current: string } }[]
    >(`*[_type == "blogPost" && defined(slug.current)]{ slug }`, []);
    return [
      "/",
      "/about",
      "/blog",
      "/music",
      ...slugs.map((p) => `/blog/${p.slug.current}`),
    ];
  },
} satisfies Config;

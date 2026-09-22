import type { Config } from "@react-router/dev/config";
import { sanityClient } from "./app/lib/sanity";

export default {
  appDirectory: "app",
  routeDiscovery: {
    mode: "initial",
  },
  async prerender() {
    const staticRoutes = ["/", "/about", "/blog", "/music"];

    try {
      const slugs: { slug: { current: string } }[] = await sanityClient.fetch(
        `*[_type == "blogPost"]{ slug }`,
      );

      return [...staticRoutes, ...slugs.map((p) => `/blog/${p.slug.current}`)];
    } catch {
      return staticRoutes;
    }
  },
} satisfies Config;

import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("blog", "routes/blog.tsx"),
    route("blog/:slug", "routes/blog.$slug.tsx"),
    route("music", "routes/music.tsx"),
  ]),
] satisfies RouteConfig;

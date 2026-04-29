import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import type { Plugin } from "vite";

// Intercepts /api/* requests in local dev, serving from public/api/*.json.
// Means `npm run dev` works without needing `vercel dev` or a DB connection.
function devApiPlugin(): Plugin {
  return {
    name: "dev-api",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/api/")) return next();

        const url = req.url.replace(/\?.*$/, "");
        const readJson = (name: string) => {
          const p = resolve(process.cwd(), `public/api/${name}.json`);
          return existsSync(p) ? JSON.parse(readFileSync(p, "utf-8")) : null;
        };

        res.setHeader("Content-Type", "application/json");

        const slugMatch = url.match(/^\/api\/blog\/(.+)$/);
        if (slugMatch) {
          const posts = readJson("blog") ?? [];
          const post = posts.find((p: { slug: string }) => p.slug === slugMatch[1]);
          if (!post) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "Post not found" }));
            return;
          }
          res.end(JSON.stringify(post));
          return;
        }

        if (url === "/api/blog") {
          const posts = readJson("blog") ?? [];
          const list = posts.map(({ content: _c, ...rest }: { content: unknown }) => rest);
          res.end(JSON.stringify(list));
          return;
        }

        if (url === "/api/experience") {
          res.end(JSON.stringify(readJson("experience") ?? []));
          return;
        }

        if (url === "/api/skills") {
          res.end(JSON.stringify(readJson("skills") ?? []));
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), tsconfigPaths(), devApiPlugin()],
  build: {
    outDir: "build",
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});

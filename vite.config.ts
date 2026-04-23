import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tsconfigPaths(),
    {
      // In dev, intercept /api/* requests and serve the matching JSON from
      // public/api/ instead of letting Vite transform the api/*.ts source files.
      name: "api-static-dev",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url ?? "";
          if (!url.startsWith("/api/")) return next();

          const name = url.replace("/api/", "").split("?")[0];
          const filePath = path.resolve(__dirname, `public/api/${name}`);

          if (fs.existsSync(filePath)) {
            res.setHeader("Content-Type", "application/json");
            res.end(fs.readFileSync(filePath, "utf-8"));
          } else {
            next();
          }
        });
      },
    },
  ],
  build: {
    outDir: "build",
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});

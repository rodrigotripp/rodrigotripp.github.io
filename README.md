# rodrigotripp.github.io

Personal portfolio site for Rodrigo Tripp €” built with React Router v7 framework mode, pre-rendered as static HTML at build time.

**Live:** [rodrigotripp.github.io](https://rodrigotripp.github.io)

## Tech Stack

- **[React Router v7](https://reactrouter.com)** €” framework mode with SSG pre-rendering
- **[Vite](https://vitejs.dev)** €” build tool
- **[Tailwind CSS v4](https://tailwindcss.com)** €” styling
- **[Sanity CMS](https://sanity.io)** €” content (blog posts, experience, site settings)
- **[Vercel](https://vercel.com)** €” deployment

## Project Structure

```
app/
  root.tsx           # HTML shell, global layout
  routes.ts          # Route definitions
  routes/
    _layout.tsx      # Shared sidebar layout + siteSettings loader
    home.tsx
    about.tsx        # Work experience + skills
    blog.tsx
    blog.$slug.tsx   # Dynamic blog post pages
    music.tsx
  components/        # Shared UI components
  lib/sanity.ts      # Sanity client
  types/api.ts       # TypeScript types

studio/              # Sanity Studio (content management)
```

## How SSG Works

Pages are pre-rendered to static HTML at **build time**. The `react-router.config.ts` fetches all blog slugs from Sanity and generates a route list, so every page €” including dynamic blog posts €” gets its own `index.html`.

To update content on the live site, trigger a new deploy (manually or via a Sanity webhook).

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev
```

### Sanity Studio

The CMS runs as a separate app in `studio/`:

```bash
cd studio
npm install
npm run dev  # http://localhost:3333
```

## Build & Deploy

```bash
npm run build
```

Output goes to `build/client/` €” static files ready for any CDN or Vercel.

### Keeping content fresh with Vercel webhooks

1. In Vercel †’ Settings †’ Git †’ **Deploy Hooks** †’ create a hook URL
2. In Sanity †’ API †’ **Webhooks** †’ paste that URL
3. Every publish in Sanity triggers an automatic rebuild (~30s)

## Adding Content

All content is managed through Sanity Studio. Schema types live in `studio/schemaTypes/`.

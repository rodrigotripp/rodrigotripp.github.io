// Converts blog.json (HTML content) into Sanity NDJSON import format.
// Run: node scripts/import-blogs-to-sanity.mjs
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const posts = JSON.parse(
  readFileSync(resolve(process.cwd(), "public/api/blog.json"), "utf-8"),
);

function htmlToPortableText(html) {
  const blocks = [];
  // Split on block-level tags
  const parts = html
    .replace(/<h2>(.*?)<\/h2>/g, "\x00h2\x00$1\x00end\x00")
    .replace(/<p>(.*?)<\/p>/gs, "\x00p\x00$1\x00end\x00")
    .split("\x00")
    .filter(Boolean);

  for (let i = 0; i < parts.length; i++) {
    const tag = parts[i];
    if (tag === "h2" || tag === "p") {
      const text = parts[i + 1] ?? "";
      const style = tag === "h2" ? "h2" : "normal";
      // Strip remaining HTML tags, preserving text
      const clean = text.replace(/<[^>]+>/g, "");
      blocks.push({
        _type: "block",
        _key: Math.random().toString(36).slice(2, 9),
        style,
        children: [{ _type: "span", _key: Math.random().toString(36).slice(2, 9), text: clean, marks: [] }],
        markDefs: [],
      });
      i++; // skip text part
    }
    // skip "end" markers
  }
  return blocks;
}

const docs = posts.map((post) => ({
  _id: `blog-${post.slug}`,
  _type: "blogPost",
  title: post.title,
  slug: { _type: "slug", current: post.slug },
  excerpt: post.excerpt,
  content: htmlToPortableText(post.content ?? ""),
  tags: post.tags ?? [],
  publishedAt: post.publishedAt,
  order: post.order,
}));

const ndjson = docs.map((d) => JSON.stringify(d)).join("\n");
writeFileSync(resolve(process.cwd(), "scripts/blog-import.ndjson"), ndjson);
console.log(`✅ Wrote ${docs.length} documents to scripts/blog-import.ndjson`);
console.log("Run: cd studio && npx sanity dataset import ../scripts/blog-import.ndjson production");

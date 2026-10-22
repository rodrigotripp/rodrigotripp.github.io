import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { PortableText } from "@portabletext/react";
import { loadBlogPost } from "../features/blog/post";
import { getFormattedDate } from "../lib/date";

export async function loader({ params }: LoaderFunctionArgs) {
  const post = await loadBlogPost(params.slug);

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return { post };
}

export default function BlogPostPage() {
  const { post } = useLoaderData<typeof loader>();
  const publishedAt = getFormattedDate(post.publishedAt);

  return (
    <section className="p-4 md:p-8 w-full">
      <div className="bg-white p-4 rounded-lg shadow-lg text-black md:p-6">
        <Link
          to="/blog"
          className="text-blue-600 text-sm hover:underline mb-6 inline-block"
        >
          ← Back to blog
        </Link>
        <article>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          {publishedAt && (
            <p className="text-gray-500 text-sm italic mb-6">{publishedAt}</p>
          )}
          {post.content && (
            <div className="blog-content prose max-w-none">
              <PortableText value={post.content} />
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

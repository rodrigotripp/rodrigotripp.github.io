import { Link, useParams } from "react-router";
import type { PortableTextBlock } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import Sidebar from "../shared/Sidebar";
import { useBlogPost } from "../hooks/useBlog";

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = useBlogPost(slug ?? "");

  return (
    <div className="flex flex-col-reverse justify-between md:flex-row w-full">
      <Sidebar />
      <section className="p-4 md:p-8 w-full">
        <div className="bg-white p-4 rounded-lg shadow-lg text-black md:p-6">
          <Link
            to="/blog"
            className="text-blue-600 text-sm hover:underline mb-6 inline-block"
          >
            ← Back to blog
          </Link>

          {isLoading && (
            <p className="text-gray-400 animate-pulse">Loading...</p>
          )}
          {isError && (
            <p className="text-red-500">Could not load this post.</p>
          )}

          {post && (
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
              <p className="text-gray-500 text-sm italic mb-6">
                {new Date(post.publishedAt).toLocaleDateString("en-FI", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              {post.content && (
                <div className="blog-content prose max-w-none">
                  <PortableText value={post.content} />
                </div>
              )}
            </article>
          )}
        </div>
      </section>
    </div>
  );
}

export default BlogPost;

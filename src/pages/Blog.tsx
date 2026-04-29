import { Link } from "react-router";
import Sidebar from "../shared/Sidebar";
import { useBlogPosts } from "../hooks/useBlog";

function Blog() {
  const { data: posts, isLoading, isError } = useBlogPosts();

  return (
    <div className="flex flex-col-reverse justify-between md:flex-row w-full">
      <Sidebar />
      <section className="p-4 md:p-8 w-full">
        <div className="bg-white p-4 rounded-lg shadow-lg text-black md:p-6">
          <h2 className="text-3xl mb-6 pb-2 border-b-2 border-stone-100">Blog</h2>

          {isLoading && (
            <p className="text-gray-400 animate-pulse">Loading posts...</p>
          )}
          {isError && (
            <p className="text-red-500">Could not load blog posts.</p>
          )}

          <div className="space-y-6">
            {posts?.map((post) => (
              <article key={post._id} className="p-4 rounded-lg shadow-md bg-slate-50">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl text-blue-600 font-semibold mb-1">
                  <Link to={`/blog/${post.slug.current}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-500 text-sm italic mb-3">
                  {new Date(post.publishedAt).toLocaleDateString("en-FI", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-700">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="inline-block mt-3 text-blue-600 text-sm font-medium hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}

            {posts?.length === 0 && !isLoading && (
              <p className="text-gray-400">No posts yet. Check back soon!</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;

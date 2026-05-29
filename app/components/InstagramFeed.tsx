// Instagram icon as an inline SVG (no extra dependency needed)
function InstagramIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// To add real posts: drop image files into src/img/instagram/ and update this array.
// Each entry needs an `image` path (relative to src) and the full Instagram post `url`.
const posts: { image: string; url: string; alt?: string }[] = [
  // Example:
  // { image: new URL("../img/instagram/post1.jpg", import.meta.url).href, url: "https://www.instagram.com/p/YOUR_POST_ID/", alt: "Post caption" },
];

const PROFILE_URL = "https://www.instagram.com/rdrgtrpp/";

function InstagramFeed() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Instagram</h3>
          <p className="text-gray-500 text-sm mt-0.5">
            Latest from{" "}
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              @rdrgtrpp
            </a>
          </p>
        </div>
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-800 transition-colors"
        >
          <InstagramIcon size={16} />
          Follow
        </a>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden rounded-lg bg-stone-100 group"
            >
              <img
                src={post.image}
                alt={post.alt ?? `Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      ) : (
        /* Placeholder shown until posts are added */
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <a
              key={i}
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center aspect-square rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors group"
            >
              <InstagramIcon
                size={28}
                className="text-stone-300 group-hover:text-teal-400 transition-colors"
              />
            </a>
          ))}
        </div>
      )}

      <p className="text-gray-400 text-xs mt-3">
        Visit{" "}
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline"
        >
          instagram.com/rdrgtrpp
        </a>{" "}
        to see all posts.
      </p>
    </div>
  );
}

export default InstagramFeed;

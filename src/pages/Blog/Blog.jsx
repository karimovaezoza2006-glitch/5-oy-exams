import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(9);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/posts?limit=${limit}`);
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error("Fetch posts error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">Blog</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay={post.id % 5 * 50}
          >
            {/* Post image */}
            <Link to={`/blog/${post.id}`}>
              <img
                src={`https://picsum.photos/seed/post-${post.id}/800/600`}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </Link>

            <div className="p-4">
              {/* Title */}
              <Link to={`/blog/${post.id}`}>
                <h2 className="text-lg sm:text-xl font-semibold mb-2 hover:text-blue-600 transition">
                  {post.title.length > 70
                    ? post.title.slice(0, 70) + "…"
                    : post.title}
                </h2>
              </Link>

              {/* Short description */}
              <p className="text-sm text-gray-600 mb-3">
                {post.body.length > 120
                  ? post.body.slice(0, 120) + "…"
                  : post.body}
              </p>

              {/* Tags + likes */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                  {post.tags?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* FIXED: Reactions object → likes only */}
                <div className="text-xs text-gray-500">
                  ❤️ {post.reactions?.likes ?? 0}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load more */}
      <div className="mt-8 flex items-center justify-center">
        <button
          onClick={() => setLimit((prev) => prev + 6)}
          className="px-6 py-3 bg-[#0b5fff] text-white rounded-lg shadow hover:bg-[#094ed8] transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Yuklanmoqda..." : "Ko‘proq ko‘rsat"}
        </button>
      </div>
    </div>
  );
}


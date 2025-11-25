import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Fetch post error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="text-center py-20">Yuklanmoqda...</div>;
  if (!post) return <div className="text-center py-20">Post topilmadi</div>;

  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-8 py-10">
      <Link to="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Orqaga
      </Link>

      {/* Post image */}
      <img
        src={`https://picsum.photos/seed/post-${post.id}/1200/600`}
        alt={post.title}
        className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-6"
        loading="lazy"
      />

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{post.title}</h1>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-4">
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Body */}
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">{post.body}</p>

      {/* Likes / reactions */}
      <div className="text-gray-500 text-sm">❤️ {post.reactions?.likes ?? 0} likes</div>
    </div>
  );
}

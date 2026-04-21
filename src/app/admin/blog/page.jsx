"use client";

import { useState, useEffect } from "react";

export default function AdminBlogPage() {

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    mediaType: "image",
    youtubeUrl: "",
    thumbnail: "",
    keywords: [],
  });

  const [blogs, setBlogs] = useState([]);
  const [seoScore, setSeoScore] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FETCH BLOGS
  const fetchBlogs = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // CREATE BLOG
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setSeoScore(data.seoScore);
    setLoading(false);

    alert("Blog Created Successfully");

    fetchBlogs();
  };

  // DELETE BLOG
  const deleteBlog = async (id) => {

    if (!confirm("Delete this blog?")) return;

    await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    fetchBlogs();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Create Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <select
            name="mediaType"
            value={form.mediaType}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="image">Image</option>
            <option value="youtube">YouTube Video</option>
          </select>

          {form.mediaType === "image" && (
            <input
              type="text"
              name="thumbnail"
              placeholder="Enter image path"
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          )}

          {form.mediaType === "youtube" && (
            <input
              type="text"
              name="youtubeUrl"
              placeholder="YouTube Video URL"
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          )}

          <textarea
            name="excerpt"
            placeholder="Short Description"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="content"
            rows="12"
            placeholder="HTML Content"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="keywords separated by comma"
            onChange={(e) => {
              const value = e.target.value;

              const keywordsArray = value
                .split(",")
                .map((item) => item.trim())
                .filter((item) => item !== "");

              setForm({ ...form, keywords: keywordsArray });
            }}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Create Blog
          </button>

        </form>

      </div>

      {/* BLOG LIST */}

      <div className="max-w-5xl mx-auto mt-16">

        <h2 className="text-2xl font-bold mb-6">
          All Blogs
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {blogs.map((blog) => (

            <div
              key={blog._id}
              className="bg-white p-6 shadow rounded-xl"
            >

              <h3 className="text-xl font-semibold mb-2">
                {blog.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {blog.excerpt}
              </p>

              <div className="flex gap-3">

                <a
                  href={`/admin/blog/edit/${blog._id}`}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </a>

                <button
                  onClick={() => deleteBlog(blog._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
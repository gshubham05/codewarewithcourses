"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlogPage() {

  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    thumbnail: "",
    mediaType: "image",
    youtubeUrl: "",
    keywords: []
  });

  // fetch blog
  useEffect(() => {

    const fetchBlog = async () => {

      const res = await fetch(`/api/blog/${id}`);
      const data = await res.json();

      setForm(data);
    };

    fetchBlog();

  }, [id]);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await fetch(`/api/blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    alert("Blog Updated Successfully");

    router.push("/admin/blog");

  };

  return (

    <div className="max-w-3xl mx-auto py-20">

      <h1 className="text-3xl font-bold mb-8">
        Edit Blog
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-3"
        />

        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          className="w-full border p-3"
        />

        <textarea
          name="content"
          rows="10"
          value={form.content}
          onChange={handleChange}
          className="w-full border p-3"
        />

        <input
          name="thumbnail"
          value={form.thumbnail}
          onChange={handleChange}
          className="w-full border p-3"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Update Blog
        </button>

      </form>

    </div>
  );
}
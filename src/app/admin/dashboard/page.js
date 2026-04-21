"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [students, setStudents] = useState([]);
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    date: "",
    readTime: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [activeTab, setActiveTab] = useState("blogs");
  const [imageFile, setImageFile] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Popup banner state
  const [popupForm, setPopupForm] = useState({
    imageUrl: "",
    linkUrl: "",
    altText: "",
    subtitle: "",
    enabled: false,
  });
  const [popupSaving, setPopupSaving] = useState(false);
  const [popupSaved, setPopupSaved] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin-auth");
    if (!token) {
      router.push("/admin/login");
    } else {
      setIsLoading(false);
      fetchBlogs();
      fetchStudents();
      fetchApplications();
      fetchPopup();
    }
  }, [router]);

  async function fetchPopup() {
    try {
      const res = await fetch("/api/popup");
      if (res.ok) {
        const data = await res.json();
        if (data && data.imageUrl !== undefined) {
          setPopupForm({
            imageUrl: data.imageUrl || "",
            linkUrl: data.linkUrl || "",
            altText: data.altText || "",
            subtitle: data.subtitle || "",
            enabled: data.enabled || false,
          });
        }
      }
    } catch {}
  }

  async function savePopup(e) {
    e.preventDefault();
    setPopupSaving(true);
    try {
      const res = await fetch("/api/popup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(popupForm),
      });
      if (res.ok) {
        setPopupSaved(true);
        setTimeout(() => setPopupSaved(false), 3000);
      }
    } catch {
      alert("Failed to save popup");
    } finally {
      setPopupSaving(false);
    }
  }

  async function fetchBlogs() {
    try {
      const { data } = await axios.get("/api/blogs");
      setBlogs(data);
    } catch {
      alert("Failed to fetch blogs");
    }
  }

  async function fetchStudents() {
    try {
      const token = localStorage.getItem("admin-auth");
      const { data } = await axios.get("/api/students", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudents(data);
    } catch {
      alert("Failed to fetch students");
    }
  }
  //fetch internship applications
  async function fetchApplications() {
    try {
      const token = localStorage.getItem("admin-auth");
      const { data } = await axios.get("/api/apply", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setApplications(data);
    } catch {
      alert("Failed to fetch applications");
    }
  }
  // delete internship application
  const handleDeleteIntern = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this intern record?"
    );
    if (!confirmDelete) return; // ❌ stop if user cancels

    try {
      const res = await fetch("/api/apply", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const result = await res.json();

      if (result.success) {
        setApplications(applications.filter((app) => app._id !== id));
        alert("Intern deleted successfully ✅");
      } else {
        alert("Failed to delete intern ❌");
      }
    } catch (error) {
      console.error("Error deleting intern:", error);
      alert("Something went wrong ❌");
    }
  };

  // ✅ Delete student
  const handleDeleteStudent = async (id) => {
    if (!confirm("Are you sure you want to delete this student?")) return;

    const res = await fetch(`/api/students?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Student deleted successfully!");
      fetchStudents(); // refresh list
    } else {
      alert("Failed to delete student");
    }
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => setImageFile(e.target.files[0]);

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || "Image upload failed");
    }
    return data.secure_url;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("admin-auth");
      let imageUrl = form.image;

      // Upload image if a new one was selected
      if (imageFile) {
        imageUrl = await uploadImageToCloudinary(imageFile);
        if (!imageUrl) {
          alert("Image upload failed");
          setLoading(false);
          return;
        }
      }

      const blogData = {
        ...form,
        image: imageUrl,
      };

      const config = { headers: { Authorization: `Bearer ${token}` } };

      if (editId) {
        await axios.put(`/api/blogs/${editId}`, blogData, config);
        alert("Blog updated");
      } else {
        await axios.post("/api/blogs", blogData, config);
        alert("Blog added");
      }

      // Reset form
      setForm({
        title: "",
        description: "",
        content: "",
        image: "",
        date: "",
        readTime: "",
        category: "",
      });
      setImageFile(null);
      setEditId(null);
      fetchBlogs();
    } catch (err) {
      console.error(
        "❌ Blog submission error:",
        err.response?.data || err.message
      );
      alert("Failed to save blog");
    } finally {
      setLoading(false);
    }
  }

  const handleEdit = (blog) => {
    setForm(blog);
    setEditId(blog._id);
    setImageFile(null);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      const token = localStorage.getItem("admin-auth");
      await axios.delete(`/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBlogs();
    } catch {
      alert("Delete failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    router.push("/admin/login");
  };

  if (isLoading) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-800 mt-[5rem]">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900 text-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-indigo-600 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold tracking-wide">Codeware</h1>
          <p className="text-indigo-300 mt-2 text-sm">Admin Panel</p>
        </div>
        <nav className="flex flex-col p-6 space-y-3 flex-grow">
          {["blogs", "students", "applications", "popup"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-5 py-3 text-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-indigo-500 shadow-lg"
                  : "hover:bg-indigo-600/70"
              }`}
            >
              {tab === "blogs"
                ? "📝 Manage Blogs"
                : tab === "students"
                ? "🎓 Student Details"
                : tab === "applications"
                ? "📋 Internship Apps"
                : "🖼️ Popup Banner"}
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="mt-auto bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg font-semibold"
          >
            Logout
          </button>
        </nav>
        <div className="p-6 border-t border-indigo-600 text-indigo-300 text-center text-sm">
          © 2025 Codeware
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-6 md:p-10 overflow-y-auto">
        {activeTab === "blogs" && (
          <>
            {/* Blog Form */}
            <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-14 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-indigo-700">
                {editId ? "Edit Blog" : "Add New Blog"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {["title", "description", "date", "readTime", "category"].map(
                  (field) => (
                    <input
                      key={field}
                      name={field}
                      placeholder={field[0].toUpperCase() + field.slice(1)}
                      value={form[field]}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  )
                )}
                <textarea
                  name="content"
                  placeholder="Content"
                  value={form.content}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-indigo-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <div>
                  <label className="block mb-1 font-semibold">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full"
                  />
                  {uploadingImage && (
                    <p className="text-indigo-600 mt-1">Uploading image...</p>
                  )}
                  {(imageFile || form.image) && (
                    <img
                      src={
                        imageFile ? URL.createObjectURL(imageFile) : form.image
                      }
                      alt="Preview"
                      className="mt-3 max-h-40 rounded-lg object-contain max-w-full"
                    />
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={loading || uploadingImage}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
                  >
                    {loading
                      ? editId
                        ? "Updating..."
                        : "Saving..."
                      : editId
                      ? "Update Blog"
                      : "Add Blog"}
                  </button>
                  {editId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditId(null);
                        setForm({
                          title: "",
                          description: "",
                          content: "",
                          image: "",
                          date: "",
                          readTime: "",
                          category: "",
                        });
                        setImageFile(null);
                      }}
                      className="px-6 py-3 rounded-lg border border-indigo-400 hover:bg-indigo-100 transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </section>

            {/* Blog List */}
            <section className="max-w-6xl mx-auto space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-indigo-700">
                Blogs
              </h2>
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col sm:flex-row justify-between gap-4"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-indigo-800">
                      {blog.title}
                    </h3>
                    <p className="text-indigo-600">{blog.description}</p>
                    {/* ✅ Renders blog.content as HTML */}
                    <div
                      className="prose mt-3"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                    {blog.image && (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="mt-2 max-h-28 rounded-md object-cover max-w-full"
                      />
                    )}
                  </div>
                  <div className="flex gap-3 self-start sm:self-center">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="px-4 py-2 bg-yellow-400 rounded-lg hover:bg-yellow-500 text-indigo-900 font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </>
        )}

        {activeTab === "students" && (
          <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-3xl font-extrabold mb-6 text-indigo-700">
              Student Details
            </h2>
            {students.length === 0 ? (
              <div className="text-center p-4 sm:p-5 text-indigo-600 font-semibold">
                No student data found.
              </div>
            ) : (
              <>
                {/* Table for larger screens */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full table-auto border-collapse text-left text-gray-800 text-base">
                    <thead>
                      <tr>
                        {["Name", "Email", "Phone", "Message"].map((h) => (
                          <th
                            key={h}
                            className="border-b border-gray-300 p-4 font-semibold"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((s, i) => (
                        <tr
                          key={s._id || i}
                          className={`${
                            i % 2 === 0 ? "bg-indigo-50" : "bg-indigo-100"
                          }`}
                        >
                          <td className="p-4 border-b truncate max-w-xs">
                            {s.name}
                          </td>
                          <td className="p-4 border-b truncate max-w-xs">
                            {s.email}
                          </td>
                          <td className="p-4 border-b truncate max-w-xs">
                            {s.phone}
                          </td>
                          <td className="p-4 border-b max-w-md">{s.message}</td>
                          <td className="p-2 border">
                            <button
                              onClick={() => handleDeleteStudent(s._id)}
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Card layout for mobile */}
                <div className="sm:hidden space-y-4">
                  {students.map((s, i) => (
                    <div
                      key={s._id || i}
                      className={`p-3 rounded-lg shadow border border-indigo-200 ${
                        i % 2 === 0 ? "bg-indigo-50" : "bg-indigo-100"
                      }`}
                    >
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-semibold text-indigo-700">
                            Name:
                          </span>{" "}
                          {s.name}
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">
                            Email:
                          </span>{" "}
                          <span className="break-words">{s.email}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">
                            Phone:
                          </span>{" "}
                          {s.phone}
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">
                            Message:
                          </span>{" "}
                          <span className="break-words">{s.message}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        )}

        {activeTab === "applications" && (
          <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-3xl font-extrabold mb-6 text-indigo-700">
              Internship Applications
            </h2>
            {applications.length === 0 ? (
              <div className="text-center p-4 sm:p-5 text-indigo-600 font-semibold">
                No applications found.
              </div>
            ) : (
              <>
                {/* Table for larger screens */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full table-auto border-collapse text-left text-gray-800 text-base">
                    <thead>
                      <tr>
                        {[
                          "Name",
                          "Email",
                          "Phone",
                          "College",
                          "Stream",
                          "Duration",
                          "Interest",
                        ].map((h) => (
                          <th
                            key={h}
                            className="border-b border-gray-300 p-4 font-semibold"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map((app, i) => (
                        <tr
                          key={app._id || i}
                          className={`${
                            i % 2 === 0 ? "bg-indigo-50" : "bg-indigo-100"
                          }`}
                        >
                          <td className="p-4 border-b truncate max-w-xs">
                            {app.name}
                          </td>
                          <td className="p-4 border-b truncate max-w-xs">
                            {app.email}
                          </td>
                          <td className="p-4 border-b truncate max-w-xs">
                            {app.phone}
                          </td>
                          <td className="p-4 border-b max-w-md">
                            {app.college}
                          </td>
                          <td className="p-4 border-b max-w-md">
                            {app.stream}
                          </td>
                          <td className="p-4 border-b truncate max-w-xs">
                            {app.duration}
                          </td>
                          <td className="p-4 border-b max-w-md">
                            {app.interest}
                          </td>
                          <td className="p-2 border">
                            <button
                              onClick={() => handleDeleteIntern(app._id)}
                              className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Card layout for mobile */}
                <div className="sm:hidden space-y-4">
                  {applications.map((app, i) => (
                    <div
                      key={app._id || i}
                      className={`p-3 rounded-lg shadow border border-indigo-200 ${
                        i % 2 === 0 ? "bg-indigo-50" : "bg-indigo-100"
                      }`}
                    >
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-semibold text-indigo-700">
                            Name:
                          </span>{" "}
                          {app.name}
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">
                            Email:
                          </span>{" "}
                          <span className="break-words">{app.email}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">
                            Phone:
                          </span>{" "}
                          {app.phone}
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">
                            College:
                          </span>{" "}
                          <span className="break-words">{app.college}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">
                            Stream:
                          </span>{" "}
                          <span className="break-words">{app.stream}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">
                            Duration:
                          </span>{" "}
                          {app.duration}
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">
                            Interest:
                          </span>{" "}
                          <span className="break-words">{app.interest}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        )}
        {activeTab === "popup" && (
          <section className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-1 text-indigo-700">
              🖼️ Popup Banner
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Show an advertisement or announcement popup to every new visitor on your website. Upload your banner image and configure it here.
            </p>

            <form onSubmit={savePopup} className="space-y-5">
              {/* Enable/Disable Toggle */}
              <div className="flex items-center justify-between bg-indigo-50 rounded-xl px-4 py-4 border border-indigo-100">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Popup Status</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {popupForm.enabled ? "🟢 Currently showing to visitors" : "🔴 Popup is hidden from visitors"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPopupForm((f) => ({ ...f, enabled: !f.enabled }))}
                  className={`relative w-14 h-7 rounded-full transition-colors flex-shrink-0 ${
                    popupForm.enabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                    popupForm.enabled ? "translate-x-7" : "translate-x-0"
                  }`} />
                </button>
              </div>

              {/* Image Upload OR URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Popup Image <span className="text-red-500">*</span>
                </label>

                {/* Upload from device */}
                <div className="border-2 border-dashed border-indigo-200 rounded-xl p-4 bg-indigo-50 mb-3">
                  <p className="text-xs text-indigo-700 font-semibold mb-2">📤 Upload from device (via Cloudinary)</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (!file) return;
                      setUploadingImage(true);
                      try {
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", "codewareit_blogs");
                        const res = await fetch("https://api.cloudinary.com/v1_1/democloud/image/upload", {
                          method: "POST",
                          body: formData,
                        });
                        const data = await res.json();
                        if (data.secure_url) {
                          setPopupForm((f) => ({ ...f, imageUrl: data.secure_url }));
                        }
                      } catch {
                        alert("Upload failed — paste URL manually below");
                      } finally {
                        setUploadingImage(false);
                      }
                    }}
                    className="block w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-indigo-600 file:text-white file:font-semibold hover:file:bg-indigo-700 cursor-pointer"
                  />
                  {uploadingImage && <p className="text-xs text-indigo-600 mt-2 animate-pulse">⏳ Uploading image…</p>}
                </div>

                {/* OR paste URL */}
                <div className="relative">
                  <span className="absolute -top-2.5 left-4 bg-white px-2 text-xs text-gray-400 font-medium">OR paste image URL</span>
                  <input
                    type="url"
                    placeholder="https://res.cloudinary.com/... or any image URL"
                    value={popupForm.imageUrl}
                    onChange={(e) => setPopupForm((f) => ({ ...f, imageUrl: e.target.value }))}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                </div>
              </div>

              {/* Live Preview */}
              {popupForm.imageUrl && (
                <div className="border border-dashed border-indigo-300 rounded-xl p-3 bg-indigo-50">
                  <p className="text-xs text-indigo-600 font-semibold mb-2 flex items-center gap-1">
                    👁️ Live Preview
                  </p>
                  <img
                    src={popupForm.imageUrl}
                    alt="Popup preview"
                    className="max-h-52 mx-auto rounded-lg object-contain shadow"
                    onError={(e) => { e.target.style.display = "none"; }}
                    onLoad={(e) => { e.target.style.display = "block"; }}
                  />
                </div>
              )}

              {/* Click Link */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Click-through Link <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="url"
                  placeholder="https://www.codewareit.in/Courses"
                  value={popupForm.linkUrl}
                  onChange={(e) => setPopupForm((f) => ({ ...f, linkUrl: e.target.value }))}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                />
                <p className="text-xs text-gray-400 mt-1">Where should visitors go when they click the popup? Leave empty for no link.</p>
              </div>

              {/* Alt text */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Image Description (SEO alt text)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Codeware IT Special Offer — 50% Off MERN Stack Course"
                  value={popupForm.altText}
                  onChange={(e) => setPopupForm((f) => ({ ...f, altText: e.target.value }))}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              {/* Subtitle / CTA text */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Bottom Caption <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Limited seats! Enroll today 🚀"
                  value={popupForm.subtitle}
                  onChange={(e) => setPopupForm((f) => ({ ...f, subtitle: e.target.value }))}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                />
                <p className="text-xs text-gray-400 mt-1">Shows as a banner below the image with a "Learn More" button.</p>
              </div>

              {/* Save */}
              <button
                type="submit"
                disabled={popupSaving || !popupForm.imageUrl}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all text-base shadow-lg"
              >
                {popupSaving ? "⏳ Saving…" : "💾 Save & Publish Popup"}
              </button>

              {popupSaved && (
                <div className="text-center text-green-700 font-semibold text-sm bg-green-50 border border-green-200 py-3 rounded-xl">
                  ✅ Popup saved! New visitors will see it on their first visit.
                </div>
              )}

              {/* Disable shortcut */}
              {popupForm.enabled && (
                <button
                  type="button"
                  onClick={() => {
                    setPopupForm((f) => ({ ...f, enabled: false }));
                    setTimeout(() => document.querySelector("form").requestSubmit?.(), 100);
                  }}
                  className="w-full border border-red-200 text-red-500 hover:bg-red-50 font-medium py-2.5 rounded-xl transition-all text-sm"
                >
                  🔴 Disable Popup (hide from visitors)
                </button>
              )}
            </form>

            {/* Tips */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>💡 Best Practices:</strong>
              <ul className="mt-2 space-y-1.5 text-xs">
                <li>✅ Recommended size: <strong>600×400px</strong> or <strong>800×600px</strong></li>
                <li>✅ Popup shows once per browser session — won't annoy repeat visitors</li>
                <li>✅ Add a click link to your Courses or Enroll page for best conversions</li>
                <li>✅ Use bright, high-contrast images with clear text for mobile readability</li>
                <li>✅ Test on mobile before publishing — most visitors are on phones</li>
              </ul>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

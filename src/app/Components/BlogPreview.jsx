import Link from "next/link";
import BlogCard from "./BlogCard";

// SSR fetch
async function getBlogs() {
  try {
    const res = await fetch("https://www.codewareit.in/api/blog", {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BlogPreview() {
  const blogs = await getBlogs();
  const topBlogs = blogs.slice(0, 6);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-14 sm:py-20 px-4 sm:px-6 lg:px-10" aria-labelledby="blog-heading">

      {/* Heading */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-3">
          📰 Latest from Our Blog
        </span>
        <h2 id="blog-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
          Coding Tips &amp; Career Guides
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          Stay updated with the latest in tech, exam tips, and placement advice from our experts.
        </p>
      </div>

      {topBlogs.length === 0 ? (
        <div className="text-center text-gray-400 py-10">No blogs yet. Check back soon!</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} index={index} />
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <Link
          href="/blog"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
        >
          View All Blogs →
        </Link>
      </div>
    </section>
  );
}

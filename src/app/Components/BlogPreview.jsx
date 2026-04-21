import Image from "next/image";
import Link from "next/link";

// ✅ Fetch blogs (SSR)
async function getBlogs() {
  try {
    const res = await fetch("https://www.codewareit.in/api/blog", {
      next: { revalidate: 60 },
    });
    // console.log(res)
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BlogPreview() {
  const blogs = await getBlogs();
  console.log("blogs ",blogs.slice(0,3))
  // ✅ Top 5 blogs
  const topBlogs = blogs.slice(0, 6);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-10">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Latest Blogs
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Explore trending articles & career guides
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {topBlogs.map((blog, index) => (
          <Link
            key={index}
            href={`/blog/${blog.slug}`}
            className="group relative block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
    

            {/* Image */}
            <div className="relative w-full h-52 sm:h-56 md:h-60">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* 🔥 Trending Badge */}
            {index < 3 && (
              <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
                🔥 Trending
              </span>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-4">
              <h3 className="text-white text-sm sm:text-lg font-semibold text-center leading-snug">
                {blog.title}
              </h3>
            </div>

          </Link>
        ))}

      </div>

      {/* CTA Button */}
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
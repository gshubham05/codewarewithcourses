import Link from "next/link";

// ─── SCHEMAS ─────────────────────────────────────────────────────────────────

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Codeware IT Pvt Ltd",
    url: "https://www.codewareit.in",
    logo: "https://www.codewareit.in/logo.png",
    telephone: "+91-9837218345",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248001",
      addressCountry: "IN",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function BlogListingSchema({ blogs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Codeware IT Blog",
    url: "https://www.codewareit.in/blog",
    blogPost: blogs?.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.excerpt || blog.description,
      image: blog.thumbnail,
      url: `https://www.codewareit.in/blog/${blog.slug}`,
      datePublished: blog.createdAt || new Date().toISOString(),
      dateModified: blog.updatedAt || blog.createdAt || new Date().toISOString(),
      author: { "@type": "Organization", name: "Codeware IT Pvt Ltd" },
    })) || [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// ─── METADATA ────────────────────────────────────────────────────────────────

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params?.page) || 1;
  const pageTitle = page > 1 ? ` — Page ${page}` : "";

  return {
    title: `Programming Blog${pageTitle} | Codeware IT Dehradun - MERN Stack, AI & Internship`,
    description: "Read latest blogs on MERN Stack, Next.js, AI, and internships at Codeware IT Dehradun.",
    keywords: ["MERN Stack course Dehradun", "Next.js training Dehradun", "AI course Dehradun", "coding institute Dehradun"],
    metadataBase: new URL("https://www.codewareit.in"),
    alternates: { canonical: page > 1 ? `/blog?page=${page}` : "/blog" },
    openGraph: {
      title: "Codeware IT Blog",
      description: "Latest tutorials & internship updates from Codeware IT.",
      url: "https://www.codewareit.in/blog",
      siteName: "Codeware IT",
      images: [{ url: "/og-blog.jpg", width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

// ─── DATA FETCHING ────────────────────────────────────────────────────────────

const POSTS_PER_PAGE = 9;

async function getBlogs() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_URL || "https://www.codewareit.in";
    const res = await fetch(`${baseUrl}/api/blog`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const allBlogs = await getBlogs();

  // ✅ CHANGED: Now showing ALL blogs (no filtering by status)
  const published = allBlogs;   // ← This was the main change

  const currentPage = parseInt(params?.page) || 1;
  const totalPages = Math.max(1, Math.ceil(published.length / POSTS_PER_PAGE));

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const blogs = published.slice(start, start + POSTS_PER_PAGE);

  const featured = currentPage === 1 && published.length > 0 ? published[0] : null;
  const gridBlogs = featured ? blogs.slice(1) : blogs;

  return (
    <>
      <LocalBusinessSchema />
      <BlogListingSchema blogs={published} />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-[#040A26] via-[#0d1b4b] to-purple-900 pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="mb-4 text-sm text-gray-400" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-purple-300">Blog</span>
            </nav>
            <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 rounded-full px-4 py-1.5 text-sm font-medium mb-4 border border-purple-500/30">
              📝 Knowledge Hub
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Codeware IT Blog
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Learn MERN Stack, Next.js, AI &amp; get internships in Dehradun 🚀
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>📚 {published.length} Articles</span>
              <span>🎯 Expert Guides</span>
              <span>🏆 Industry Insights</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

          {/* Featured Post */}
          {featured && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Featured Post</span>
              </div>
              <Link href={`/blog/${featured.slug}`}>
                <article className="group grid md:grid-cols-2 gap-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                  <div className="relative overflow-hidden" style={{ minHeight: "220px" }}>
                    <img
                      src={featured.thumbnail || "/og-blog.jpg"}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                    />
                  </div>
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                      ⭐ FEATURED
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight group-hover:text-purple-700 transition-colors mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-5 text-sm sm:text-base line-clamp-3">
                      {featured.excerpt || featured.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-5">
                      <span>🏢 Codeware IT</span>
                      <span>•</span>
                      <span>{new Date(featured.createdAt || Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all text-sm">
                      Read Full Article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )}

          {/* Blog Grid */}
          {gridBlogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {gridBlogs.map((blog) => (
                <Link key={blog._id} href={`/blog/${blog.slug}`}>
                  <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative overflow-hidden" style={{ height: "200px" }}>
                      <img
                        src={blog.thumbnail || "/og-blog.jpg"}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-purple-700 transition-colors mb-2 line-clamp-2">
                        {blog.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {blog.excerpt || blog.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4 mt-auto">
                        <span>{new Date(blog.createdAt || Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                        <span className="flex items-center gap-1 text-purple-600 font-medium">
                          Read more
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="text-5xl mb-4">📭</p>
              <p className="text-xl font-medium">No blogs yet. Check back soon!</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-12 flex justify-center items-center gap-2 flex-wrap" aria-label="Blog pagination">
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-purple-500 hover:text-purple-600 font-medium text-sm shadow-sm transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Prev
                </Link>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                const show = p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1;
                const ellipsisBefore = p === 2 && currentPage > 4;
                const ellipsisAfter = p === totalPages - 1 && currentPage < totalPages - 3;

                if (!show) return null;
                if (ellipsisBefore || ellipsisAfter) {
                  return <span key={p} className="text-gray-400 px-1">…</span>;
                }

                return (
                  <Link
                    key={p}
                    href={`/blog?page=${p}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                      p === currentPage
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-purple-500 hover:text-purple-600 shadow-sm"
                    }`}
                    aria-current={p === currentPage ? "page" : undefined}
                  >
                    {p}
                  </Link>
                );
              })}

              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:border-purple-500 hover:text-purple-600 font-medium text-sm shadow-sm transition-all"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}

              <span className="text-sm text-gray-400 ml-2 hidden sm:inline">
                Page {currentPage} of {totalPages}
              </span>
            </nav>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-purple-900 to-[#040A26] py-14 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Stay Updated with Codeware IT</h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">Get the latest tutorials, career tips and course updates.</p>
            <a
              href="https://wa.me/9837218345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-7 py-3.5 rounded-full font-semibold shadow-2xl hover:scale-105 transition-transform text-sm sm:text-base"
            >
              💬 Join Our WhatsApp Community
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
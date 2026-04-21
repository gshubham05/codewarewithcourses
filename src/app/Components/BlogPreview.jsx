import Image from "next/image";
import Link from "next/link";

async function getBlogs() {
  try {
    const res = await fetch("https://www.codewareit.in/api/blog", { next: { revalidate: 60 } });
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .blog-section { font-family: 'DM Sans', sans-serif; }
        .blog-card {
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          position: relative; overflow: hidden;
        }
        .blog-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.5); }
        .blog-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(124,58,237,0.08), rgba(37,99,235,0.06));
          opacity: 0; transition: opacity 0.35s;
          pointer-events: none; z-index: 1;
        }
        .blog-card:hover::before { opacity: 1; }
        .blog-img img { transition: transform 0.5s ease; }
        .blog-card:hover .blog-img img { transform: scale(1.07); }
        .tag-pill { transition: all 0.2s; }
        .blog-card:hover .tag-pill { background: rgba(124,58,237,0.25); color: #c084fc; }
        .read-more { transition: all 0.2s; }
        .blog-card:hover .read-more { gap: 0.5rem; color: #a855f7; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .float-anim { animation: float 4s ease-in-out infinite; }
        .float-anim-d { animation: float 5s ease-in-out 1s infinite; }
      `}</style>

      <section className="blog-section py-20 sm:py-28 bg-[#030820] relative overflow-hidden" aria-labelledby="blog-heading">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-700/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-700/5 rounded-full blur-3xl pointer-events-none" />
        {/* Floating decorative shapes */}
        <div className="float-anim absolute top-20 right-20 w-16 h-16 border border-purple-500/20 rounded-2xl rotate-12 hidden lg:block pointer-events-none" />
        <div className="float-anim-d absolute bottom-32 left-16 w-10 h-10 border border-blue-500/20 rounded-xl -rotate-6 hidden lg:block pointer-events-none" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"48px 48px"}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4">
              ✍️ Knowledge Hub
            </span>
            <h2 id="blog-heading" className="text-3xl sm:text-5xl font-extrabold text-white mb-4" style={{fontFamily:"'Syne',sans-serif"}}>
              Articles &amp; Career<br/>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Guides for You</span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
              Stay ahead with the latest in tech, career tips, coding tutorials, and industry insights.
            </p>
          </div>

          {topBlogs.length > 0 ? (
            <>
              {/* Featured + side cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                {/* Featured large card */}
                {topBlogs[0] && (
                  <Link href={`/blog/${topBlogs[0].slug}`} className="blog-card lg:col-span-2 bg-[#0a1240] border border-white/8 rounded-2xl flex flex-col" aria-label={topBlogs[0].title}>
                    <div className="blog-img relative w-full h-56 sm:h-72 lg:h-80 overflow-hidden rounded-t-2xl">
                      <Image src={topBlogs[0].thumbnail || "/blog-placeholder.jpg"} alt={topBlogs[0].title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1240] via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 bg-amber-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-10">🔥 Featured</span>
                    </div>
                    <div className="p-5 sm:p-7 flex flex-col flex-1 relative z-10">
                      <span className="tag-pill text-[10px] font-bold bg-purple-500/15 text-purple-400 border border-purple-500/25 px-2.5 py-1 rounded-lg w-fit mb-3">{topBlogs[0].category || "Tutorial"}</span>
                      <h3 className="text-white font-bold text-lg sm:text-xl leading-snug mb-2 line-clamp-2">{topBlogs[0].title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">{topBlogs[0].excerpt || topBlogs[0].metaDescription || ""}</p>
                      <span className="read-more flex items-center gap-2 text-gray-400 text-sm font-semibold">
                        Read Article <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </Link>
                )}

                {/* Side cards */}
                <div className="flex flex-col gap-5">
                  {topBlogs.slice(1, 3).map((blog, i) => (
                    <Link key={i} href={`/blog/${blog.slug}`} className="blog-card bg-[#0a1240] border border-white/8 rounded-2xl flex overflow-hidden h-36 sm:h-40" aria-label={blog.title}>
                      <div className="blog-img relative w-28 sm:w-36 flex-shrink-0 overflow-hidden">
                        <Image src={blog.thumbnail || "/blog-placeholder.jpg"} alt={blog.title} fill className="object-cover" />
                      </div>
                      <div className="p-4 flex flex-col justify-between flex-1 relative z-10">
                        <div>
                          <span className="tag-pill text-[9px] font-bold bg-purple-500/15 text-purple-400 px-2 py-0.5 rounded-md">{blog.category || "Tips"}</span>
                          <h3 className="text-white font-semibold text-sm leading-snug mt-1.5 line-clamp-2">{blog.title}</h3>
                        </div>
                        <span className="read-more flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                          Read <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {topBlogs.slice(3, 6).map((blog, i) => (
                  <Link key={i} href={`/blog/${blog.slug}`} className="blog-card bg-[#0a1240] border border-white/8 rounded-2xl overflow-hidden flex flex-col" aria-label={blog.title}>
                    <div className="blog-img relative w-full h-44 overflow-hidden">
                      <Image src={blog.thumbnail || "/blog-placeholder.jpg"} alt={blog.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1240]/80 to-transparent" />
                      {i === 0 && <span className="absolute top-3 left-3 bg-blue-500 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase z-10">Trending</span>}
                    </div>
                    <div className="p-4 flex flex-col flex-1 relative z-10">
                      <span className="tag-pill text-[9px] font-bold bg-purple-500/15 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded-md w-fit mb-2">{blog.category || "Career"}</span>
                      <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2">{blog.title}</h3>
                      <span className="read-more flex items-center gap-2 text-gray-500 text-xs font-medium mt-auto pt-2">
                        Read More <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            /* Placeholder state */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-[#0a1240] border border-white/8 rounded-2xl overflow-hidden">
                  <div className="h-44 bg-white/5 animate-pulse" />
                  <div className="p-4 space-y-2">
                    <div className="h-3 w-16 bg-white/5 rounded animate-pulse" />
                    <div className="h-4 w-4/5 bg-white/5 rounded animate-pulse" />
                    <div className="h-3 w-3/5 bg-white/5 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 border border-white/20 hover:border-purple-500/50 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-sm transition-all hover:bg-white/5">
              Explore All Articles →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

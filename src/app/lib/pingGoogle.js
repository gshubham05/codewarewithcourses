export async function pingGoogle() {
  const sitemap = "https://www.codewareit.in/sitemap.xml";
  const sitemapBlog = "https://www.codewareit.in/sitemap-blog.xml";

  const pings = [
    // Google Ping
    fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`),
    fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapBlog)}`),
    // Bing Ping
    fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`),
  ];

  try {
    await Promise.allSettled(pings);
    console.log("[SEO] Pinged Google & Bing sitemaps ✅");
  } catch (err) {
    console.warn("[SEO] Ping partial failure:", err.message);
  }
}

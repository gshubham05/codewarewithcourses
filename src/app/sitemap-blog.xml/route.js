import { connectDB } from "../lib/db";
import Blog from "../models/Blog";
import { pingGoogle } from "../lib/pingGoogle";

export const revalidate = 3600; // refresh every hour

export async function GET() {
  await connectDB();

  const blogs = await Blog.find({ status: "published" }).lean();
  const baseUrl = "https://www.codewareit.in";

  const urls = blogs.map((blog) => `
  <url>
    <loc>${baseUrl}/blog/${blog.slug}</loc>
    <lastmod>${new Date(blog.updatedAt || blog.createdAt || Date.now()).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  // Auto-ping Google & Bing on every sitemap fetch (rate-limited by revalidate)
  pingGoogle().catch(() => {});

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

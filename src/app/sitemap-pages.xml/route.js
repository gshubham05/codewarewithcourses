import { pingGoogle } from "../../lib/pingGoogle";

export const revalidate = 86400;

export async function GET() {
  const baseUrl = "https://www.codewareit.in";
  const now = new Date().toISOString();

  const staticPages = [
    { url: "/",                                          priority: "1.0", changefreq: "daily"   },
    { url: "/Courses",                                   priority: "0.9", changefreq: "weekly"  },
    { url: "/blog",                                      priority: "0.9", changefreq: "daily"   },
    { url: "/Aboutus",                                   priority: "0.8", changefreq: "monthly" },
    { url: "/apply",                                     priority: "0.8", changefreq: "monthly" },
    { url: "/intern",                                    priority: "0.8", changefreq: "weekly"  },
    { url: "/Students",                                  priority: "0.7", changefreq: "weekly"  },
    { url: "/Team",                                      priority: "0.7", changefreq: "monthly" },
    { url: "/PrivacyPolicy",                             priority: "0.5", changefreq: "yearly"  },
    { url: "/Coursescoding",                             priority: "0.8", changefreq: "monthly" },
    { url: "/Coursesnoncoding",                          priority: "0.8", changefreq: "monthly" },
    { url: "/contact",                                   priority: "0.8", changefreq: "monthly" },
    // ── SEO Course Pages ──
    { url: "/courses/icse-class-9-java-dehradun",        priority: "0.9", changefreq: "monthly" },
    { url: "/courses/icse-class-10-java-dehradun",       priority: "0.9", changefreq: "monthly" },
    { url: "/courses/cbse-class-11-python-dehradun",     priority: "0.9", changefreq: "monthly" },
    { url: "/courses/cbse-class-12-python-dehradun",     priority: "0.9", changefreq: "monthly" },
    { url: "/courses/java-python-programming-dehradun",  priority: "0.9", changefreq: "monthly" },
    { url: "/courses/web-development-course-dehradun",   priority: "0.9", changefreq: "monthly" },
    { url: "/courses/react-js-course-dehradun",          priority: "0.9", changefreq: "monthly" },
    { url: "/courses/nextjs-course-dehradun",            priority: "0.9", changefreq: "monthly" },
    { url: "/courses/frontend-course-dehradun",          priority: "0.9", changefreq: "monthly" },
    { url: "/courses/backend-course-dehradun",           priority: "0.9", changefreq: "monthly" },
    { url: "/courses/fullstack-course-dehradun",         priority: "0.9", changefreq: "monthly" },
  ];

  const urls = staticPages
    .map(
      ({ url, priority, changefreq }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  pingGoogle().catch(() => {});

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

import { pingGoogle } from "../lib/pingGoogle";

export const revalidate = 86400;

export async function GET() {
  const baseUrl = "https://www.codewareit.in";
  const now = new Date().toISOString();

  /**
   * URL STRATEGY (SEO-Optimised, all lowercase):
   * ─────────────────────────────────────────────
   * Main pages  → keyword-rich lowercase slugs
   * Course pages → /courses/* (lowercase, already SEO-slug)
   * Old uppercase paths kept alive via Next.js redirect() so no 404s
   */
  const staticPages = [
    // ── Core Pages ───────────────────────────────────────────────────
    { url: "/",                                                                    priority: "1.0", changefreq: "daily"   },
    { url: "/about-best-computer-coding-institute-in-dehradun",                   priority: "0.9", changefreq: "monthly" },
    { url: "/courses-best-computer-coding-institute-in-dehradun",                 priority: "0.9", changefreq: "weekly"  },
    { url: "/blog",                                                                priority: "0.9", changefreq: "daily"   },
    { url: "/internship-best-computer-coding-institute-in-dehradun",              priority: "0.8", changefreq: "weekly"  },
    { url: "/students-best-computer-coding-institute-in-dehradun",                priority: "0.7", changefreq: "weekly"  },
    { url: "/apply",                                                               priority: "0.8", changefreq: "monthly" },
    { url: "/contact",                                                             priority: "0.8", changefreq: "monthly" },
    { url: "/PrivacyPolicy",                                                       priority: "0.4", changefreq: "yearly"  },

    // ── Course Sub-Pages (lowercase slugs) ───────────────────────────
    { url: "/courses/icse-class-9-java-dehradun",                                 priority: "0.9", changefreq: "monthly" },
    { url: "/courses/icse-class-10-java-dehradun",                                priority: "0.9", changefreq: "monthly" },
    { url: "/courses/cbse-class-11-python-dehradun",                              priority: "0.9", changefreq: "monthly" },
    { url: "/courses/cbse-class-12-python-dehradun",                              priority: "0.9", changefreq: "monthly" },
    { url: "/courses/java-python-programming-dehradun",                           priority: "0.9", changefreq: "monthly" },
    { url: "/courses/web-development-course-dehradun",                            priority: "0.9", changefreq: "monthly" },
    { url: "/courses/react-js-course-dehradun",                                   priority: "0.9", changefreq: "monthly" },
    { url: "/courses/nextjs-course-dehradun",                                     priority: "0.9", changefreq: "monthly" },
    { url: "/courses/frontend-course-dehradun",                                   priority: "0.9", changefreq: "monthly" },
    { url: "/courses/backend-course-dehradun",                                    priority: "0.9", changefreq: "monthly" },
    { url: "/courses/fullstack-course-dehradun",                                  priority: "0.9", changefreq: "monthly" },

    // ── Google Ads Landing Pages (Task 2) — Top-level keyword URLs ────────────
    { url: "/java-course-dehradun",                                               priority: "1.0", changefreq: "weekly"  },
    { url: "/python-course-dehradun",                                             priority: "1.0", changefreq: "weekly"  },
    { url: "/mern-stack-course-dehradun",                                         priority: "1.0", changefreq: "weekly"  },
    { url: "/react-js-course-dehradun",                                           priority: "1.0", changefreq: "weekly"  },
    { url: "/nodejs-course-dehradun",                                             priority: "1.0", changefreq: "weekly"  },
    { url: "/full-stack-course-dehradun",                                         priority: "1.0", changefreq: "weekly"  },
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

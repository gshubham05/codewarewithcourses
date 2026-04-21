/**
 * Dynamic SEO helpers for CodewareIT
 * Generates rich, page-specific metadata objects for Next.js generateMetadata()
 */

const SITE_URL = "https://www.codewareit.in";
const SITE_NAME = "Codeware IT Pvt Ltd";
const DEFAULT_IMAGE = "/og-image.jpg";

/**
 * Build complete metadata for any page
 * @param {Object} opts
 * @param {string} opts.title
 * @param {string} opts.description
 * @param {string[]} [opts.keywords]
 * @param {string} [opts.canonical]  - e.g. "/blog"
 * @param {string} [opts.image]      - path or full URL
 * @param {"website"|"article"} [opts.type]
 * @param {Object} [opts.article]    - article metadata (publishedTime, modifiedTime, tags)
 * @returns {import("next").Metadata}
 */
export function buildMetadata({
  title,
  description,
  keywords = [],
  canonical = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  article = null,
}) {
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const canonicalUrl = canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`;

  return {
    title,
    description,
    keywords: [
      ...keywords,
      "coding institute Dehradun",
      "IT training Dehradun",
      "MERN Stack Dehradun",
      "Codeware IT",
    ],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      ...(article && {
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        tags: article.tags,
        authors: [SITE_URL],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@codewareit",
      site: "@codewareit",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Generate blog post metadata
 */
export function buildBlogMetadata(blog) {
  return buildMetadata({
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.excerpt || blog.description || "",
    keywords: blog.seoKeywords || [],
    canonical: `/blog/${blog.slug}`,
    image: blog.thumbnail || DEFAULT_IMAGE,
    type: "article",
    article: {
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt || blog.createdAt,
      tags: blog.seoKeywords || [],
    },
  });
}

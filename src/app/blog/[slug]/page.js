import { connectDB } from "@/app/lib/db";
import Blog from "@/app/models/Blog";
import { buildBlogMetadata } from "@/app/lib/seoHelpers";

export async function generateMetadata({ params }) {
  await connectDB();

  const { slug } = await params;
  const blog = await Blog.findOne({
    slug: slug,
    status: "published",
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // 🔥 If Blog Not Found → Custom SEO
  if (!blog) {
    const fallbackTitle =
      "Best Computer Institute in Dehradun for Coding, Programming & Internship | Codeware IT Pvt Ltd";

    const fallbackDescription =
      "Codeware IT Pvt Ltd is the best computer institute in Dehradun offering Java, Python, Full Stack Development, internships, and industry-oriented programming courses.";

    return {
      title: fallbackTitle,
      description: fallbackDescription,
      keywords:
        "best computer institute in dehradun, coding classes, programming institute, internship in dehradun, java training, python training, full stack course",
      alternates: {
        canonical: `${siteUrl}/blog`,
      },
      robots: { index: true, follow: true },
      openGraph: {
        title: fallbackTitle,
        description: fallbackDescription,
        url: `${siteUrl}/blog`,
        siteName: "Codeware IT Pvt. Ltd.",
        images: [
          {
            url: `${siteUrl}/logo.png`,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: fallbackTitle,
        description: fallbackDescription,
        images: [`${siteUrl}/logo.png`],
      },
    };
  }

  // ✅ If Blog Exists → Normal SEO
  const title = blog.seoTitle || `${blog.title} | Codeware IT Dehradun`;

  const description =
    blog.seoDescription ||
    blog.excerpt?.slice(0, 160) ||
    "Codeware IT Dehradun - Professional coding and programming institute.";

  return {
    title,
    description,
    keywords: blog.seoKeywords?.join(", "),
    alternates: {
      canonical: `${siteUrl}/blog/${blog.slug}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/blog/${blog.slug}`,
      siteName: "Codeware IT Pvt. Ltd.",
      images: blog.thumbnail
        ? [{ url: blog.thumbnail }]
        : [{ url: `${siteUrl}/logo.png` }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: blog.thumbnail ? [blog.thumbnail] : [`${siteUrl}/logo.png`],
    },
  };
}

export default async function BlogPage({ params }) {
  await connectDB();
  const { slug } = await params;
  const blog = await Blog.findOne({
    slug: slug,
  });

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
          {blog.title}
        </h1>

        {/* Date */}
        <p className="text-gray-500 text-sm mb-10">
          {new Date(blog.createdAt).toDateString()}
        </p>

        {/* Featured Image */}
        {blog.mediaType === "image" && blog.thumbnail && (
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full rounded-xl mb-10"
          />
        )}

        {/* YouTube */}
        {blog.mediaType === "youtube" && blog.youtubeUrl && (
          <div className="aspect-video mb-10">
            <iframe
              src={blog.youtubeUrl.replace("watch?v=", "embed/")}
              className="w-full h-full rounded-xl"
              allowFullScreen
            />
          </div>
        )}

        {/* Content */}
        <article
          className="prose prose-lg max-w-none
                     prose-headings:text-gray-900
                     prose-p:text-gray-700
                     prose-p:leading-relaxed
                     prose-li:text-gray-700
                     prose-strong:text-black
                     prose-h2:text-2xl
                     prose-h3:text-xl"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}

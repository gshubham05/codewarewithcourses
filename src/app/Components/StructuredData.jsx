export default function StructuredData({ blog }) {
    const schema = {
      "@context": "https://schema.org",
      "@type":
        blog.mediaType === "youtube"
          ? "VideoObject"
          : "BlogPosting",
      headline: blog.title,
      description: blog.seoDescription,
      image: blog.thumbnail,
      datePublished: blog.createdAt,
      author: {
        "@type": "Organization",
        name: "Codeware IT Pvt. Ltd.",
      },
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    );
  }
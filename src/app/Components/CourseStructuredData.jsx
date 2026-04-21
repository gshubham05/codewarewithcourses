/**
 * CourseStructuredData — JSON-LD for Google Rich Results + Google Ads Quality Score
 * Add to every course landing page for better SEO & ad relevance.
 */
export default function CourseStructuredData({ course }) {
  const baseUrl = "https://www.codewareit.in";
  const courseUrl = `${baseUrl}/Courses/${course.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.metaDescription,
    url: courseUrl,
    provider: {
      "@type": "Organization",
      name: "Codeware IT Pvt Ltd",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Street Address", // UPDATE THIS
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        postalCode: "248001",
        addressCountry: "IN",
      },
      telephone: "+91-9837218345",
      sameAs: [
        "https://www.instagram.com/codewareit",
        "https://www.facebook.com/codewareit",
        "https://www.youtube.com/@codewareit",
      ],
    },
    courseMode: ["onsite", "online"],
    educationalLevel: course.badge,
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: course.targetAudience,
    },
    teaches: course.syllabus,
    timeRequired: `P${course.duration.replace(" Months", "M").replace("–", "-")}`,
    inLanguage: "en-IN",
    isAccessibleForFree: false,
    offers: {
      "@type": "Offer",
      category: "Course Enrollment",
      availability: "https://schema.org/InStock",
      url: courseUrl,
      validFrom: new Date().toISOString().split("T")[0],
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      location: {
        "@type": "Place",
        name: "Codeware IT Pvt Ltd",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dehradun",
          addressRegion: "Uttarakhand",
          addressCountry: "IN",
        },
      },
      instructor: {
        "@type": "Person",
        name: "Codeware IT Faculty",
        affiliation: "Codeware IT Pvt Ltd",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

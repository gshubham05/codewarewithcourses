/**
 * CourseStructuredData — JSON-LD for Google Rich Results + Google Ads Quality Score
 * Outputs Course + FAQPage schema for every landing page.
 * Address: 6/6 Karanpur & Rajpur Road, Dehradun, Uttarakhand 248001
 */
export default function CourseStructuredData({ course }) {
  const baseUrl = "https://www.codewareit.in";
  // Support both /courses/slug and /slug (top-level) URL patterns
  const courseUrl = `${baseUrl}/${course.slug}`;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.metaDescription,
    url: courseUrl,
    image: `${baseUrl}/og-image.jpg`,
    provider: {
      "@type": "Organization",
      name: "Codeware IT Pvt Ltd",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "6/6 Karanpur & Rajpur Road",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        postalCode: "248001",
        addressCountry: "IN",
      },
      telephone: "+91-9837218345",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "47",
        bestRating: "5",
      },
    },
    courseMode: ["onsite", "online"],
    educationalLevel: "Beginner to Advanced",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: course.targetAudience,
    },
    teaches: course.syllabus,
    inLanguage: ["hi-IN", "en-IN"],
    isAccessibleForFree: false,
    offers: {
      "@type": "Offer",
      category: "Course Enrollment",
      availability: "https://schema.org/InStock",
      url: courseUrl,
      priceCurrency: "INR",
      validFrom: "2025-01-01",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      courseSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        byDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      },
      location: {
        "@type": "Place",
        name: "Codeware IT Pvt Ltd — Dehradun",
        address: {
          "@type": "PostalAddress",
          streetAddress: "6/6 Karanpur & Rajpur Road",
          addressLocality: "Dehradun",
          addressRegion: "Uttarakhand",
          postalCode: "248001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "30.3523",
          longitude: "78.0536",
        },
      },
      instructor: {
        "@type": "Person",
        name: course.instructor ? course.instructor.split(" —")[0] : "Codeware IT Faculty",
        affiliation: {
          "@type": "Organization",
          name: "Codeware IT Pvt Ltd",
        },
      },
      startDate: course.batchDate || "2025-05-05",
    },
    // Student testimonials as Review
    review: (course.testimonials || []).map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: String(t.rating), bestRating: "5" },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.text,
    })),
  };

  // Per-course FAQPage schema (boosts Quality Score for Google Ads)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is the ${course.title} available offline in Dehradun?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer both offline classes at 6/6 Karanpur & Rajpur Road, Dehradun and live online sessions.",
        },
      },
      {
        "@type": "Question",
        name: `How long is the ${course.title} at CodewareIT Dehradun?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The ${course.title} is ${course.duration} long. Batches run Monday–Saturday with morning, afternoon, and evening options.`,
        },
      },
      {
        "@type": "Question",
        name: "Does CodewareIT Dehradun provide placement support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — placement support includes resume building, mock interviews, LinkedIn profile optimisation, and referrals to our hiring partner companies in Dehradun and across India.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a free demo class available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Book a 100% free demo class with no obligation via WhatsApp (+91 98372 18345) or by filling the form on this page.",
        },
      },
      {
        "@type": "Question",
        name: "What is the batch size at CodewareIT Dehradun?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We keep batches small — maximum 10–15 students — so every student gets personal attention from the instructor.",
        },
      },
      {
        "@type": "Question",
        name: "Will I get a certificate after completing the course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every student receives a Codeware IT course completion certificate recognised by employers and institutions across Uttarakhand.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema, null, 2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 2) }}
      />
    </>
  );
}

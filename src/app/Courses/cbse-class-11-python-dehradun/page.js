// import courseData from "../../courses/courseData";
// import CourseLandingPage from "../../courses/CourseLandingPage";
import CourseStructuredData from "../../Components/CourseStructuredData";
import courseData from "../courseData";
import CourseLandingPage from "../CourseLandingPage";

const SLUG = "cbse-class-11-python-dehradun";

export async function generateMetadata() {
  const course = courseData[SLUG];
  return {
    title: course.metaTitle,
    description: course.metaDescription,
    keywords: course.keywords,
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      url: "https://www.codewareit.in/courses/" + SLUG,
      siteName: "Codeware IT Pvt Ltd",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: course.metaTitle,
      description: course.metaDescription,
    },
    alternates: {
      canonical: "https://www.codewareit.in/courses/" + SLUG,
    },
  };
}

export default function Page() {
  const course = courseData[SLUG];
  return (
    <>
      <CourseStructuredData course={course} />
      <CourseLandingPage course={course} />
    </>
  );
}

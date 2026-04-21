import { google } from "googleapis";

/**
 * Submits a URL to Google Indexing API (URL_UPDATED or URL_DELETED).
 * Requires: google-indexing-key.json in project root
 * Setup: https://developers.google.com/search/apis/indexing-api/v3/quickstart
 */
export async function indexURL(url, type = "URL_UPDATED") {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "google-indexing-key.json",
      scopes: ["https://www.googleapis.com/auth/indexing"],
    });

    const client = await auth.getClient();

    const indexing = google.indexing({
      version: "v3",
      auth: client,
    });

    const result = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: type, // "URL_UPDATED" or "URL_DELETED"
      },
    });

    console.log(`[Indexing] ✅ Submitted: ${url}`);
    return result.data;
  } catch (err) {
    console.error(`[Indexing] ❌ Failed for ${url}:`, err.message);
    throw err;
  }
}

/**
 * Batch index multiple URLs (respects Google's 200/day limit)
 */
export async function indexMultipleURLs(urls) {
  const results = [];
  for (const url of urls) {
    try {
      const res = await indexURL(url);
      results.push({ url, status: "success", data: res });
      // Small delay to avoid rate-limiting
      await new Promise((r) => setTimeout(r, 200));
    } catch (err) {
      results.push({ url, status: "error", error: err.message });
    }
  }
  return results;
}

/**
 * All course and important URLs to auto-index
 */
export const INDEXABLE_URLS = [
  "https://www.codewareit.in/",
  "https://www.codewareit.in/Courses",
  "https://www.codewareit.in/Courses/icse-class-9-java-dehradun",
  "https://www.codewareit.in/Courses/icse-class-10-java-dehradun",
  "https://www.codewareit.in/Courses/cbse-class-11-python-dehradun",
  "https://www.codewareit.in/Courses/cbse-class-12-python-dehradun",
  "https://www.codewareit.in/Courses/java-python-programming-dehradun",
  "https://www.codewareit.in/Courses/web-development-course-dehradun",
  "https://www.codewareit.in/Courses/react-js-course-dehradun",
  "https://www.codewareit.in/Courses/nextjs-course-dehradun",
  "https://www.codewareit.in/Courses/frontend-course-dehradun",
  "https://www.codewareit.in/Courses/backend-course-dehradun",
  "https://www.codewareit.in/Courses/fullstack-course-dehradun",
  "https://www.codewareit.in/blog",
  "https://www.codewareit.in/Aboutus",
  "https://www.codewareit.in/contact",
];

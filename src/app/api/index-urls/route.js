/**
 * POST /api/index-urls
 * Triggers Google Indexing API for all important URLs.
 * Call this after deploying or publishing new content.
 * 
 * Secure with CRON_SECRET env variable.
 * Usage from Vercel Cron: 
 *   curl -X POST https://www.codewareit.in/api/index-urls \
 *        -H "Authorization: Bearer YOUR_CRON_SECRET"
 */
import { indexMultipleURLs, INDEXABLE_URLS } from "../../lib/googleIndexing";

export async function POST(request) {
  const authHeader = request.headers.get("authorization");
  const secret = process.env.CRON_SECRET;

  if (secret && authHeader !== `Bearer ${secret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const results = await indexMultipleURLs(INDEXABLE_URLS);
    const success = results.filter((r) => r.status === "success").length;
    const failed = results.filter((r) => r.status === "error").length;

    return Response.json({
      message: `Indexed ${success} URLs, ${failed} failed`,
      results,
    });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

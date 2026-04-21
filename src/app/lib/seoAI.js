import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generate SEO Metadata
 * - Production safe
 * - JSON enforced
 * - Rank focused
 * - Local SEO optimized
 * - Fallback protected
 */
export async function generateSEO(title, content) {
  try {
    const prompt = `
You are an expert Local SEO strategist.

Generate SEO metadata in STRICT JSON format only.

Return ONLY valid JSON like this:

{
  "seoTitle": "",
  "seoDescription": "",
  "seoKeywords": ["", "", "", "", ""]
}

Rules:
- Title max 60 characters
- Description max 155 characters
- 5-8 natural ranking keywords
- Focus on Dehradun local SEO
- Include nearby locations ONLY if contextually relevant
- Do NOT stuff all locations
- Do NOT repeat keywords
- Make it human readable and high CTR
- Optimize for Google ranking 2026

IMPORTANT:
- Include location keywords like:
Dehradun, Mussoorie, Haridwar, Roorkee, Rishikesh,
Sahastradhara Road, Thano dehradun airport, Prem Nagar dehradun,
Vikas Nagar dehradun, Ballupur Chowk, ISBT Dehradun

- Include colleges if relevant:
Graphic Era Dehradun,
UIT Dehradun,
DBIT Dehradun,
DIT Dehradun,
SGRR Dehradun

- Make it look natural, not spammy.
- Optimize for local search ranking.

Blog Topic:
${title}

Content Preview:
${content.slice(0, 1200)}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.6,
    });

    const raw = response.choices?.[0]?.message?.content?.trim();

    let parsed;

    try {
      parsed = JSON.parse(raw);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);

      parsed = fallbackSEO(title, content);
    }

    // Validate structure
    if (
      !parsed.seoTitle ||
      !parsed.seoDescription ||
      !Array.isArray(parsed.seoKeywords)
    ) {
      return fallbackSEO(title, content);
    }

    return {
      seoTitle: parsed.seoTitle.slice(0, 60),
      seoDescription: parsed.seoDescription.slice(0, 155),
      seoKeywords: parsed.seoKeywords.slice(0, 8),
    };

  } catch (error) {
    console.error("OpenAI SEO Error:", error);
    return fallbackSEO(title, content);
  }
}

/**
 * Safe fallback SEO generator
 */
function fallbackSEO(title, content) {
  return {
    seoTitle: `${title} | Codeware IT Dehradun`,
    seoDescription: content
      ? content.slice(0, 150)
      : `Join Codeware IT Pvt Ltd in Dehradun for ${title}. Practical training with internship support.`,
    seoKeywords: title
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 3)
      .slice(0, 6),
  };
}
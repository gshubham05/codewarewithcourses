export function calculateSEOScore(blog) {
    let score = 0;
  
    if (blog.title?.length > 30) score += 20;
    if (blog.seoDescription?.length > 120) score += 20;
    if (blog.content?.length > 800) score += 30;
    if (blog.seoKeywords?.length >= 5) score += 20;
    if (blog.thumbnail) score += 10;
  
    return score;
  }
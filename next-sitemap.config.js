/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.codewareit.in',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin', '/middleware'],  // exclude internal/admin paths
};

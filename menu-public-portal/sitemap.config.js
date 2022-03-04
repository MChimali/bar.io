module.exports = {
  siteUrl: process.env.SITE_URL,
  changefreq: 'weekly',
  priority: 0.5,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${process.env.SITE_URL}/server-sitemap.xml`],
  },
};

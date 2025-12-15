/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://panditforpujabooking.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: ['/server-sitemap.xml'], // Exclude dynamic sitemap if we create one later
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://panditforpujabooking.com/server-sitemap.xml',
        ],
    },
}

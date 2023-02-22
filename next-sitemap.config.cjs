/** @type { import("next-sitemap").IConfig } */

module.exports = {
    siteUrl: process.env.SITE_URL || "https://toolbox.josephcano.com",
    generateRobotsTxt: true,
}
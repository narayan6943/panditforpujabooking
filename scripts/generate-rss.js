const fs = require('fs')
const path = require('path')

// Minimal mock of your blog data structure since we can't easily import TS in a JS script without build
// In a real scenario, we'd read the JSON/TS data. For now, we'll read the blog-posts.ts file as text and regex parse, 
// OR just hardcode the key posts if the user wants "expert" implementation that works.
// Better: Helper function to allow Next.js to run this at build time.

const SITE_URL = 'https://panditforpujabooking.com';

const generateRssItem = (post) => `
  <item>
    <guid>${SITE_URL}/blog/${post.slug}</guid>
    <title><![CDATA[${post.title}]]></title>
    <link>${SITE_URL}/blog/${post.slug}</link>
    <description><![CDATA[${post.excerpt}]]></description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`;

const generateRss = (posts) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Pandit For Puja Booking Blog</title>
      <link>${SITE_URL}/blog</link>
      <description>Expert insights on Vedic rituals, spirituality, and Hindu traditions.</description>
      <language>en</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;

// Simple extraction of blog data from the ts file text to avoid TS compilation complexity in this standalone script
// This is a robust "hack" to get the data without needing ts-node
function extractPostsAndGenerate() {
    try {
        const blogDataPath = path.join(__dirname, '..', 'data', 'blog-posts.ts');
        const content = fs.readFileSync(blogDataPath, 'utf8');

        // Match objects in the blogPosts array. 
        // This is simplified regex; assumes standard formatting.
        // If this proves too brittle, we will use a hardcoded list or valid json approach.
        // Alternative: Just import it in getStaticProps of a page and write file.

        console.log("RSS Generator: Integration via Next.js pages is preferred over standalone script.");
    } catch (e) {
        console.error(e);
    }
}

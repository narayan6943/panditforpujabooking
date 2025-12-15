import { GetServerSideProps } from 'next'
import { allPujaServices } from '@/data/puja-services'
import { allAstrologyServices } from '@/data/astrology-services'
import { allLocationPages } from '@/data/location-pages'
import { allPanditProfiles } from '@/data/pandit-profiles'

// Static pages
const staticPages = [
  '',
  'about',
  'contact',
  'faq',
  'testimonials',
  'how-it-works',
  'astrology',
]

// Use data from centralized files
const locationPages = allLocationPages
const panditProfiles = allPanditProfiles

function generateSiteMap() {
  const baseUrl = 'https://panditforpujabooking.com'
  const currentDate = new Date().toISOString()

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
       .map(
         (page) => `
       <url>
           <loc>${baseUrl}/${page}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>${page === '' ? '1.0' : '0.8'}</priority>
       </url>
     `
       )
       .join('')}
     ${allPujaServices
       .map(
         (puja) => `
       <url>
           <loc>${baseUrl}/puja-services/${puja}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.9</priority>
       </url>
     `
       )
       .join('')}
     ${allAstrologyServices
       .map(
         (service) => `
       <url>
           <loc>${baseUrl}/astrology/${service}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.8</priority>
       </url>
     `
       )
       .join('')}
     ${locationPages
       .map(
         (location) => `
       <url>
           <loc>${baseUrl}/pandit-services/${location}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
     `
       )
       .join('')}
     ${panditProfiles
       .map(
         (pandit) => `
       <url>
           <loc>${baseUrl}/pandits/profile/${pandit}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
     `
       )
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap


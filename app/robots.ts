import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sineklikhollanda.com/sitemap.xml',
    host: 'https://sineklikhollanda.com',
  }
}

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: 'https://www.sofarevive.com/sitemap.xml',
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private', '/api/'],
      },
    ],
  }
}

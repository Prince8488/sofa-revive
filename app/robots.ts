import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    host: 'https://www.sofarevive.com',
    sitemap: 'https://www.sofarevive.com/sitemap.xml',
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private'],
      },
      {
        userAgent: [
          'GPTBot',
          'Google-Extended',
          'CCBot',
          'ClaudeBot',
          'Amazonbot',
          'PerplexityBot',
          'YouBot',
          'Bytespider',
        ],
        disallow: '/',
      },
    ],
  }
}

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sofarevive.com'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/services/sofa-repair-bangalore`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/sofa-upholstery-bangalore`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/sofa-polishing-bangalore`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date(),
    },
  ]
}

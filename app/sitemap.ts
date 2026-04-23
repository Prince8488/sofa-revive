import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sofarevive.com'
  const lastMod = new Date()

  const routes = [
    // Main Pages
    { url: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/quote', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/gallery', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },

    // Core Service Sub-Pages (Crucial for SEO)
    {
      url: '/services/sofa-upholstery-bangalore',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/services/sofa-repair-bangalore',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      url: '/services/sofa-polishing-bangalore',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    // Legal Pages
    {
      url: '/privacy-policy',
      priority: 0.5,
      changeFrequency: 'yearly' as const,
    },
    { url: '/terms-of-use', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/faq', priority: 0.5, changeFrequency: 'yearly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: lastMod,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Applies to all bots (Google, Bing, etc.)
      allow: "/", // Let them see the whole site
      disallow: [
        "/admin", // Don't index your login area
        "/api", // Don't index your backend logic
        "/private", // Any draft pages you're working on
      ],
    },
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}

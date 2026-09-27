import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/zerotrace`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/aps-minds`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/ankahi-manzil`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/prospy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/agnite`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}

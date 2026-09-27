import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://parth-goyal-portfolio.vercel.app";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/admin`, lastModified: new Date(), changeFrequency: "never", priority: 0.1 },
    { url: `${base}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/zerotrace`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/aps-minds`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/ankahi-manzil`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/prospy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/agnite`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}

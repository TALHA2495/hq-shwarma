import type { MetadataRoute } from "next";
import { MENU } from "@/lib/menu-data";
import { BUSINESS } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl;

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/menu`, priority: 0.9 },
    { url: `${base}/contact`, priority: 0.8 },
    { url: `${base}/reviews`, priority: 0.5 },
    ...MENU.map((item) => ({ url: `${base}/product/${item.id}`, priority: 0.6 })),
  ];
}

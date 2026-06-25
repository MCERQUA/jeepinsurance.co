export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/site";
import { getAllPostSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jeepinsurance.co";
  const staticPages = ["/", "/about", "/contact", "/quote", "/services", "/blog", "/privacy", "/terms"];
  return [
    ...staticPages,
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...getAllPostSlugs().map((slug) => `/blog/${slug}`),
  ].map((url) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: url === "/" ? 1 : 0.7,
  }));
}

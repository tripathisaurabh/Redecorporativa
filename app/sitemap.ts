import { MetadataRoute } from "next";
import { SITE_URL } from "../lib/constants";
import { caseStudies } from "../lib/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date()
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date()
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date()
    },
    {
      url: `${SITE_URL}/book-us`,
      lastModified: new Date()
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date()
    },
    {
      url: `${SITE_URL}/thank-you`,
      lastModified: new Date()
    }
  ];

  const caseStudyPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: new Date()
    },
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}/case-studies/${study.slug}`,
      lastModified: new Date(study.publishDate)
    }))
  ];

  return [...staticPages, ...caseStudyPages];
}

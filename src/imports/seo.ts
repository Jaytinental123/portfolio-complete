// Shared SEO settings. Used by the app (browser tab titles) and by
// seo-pages.ts at build time (one real HTML file per page for Google).
import { profile, caseStudies, getProject } from "./data";

// The one true address of the site. Vercel redirects joyomowaye.com here.
export const SITE_URL = "https://www.joyomowaye.com";

// Social preview image, generated at build time by seo-pages.ts.
export const OG_IMAGE_PATH = "/assets/og/joy-omowaye-og.jpg";

export type StaticRoute = "home" | "work" | "about" | "cv" | "contact";

export const ROUTE_PATHS: Record<StaticRoute, string> = {
  home: "/",
  work: "/work/",
  about: "/about/",
  cv: "/cv/",
  contact: "/contact/",
};

export function casePath(slug: string): string {
  return `/case/${slug}/`;
}

export const BASE_TITLE = "Joy Omowaye | Lead Product Designer";

function clip(text: string, max = 158): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).replace(/[\s,.;:]+\S*$/, "") + "…";
}

export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

export const PAGE_META: Record<StaticRoute, PageMeta> = {
  home: {
    path: ROUTE_PATHS.home,
    title: BASE_TITLE,
    description:
      "Joy Omowaye is a Lead Product Designer with 5+ years designing digital products across EdTech, SaaS, FinTech, and e-commerce. Currently at Prooval.",
  },
  work: {
    path: ROUTE_PATHS.work,
    title: "Work & Case Studies — Joy Omowaye, Product Designer",
    description:
      "Case studies and selected projects by Joy Omowaye, Lead Product Designer, across EdTech, SaaS, FinTech, e-commerce and mobile apps.",
  },
  about: {
    path: ROUTE_PATHS.about,
    title: "About Joy Omowaye — Lead Product Designer",
    description: clip(profile.about),
  },
  cv: {
    path: ROUTE_PATHS.cv,
    title: "CV — Joy Omowaye, Product Designer",
    description:
      "Experience, skills and certifications of Joy Omowaye, Lead Product Designer. View online or download the CV as a PDF.",
  },
  contact: {
    path: ROUTE_PATHS.contact,
    title: "Contact Joy Omowaye — Product Designer",
    description: clip(`Get in touch with Joy Omowaye. ${profile.availability}`),
  },
};

export function caseMeta(slug: string): PageMeta | null {
  const p = getProject(slug);
  if (!p || p.tier !== "case") return null;
  return {
    path: casePath(p.slug),
    title: `${p.title} Case Study — Joy Omowaye, Product Designer`,
    description: clip(p.summary || p.subtitle || `${p.title} case study by Joy Omowaye.`),
  };
}

export function allPages(): PageMeta[] {
  const pages = (Object.keys(PAGE_META) as StaticRoute[]).map((r) => PAGE_META[r]);
  for (const p of caseStudies) {
    const m = caseMeta(p.slug);
    if (m) pages.push(m);
  }
  return pages;
}

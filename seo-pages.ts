// seo-pages.ts: runs only during `vite build` (i.e. on Vercel).
//
// Your site is a single-page React app, so on its own every address would
// return the same empty HTML file. This plugin takes the finished build and
// writes a real HTML file for every page (/work/, /about/, /case/mb11/ ...)
// with its own title, description, canonical address, social preview tags and
// a readable text version of the page. React then loads on top as normal.
//
// It also writes sitemap.xml, a 404 page, and a 1200x630 link-preview image.
import fs from "node:fs";
import path from "node:path";
import type { Plugin, ResolvedConfig } from "vite";
import { profile, caseStudies, getProject } from "./src/data";
import { SITE_URL, OG_IMAGE_PATH, PAGE_META, ROUTE_PATHS, allPages, casePath, type PageMeta } from "./src/seo";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Remove SEO tags that index.html or Figma's site settings may have added,
// so each page ends up with exactly one set.
function stripSeoTags(html: string): string {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, "")
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+property=["']og:[^"']*["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>\s*/gi, "");
}

function headTags(page: PageMeta, opts: { ogSized: boolean; noindex?: boolean; jsonLd?: object }): string {
  const url = SITE_URL + page.path;
  const img = SITE_URL + OG_IMAGE_PATH;
  const t = esc(page.title);
  const d = esc(page.description);
  const lines = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    opts.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Joy Omowaye" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:image" content="${img}" />`,
    ...(opts.ogSized
      ? [`<meta property="og:image:width" content="1200" />`, `<meta property="og:image:height" content="630" />`]
      : []),
    `<meta property="og:image:alt" content="Joy Omowaye, Lead Product Designer" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${img}" />`,
  ];
  if (opts.jsonLd) {
    lines.push(`<script type="application/ld+json">${JSON.stringify(opts.jsonLd).replace(/</g, "\\u003c")}</script>`);
  }
  return lines.map((l) => "    " + l).join("\n") + "\n";
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.fullName,
  jobTitle: profile.title,
  url: SITE_URL + "/",
  image: SITE_URL + "/assets/photos/joy-portrait.jpg",
  email: `mailto:${profile.email}`,
  worksFor: { "@type": "Organization", name: "Prooval" },
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  sameAs: [profile.linkedin, profile.behance, profile.youtube].filter(Boolean),
};

// ---------- readable page content (shown until React finishes loading) ----------

const link = (href: string, text: string) => `<a href="${esc(href)}">${esc(text)}</a>`;

function caseList(): string {
  return (
    "<ul>" +
    caseStudies
      .map((p) => `<li>${link(casePath(p.slug), p.title)}${p.subtitle ? ` — ${esc(p.subtitle)}` : ""}</li>`)
      .join("") +
    "</ul>"
  );
}

function bodyFor(page: PageMeta): string {
  if (page.path === ROUTE_PATHS.home) {
    return `<h1>${esc(profile.name)}, ${esc(profile.title)}</h1>
<p>${esc(profile.subheadline)} ${esc(profile.headline)}</p>
<h2>Selected case studies</h2>${caseList()}`;
  }
  if (page.path === ROUTE_PATHS.work) {
    return `<h1>Work &amp; case studies</h1><p>${esc(page.description)}</p>${caseList()}`;
  }
  if (page.path === ROUTE_PATHS.about) {
    return `<h1>About ${esc(profile.name)}</h1><p>${esc(profile.about)}</p><p>${esc(profile.tagline)}</p>`;
  }
  if (page.path === ROUTE_PATHS.cv) {
    return `<h1>CV — ${esc(profile.fullName)}</h1><p>${esc(profile.title)}. ${esc(profile.about)}</p>
<p>${link("/Joy_Omowaye_CV.pdf", "Download the CV (PDF)")}</p>`;
  }
  if (page.path === ROUTE_PATHS.contact) {
    return `<h1>Contact ${esc(profile.name)}</h1><p>${esc(profile.availability)}</p>
<ul><li>Email: ${link("mailto:" + profile.email, profile.email)}</li>
<li>${link(profile.linkedin, "LinkedIn")}</li><li>${link(profile.bookUrl, profile.bookLabel)}</li></ul>`;
  }
  const slug = page.path.split("/").filter(Boolean)[1];
  const p = slug ? getProject(slug) : undefined;
  if (p) {
    const metrics = (p.metrics || []).map((m) => `<li>${esc(m.value)} ${esc(m.label)}</li>`).join("");
    const sections = [...(p.overview || []), ...(p.process || []), ...(p.outcome || [])]
      .map((s) => `<h2>${esc(s.title)}</h2><p>${esc(s.body)}</p>`)
      .join("");
    return `<p>${link(ROUTE_PATHS.work, "← All work")}</p>
<h1>${esc(p.title)}</h1><p>${esc(p.subtitle || "")}</p><p>${esc(p.summary || "")}</p>
${metrics ? `<ul>${metrics}</ul>` : ""}${sections}`;
  }
  return `<h1>${esc(page.title)}</h1><p>${esc(page.description)}</p>`;
}

const SHELL_CSS = `.seo-shell{max-width:760px;margin:0 auto;padding:96px 24px 64px;font-family:"DM Sans",system-ui,sans-serif;color:#f0f0f0;line-height:1.6;animation:seo-shell-in .3s ease .8s both}
.seo-shell a{color:#2DD4BF}.seo-shell nav a{margin-right:16px}.seo-shell h1{font-size:2rem;line-height:1.2;margin:32px 0 12px}
.seo-shell h2{font-size:1.2rem;margin:28px 0 8px}.seo-shell ul{padding-left:20px}
@keyframes seo-shell-in{from{opacity:0}to{opacity:1}}`;

function shell(page: PageMeta): string {
  const nav = [
    link("/", "Home"),
    link(ROUTE_PATHS.work, "Work"),
    link(ROUTE_PATHS.about, "About"),
    link(ROUTE_PATHS.cv, "CV"),
    link(ROUTE_PATHS.contact, "Contact"),
  ].join("");
  return `<div class="seo-shell"><style>${SHELL_CSS}</style><header><strong>${esc(profile.name)}</strong><nav>${nav}</nav></header><main>${bodyFor(page)}</main></div>`;
}

function renderPage(template: string, page: PageMeta, opts: Parameters<typeof headTags>[1]): string {
  return template
    .replace("</head>", headTags(page, opts) + "  </head>")
    .replace(/<div id="root"><\/div>/, `<div id="root">${shell(page)}</div>`);
}

// ---------- social preview image ----------

async function makeOgImage(root: string, outDir: string): Promise<boolean> {
  const outFile = path.join(outDir, OG_IMAGE_PATH);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  const cutout = path.join(root, "public/assets/photos/joy-cutout.png");
  try {
    const sharp = (await import("sharp")).default;
    const person = await sharp(cutout).resize({ height: 610 }).png().toBuffer();
    const { width = 600 } = await sharp(person).metadata();
    const accent = Buffer.from(
      `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <circle cx="600" cy="400" r="255" fill="#2DD4BF"/>
        <rect x="0" y="0" width="1200" height="10" fill="#2DD4BF"/>
      </svg>`,
    );
    await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#F2F1ED" } })
      .composite([
        { input: accent, top: 0, left: 0 },
        { input: person, top: 20, left: Math.round((1200 - width) / 2) },
      ])
      .jpeg({ quality: 86, progressive: true, mozjpeg: true })
      .toFile(outFile);
    return true;
  } catch (err) {
    // If image processing is unavailable, fall back to the existing square photo.
    console.warn("[seo-pages] Could not generate OG image, using joy-full.jpg instead:", err);
    fs.copyFileSync(path.join(root, "public/assets/photos/joy-full.jpg"), outFile);
    return false;
  }
}

// ---------- plugin ----------

export function seoPages(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "seo-pages",
    apply: "build",
    configResolved(c) {
      config = c;
    },
    closeBundle: {
      order: "post",
      async handler() {
        const outDir = path.resolve(config.root, config.build.outDir);
        const indexFile = path.join(outDir, "index.html");
        if (!fs.existsSync(indexFile)) return;

        const template = stripSeoTags(fs.readFileSync(indexFile, "utf8"));
        const ogSized = await makeOgImage(config.root, outDir);
        const pages = allPages();

        for (const page of pages) {
          const isHome = page.path === "/";
          const html = renderPage(template, page, { ogSized, jsonLd: isHome ? personJsonLd : undefined });
          const file = path.join(outDir, page.path, "index.html");
          fs.mkdirSync(path.dirname(file), { recursive: true });
          fs.writeFileSync(file, html);
        }

        // 404 page: Vercel serves this (with a real 404 status) for unknown addresses.
        const notFound: PageMeta = {
          path: "/",
          title: "Page not found — Joy Omowaye",
          description: PAGE_META.home.description,
        };
        fs.writeFileSync(path.join(outDir, "404.html"), renderPage(template, notFound, { ogSized, noindex: true }));

        // Sitemap: always matches the real pages above.
        const today = new Date().toISOString().slice(0, 10);
        const urls = pages
          .map((p) => {
            const priority = p.path === "/" ? "1.0" : p.path.startsWith("/case/") ? "0.8" : "0.9";
            return `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
          })
          .join("\n");
        fs.writeFileSync(
          path.join(outDir, "sitemap.xml"),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        );

        console.log(`[seo-pages] Wrote ${pages.length} pages, 404.html, sitemap.xml (OG image ${ogSized ? "generated" : "fallback"})`);
      },
    },
  };
}

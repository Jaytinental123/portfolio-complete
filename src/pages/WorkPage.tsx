import React from "react";
import { projects, Project } from "../data";
import InteractiveGrid from "../components/InteractiveGrid";

const featured = projects.filter((p) => p.featured);
const caseRest = projects.filter((p) => p.tier === "case" && !p.featured);
const listings = projects.filter((p) => p.tier === "listing");

function ODSCover() {
  return (
    <div style={{ width: "100%", aspectRatio: "4/3", background: "#0a1a0e", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0 }}>
      {/* Stage light beams */}
      {[0,1,2,3,4].map(i => (
        <div key={i} style={{ position: "absolute", top: 0, left: `${10 + i * 20}%`, width: "14%", height: "100%", background: `linear-gradient(180deg, rgba(34,197,110,${0.08 + i % 2 * 0.05}) 0%, transparent 70%)`, transform: `rotate(${(i - 2) * 8}deg)`, transformOrigin: "top center", pointerEvents: "none" }} />
      ))}
      {/* ODS wordmark */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.6rem", letterSpacing: "0.18em", color: "#22c55e", lineHeight: 1 }}>ODS</div>
        <div style={{ fontFamily: "var(--font)", fontWeight: 500, fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(255,255,255,0.55)", marginTop: 4, textTransform: "uppercase" }}>Ogun Digital Summit</div>
        <div style={{ width: 28, height: 2, background: "#22c55e", margin: "6px auto 0", borderRadius: 2 }} />
      </div>
      {/* Audience dots */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "32%", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 3, paddingBottom: 8, zIndex: 1 }}>
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} style={{ width: 4, height: `${12 + Math.sin(i * 0.9) * 6}px`, background: `rgba(255,255,255,${0.08 + (i % 3) * 0.04})`, borderRadius: 2 }} />
        ))}
      </div>
    </div>
  );
}

function LevenUpCover() {
  return (
    <div style={{ width: "100%", aspectRatio: "4/3", background: "#0f0a1e", overflow: "hidden", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Soft glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(139,92,246,0.25) 0%, transparent 65%)" }} />
      {/* Grid of event cards */}
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 6, padding: 10, zIndex: 1 }}>
        {[
          { color: "#7c3aed", label: "Music" },
          { color: "#0e7490", label: "Tech" },
          { color: "#b45309", label: "Food" },
          { color: "#166534", label: "Sport" },
          { color: "#9d174d", label: "Art" },
          { color: "#1e3a5f", label: "Film" },
        ].map((c, i) => (
          <div key={i} style={{ background: c.color, borderRadius: 8, opacity: 0.75, display: "flex", alignItems: "flex-end", padding: "6px 8px" }}>
            <span style={{ fontFamily: "var(--font)", fontSize: "0.45rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{c.label}</span>
          </div>
        ))}
      </div>
      {/* Brand pill */}
      <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", zIndex: 3, background: "rgba(139,92,246,0.9)", backdropFilter: "blur(6px)", borderRadius: 20, padding: "3px 12px", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.6rem", color: "#fff", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
        LevenUp
      </div>
    </div>
  );
}

function ScoutsCapitalCover() {
  return (
    <div style={{ width: "100%", aspectRatio: "4/3", background: "#050d1a", overflow: "hidden", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Pitch lines */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.12 }}>
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "#fff", transform: "translateX(-50%)" }} />
        <div style={{ position: "absolute", left: "50%", top: "50%", width: 60, height: 60, border: "1px solid #fff", borderRadius: "50%", transform: "translate(-50%,-50%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "30%", height: "40%", border: "1px solid #fff", borderRight: "none", borderTop: "none", borderRadius: "0 0 8px 0" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "40%", border: "1px solid #fff", borderLeft: "none", borderTop: "none", borderRadius: "0 0 0 8px" }} />
      </div>
      {/* Scout spotlight */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 40%, rgba(250,204,21,0.18) 0%, transparent 60%)" }} />
      {/* Icon */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <div style={{ fontSize: "2rem", lineHeight: 1, marginBottom: 4 }}>⚽</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.75rem", color: "#facc15", letterSpacing: "0.12em", textTransform: "uppercase" }}>Scouts Capital</div>
        <div style={{ fontFamily: "var(--font)", fontSize: "0.42rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", marginTop: 3, textTransform: "uppercase" }}>Get Discovered</div>
      </div>
    </div>
  );
}

function LifeInUKCover() {
  return (
    <div style={{ width: "100%", aspectRatio: "4/3", background: "#01244d", overflow: "hidden", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* UK flag suggestion — simplified Union Jack colours */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #01244d 0%, #0b3d78 50%, #01244d 100%)" }} />
      <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 2, background: "rgba(207,20,43,0.3)", transform: "translateY(-50%)" }} />
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "rgba(207,20,43,0.3)", transform: "translateX(-50%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)" }} />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 16px" }}>
        {/* Urdu text approximation using Arabic-compatible unicode */}
        <div style={{ fontFamily: "serif", fontSize: "1.4rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.2, marginBottom: 6, direction: "rtl" }}>برطانیہ میں زندگی</div>
        <div style={{ width: 32, height: 1.5, background: "#cf142b", margin: "0 auto 6px", borderRadius: 1 }} />
        <div style={{ fontFamily: "var(--font)", fontSize: "0.48rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Life in the UK · Urdu</div>
      </div>
    </div>
  );
}

const LISTING_COVERS: Record<string, React.ReactNode> = {
  "ogun-digital-summit": <ODSCover />,
  "levenup": <LevenUpCover />,
  "scouts-capital": <ScoutsCapitalCover />,
  "life-in-the-uk": <LifeInUKCover />,
};

function ListingCard({ project, index }: { project: Project; index: number }) {
  const tile = project.tileColor || "#1e1e1e";
  const customCover = LISTING_COVERS[project.slug];
  return (
    <a
      className="listing-card"
      href={project.externalUrl || project.behanceUrl || "#/work"}
      target={project.externalUrl || project.behanceUrl ? "_blank" : undefined}
      rel="noopener"
      style={{ "--tile": tile } as React.CSSProperties}
      data-reveal="fade-up"
      data-delay={String((index % 4) + 1)}
    >
      {project.cover ? (
        <img
          className="listing-card-img"
          src={project.cover}
          alt={project.title}
          loading="lazy"
        />
      ) : customCover ? (
        customCover
      ) : (
        <div className="listing-card-placeholder" style={{ background: tile }}>
          <span>{project.title.slice(0, 2).toUpperCase()}</span>
        </div>
      )}
      <div className="listing-card-info">
        <p className="listing-card-title">{project.title}</p>
        <p className="listing-card-cat">{project.category}</p>
      </div>
    </a>
  );
}

export default function WorkPage() {
  return (
    <>
      <header className="page-header container" data-reveal="fade-up">
        <p className="eyebrow">Work</p>
        <h1>All projects</h1>
        <p className="lead">
          Case studies across gaming, SaaS, fintech, edtech and B2B dashboards. Click any card for
          the summary or open the full case study.
        </p>
      </header>

      {/* Featured — 2×2 grid */}
      <section className="container work-section">
        <p className="eyebrow work-section-label" data-reveal="fade-up">Featured work</p>
        <div className="featured-grid-2col" data-reveal="fade-up" data-delay="1">
          <InteractiveGrid projects={featured} />
        </div>
      </section>

      {/* Remaining case studies */}
      {caseRest.length > 0 && (
        <section className="container work-section">
          <p className="eyebrow work-section-label" data-reveal="fade-up">More case studies</p>
          <div data-reveal="fade-up" data-delay="1">
            <InteractiveGrid projects={caseRest} />
          </div>
        </section>
      )}

      {/* Listing projects — compact grid */}
      <section className="container work-section" style={{ paddingBottom: 80 }}>
        <p className="eyebrow work-section-label" data-reveal="fade-up">Other projects</p>
        <div className="listings-grid">
          {listings.map((p, i) => (
            <ListingCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

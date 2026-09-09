import { useState, useRef, useEffect } from "react";
import { Project, tone } from "../data";
import CoverFrame from "./CoverFrame";

function ProjectCard({
  project,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isCase = project.tier === "case";
  const t = tone(project.tileColor);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen || !ref.current) return;
    const el = ref.current;
    const raf = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const navH = 72;
      const top = rect.top + window.scrollY - navH - 16;
      if (rect.top < navH || rect.bottom > window.innerHeight) {
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  return (
    <article
      ref={ref}
      className={`grid-card${isCase ? "" : " grid-card--listing"}${isOpen ? " is-open" : ""}${project.featured ? " grid-card--featured" : ""}`}
      data-slug={project.slug}
      data-tone={t}
      style={{ "--tile": project.tileColor || "#1e1e1e" } as React.CSSProperties}
    >
      <button
        type="button"
        className="grid-card-trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {project.featured && !isOpen && (
          <span className="featured-badge" aria-label="Featured project">★</span>
        )}
        <div className="grid-card-cover">
          <CoverFrame project={project} />
        </div>
        {!isOpen && (
          <div className="grid-card-head">
            <div className="grid-card-headtext">
              <h3 className="grid-card-title">{project.title}</h3>
              <p className="grid-card-cat">{project.category}</p>
            </div>
            <span className="grid-expand-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        )}
        {isOpen && (
          <span className="grid-expand-icon grid-expand-icon--open" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        )}
      </button>
      {isOpen && (
        <div className="grid-card-panel">
          <div className="panel-body">
            <div className="panel-title-row">
              <div>
                <h3 className="panel-project-title">{project.title}</h3>
                <p className="panel-project-sub">{project.subtitle || project.category}</p>
              </div>
            </div>
            {project.platforms && (
              <div className="panel-platforms">
                <span className="panel-platforms-label">Platforms</span>
                {project.platforms.map((pl) => (
                  <span key={pl} className="panel-chip">{pl}</span>
                ))}
              </div>
            )}
            <p className="grid-card-summary">{project.summary || ""}</p>
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid-card-metrics">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="panel-actions">
              {isCase && (
                <a href={`#/case/${project.slug}`} className="btn btn-primary">
                  Read the case study
                </a>
              )}
              {project.externalUrl && (
                <a href={project.externalUrl} target="_blank" rel="noopener" className="btn">
                  See it live
                </a>
              )}
              {project.behanceUrl && (
                <a href={project.behanceUrl} target="_blank" rel="noopener" className="btn">
                  Case study on Behance
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function InteractiveGrid({ projects }: { projects: Project[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className={`project-grid-interactive${openSlug ? " has-open" : ""}`}>
      {projects.map((p) => (
        <ProjectCard
          key={p.slug}
          project={p}
          isOpen={openSlug === p.slug}
          onToggle={() => setOpenSlug(openSlug === p.slug ? null : p.slug)}
        />
      ))}
    </div>
  );
}

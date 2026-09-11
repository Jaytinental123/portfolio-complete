import { getProject, caseStudies, CaseSection } from "../data";
import CoverFrame from "../components/CoverFrame";

function Sections({ items, startDelay = 1 }: { items?: CaseSection[]; startDelay?: number }) {
  if (!items) return null;
  return (
    <>
      {items.map((s, i) => (
        <div key={s.title} data-reveal="fade-up" data-delay={String(((i + startDelay) % 3) + 1)}>
          <h2>{s.title}</h2>
          <p>{s.body}</p>
          {s.bullets && (
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}

export default function CaseStudyPage({ slug }: { slug: string }) {
  const project = getProject(slug);

  if (!project || project.tier !== "case") {
    return (
      <div className="container case-hero" data-reveal="fade-up">
        <a href="#/work" className="back-link">
          ← All work
        </a>
        <h1>Case study coming soon</h1>
        <p className="lead">
          This project is listed on the work page. The full write-up isn&apos;t published yet.
        </p>
      </div>
    );
  }

  const idx = caseStudies.findIndex((p) => p.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <div className="container case-hero">
        <a href="#/work" className="back-link" data-reveal="fade-up">
          ← All work
        </a>
        <p className="eyebrow" data-reveal="fade-up" data-delay="1">{project.category}</p>
        <h1 data-reveal="fade-up" data-delay="2">{project.title}</h1>
        <p className="lead" style={{ margin: 0 }} data-reveal="fade-up" data-delay="3">
          {project.subtitle}
        </p>
        <div className="case-meta-row" data-reveal="fade-up" data-delay="4">
          <span>{project.role}</span>
          <span>{project.year}</span>
          {project.liveNote && (
            <span className="live-badge">● {project.liveNote}</span>
          )}
          {project.externalUrl && (
            <a href={project.externalUrl} target="_blank" rel="noopener" className="text-link">
              See it live ↗
            </a>
          )}
          {project.behanceUrl && (
            <a href={project.behanceUrl} target="_blank" rel="noopener" className="text-link">
              Full case study on Behance ↗
            </a>
          )}
          {project.prototypeUrl && (
            <a
              href={project.slug === "mb11" ? project.externalUrl! : project.prototypeUrl}
              target="_blank"
              rel="noopener"
              className="btn btn-primary case-prototype-cta"
            >
              {project.slug === "mb11" ? "Download the app ↗" : "View prototype ↗"}
            </a>
          )}
        </div>
        {project.metrics && (
          <div className="metrics-row" data-reveal="fade-up" data-delay="5">
            {project.metrics.map((m) => (
              <div key={m.label} className="metric-card">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="container case-body">
        <p className="case-summary" data-reveal="fade-up">{project.summary}</p>
        <div className="case-cover" data-reveal="scale" data-delay="1">
          <CoverFrame project={project} wide />
        </div>
        <Sections items={project.overview} startDelay={1} />
        {project.beforeImage && (
          <div className="case-before-after" data-reveal="scale">
            <p className="case-ba-label">Before &amp; After</p>
            {project.beforeImage.includes("before-after") ? (
              <img
                src={project.beforeImage}
                alt={`${project.title} before and after comparison`}
                loading="lazy"
                decoding="async"
                style={{ width: "100%", borderRadius: 10, border: "1px solid var(--border)" }}
              />
            ) : (
              <div className="case-ba-grid">
                <div className="case-ba-col">
                  <span className="case-ba-tag case-ba-tag--before">Before</span>
                  <img
                    src={project.beforeImage}
                    alt={`${project.title} before redesign`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="case-ba-col">
                  <span className="case-ba-tag case-ba-tag--after">After</span>
                  {project.frame === "browser" || project.slug === "zsms" ? (
                    <div className="cover-frame cover-frame--device case-ba-mockup" style={{ background: project.tileColor || "#1c1c1c" }}>
                      <div className="device device--browser">
                        <div className="device-chrome"><span /><span /><span /><i /></div>
                        <div className="device-screen">
                          <img src={project.cover} alt={`${project.title} after redesign`} loading="lazy" decoding="async" style={{ width: "100%", display: "block" }} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.cover}
                      alt={`${project.title} after redesign`}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        <Sections items={project.process} startDelay={2} />
        <Sections items={project.outcome} startDelay={1} />
        <p className="case-next" data-reveal="fade-up">
          <span className="eyebrow">Next project</span>
          <a href={`#/case/${next.slug}`} className="text-link">
            {next.title}
          </a>
        </p>
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import { profile, caseStudies, projects } from "../data";
import Carousel from "../components/Carousel";
import InteractiveGrid from "../components/InteractiveGrid";
import SpeakingPhotos from "../components/SpeakingPhotos";
import HeroStage from "../components/HeroStage";

function Testimonials() {
  const list = profile.testimonials;
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(window.innerWidth < 900 ? 1 : 2);

  useEffect(() => {
    const handler = () => setPerView(window.innerWidth < 900 ? 1 : 2);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const shown = list.slice(index, index + perView);

  return (
    <section className="testi-section">
      <div className="container testi-inner">
        <div className="testi-top" data-reveal="fade-up">
          <div>
            <h2 className="testi-headline">
              People I&apos;ve <em>worked with</em>
            </h2>
            <p className="testi-sub">What colleagues say about working with me.</p>
          </div>
          <div className="testi-arrows">
            <button
              type="button"
              className="testi-arrow"
              aria-label="Previous"
              disabled={index === 0}
              onClick={() => setIndex(Math.max(0, index - 1))}
            >
              ‹
            </button>
            <button
              type="button"
              className="testi-arrow"
              aria-label="Next"
              disabled={index + perView >= list.length}
              onClick={() => {
                if (index + perView < list.length) setIndex(index + 1);
              }}
            >
              ›
            </button>
          </div>
        </div>
        <div className="testi-stagger">
          {shown.map((t, i) => {
            if (t.pending) {
              const inits = t.name.split(/\s+/).slice(0, 2).map((w: string) => w[0]).join("");
              return (
                <blockquote key={t.slot} className="testi-card testi-card--pending">
                  <span className="testi-quote-mark" style={{ opacity: 0.2 }}>&ldquo;</span>
                  <p className="testi-quote" style={{ opacity: 0.35, fontStyle: "italic" }}>Recommendation incoming…</p>
                  <footer className="testi-avatar">
                    <span className="testi-avatar-ring" style={{ opacity: 0.4 }}>{inits}</span>
                    <span>
                      <span className="testi-name">{t.name}</span>
                      {t.role && <span className="testi-role">{t.role}</span>}
                    </span>
                  </footer>
                </blockquote>
              );
            }
            const inits = t.name
              .split(/\s+/)
              .slice(0, 2)
              .map((w) => w[0])
              .join("");
            return (
              <blockquote
                key={t.name}
                className="testi-card"
                style={{ transform: `rotate(${i % 2 ? 0.7 : -0.7}deg)` }}
              >
                <span className="testi-quote-mark">&ldquo;</span>
                <p className="testi-quote">{t.quote}</p>
                <footer className="testi-avatar">
                  <span className="testi-avatar-ring">{inits}</span>
                  <span>
                    <span className="testi-name">{t.name}</span>
                    {t.role && <span className="testi-role">{t.role}</span>}
                  </span>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const STEP_DURATION = 1800;

function ProcessSection() {
  const steps = profile.process;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % steps.length);
    }, STEP_DURATION);
    return () => clearInterval(id);
  }, [paused, steps.length]);

  return (
    <section className="section-block container">
      <p className="eyebrow" data-reveal="fade-up">How I work</p>
      <h2 className="section-title" data-reveal="fade-up" data-delay="1">End-to-end product design</h2>
      <div className="process-icon-row">
        {steps.map((p, i) => (
          <span
            key={i}
            style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "0 0 auto" }}
          >
            <button
              className={`proc-icon-wrap${i === active ? " proc-icon-wrap--active" : i < active ? " proc-icon-wrap--done" : " proc-icon-wrap--idle"}`}
              onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
              aria-label={p.title}
            >
              {p.step}
            </button>
            {i < steps.length - 1 && (
              <span className={`proc-connector${i < active ? " proc-connector--done" : i === active ? " proc-connector--filling" : ""}`} style={{ flex: 1 }}>
                <span className="proc-connector-fill" />
              </span>
            )}
          </span>
        ))}
      </div>
      <div className="process-steps">
        {steps.map((p, i) => (
          <div
            key={p.step}
            className={`proc-step${i === active ? " proc-step--active" : ""}`}
            onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
          >
            <span className="proc-num">{p.step}</span>
            <h3 className="proc-title">{p.title}</h3>
            <p className="proc-body">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const featured = caseStudies.filter((p) => p.featured).slice(0, 5);
const HOME_GRID_SLUGS = ["zsms", "screws-and-spanners", "prooval"];
const homeGrid = HOME_GRID_SLUGS.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);

export default function HomePage() {
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio inquiry from your site")}`;
  const ctaBody =
    "From discovery to delivery, I bring structure, clarity and craft to every product I touch. " +
    profile.availability +
    ".";

  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-content" data-reveal="fade-up">
            <p className="hero-select-label">
              Do not build without a plan
              <span className="hero-select-corner-bl" />
              <span className="hero-select-corner-br" />
            </p>
            <h1 className="hero-headline">
              I&apos;m {profile.name},
              <br />
              the <em>architect</em> for
              <br />
              your products.
            </h1>
            <p className="hero-body">{profile.headline}</p>
            <div className="hero-ctas">
              <a href="#/work" className="btn-hero-primary">
                View my work
                <span className="btn-hero-icon">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
              <a href="#/contact" className="btn-hero-secondary">
                Hire me
              </a>
            </div>
          </div>

          <HeroStage />
        </div>
      </section>

      {/* Stats */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              className="stat-cell"
              data-reveal="fade-up"
              data-delay={String(i + 1)}
            >
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured carousel */}
      <section className="selected-work-section">
        <div className="container">
          <div className="selected-work-head" data-reveal="fade-up">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2>Selected work</h2>
            </div>
          </div>
          <div data-reveal="fade-up" data-delay="1">
            <Carousel projects={featured} />
          </div>
        </div>
      </section>

      {/* Case study grid preview */}
      <section className="home-grid-preview container">
        <div className="section-head" data-reveal="fade-up">
          <div>
            <p className="eyebrow">Explore</p>
            <h2>Selected case studies</h2>
          </div>
          <a href="#/work" className="text-link">
            See all work
          </a>
        </div>
        <p
          data-reveal="fade-up"
          data-delay="1"
          style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: "-16px 0 24px", maxWidth: "52ch" }}
        >
          Click a card for the summary, or open the full case study.
        </p>
        <InteractiveGrid projects={homeGrid} />
      </section>

      {/* Process */}
      <ProcessSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Speaking photo grid */}
      <section className="section-block container" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="speaking-section-head" data-reveal="fade-up">
          <div>
            <p className="eyebrow">Speaking</p>
            <h2 className="section-title" style={{ margin: "4px 0 0" }}>Talks &amp; conferences</h2>
          </div>
          <a href="#/about" className="sg-view-more">
            View more
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div data-reveal="fade-up" data-delay="1">
          <SpeakingPhotos />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" data-reveal="fade-up">
        <span className="cta-eyebrow">Ready to build?</span>
        <h2 className="cta-heading">Let&apos;s design something that actually works.</h2>
        <p className="cta-body">{ctaBody}</p>
        <div className="cta-actions">
          <a
            href={profile.bookUrl}
            className="btn-cta-primary"
            target="_blank"
            rel="noopener"
          >
            {profile.bookLabel}
          </a>
          <a href={mailHref} className="btn-cta-secondary">
            Send an email
          </a>
        </div>
      </section>
    </>
  );
}

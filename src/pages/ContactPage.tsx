import { profile } from "../data";

export default function ContactPage() {
  const mail = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Portfolio inquiry, Joy Omowaye"
  )}&body=${encodeURIComponent("Hi Joy,\n\n")}`;

  return (
    <>
      <header className="page-header container" data-reveal="fade-up">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s work together</h1>
        <p className="lead">
          Open to product design and product management roles, founding teams, and select contract engagements.
        </p>
      </header>

      <div className="container contact-layout">
        <div className="contact-card" data-reveal="fade-right">
          <h2>Email</h2>
          <p>The fastest way to reach me for roles, collaborations, or speaking.</p>
          <span className="contact-email">{profile.email}</span>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={mail} className="btn btn-primary">
              Send email
            </a>
            <a
              href={profile.bookUrl}
              className="btn"
              target="_blank"
              rel="noopener"
            >
              {profile.bookLabel}
            </a>
          </div>
          <p style={{ marginTop: 24, fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Opens your default mail app with a pre-filled subject line.
          </p>
        </div>

        <div data-reveal="fade-left" data-delay="1">
          <img
            src={profile.photos.hero}
            alt={profile.name}
            className="contact-photo"
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
          />
          <p style={{ marginTop: 20, color: "var(--text-muted)", fontSize: "0.9rem" }}>
            {profile.availability}
          </p>
          <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a href={profile.linkedin} className="btn" target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href={profile.behance} className="btn" target="_blank" rel="noopener">
              Behance
            </a>
            <a href={profile.youtube} className="btn" target="_blank" rel="noopener">
              YouTube
            </a>
            <a href="#/cv" className="btn">
              View CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

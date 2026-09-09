import { profile } from "../data";

export default function Footer() {
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio inquiry from your site")}`;

  return (
    <div className="container footer-inner">
      <div>
        <p className="footer-name">{profile.name}</p>
        <p className="footer-meta">
          {profile.title} · {profile.location}
        </p>
      </div>
      <div className="footer-links">
        <a href={profile.bookUrl} target="_blank" rel="noopener">
          Book on Prooval
        </a>
        <a href={mailHref}>{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noopener">
          LinkedIn
        </a>
        <a href={profile.behance} target="_blank" rel="noopener">
          Behance
        </a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} {profile.name}</p>
    </div>
  );
}

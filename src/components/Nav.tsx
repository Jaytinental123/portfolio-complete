import { useEffect, useState } from "react";
import { profile } from "../data";

const navItems = [
  { href: "/", label: "Home", id: "home" },
  { href: "/work/", label: "Work", id: "work" },
  { href: "/about/", label: "About", id: "about" },
  { href: "/cv/", label: "CV", id: "cv" },
  { href: "/contact/", label: "Contact", id: "contact" },
];

export default function Nav({ activePage }: { activePage: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio inquiry from your site")}`;

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner container">
        <a href="/" className="logo">{profile.name}</a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href} className={activePage === item.id ? "is-active" : ""}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.bookUrl} className="nav-book" target="_blank" rel="noopener">
          Book me
        </a>
        <a href={mailHref} className="btn btn-primary nav-cta">
          Email
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
        </button>
      </div>
      {mobileOpen && (
        <div className="nav-mobile">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={profile.bookUrl} className="btn" target="_blank" rel="noopener">
            Book on Prooval
          </a>
          <a href={mailHref} className="btn btn-primary">
            Email
          </a>
        </div>
      )}
    </header>
  );
}

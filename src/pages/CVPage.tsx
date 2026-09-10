import { profile } from "../data";

export default function CVPage() {
  const mail = `mailto:${profile.email}?subject=${encodeURIComponent("Regarding your CV")}`;

  const skills = {
    technical: [
      "Product Design", "User Experience Design", "UI Design", "Product Thinking",
      "User Research", "Interaction Design", "Information Architecture",
      "Wireframing", "Prototyping", "Usability Testing", "Design Systems",
      "Agile / Iterative Development",
    ],
    professional: [
      "Communication", "Leadership", "Collaboration", "Time Management",
      "Critical Thinking", "Problem Solving", "Attention to Detail",
    ],
    tools: ["Figma", "FigJam", "Miro", "Notion", "Jira"],
  };

  return (
    <>
      <header className="page-header container" data-reveal="fade-up">
        <p className="eyebrow">CV</p>
        <h1>Joy Omowaye</h1>
        <p className="lead">
          Product Designer &amp; Design Leader · 5+ years · UK, US &amp; international markets
        </p>
      </header>

      <div className="container cv-layout">
        <aside className="cv-sidebar" data-reveal="fade-right">
          <img
            src={profile.photos.aboutPrimary}
            alt={profile.name}
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
          />

          <div className="cv-contact-block">
            <p className="cv-contact-label">Email</p>
            <a href={mail} className="cv-email-bold">{profile.email}</a>
          </div>
          <div className="cv-contact-block">
            <p className="cv-contact-label">Phone</p>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </div>
          <div className="cv-contact-block">
            <p className="cv-contact-label">Location</p>
            <span>Lagos, Nigeria</span>
          </div>
          <div className="cv-contact-block">
            <p className="cv-contact-label">Links</p>
            <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
            <a href={profile.behance} target="_blank" rel="noopener">Behance ↗</a>
            <a href={profile.youtube} target="_blank" rel="noopener">YouTube ↗</a>
            <a href="/work/">Portfolio ↗</a>
          </div>

          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            <a href={mail} className="btn btn-primary" style={{ width: "100%", textAlign: "center" }}>
              Email me
            </a>
            <a
              href="/Joy_Omowaye_CV.pdf"
              download="Joy_Omowaye_CV.pdf"
              className="btn"
              style={{ width: "100%", textAlign: "center" }}
            >
              Download CV (PDF)
            </a>
            <a
              href={profile.bookUrl}
              className="btn"
              style={{ width: "100%", textAlign: "center" }}
              target="_blank"
              rel="noopener"
            >
              Book on Prooval
            </a>
          </div>

          <div className="cv-sidebar-skills">
            <h4>Tools</h4>
            <div className="cv-skills">
              {skills.tools.map((s) => <span key={s}>{s}</span>)}
            </div>
            <h4 style={{ marginTop: 16 }}>Languages</h4>
            <div className="cv-skills">
              {["English (Fluent)", "Yoruba (Fluent)", "Pidgin English", "French (Beginner)"].map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>
        </aside>

        <div className="cv-main">
          {/* Summary */}
          <section className="cv-block" data-reveal="fade-up">
            <h2>Professional Summary</h2>
            <p style={{ color: "var(--text-soft)", margin: 0, lineHeight: 1.7 }}>
              Product Designer with 5+ years of experience designing and delivering digital products
              across SaaS, fintech, marketplaces, and emerging technology platforms. Specialises in
              designing secure, user-centred experiences for financial transactions, digital commerce,
              and scalable products turning complex ideas into intuitive solutions that support user
              needs and business growth. Work covers web and mobile applications used across the UK, US,
              and international markets. Collaborates closely with engineers and founders from early
              concept through to production release. Actively contributes to the design community through
              mentorship, speaking, judging, and educational content.
            </p>
          </section>

          {/* Experience */}
          <section className="cv-block">
            <h2 data-reveal="fade-up">Professional Experience</h2>

            <div className="cv-entry" data-reveal="fade-up" data-delay="1">
              <div className="cv-entry-head">
                <h3>Founding Product Designer</h3>
                <span className="cv-badge">Current</span>
              </div>
              <p className="meta">Prooval (Formerly Hackthejobs) · Nigeria · Jan 2024 to Present</p>
              <ul>
                <li>Joined at concept stage and led product design from early research through to launch.</li>
                <li>Conducted user research and product discovery for HacktheJobs, informing the strategic pivot to Prooval.</li>
                <li>Designed wallet, payout, and payment experiences enabling creators to receive earnings and complete secure financial transactions.</li>
                <li>Designed core flows for expert profiles, service bookings, digital product sales, and webinars.</li>
                <li>Created interactive prototypes used to validate ideas with early users.</li>
                <li>Collaborated with engineering to translate requirements into production-ready designs.</li>
                <li>Supported growth through collaboration with marketing on onboarding and positioning.</li>
                <li>Platform grew to <strong>16,000+ registered users</strong> following the product pivot and launch.</li>
              </ul>
            </div>

            <div className="cv-entry" data-reveal="fade-up" data-delay="1">
              <div className="cv-entry-head">
                <h3>Product Designer</h3>
              </div>
              <p className="meta">Ingenious App Studios · UK · March 2023 to May 2025</p>
              <ul>
                <li>Delivered product design for multiple web and mobile applications across industries within a UK-based development company.</li>
                <li>Led UX and UI design across <strong>20+ client products</strong> at various stages of development.</li>
                <li>Created wireframes, prototypes, and high-fidelity interfaces for mobile and web.</li>
                <li>Collaborated directly with frontend and backend engineers to ensure accurate implementation.</li>
                <li>Contributed to design systems and reusable components used across projects.</li>
                <li>Products include: Tisume, Prime Events, QuickRep, Life in the UK (Urdu), Nudge, My Best 11.</li>
              </ul>
            </div>

            <div className="cv-entry" data-reveal="fade-up" data-delay="2">
              <div className="cv-entry-head">
                <h3>UI/UX &amp; Graphic Designer</h3>
              </div>
              <p className="meta">Nomad Internet · US · February 2024 to August 2024</p>
              <ul>
                <li>Improved website navigation and usability across core pages.</li>
                <li>Designed marketing graphics reaching over <strong>20,000 audiences</strong> through ads and publications.</li>
                <li>Collaborated with team to improve Shopify interface consistency by <strong>15%</strong>.</li>
                <li>Standardised visual components using a design-system approach.</li>
              </ul>
            </div>

            <div className="cv-entry" data-reveal="fade-up" data-delay="3">
              <div className="cv-entry-head">
                <h3>Product Designer</h3>
              </div>
              <p className="meta">LevenUp · San Francisco, USA · October 2021 to August 2022</p>
              <ul>
                <li>Worked on an event-discovery platform helping users find local events and activities.</li>
                <li>Conducted usability research and user testing to identify friction points.</li>
                <li>Designed user flows, wireframes, and interactive prototypes covering <strong>150+ interface screens</strong>.</li>
                <li>Improved clarity and navigation through iterative design improvements.</li>
              </ul>
            </div>
          </section>

          {/* Core Skills */}
          <section className="cv-block" data-reveal="fade-up">
            <h2>Core Skills</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div>
                <p className="cv-skills-label">Technical</p>
                <div className="cv-skills">
                  {skills.technical.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>
              <div>
                <p className="cv-skills-label">Professional</p>
                <div className="cv-skills">
                  {skills.professional.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>
            </div>
          </section>

          {/* Leadership & Community */}
          <section className="cv-block" data-reveal="fade-up">
            <h2>Leadership &amp; Community</h2>
            <div className="cv-entry">
              <div className="cv-entry-head">
                <h3>Team Lead Ogun Digital Summit</h3>
              </div>
              <p className="meta">2025 Edition · Ogun State, Nigeria</p>
              <ul>
                <li>Coordinated 120+ volunteers and cross-functional teams for Ogun State's largest regional technology event.</li>
                <li>Featured in Techcabal, TechEconomy, and Legit.ng coverage.</li>
                <li>Appointed lead after review of exceptional work by the ODS organisers.</li>
              </ul>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-head">
                <h3>Co-Organiser Friends of Figma, Abeokuta</h3>
              </div>
              <p className="meta">2025 to Present · Figma Global Community</p>
              <ul>
                <li>Appointed Co-Organiser of Figma's official Abeokuta chapter in recognition of sustained contribution.</li>
                <li>Co-organised the 2026 FOF Make-a-thon 120+ participants building live products using Figma Make.</li>
                <li>Hosts the annual Config Watch Party (100+ attendees).</li>
              </ul>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-head">
                <h3>Judge Airtel × 3MTT NextGen Knowledge Showcase</h3>
              </div>
              <p className="meta">April 2026 · Nigeria</p>
              <ul>
                <li>Invited to judge alongside Salem King, Seye Bandele (PaidHR), and Joshua Chibueze (PiggyVest).</li>
              </ul>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-head">
                <h3>External Judge</h3>
              </div>
              <p className="meta">Grazac Academy · Uranus Academy · 3MTT</p>
              <ul>
                <li>Evaluated student-built digital products across multiple graduation showcases.</li>
              </ul>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-head">
                <h3>Speaker</h3>
              </div>
              <p className="meta">TechCrush Alumni Series · NextGen Conference · HacktheJobs</p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-head">
                <h3>Mentor</h3>
              </div>
              <p className="meta">100+ early-career designers · workshops, community sessions &amp; online content</p>
            </div>
          </section>

          {/* Education */}
          <section className="cv-block" data-reveal="fade-up">
            <h2>Education</h2>
            <div className="cv-entry">
              <h3>Obafemi Awolowo University, Nigeria</h3>
              <p className="meta">B.Sc.Ed, Biology · 2016 to 2022</p>
            </div>
            <div className="cv-entry">
              <h3>Uranus Academy, Nigeria</h3>
              <p className="meta">Fundamentals of Product Design · 2022</p>
            </div>
            <div className="cv-entry">
              <h3>Udemy</h3>
              <p className="meta">Figma UI/UX Essentials · 2023</p>
            </div>
            <div className="cv-entry">
              <h3>Dev &amp; Design</h3>
              <p className="meta">Basics of Coding &amp; Content Design · 2023</p>
            </div>
          </section>

          {/* Certifications & Awards */}
          <section className="cv-block" data-reveal="fade-up">
            <h2>Certifications &amp; Awards</h2>
            <ul style={{ color: "var(--text-soft)", paddingLeft: 18, fontSize: "0.9rem" }}>
              {profile.certifications.map((c) => (
                <li key={c} style={{ marginBottom: 8 }}>{c}</li>
              ))}
            </ul>
          </section>

          {/* Publications */}
          <section className="cv-block" data-reveal="fade-up">
            <h2>Publications &amp; Media</h2>
            <ul style={{ color: "var(--text-soft)", paddingLeft: 18, fontSize: "0.9rem" }}>
              <li style={{ marginBottom: 8 }}>Featured in Tech Economy for leadership of Ogun Digital Summit</li>
              <li style={{ marginBottom: 8 }}>Featured in Techcabal "Inside Ogun Digital Summit: How a Local Idea is Becoming One of Nigeria's Most Influential Tech Gatherings"</li>
              <li>Medium articles on UX, product design, and digital strategy</li>
            </ul>
          </section>

          {/* Selected Projects */}
          <section className="cv-block" data-reveal="fade-up">
            <h2>Selected Projects</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { name: "Prooval", url: "https://www.prooval.com" },
                { name: "My Best 11", url: "https://play.google.com/store/apps/details?id=com.mybesteleven.fantasy" },
                { name: "NIMRA", url: "https://nimra.ng" },
                { name: "QuePosts", url: "https://queposts.com" },
                { name: "Tisume", url: "https://tisume.com" },
              ].map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener" className="panel-chip" style={{ textDecoration: "none" }}>
                  {p.name} ↗
                </a>
              ))}
            </div>
            <p style={{ marginTop: 16 }}>
              <a href="/work/" className="text-link">View full portfolio →</a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

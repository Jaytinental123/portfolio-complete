import { profile } from "../data";
import joyGallery from "@/imports/joy-art-gallery.webp";
import fofSpeaking1 from "@/imports/7U0A4252.jpg";
import fofSpeaking2 from "@/imports/7U0A4629.jpg";
import fofGroup from "@/imports/7U0A4470.jpg";
import fofTeamBW from "@/imports/_MG_8713.jpg";
import fofSitting from "@/imports/_MG_8741.jpg";
import eventPhoto1 from "@/imports/image-10.png";
import eventPhoto2 from "@/imports/image-11.png";
import eventPhoto3 from "@/imports/image-12.png";
import eventPhoto4 from "@/imports/image-14.png";
import techCrushFlyer from "@/imports/image-20.png";

const eventPhotos = [eventPhoto1, eventPhoto2, eventPhoto3, eventPhoto4];
const eventAlts = [
  "Joy Omowaye at HacktheJobs event",
  "Joy with industry leaders at NextGen Conference",
  "Joy at tech summit outdoor networking",
  "Joy Omowaye at HacktheJobs",
];

export default function AboutPage() {
  return (
    <>
      <header className="page-header container" data-reveal="fade-up">
        <p className="eyebrow">About</p>
        <h1>Designing products with clarity and intent</h1>
        <p className="lead">{profile.about}</p>
      </header>

      <div className="container about-layout">
        <div className="about-gallery" data-reveal="fade-right">
          <img
            src={profile.photos.aboutPrimary}
            alt={`${profile.name}, professional portrait`}
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
          />
          <img
            src={joyGallery}
            alt={`${profile.name} at art gallery`}
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
          />
        </div>

        <div className="about-content" data-reveal="fade-left" data-delay="1">
          <h2>Who I am</h2>
          <p>
            Joy Omowaye is a Lead Product Designer at Prooval with experience shaping digital
            products across EdTech, SaaS, FinTech, and e-commerce. I specialise in data-driven
            design, product strategy, and UX research, helping teams build intuitive, scalable
            experiences across the UK, US, and international markets.
          </p>
          <p>
            I collaborate closely with engineers and founders to move products from early concept
            through to production release, translating complex business goals into meaningful user
            journeys.
          </p>

          <h2>What I bring</h2>
          <p>{profile.services.join(" · ")}</p>

          <h2>Community &amp; leadership</h2>
          <ul className="about-list">
            <li>Team Lead, Ogun Digital Summit 2025 covered by Legit.ng, TechEconomy &amp; Techcabal</li>
            <li>Co-Organiser, Friends of Figma Abeokuta Config Watch Party &amp; Make-a-thon 2026</li>
            <li>Judge Airtel × 3MTT NextGen Knowledge Showcase &amp; Awards</li>
            <li>External judge Uranus Academy &amp; Grazac Academy graduation showcases</li>
            <li>Speaker TechCrush Alumni Series, NextGen Conference, HacktheJobs</li>
            <li>Mentor to 100+ early-career designers</li>
          </ul>

          <h2>Let&apos;s connect</h2>
          <p>
            <a href="/contact/" className="text-link">
              Send me an email
            </a>{" "}
            or view my{" "}
            <a href="/cv/" className="text-link">
              full CV
            </a>
            .
          </p>
        </div>
      </div>

      {/* FOF Abeokuta Make-a-thon 2026 */}
      <section className="section-block" style={{ paddingTop: 64 }}>
        <div className="container" style={{ marginBottom: 32 }}>
          <p className="eyebrow" data-reveal="fade-up">Friends of Figma, Abeokuta</p>
          <h2 className="section-title" data-reveal="fade-up" data-delay="1">
            Make-a-thon 2026 building in the room
          </h2>
          <p
            data-reveal="fade-up"
            data-delay="2"
            style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "52ch", marginTop: 8 }}
          >
            120+ designers, developers, and product managers. One day. Real products shipped using
            Figma Make. I co-organised and hosted the event as part of Figma&apos;s global community programme.
          </p>
        </div>

        <div className="fof-makeatron" data-reveal="scale" data-delay="1">
          {/* Hero speaker shot */}
          <div className="fof-hero">
            <img src={fofSpeaking1} alt="Joy Omowaye hosting FOF Abeokuta Make-a-thon 2026" />
          </div>
          {/* Supporting grid */}
          <div className="fof-side">
            <div className="fof-side-top">
              <img src={fofSpeaking2} alt="Joy speaking at FOF Make-a-thon" />
            </div>
            <div className="fof-side-bot">
              <img src={fofSitting} alt="Joy at FOF Abeokuta event" />
            </div>
          </div>
          {/* Full-width group shot */}
          <div className="fof-group">
            <img src={fofGroup} alt="FOF Abeokuta Make-a-thon 2026 full group photo" />
          </div>
          {/* B&W team */}
          <div className="fof-team">
            <img src={fofTeamBW} alt="Friends of Figma Abeokuta team" />
          </div>
        </div>
      </section>

      {/* NextGen Conference */}
      <section className="section-block" style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div className="container" style={{ marginBottom: 24 }}>
          <p className="eyebrow" data-reveal="fade-up">Airtel × 3MTT</p>
          <h2 className="section-title" style={{ marginBottom: 12 }} data-reveal="fade-up" data-delay="1">
            NextGen Knowledge Showcase judge
          </h2>
          <p
            data-reveal="fade-up"
            data-delay="2"
            style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "56ch", marginBottom: 24 }}
          >
            Invited to judge alongside Salem King, Seye Bandele (PaidHR), and Joshua Chibueze
            (PiggyVest). Participants built solutions spanning women&apos;s health, estate management,
            and legal document simplification. Top 3 teams awarded laptops and tablets.
          </p>
        </div>
      </section>

      {/* Speaking talks */}
      <section className="section-block container" style={{ paddingTop: 24 }}>
        <p className="eyebrow" data-reveal="fade-up">Speaking</p>
        <h2 className="section-title" style={{ marginBottom: 20 }} data-reveal="fade-up" data-delay="1">
          Talks &amp; presentations
        </h2>
        <div className="speaking-cards" data-reveal="fade-up" data-delay="2">
          <div className="speaking-card">
            <div className="speaking-card-header">
              <span className="speaking-card-tag">TechCrush Alumni Series</span>
              <span className="speaking-card-date">April 2026 · Google Meet</span>
            </div>
            <h3 className="speaking-card-title">The New UI/UX Reality: What Junior Designers Need Beyond Technical Tools</h3>
            <p className="speaking-card-body">
              Alongside Joshua Opaleke (SavvyBee), Praise Akinde (Ewave), and Imisioluwa Oyinloye (247 Labs).
            </p>
            <div className="speaking-card-footer">
              <img src={techCrushFlyer} alt="TechCrush Alumni Series flyer" className="speaking-card-thumb" />
            </div>
          </div>
          <div className="speaking-card">
            <div className="speaking-card-header">
              <span className="speaking-card-tag">NextGen Conference</span>
              <span className="speaking-card-date">2025 · Nigeria</span>
            </div>
            <h3 className="speaking-card-title">My Journey to Becoming a UI/UX Designer</h3>
            <p className="speaking-card-body">
              A walkthrough of the real challenges, lessons, and mindset shifts from the early days of building a design career.
            </p>
            <a
              href="https://docs.google.com/presentation/d/15TS_qjBP9hwoiCM4rsyBew0OM3-1GpB8EIFBB29xecE/edit?slide=id.g38bf2d754b5_0_122"
              target="_blank"
              rel="noopener"
              className="speaking-card-link"
            >
              View slides ↗
            </a>
          </div>
          <div className="speaking-card">
            <div className="speaking-card-header">
              <span className="speaking-card-tag">HacktheJobs</span>
              <span className="speaking-card-date">2024</span>
            </div>
            <h3 className="speaking-card-title">Design for growth: building products people actually use</h3>
            <p className="speaking-card-body">
              Spoke on product thinking, user-centred design, and what it takes to ship work that drives real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Community events photo strip */}
      <section className="section-block container" style={{ paddingTop: 48 }}>
        <p className="eyebrow" data-reveal="fade-up">In the community</p>
        <h2 className="section-title" style={{ marginBottom: 20 }} data-reveal="fade-up" data-delay="1">
          HacktheJobs · ODS · NextGen
        </h2>
        <div className="event-photo-strip" data-reveal="fade-up" data-delay="2">
          {eventPhotos.map((src, i) => (
            <div key={i} className="event-photo-cell">
              <img src={src} alt={eventAlts[i]} />
            </div>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="section-block container" style={{ paddingTop: 0 }}>
        <p className="eyebrow" data-reveal="fade-up">Recognition</p>
        <h2 className="section-title" data-reveal="fade-up" data-delay="1">
          Press, credentials &amp; endorsements
        </h2>
        <div className="recognition-grid" data-reveal="fade-up" data-delay="2">
          <div className="recognition-card">
            <span className="recognition-tag">Press</span>
            <p className="recognition-body">
              &ldquo;This year&apos;s edition is led by Joy Omowaye.&rdquo;
            </p>
            <span className="recognition-source">Techcabal · Inside Ogun Digital Summit</span>
          </div>
          <div className="recognition-card">
            <span className="recognition-tag">Press</span>
            <p className="recognition-body">
              Featured in ODS 2025 coverage Ogun State&apos;s flagship tech summit, including Microsoft GM for West Africa Abideen Yusuf.
            </p>
            <a
              href="https://techeconomy.ng/victor-adeleye-speaks-on-changing-the-narrative-of-tech-startups-in-ogun-state"
              target="_blank"
              rel="noopener"
              className="recognition-link"
            >
              Read on TechEconomy →
            </a>
          </div>
          <div className="recognition-card">
            <span className="recognition-tag">Industry</span>
            <p className="recognition-body">
              Judge at Airtel × 3MTT NextGen Knowledge Showcase alongside Salem King, Seye Bandele (PaidHR), Joshua Chibueze (PiggyVest), and Mayowa Adeosun.
            </p>
            <span className="recognition-source">NextGen by Airtel &amp; 3MTT · April 2026</span>
          </div>
          <div className="recognition-card">
            <span className="recognition-tag">Credentials</span>
            <p className="recognition-body">
              Global Talent Visa evidence Tech Nation UK. Endorsed across product growth, technical contribution, and voluntary community leadership.
            </p>
            <a
              href="https://drive.google.com/file/d/15M9m4midCwF303Flk0n0dLO3jVzPhBMh/view"
              target="_blank"
              rel="noopener"
              className="recognition-link"
            >
              View evidence document →
            </a>
          </div>
          <div className="recognition-card">
            <span className="recognition-tag">Community</span>
            <p className="recognition-body">
              Appointed Co-Organiser of Friends of Figma Abeokuta by Figma&apos;s global community team. Led the 2026 Make-a-thon with 120+ participants.
            </p>
            <span className="recognition-source">Friends of Figma · Global network</span>
          </div>
          <div className="recognition-card">
            <span className="recognition-tag">Industry</span>
            <p className="recognition-body">
              Represented Hackthejobs as Product Lead at GITEX Nigeria 2024, alongside Seye Bandele (CEO, PaidHR) and Joshua Chibueze (Co-Founder, PiggyVest).
            </p>
            <span className="recognition-source">GITEX Nigeria 2024</span>
          </div>
        </div>
      </section>

    </>
  );
}

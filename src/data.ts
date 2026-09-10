export interface Metric {
  label: string;
  value: string;
}

export interface CaseSection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface Project {
  slug: string;
  tier: "case" | "listing";
  tileColor?: string;
  cover?: string;
  frame?: "browser" | "phone" | "app-banner";
  title: string;
  subtitle?: string;
  category: string;
  platforms?: string[];
  year?: string;
  role?: string;
  featured?: boolean;
  externalUrl?: string;
  behanceUrl?: string;
  prototypeUrl?: string;
  beforeImage?: string;
  liveNote?: string;
  accent?: string;
  summary?: string;
  metrics?: Metric[];
  overview?: CaseSection[];
  process?: CaseSection[];
  outcome?: CaseSection[];
  redesign?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  pending?: boolean;
  slot?: number;
}

export interface SpeakingItem {
  title: string;
  detail: string;
  image?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface Profile {
  name: string;
  fullName: string;
  title: string;
  linkedinTitle: string;
  location: string;
  kicker: string;
  kickerSub: string;
  headline: string;
  subheadline: string;
  about: string;
  tagline: string;
  email: string;
  phone: string;
  linkedin: string;
  behance: string;
  bookUrl: string;
  bookLabel: string;
  youtube: string;
  availability: string;
  photos: {
    hero: string;
    heroCutout: string;
    heroCutoutFallback: string;
    aboutPrimary: string;
    aboutSecondary: string;
  };
  speakingPhotos: string[];
  stats: Array<{ label: string; value: string }>;
  services: string[];
  testimonials: Testimonial[];
  speaking: SpeakingItem[];
  community: SpeakingItem[];
  process: ProcessStep[];
  certifications: string[];
}

export const profile: Profile = {
  name: "Joy Omowaye",
  fullName: "Funmilayo Joy Omowaye",
  title: "Lead Product Designer",
  linkedinTitle: "Lead Product Designer, Prooval · Team Lead, Ogun Digital Summit",
  location: "Lagos, Nigeria",
  kicker: "I am the architect of your product.",
  kickerSub: "Do not build without a plan.",
  headline:
    "I identify the problem you're trying to solve, understand the people you're solving it for, and go brick by brick to design the product that brings it all together, with the structure, clarity, and scalability to grow.",
  subheadline: "I'm Joy Omowaye, a Lead Product Designer at Prooval.",
  about: `I'm a Product Designer with experience shaping digital products in EdTech, SaaS, FinTech, and e-commerce. I specialise in data-driven design, product strategy, and UX research, helping teams build intuitive, scalable experiences. I've led end-to-end design, worked with cross-functional teams, and translated business goals into meaningful user journeys.`,
  tagline: "Product design · UX research · Design systems · End-to-end delivery",
  email: "omowayejoyfunmi@gmail.com",
  phone: "+234 903 571 9045",
  linkedin: "https://www.linkedin.com/in/joyomowaye45",
  behance: "https://www.behance.net/joyomowaye9045",
  bookUrl: "https://prooval.com/joy-omowaye/discovery",
  bookLabel: "Book a session on Prooval",
  youtube: "https://www.youtube.com/@Uxdesign_with_joy",
  availability: "Open to product design, design leadership, and management roles. Founding teams, scale-ups and select contract work.",
  photos: {
    hero: "/assets/photos/joy-full.jpg",
    heroCutout: "/assets/photos/joy-cutout.webp",
    heroCutoutFallback: "/assets/photos/joy-cutout.png",
    aboutPrimary: "/assets/photos/joy-portrait.jpg",
    aboutSecondary: "/assets/photos/joy-full.jpg",
  },
  speakingPhotos: [],
  stats: [
    { label: "Years designing products", value: "5+" },
    { label: "Products & projects", value: "50+" },
    { label: "Countries worked across", value: "5+" },
    { label: "Designers mentored", value: "100+" },
  ],
  services: [
    "Product & UX design",
    "Design systems",
    "Prototyping & validation",
    "UX research",
    "Website & product audits",
    "Coaching & mentorship",
  ],
  testimonials: [
    {
      quote:
        "I can clearly see your fingerprints on every major step, from shaping the new onboarding flow to driving the product into something truly meaningful.",
      name: "Victor Adeleye",
      role: "Co-Founder, Prooval",
    },
    {
      quote:
        "Joy has this ability to enter a messy problem and immediately start bringing structure to it. She asks questions other people overlook, and that always shows in the final product.",
      name: "Ade Omosanya",
      role: "",
    },
    {
      quote:
        "Joy understood our business surprisingly quickly. She owned the design decisions and delivered excellently well, one of the best I have worked with.",
      name: "TMAK",
      role: "Founder, Screws & Spanners",
    },
    {
      quote:
        "Zippro Management System went from a 1990s-looking UI to a very modern and seamless user experience. All our schools have given great feedback since we transitioned to the new UX. Joy picked up all the complex flows and simplified them, and I highly recommend her.",
      name: "Matthew",
      role: "CEO, ZSMS",
    },
    {
      quote:
        "Joy is a powerhouse. She combines strong design skills with the confidence to pass that knowledge across to younger and upcoming designers.",
      name: "Programme Manager",
      role: "Techcrush",
    },
    {
      quote:
        "I am impressed by how articulate Joy is when it comes to presenting her ideas with clarity. Glad to work with her.",
      name: "Manager",
      role: "Providus Bank",
    },
    {
      quote:
        "Congratulations to the team for orchestrating such a successful event and fostering growth and innovation within the digital ecosystem.",
      name: "Angel Investor",
      role: "Venture Capital",
    },
    {
      pending: true,
      slot: 2,
      quote: "",
      name: "Soliudeen Ogunsola",
      role: "Product Designer · Blockchain",
    },
  ],
  speaking: [
    {
      title: "TechCrush Alumni Series",
      detail: "The New UI/UX Reality: What Junior Designers Need Beyond Technical Tools to Succeed · April 2026 · Google Meet",
    },
    {
      title: "Judge Airtel × 3MTT NextGen Knowledge Showcase & Awards",
      detail: "Invited to judge at the NextGen Knowledge Showcase alongside Salem King, Seye Bandele (PaidHR), Joshua Chibueze (PiggyVest), and others. Projects ranged from a women's health platform to an estate management system and a legal document simplifier. Top 3 teams were awarded laptops and tablets. April 2026.",
    },
    {
      title: "HacktheJobs Career Summit",
      detail: "Speaker at Hackthejobs career summit covering product design careers and the Nigerian tech ecosystem.",
    },
    {
      title: "Grazac Academy",
      detail: "Talks to cohorts on product design practice, portfolio building and entering the industry.",
    },
    {
      title: "Friends of Figma, Abeokuta",
      detail: "Co-organiser and speaker at Figma's official community chapter in Abeokuta, running hands-on workshops for local designers.",
    },
  ],
  community: [
    {
      title: "Team Lead, Ogun Digital Summit 2025",
      detail:
        "Led strategy, execution and 120+ volunteers for Ogun State's largest tech summit covered by Legit.ng, TechEconomy, and Techcabal. This year's edition was led by Joy Omowaye.",
    },
    {
      title: "Co-Organiser, Friends of Figma, Abeokuta",
      detail:
        "Figma's official global community programme. I co-organise the Abeokuta chapter hosting the annual Config Watch Party (100+ attendees) and the 2026 FOF Make-a-thon (120+ participants), where teams built and shipped real products using Figma Make in a single day.",
    },
    {
      title: "External Judge",
      detail: "Uranus Academy, Grazac Academy, and 3MTT graduation product showcases.",
    },
    {
      title: "Mentor",
      detail: "300+ early-career designers through 1:1 mentorship, community sessions, and structured programmes.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discover",
      body: "Stakeholder interviews, analytics, and research to frame the real problem.",
    },
    {
      step: "02",
      title: "Define",
      body: "Journey maps, IA, and success metrics aligned to business goals.",
    },
    {
      step: "03",
      title: "Design",
      body: "Wireframes → high-fidelity UI → prototypes tested with users.",
    },
    {
      step: "04",
      title: "Deliver",
      body: "Engineering handoff, QA support, and iteration post-launch.",
    },
  ],
  certifications: [
    "Product Design Certification, Uranus Academy (2022)",
    "Figma UI/UX Design Essentials, Udemy (2023)",
    "JavaScript Fundamentals, Dev & Design (2023)",
    "Impact & Leadership Award, Ogun Digital Summit (2025)",
    "Always Growing Employee Award, Prooval",
  ],
};

export const projects: Project[] = [
  {
    slug: "mb11",
    tier: "case",
    tileColor: "#101828",
    frame: "app-banner",
    title: "My Best 11",
    subtitle: "Fantasy football and match-prediction app, live on Google Play and the App Store",
    category: "Gaming · Mobile · UK",
    platforms: ["iOS", "Android", "Admin dashboard"],
    year: "2025",
    role: "Product Designer",
    featured: true,
    externalUrl: "https://play.google.com/store/apps/details?id=com.mybesteleven.fantasy",
    prototypeUrl: "https://www.figma.com/proto/trgtoMgBV0l2iWQkLoxgXJ/My-Best-11--Copy-?node-id=5995-5527&viewport=-808%2C-596%2C0.08&t=CUXFpQwrlJfx9WZm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5995%3A3641&show-proto-sidebar=1&page-id=3%3A8329",
    accent: "#22c55e",
    summary:
      "Lead Product Designer on a UK-regulated betting app (Ingenious App Studios). I designed 500+ production-ready screens across Android and iOS onboarding, fantasy gameplay, wallet/payout flows, and admin plus a full component-based design system.",
    metrics: [
      { label: "Production screens", value: "500+" },
      { label: "Play Store downloads", value: "2k+" },
      { label: "Platforms", value: "iOS + Android" },
      { label: "Surfaces", value: "Player · Admin · Store" },
    ],
    overview: [
      {
        title: "The product",
        body: "MB11 asks football fans to back their own judgement rather than their luck. It runs two competing game modes side by side, and the design problem was making both legible inside one app without either feeling like a bolt-on.",
        bullets: [
          "Fantasy mode, build a squad, enter weekly contests, climb a leaderboard",
          "Showdown mode, predict win, lose or draw across a full fixture list",
          "Prize positions run deep, so leaderboard design had to stay readable well below the top three",
        ],
      },
      {
        title: "My role",
        body: "I designed the app end to end and the operator tooling that supports it. That meant holding the free tier, the paid tier and the admin surface in one system rather than designing three products.",
        bullets: [
          "Free and paid player journeys, including the upgrade path",
          "Admin dashboard for fixtures, contests and payouts",
          "Store screenshots and marketing mockups",
        ],
      },
    ],
    process: [
      {
        title: "Two modes, one mental model",
        body: "Fantasy and Showdown score differently and reward differently. I gave them a shared shell, the same entry pattern, the same leaderboard grammar, the same result states, so switching modes never asks the player to relearn the app.",
      },
      {
        title: "Designing for the losing week",
        body: "Prediction games live or die on what happens after a wrong pick. Showdown does not end a run on one miss, and the UI had to make that survivable feeling obvious, not buried in the rules screen.",
      },
      {
        title: "The admin side",
        body: "Someone has to load fixtures, open contests and settle results every gameweek under time pressure. I designed that dashboard around the weekly operational rhythm rather than as a generic CRUD panel.",
      },
    ],
    outcome: [
      {
        title: "Shipped live and regulated",
        body: "MB11 is live on Google Play and the Apple App Store with 500+ downloads. All user flows originate from my design work.",
        bullets: [
          "500+ production-ready screens across Android and iOS",
          "Component-based design system standardising UI behaviour across the full product",
          "Wallet deposit, withdrawal, and payout flows aligned to UK regulatory requirements",
          "Age verification and responsible gaming interfaces meeting UK Gambling Commission standards",
          "Participated in TestFlight iterative build testing before App Store release",
        ],
      },
    ],
  },
  {
    slug: "prooval",
    tier: "case",
    tileColor: "#ebe6dc",
    cover: "/assets/projects/prooval.webp",
    title: "Prooval",
    subtitle: "Creator monetization platform, from HacktheJobs pivot to 16,000+ users",
    category: "SaaS · Marketplace",
    platforms: ["Web", "Dashboard", "Mobile-responsive"],
    year: "2024, Present",
    role: "Founding Product Designer",
    featured: true,
    externalUrl: "https://www.prooval.com",
    accent: "#2563eb",
    summary:
      "As Founding Product Designer I led product direction from concept to a live marketplace. Within 7 months of pivoting: 16,567 users, 2,420+ products listed, 4,228+ bookings.",
    metrics: [
      { label: "Registered users", value: "16,567" },
      { label: "Bookings made", value: "4,228+" },
      { label: "Products listed", value: "2,420+" },
    ],
    overview: [
      {
        title: "The challenge",
        body: "Professionals were juggling DMs, scattered booking tools, and separate storefronts to sell what they know. The founding team needed a product vision that could validate quickly and still scale across very different niches.",
        bullets: [
          "Fragmented tools for bookings, products, and audience growth",
          "The early concept, HacktheJobs, needed strategic repositioning",
          "Trust, instant payouts, and one shareable link were the core promises",
        ],
      },
      {
        title: "My role",
        body: "As founding product designer I owned discovery through production-ready UI, partnering with engineering and marketing from day one.",
        bullets: [
          "User research and product discovery at concept stage",
          "Expert profiles, bookings, digital product sales, webinars",
          "Interactive prototypes for early validation",
          "Onboarding and positioning alongside marketing",
        ],
      },
    ],
    process: [
      {
        title: "Discovery and the pivot",
        body: "Research on HacktheJobs pointed away from a jobs product and toward creator monetization. Prooval reframed the same audience around a unified professional page, and the design had to carry that repositioning without losing the existing users.",
      },
      {
        title: "The core experience",
        body: "I designed the flows that shipped: single-link pages, marketplace discovery, session booking, digital product sales, and webinar hosting.",
        bullets: [
          "Create page → set up offerings → sell and get paid",
          "Marketplace built for skill-based discovery",
          "Instant payout made explicit in the flows and the copy, not just the pricing page",
        ],
      },
      {
        title: "Validation",
        body: "Prototypes went out to early users before build, and I iterated with engineering on implementation fidelity through launch.",
      },
    ],
    outcome: [
      {
        title: "Impact",
        body: "Prooval became a live marketplace generating real income for professionals across multiple countries within 7 months of pivoting from HacktheJobs.",
        bullets: [
          "16,567 registered users, 4,228+ bookings, 2,420+ products listed, all within 7 months",
          "HacktheJobs (predecessor): 0 → 2,500 mentees and 500 mentors across multiple countries in 5 months",
          "CEO quote: \"I can clearly see your fingerprints on every major step from shaping the new onboarding flow to driving the product into something truly meaningful.\"",
          "Represented Hackthejobs as Product Lead at GITEX Nigeria 2024",
        ],
      },
    ],
  },
  {
    slug: "zsms",
    tier: "case",
    tileColor: "#2b1b47",
    cover: "/assets/projects/zsms.webp",
    title: "Zippro School Management System",
    subtitle:
      "Full admin dashboard redesign, from a cluttered legacy UI to a system school staff can actually run a term on",
    category: "EdTech · B2B · Redesign",
    platforms: ["Web", "Admin dashboard"],
    year: "2024",
    role: "Product Designer",
    featured: true,
    accent: "#7c3aed",
    redesign: true,
    liveNote: "Live, privately used by schools",
    summary:
      "Zippro is a school management system used by administrators, teachers, and staff. I led a full redesign of the admin dashboard, restructuring a noisy interface into a clear information architecture built around the school term.",
    prototypeUrl: "https://www.figma.com/proto/PT4c4Gzk9clwJja7REgYTg/ZSMS-UI-Redesign?node-id=934-102230&viewport=-7706%2C1054%2C0.2&t=cNdeoDVi1kGu0SGD-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=934%3A102230&page-id=1%3A3",
    beforeImage: "/assets/projects/zsms-before.webp",
    metrics: [
      { label: "Scope", value: "Full UI redesign" },
      { label: "Screens delivered", value: "1,000+" },
      { label: "Modules redesigned", value: "12+" },
    ],
    overview: [
      {
        title: "Before, a dashboard that fought its users",
        body: "The existing admin experience buried school operations under redundant menus, inconsistent components, and weak visual hierarchy. Attendance, classes, exams, reports and messaging each took too many clicks and too much recall.",
        bullets: [
          "Cluttered layout with no clear primary action on any screen",
          "Inconsistent spacing, typography, and component styles across modules",
          "Frequent work, exam ranking, attendance, was the hardest to reach",
        ],
      },
      {
        title: "The goal",
        body: "Restructure the product around how school admins actually work: fewer steps, clearer grouping, and an interface that reads as calm and trustworthy without stripping out power-user features.",
      },
    ],
    process: [
      {
        title: "Audit and IA restructure",
        body: "I mapped the legacy flows and regrouped every feature into hubs that match how a school is run, Overview, Academics, People, Finance, Settings, cutting navigation depth and pulling the most-used actions onto the landing view.",
        bullets: [
          "Overview built around live school numbers: students, staff, parents, departments, waiting list",
          "Session and term selectors made global, since almost every task is scoped to a term",
          "Quick actions surfaced for the handful of things admins do daily",
        ],
      },
      {
        title: "A visual system, not a reskin",
        body: "I introduced a consistent type scale, spacing rhythm, and component library so every module reads as one product. Colour became functional, each hub carries its own header treatment, so you always know where you are.",
        bullets: [
          "Reworked data tables, filters, search and empty states",
          "Consistent primary and secondary actions across all modules",
          "Exam ranking redesigned as a scannable, sortable, exportable view",
        ],
      },
      {
        title: "After",
        body: "The redesigned dashboard puts the day's work first and lets admins drill down only when they need to. It was delivered with a clickable prototype and handed to engineering ready to build.",
      },
    ],
    outcome: [
      {
        title: "Delivered",
        body: "A complete redesign covering the overview, academics, exams, people and reporting modules, delivered as a design system plus a working prototype for stakeholder review.",
      },
    ],
  },
  {
    slug: "screws-and-spanners",
    tier: "case",
    tileColor: "#f7f7f8",
    cover: "/assets/projects/screws-and-spanners.webp",
    frame: "browser",
    title: "Screws & Spanners",
    subtitle:
      "Operations dashboard for a service marketplace, providers, suppliers, jobs, tickets and revenue in one view",
    category: "B2B · Marketplace · Dashboard",
    platforms: ["Web", "Admin panel"],
    year: "2024",
    role: "Product Designer",
    featured: false,
    accent: "#ef4444",
    liveNote: "Live, private admin dashboard",
    prototypeUrl: "https://www.figma.com/proto/5Zpb6dU1pUIPzXdV6GproU/S-S-Admin-Dashboard-M?node-id=266-8638&p=f&viewport=337%2C307%2C0.02&t=JybyZwSOYXzulqzo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=266%3A8638&show-proto-sidebar=1&page-id=5%3A2",
    summary:
      "A data-dense super-admin dashboard for a marketplace connecting customers with service providers and suppliers. The design problem was volume: registrations, active jobs, unfulfilled searches, support tickets and revenue all competing for the same screen.",
    metrics: [
      { label: "Product area", value: "Super-admin console" },
      { label: "Modules designed", value: "7" },
      { label: "Focus", value: "Data-dense operations UI" },
    ],
    overview: [
      {
        title: "The problem",
        body: "An operations team running a two-sided marketplace needs to answer very different questions in the same session: is supply healthy, is demand being met, is anything on fire, and are we making money. A single flat wall of numbers answers none of them well.",
      },
      {
        title: "My role",
        body: "I designed the full admin experience, the overview, and the modules for admins, service delivery, suppliers, subscriptions and promotions, support, and reporting.",
      },
    ],
    process: [
      {
        title: "Layering the overview",
        body: "I split the landing view into three reading levels. Marketplace health sits at the top as colour-coded totals. Below it, the four numbers that change hour to hour, unfulfilled searches, active jobs, open tickets, today's revenue, each linking straight into the work. Trends come last, because they inform decisions rather than trigger them.",
        bullets: [
          "Unfulfilled searches promoted to a headline metric: it is the clearest signal of a supply gap",
          "Every card is an entry point, not a dead end",
          "Period selector applies across the whole view",
        ],
      },
      {
        title: "Making dense data calm",
        body: "Soft category tints separate the top-level metrics without heavy borders, charts stay to two per row, and one accent colour carries every action so the eye knows where interaction lives. The result reads quickly at a glance and holds up when someone needs to sit in it for an hour.",
      },
    ],
    outcome: [
      {
        title: "Delivered",
        body: "A complete admin design system covering overview, service delivery, suppliers, promotions, support and reporting, ready for engineering handoff.",
      },
    ],
  },
  {
    slug: "velvot-pay",
    tier: "case",
    tileColor: "#111436",
    cover: "/assets/projects/velvot-pay.webp",
    title: "Velvot Pay",
    subtitle: "Bill payments and wallet app, onboarding and core payment flows",
    category: "Fintech · Mobile",
    platforms: ["iOS", "Android"],
    year: "2024",
    role: "Product Designer",
    featured: true,
    accent: "#7c5cff",
    prototypeUrl: "https://www.figma.com/proto/qTOJF4rIdkqeZBOGRilL9V/Velvotpay--Copy-?node-id=2057-29&p=f&viewport=571%2C331%2C0.76&t=PQuK2q1vyjK6RgAm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2011%3A86&show-proto-sidebar=1",
    behanceUrl: "https://www.behance.net/gallery/217694151/VP-App-Redesign",
    beforeImage: "/assets/projects/velvot-before-after.webp",
    summary:
      "A Nigerian bill payments app covering electricity, data, TV, insurance and education payments from a single wallet. I designed the full payment experience, from first open to completed transaction, making ease of payment the core principle across every flow.",
    metrics: [
      { label: "Payment categories", value: "5" },
      { label: "Focus", value: "Ease of payment" },
      { label: "Full case study", value: "On Behance" },
    ],
    overview: [
      {
        title: "The problem",
        body: "Bill payment apps ask for trust before they demonstrate value. Users hand over personal details and fund a wallet without ever seeing what the product actually does for them.",
      },
      {
        title: "The approach",
        body: "Ease of payment was the design principle across every screen. Each category (electricity, data, TV, insurance, education) follows the same fast path: select, confirm, done. The balance and first action are visible before a user signs up, so the value is felt before the ask.",
        bullets: [
          "Every payment category reachable in two taps from home",
          "Naira balance given the most visual weight",
          "Consistent flow across all five payment types",
        ],
      },
    ],
    outcome: [
      {
        title: "More detail",
        body: "The full write-up, including the flows beyond onboarding, is published on Behance.",
      },
    ],
  },
  {
    slug: "nimra",
    tier: "case",
    tileColor: "#efe9e0",
    cover: "/assets/projects/nimra.webp",
    title: "NiMRA",
    subtitle: "Website redesign for the Nigerian Marketing Research Association",
    category: "Web · Association",
    platforms: ["Web"],
    year: "2024",
    role: "Product Designer",
    featured: false,
    externalUrl: "https://nimra.ng",
    behanceUrl: "https://www.behance.net/gallery/217693883/NIMRA-Website-Redesign",
    accent: "#4f46e5",
    summary:
      "NiMRA supports research practitioners across Nigeria with training, ethics standards and networking. The site had to do two jobs at once: convince a professional to join, and serve the members who already had.",
    metrics: [
      { label: "Members served", value: "300+" },
      { label: "Member agencies", value: "80+" },
    ],
    overview: [
      {
        title: "The brief",
        body: "The association needed a site that reads as credible to the corporate research world while making membership value obvious enough to convert a first-time visitor.",
        bullets: [
          "Clear membership tiers, benefits and joining path",
          "Partner and member logos used as proof, not decoration",
          "News, FAQs and resources structured for returning members",
        ],
      },
      {
        title: "The challenge",
        body: "Association websites often fall into one of two failure modes: either they look like a brochure with no clear next step, or they feel like a members-only portal that ignores prospective members entirely. NiMRA needed both audiences to feel immediately at home.",
      },
    ],
    process: [
      {
        title: "Information architecture",
        body: "I restructured the site into two clear entry points: one path for prospective members (why join, what you get, how to apply) and one for current members (news, events, resources, renewal). The navigation reflects this split without making it feel like two separate sites.",
        bullets: [
          "Homepage hero speaks directly to the value of membership",
          "Member logos and press mentions used as credibility signals above the fold",
          "FAQ and resource pages built for returning members who know what they need",
        ],
      },
      {
        title: "Visual direction",
        body: "The design system uses a professional, restrained palette that positions NiMRA alongside regional industry bodies rather than startups. Typography is clean and editorial, reflecting the research and publishing context. Colour accents signal the interactive layer without competing with content.",
      },
    ],
    outcome: [
      {
        title: "Live at nimra.ng",
        body: "The redesign is live and in use. The full case study with screen-by-screen walkthroughs is on Behance.",
      },
    ],
  },
  {
    slug: "spectrum",
    tier: "case",
    tileColor: "#3a3a3a",
    cover: "/assets/projects/spectrum.jpg",
    title: "Spectrum",
    subtitle: "Tax payment and licensing app, in use in Kaduna State",
    category: "Fintech · GovTech",
    platforms: ["iOS", "Android"],
    year: "2025",
    role: "Product Designer",
    featured: false,
    accent: "#e0a15c",
    liveNote: "Live in Kaduna State",
    summary:
      "Spectrum simplifies tax payment across sectors, from hoteliers to small operators. I designed the wallet, the deposit and withdrawal flows, and the licensing journey, the part of the product that turns a compliance chore into a few taps.",
    metrics: [
      { label: "In use", value: "Kaduna State" },
      { label: "Focus", value: "Wallet & licensing" },
      { label: "Users", value: "Multi-sector taxpayers" },
    ],
    overview: [
      {
        title: "The problem",
        body: "Tax and licensing products are usually built around the agency's process rather than the payer's. The result is abandonment: people start, get lost, and go back to paying in person.",
      },
      {
        title: "The approach",
        body: "The home screen leads with total balance and the two actions that matter, then uses a short action list to move a new user through the steps that unblock everything else, first deposit, KYC, licence. Progress is stated in plain language rather than percentages.",
        bullets: [
          "Licensing framed by time cost: get or renew in minutes",
          "Withdrawable balance shown separately from total, so no one is surprised",
          "Bank details surfaced with one-tap copy",
        ],
      },
    ],
    outcome: [
      {
        title: "In production",
        body: "Spectrum is in use in Kaduna State.",
      },
    ],
  },
  {
    slug: "farm-market",
    tier: "case",
    tileColor: "#0a2d14",
    cover: "/assets/projects/farm-market.webp",
    frame: "phone",
    title: "My Hometown Farm Market",
    subtitle: "Marketplace app for farmers, buyers and field agents including USSD flows for rural access",
    category: "AgTech · Marketplace",
    platforms: ["Mobile", "USSD"],
    year: "2023",
    role: "Product Designer",
    featured: false,
    accent: "#166534",
    summary:
      "An IFAD-assisted Life-ND project. Farmers in rural areas with no smartphone can access the platform via USSD on a feature phone. Designed USSD flows alongside the mobile app to ensure zero-barrier entry for three user roles: farmer, buyer, and field agent.",
    metrics: [
      { label: "User roles", value: "3" },
      { label: "Access", value: "App + USSD" },
      { label: "Programme", value: "IFAD Life-ND" },
    ],
    overview: [
      {
        title: "The context",
        body: "This is early work and I include it because the constraint was unusual and shaped how I think about access. Designing a marketplace that degrades gracefully to USSD forces you to decide what is genuinely essential in a transaction.",
      },
      {
        title: "The challenge",
        body: "Rural farmers in Nigeria have limited smartphone access but still need a way to list produce, find buyers, and coordinate with field agents. The platform had to work across three very different user types with different technical literacy, device access, and goals.",
        bullets: [
          "Farmers: list produce, set prices, respond to inquiries",
          "Buyers: browse listings, contact farmers, place orders",
          "Field agents: verify listings and support offline farmers via USSD proxy",
        ],
      },
    ],
    process: [
      {
        title: "Designing for two surfaces at once",
        body: "The mobile app and USSD flow had to carry the same core transaction without sharing a single interface element. Every decision on the app side was tested against the question: can this work over a four-digit keypad? That constraint cut scope deliberately and made the mobile app cleaner for it.",
      },
      {
        title: "Three roles, one system",
        body: "Each user type needed a distinct experience: farmers needed simple listing creation with photo upload, buyers needed filtered search and direct contact, and field agents needed a lightweight dashboard to manage and verify farmer listings on behalf of those without phones.",
      },
    ],
    outcome: [
      {
        title: "What I took away",
        body: "Access is a design constraint, not an afterthought. Building for the lowest-capability surface first produced better decisions for every surface above it. This project shaped how I approach multi-role systems and inclusive product design.",
      },
    ],
  },

  // Work index listings
  { slug: "tisume", tier: "listing", title: "Tisume", subtitle: "Beauty booking platform", category: "Marketplace · UK", role: "Product Designer", year: "2024", externalUrl: "https://tisume.com", summary: "Booking platform connecting clients with beauty professionals. Live in the UK." },
  { slug: "nomad-internet", tier: "listing", tileColor: "#072a14", cover: "/assets/projects/nomad-internet.webp", title: "Nomad Internet", subtitle: "UI and graphic design for a US internet provider", category: "Web · E-commerce · US", role: "UI/UX & Graphic Designer", year: "2024", externalUrl: "https://nomadinternet.com", summary: "Site navigation and Shopify consistency work, plus brand and campaign graphics. The current live site has since been rebuilt by others." },
  { slug: "grazac-talent-city", tier: "listing", tileColor: "#3b1fa8", cover: "/assets/projects/grazac-talent-city.webp", title: "Grazac Talent City", subtitle: "Co-living and investment platform for creatives", category: "PropTech · Web", role: "Product Designer", year: "2024", externalUrl: "https://grazactalentcity.com", summary: "Residency and investment platform where ambitious professionals live, grow, and connect." },
  { slug: "grazac-academy", tier: "listing", tileColor: "#4c1d95", cover: "/assets/projects/grazac-academy.webp", title: "Grazac Academy", subtitle: "Ed-tech platform for design and tech training", category: "EdTech · Web", role: "Product Designer", year: "2023, Present", externalUrl: "https://grazacacademy.com", summary: "Skills platform connecting students and hiring companies. 300+ virtual enrollments, 120+ physical class seats." },
  { slug: "quickrep", tier: "listing", tileColor: "#16183a", cover: "/assets/projects/quickrep-ui.webp", title: "QuickRep", subtitle: "User, professional and admin dashboards", category: "SaaS · Multi-role", role: "Product Designer", year: "2024", summary: "Three connected dashboards designed around three very different jobs to be done." },
  {
    slug: "queposts",
    tier: "case",
    tileColor: "#0a3d1f",
    title: "QuePosts",
    subtitle: "Business directory, jobs, marketplace & events sole designer, end-to-end",
    category: "SaaS · Marketplace · Web",
    platforms: ["Web", "Seller dashboard", "Buyer portal"],
    year: "2025",
    role: "Sole Product Designer",
    featured: false,
    externalUrl: "https://queposts.com",
    accent: "#22c55e",
    summary:
      "Sole designer on QuePosts a live Nigerian business directory and marketplace with 50k+ active listings and 1M+ monthly visitors. I defined every flow from authentication to payment checkout and worked directly with frontend and backend engineers.",
    metrics: [
      { label: "Active listings", value: "50k+" },
      { label: "Monthly visitors", value: "1M+" },
      { label: "Job listings", value: "21k+" },
      { label: "Businesses listed", value: "10k+" },
    ],
    overview: [
      {
        title: "The product",
        body: "QuePosts lets businesses and individuals post listings across four categories directory, jobs, marketplace, and events while buyers discover, engage, and transact with those listings.",
      },
      {
        title: "My role",
        body: "I was the sole designer. I defined the full platform how buyers and sellers experience it differently, how listing creation works across four content types, how payments and transactions flow, and how the platform handles every system state.",
        bullets: [
          "Separate buyer and seller journeys with distinct permissions and flows",
          "Listing creation, preview, and publishing across jobs, marketplace, directory, and events",
          "Seller dashboard for messages, inquiries, and listing management",
          "Payment and transaction flow for paid listing interactions",
          "Reusable component system used directly by developers during build",
        ],
      },
    ],
    process: [
      {
        title: "Two roles, one platform",
        body: "Buyers and sellers have fundamentally different goals and permissions. I structured the information architecture to keep both coherent without splitting into two separate products.",
      },
      {
        title: "Listing states and system behaviour",
        body: "Defined draft, published, and inactive states for sellers, loading/empty/failed states for buyers, and how each state surfaces differently to each role. Every edge case was mapped before build.",
      },
      {
        title: "Engineering collaboration",
        body: "Worked directly with frontend and backend engineers to align UI behaviour with database responses, routing logic, and payment processes throughout the build.",
      },
    ],
    outcome: [
      {
        title: "Live and growing",
        body: "All major user flows and interactions on queposts.com originate from my design decisions. The platform launched and scaled to 50k+ active listings and 1M+ monthly visitors.",
      },
    ],
  },
  { slug: "nudge", tier: "listing", tileColor: "#5b21b6", cover: "/assets/projects/nudge.webp", title: "Nudge", subtitle: "App to simplify everyday activities and enhance time management", category: "Lifestyle · Mobile", role: "Product Designer", year: "2024", summary: "Activity and habit app designed to help users manage their time by nudging them toward meaningful daily tasks." },
  { slug: "hackthejobs", tier: "listing", tileColor: "#f0f4ff", cover: "/assets/projects/hackthejobs.webp", title: "HacktheJobs", subtitle: "Career platform, the product that became Prooval", category: "SaaS", role: "Product Designer", year: "2023", externalUrl: "https://www.behance.net/gallery/217693561/HacktheJobs", summary: "Full case study published on Behance." },
  { slug: "ogun-digital-summit", tier: "listing", title: "Ogun Digital Summit", subtitle: "Event platform and brand. I am the Team Lead.", category: "Event · Community", role: "Team Lead & Designer", year: "Ongoing", externalUrl: "https://ogundigitalsummit.com", summary: "Led strategy, execution and 120+ volunteers for Ogun State's largest tech event, alongside the design work." },
  { slug: "life-in-the-uk", tier: "listing", title: "Life in the UK, Urdu", subtitle: "Citizenship test study app", category: "EdTech · Mobile", role: "Product Designer", year: "2024", summary: "Study app for the UK citizenship test, localised for Urdu speakers." },
  { slug: "levenup", tier: "listing", title: "LevenUp", subtitle: "Event discovery platform, 150+ screens", category: "Consumer · Mobile", role: "Product Designer", year: "2021, 2022", summary: "San Francisco based event discovery product." },
  { slug: "scouts-capital", tier: "listing", title: "Scouts Capital", subtitle: "Sports social app where players showcase skills to get scouted", category: "Sports · Mobile", role: "Product Designer", year: "2024", summary: "Players publish clips and stats to gain recognition and move their careers forward. iOS and Android." },
  { slug: "ingenious", tier: "listing", tileColor: "#0d0f14", cover: "/assets/projects/ingenious.webp", title: "Ingenious App Studios", subtitle: "Portfolio and blog sections, plus 20+ client products", category: "Agency · UK", role: "Product Designer", year: "2023, 2025", summary: "UX and UI across more than twenty client products, along with the studio's own portfolio and blog." },
  { slug: "turn-up", tier: "listing", tileColor: "#f5f0ff", cover: "/assets/projects/prime-events.webp", title: "Turn Up", subtitle: "Event finder app", category: "Consumer · Mobile", role: "Product Designer", year: "2022", externalUrl: "https://www.behance.net/gallery/155965119/Turn-Up-(Event-Finder-App)", summary: "Event discovery app. Case study on Behance." },
  { slug: "directoride", tier: "listing", tileColor: "#f5f8ff", cover: "/assets/projects/directoride.webp", title: "DirectoRide", subtitle: "Ride and transport product", category: "Consumer · Mobile", role: "Product Designer", year: "2022", externalUrl: "https://www.behance.net/gallery/158935617/DirectoRide", summary: "Case study on Behance." },
  { slug: "covet-fashion", tier: "listing", tileColor: "#f0ebe0", cover: "/assets/projects/covet-fashion.webp", title: "Covet Fashion Tweak", subtitle: "App redesign study", category: "Gaming · Mobile", role: "Product Designer", year: "2022", externalUrl: "https://www.behance.net/gallery/156281765/Covet-Fashion-Tweak", summary: "App redesign study. Case study on Behance." },
];

export const caseStudies = projects.filter((p) => p.tier === "case");
export const listings = projects.filter((p) => p.tier === "listing");

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function tone(hex?: string): "light" | "dark" {
  if (!hex) return "dark";
  const c = hex.replace("#", "");
  const n = c.length === 3 ? c.split("").map((x) => x + x).join("") : c;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16));
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6 ? "light" : "dark";
}

export function initials(title: string) {
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

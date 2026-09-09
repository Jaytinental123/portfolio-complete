const profile = {
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
  tagline:
    "Product design · UX research · Design systems · End-to-end delivery",
  email: "omowayejoyfunmi@gmail.com",
  phone: "+234 903 571 9045",
  linkedin: "https://www.linkedin.com/in/joyomowaye45",
  behance: "https://www.behance.net/joyomowaye9045",
  bookUrl: "https://www.prooval.com/joyomowaye",
  bookLabel: "Book a session on Prooval",
  availability: "Open to senior roles, founding teams & select contract work",
  photos: {
    hero: "assets/photos/joy-portrait.png",
    aboutPrimary: "assets/photos/joy-headshot.png",
    aboutSecondary: "assets/photos/joy-full.png",
  },
  speakingPhotos: [],
  stats: [
    { label: "Years designing products", value: "5+" },
    { label: "Products shipped", value: "20+" },
    { label: "Countries worked across", value: "5+" },
    { label: "Designers mentored", value: "300+" },
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
        "Joy has demonstrated user-centered design skills and a natural ability to solve complex design challenges. She collaborates effectively with cross-functional teams and delivers designs that balance aesthetics with functionality. I am confident Joy would be an asset to any design team.",
      name: "Soliudeen Ogunsola",
      role: "",
    },
    {
      quote:
        "Joy makes an amazing team member. Having worked with her on a couple of projects, she's always at her best and brings time management and communication skills that were quite effective towards delivering projects on time.",
      name: "Fortune Ugwuala",
      role: "",
    },
    { pending: true, quote: "", name: "", role: "", slot: 3 },
    { pending: true, quote: "", name: "", role: "", slot: 4 },
    { pending: true, quote: "", name: "", role: "", slot: 5 },
    { pending: true, quote: "", name: "", role: "", slot: 6 },
    { pending: true, quote: "", name: "", role: "", slot: 7 },
    { pending: true, quote: "", name: "", role: "", slot: 8 },
  ],
  speaking: [
    {
      title: "NextGen Conference",
      detail: "Sessions on UX design and product development.",
    },
    {
      title: "Grazac Academy",
      detail: "Talks to cohorts on product design practice and portfolio building.",
    },
  ],
  community: [
    {
      title: "Co-Organiser, Friends of Figma, Abeokuta",
      detail:
        "Friends of Figma is Figma's official community programme. I co-organise the Abeokuta chapter, running local events for designers.",
    },
    {
      title: "Team Lead, Ogun Digital Summit",
      detail: "I lead strategy, execution and 120+ volunteers for Ogun State's largest tech event.",
    },
    {
      title: "External judge",
      detail: "Uranus Academy and Grazac Academy graduation product showcases.",
    },
    {
      title: "Mentor",
      detail: "300+ early-career designers.",
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
    "Javascript in Frontend Development, Dev & Design (2025)",
    "Product Designer, Uranus Academy (2022)",
    "Figma UI/UX Design Essentials, Udemy (2024)",
    "Brand Identity, Geneza School of Design (2023)",
  ],
};

/**
 * tier: "case"    → full case study page, appears in the featured grid
 *       "listing" → name, role and link only, appears in the work index
 */
const projects = [
  {
    slug: "mb11",
    tier: "case",
    tileColor: "#101828",
    cover: "assets/projects/mb11.jpg",
    title: "My Best 11",
    subtitle:
      "Fantasy football and match-prediction app, live on Google Play and the App Store",
    category: "Gaming · Mobile · UK",
    platforms: ["iOS", "Android", "Admin dashboard"],
    year: "2025",
    role: "Product Designer",
    featured: true,
    externalUrl: "https://play.google.com/store/apps/details?id=com.mybesteleven.fantasy",
    accent: "#22c55e",
    summary:
      "MB11 is a UK fantasy football app built by Fantasy Sports Arena. I designed the free and paid player experiences, the admin dashboard behind them, and the store mockups. It is live and shipping.",
    metrics: [
      { label: "Status", value: "Live on both stores" },
      { label: "Game modes designed", value: "Fantasy + Showdown" },
      { label: "Surfaces", value: "Free, paid, admin" },
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
        title: "Shipped",
        body: "MB11 is published on Google Play and the App Store and runs live gameweek competitions, with 2026 World Cup competitions built on the same design system.",
      },
    ],
  },
  {
    slug: "prooval",
    tier: "case",
    tileColor: "#ebe6dc",
    cover: "assets/projects/prooval.jpg",
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
      "I led product design from early research through launch for a platform where professionals monetize expertise from a single link, sessions, digital products, webinars, and marketplace discovery.",
    metrics: [
      { label: "Registered users", value: "16,000+" },
      { label: "Repositioning", value: "HacktheJobs → Prooval" },
      { label: "Core flows designed", value: "4" },
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
        body: "Prooval launched and grew into a working marketplace for professionals building income around their expertise.",
        bullets: [
          "16,000+ registered users after the pivot and launch",
          "Featured creator stories on prooval.com",
          "Always Growing Employee Award, Prooval",
        ],
      },
    ],
  },
  {
    slug: "zsms",
    tier: "case",
    tileColor: "#2b1b47",
    cover: "assets/projects/zsms.jpg",
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
    summary:
      "Zippro is a school management system used by administrators, teachers, and staff. I led a full redesign of the admin dashboard, restructuring a noisy interface into a clear information architecture built around the school term.",
    metrics: [
      { label: "Scope", value: "Full UI redesign" },
      { label: "Screens delivered", value: "1,000+" },
      { label: "Modules", value: "Overview, academics, people, finance" },
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
    cover: "assets/projects/screws-and-spanners.jpg",
    frame: "browser",
    title: "Screws & Spanners",
    subtitle:
      "Operations dashboard for a service marketplace, providers, suppliers, jobs, tickets and revenue in one view",
    category: "B2B · Marketplace · Dashboard",
    platforms: ["Web", "Admin panel"],
    year: "2024",
    role: "Product Designer",
    featured: true,
    accent: "#ef4444",
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
    cover: "assets/projects/velvot-pay.jpg",
    frame: "phone",
    title: "Velvot Pay",
    subtitle: "Bill payments and wallet app, onboarding and core payment flows",
    category: "Fintech · Mobile",
    platforms: ["iOS", "Android"],
    year: "2024",
    role: "Product Designer",
    featured: true,
    accent: "#7c5cff",
    behanceUrl: "https://www.behance.net/gallery/217694151/VP-App-Redesign",
    summary:
      "A Nigerian bill payments app covering electricity, data, TV, insurance and education payments from a single wallet. I designed the onboarding sequence and the core payment flows, with the balance and first action visible before a user ever signs up.",
    metrics: [
      { label: "Payment categories", value: "5" },
      { label: "Focus", value: "Onboarding & wallet" },
      { label: "Full case study", value: "On Behance" },
    ],
    overview: [
      {
        title: "The problem",
        body: "Bill payment apps ask for trust before they demonstrate value. Users hand over personal details and fund a wallet without ever seeing what the product actually does for them.",
      },
      {
        title: "The approach",
        body: "The onboarding shows the real dashboard behind the sign-up screen, balance, fund wallet, electricity payment, so the value is visible before the ask. Sign-up is a single primary action with an equally clear route for returning users.",
        bullets: [
          "Every payment category reachable from the wallet home",
          "Naira balance and fund-wallet action given the most visual weight",
          "Skip available throughout onboarding, because forced tours cost installs",
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
    cover: "assets/projects/nimra.jpg",
    title: "NiMRA",
    subtitle: "Website redesign for the Nigerian Marketing Research Association",
    category: "Web · Association",
    platforms: ["Web"],
    year: "2024",
    role: "Product Designer",
    featured: true,
    externalUrl: "https://nimra.ng",
    behanceUrl: "https://www.behance.net/gallery/217693883/NIMRA-Website-Redesign",
    accent: "#4f46e5",
    summary:
      "NiMRA supports research practitioners across Nigeria with training, ethics standards and networking. The site had to do two jobs at once: convince a professional to join, and serve the members who already had.",
    metrics: [
      { label: "Members served", value: "300+" },
      { label: "Member agencies", value: "80+" },
      { label: "Status", value: "Live at nimra.ng" },
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
    ],
    outcome: [
      {
        title: "Live",
        body: "The redesign is live at nimra.ng.",
      },
    ],
  },
  {
    slug: "spectrum",
    tier: "case",
    tileColor: "#3a3a3a",
    cover: "assets/projects/spectrum.jpg",
    title: "Spectrum",
    subtitle: "Tax payment and licensing app, in use in Kaduna State",
    category: "Fintech · GovTech",
    platforms: ["iOS", "Android"],
    year: "2025",
    role: "Product Designer",
    featured: true,
    accent: "#e0a15c",
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
    tileColor: "#f9f0c2",
    cover: "assets/projects/farm-market.jpg",
    title: "My Hometown Farm Market",
    subtitle: "Marketplace app for farmers, buyers and field agents, with USSD access",
    category: "AgTech · Marketplace",
    platforms: ["Mobile", "USSD"],
    year: "2023",
    role: "Product Designer",
    featured: false,
    accent: "#166534",
    summary:
      "An IFAD-assisted Life-ND project initiative connecting farmers directly with buyers. The defining constraint was reach: many users would arrive over USSD on a feature phone, so the app had to carry three roles, farmer, buyer, field agent, without assuming a smartphone.",
    metrics: [
      { label: "User roles", value: "3" },
      { label: "Access", value: "App + USSD" },
      { label: "Programme", value: "IFAD Life-ND" },
    ],
    overview: [
      {
        title: "The context",
        body: "This is early work, and I include it because the constraint was unusual and shaped how I think about access. Designing a marketplace that degrades gracefully to USSD forces you to decide what is genuinely essential in a transaction.",
      },
    ],
  },

  /* ---------------------------------------------------------------
     Work index: shipped work listed without a full case study.
     --------------------------------------------------------------- */
  {
    slug: "tisume",
    tier: "listing",
    title: "Tisume",
    subtitle: "Beauty booking platform",
    category: "Marketplace · UK",
    role: "Product Designer",
    year: "2024",
    externalUrl: "https://tisume.com",
    summary: "Booking platform connecting clients with beauty professionals. Live in the UK.",
  },
  {
    slug: "nomad-internet",
    tier: "listing",
    title: "Nomad Internet",
    subtitle: "UI and graphic design for a US internet provider",
    category: "Web · E-commerce · US",
    role: "UI/UX & Graphic Designer",
    year: "2024",
    externalUrl: "https://nomadinternet.com",
    summary:
      "Site navigation and Shopify consistency work, plus brand and campaign graphics. The current live site has since been rebuilt by others.",
  },
  {
    slug: "grazac-talent-city",
    tier: "listing",
    title: "Grazac Talent City",
    subtitle: "Talent and training platform",
    category: "EdTech",
    role: "Product Designer",
    year: "2024",
    externalUrl: "https://grazactalentcity.com",
    summary: "Platform design for Grazac's talent and training arm.",
  },
  {
    slug: "grazac-academy",
    tier: "listing",
    title: "Grazac Academy",
    subtitle: "Learning platform and Web3 landing page",
    category: "EdTech",
    role: "Product Designer",
    year: "2023, Present",
    externalUrl: "https://grazacacademy.com",
    summary:
      "Web and learning experience design for a cohort-based academy in Abeokuta. Also external judge for graduation product showcases across multiple cohorts.",
  },
  {
    slug: "quickrep",
    tier: "listing",
    title: "QuickRep",
    subtitle: "User, professional and admin dashboards",
    category: "SaaS · Multi-role",
    role: "Product Designer",
    year: "2024",
    summary: "Three connected dashboards designed around three very different jobs to be done.",
  },
  {
    slug: "queposts",
    tier: "listing",
    title: "QuePosts",
    subtitle: "Content and publishing platform",
    category: "SaaS",
    role: "Product Designer",
    year: "2024",
    externalUrl: "https://queposts.com",
    summary: "Product design for a content publishing platform.",
  },
  {
    slug: "nudge",
    tier: "listing",
    title: "Nudge",
    subtitle: "Product design",
    category: "SaaS",
    role: "Product Designer",
    year: "2024",
    summary: "",
  },
  {
    slug: "hackthejobs",
    tier: "listing",
    title: "HacktheJobs",
    subtitle: "Career platform, the product that became Prooval",
    category: "SaaS",
    role: "Product Designer",
    year: "2023",
    externalUrl: "https://www.behance.net/gallery/217693561/HacktheJobs",
    summary: "Full case study published on Behance.",
  },
  {
    slug: "ogun-digital-summit",
    tier: "listing",
    title: "Ogun Digital Summit",
    subtitle: "Event platform and brand. I am the Team Lead.",
    category: "Event · Community",
    role: "Team Lead & Designer",
    year: "Ongoing",
    externalUrl: "https://ogundigitalsummit.com",
    summary:
      "Led strategy, execution and 120+ volunteers for Ogun State's largest tech event, alongside the design work.",
  },
  {
    slug: "life-in-the-uk",
    tier: "listing",
    title: "Life in the UK, Urdu",
    subtitle: "Citizenship test study app",
    category: "EdTech · Mobile",
    role: "Product Designer",
    year: "2024",
    summary: "Study app for the UK citizenship test, localised for Urdu speakers.",
  },
  {
    slug: "levenup",
    tier: "listing",
    title: "LevenUp",
    subtitle: "Event discovery platform, 150+ screens",
    category: "Consumer · Mobile",
    role: "Product Designer",
    year: "2021, 2022",
    summary: "San Francisco based event discovery product.",
  },
  {
    slug: "scouts-capital",
    tier: "listing",
    title: "Scouts Capital",
    subtitle: "Sports social app where players showcase skills to get scouted",
    category: "Sports · Mobile",
    role: "Product Designer",
    year: "2024",
    summary:
      "Players publish clips and stats to gain recognition and move their careers forward. iOS and Android.",
  },
  {
    slug: "ingenious",
    tier: "listing",
    title: "Ingenious App Studios",
    subtitle: "Portfolio and blog sections, plus 20+ client products",
    category: "Agency · UK",
    role: "Product Designer",
    year: "2023, 2025",
    summary:
      "UX and UI across more than twenty client products, along with the studio's own portfolio and blog.",
  },
  {
    slug: "turn-up",
    tier: "listing",
    title: "Turn Up",
    subtitle: "Event finder app",
    category: "Consumer · Mobile",
    role: "Product Designer",
    year: "2022",
    externalUrl: "https://www.behance.net/gallery/155965119/Turn-Up-(Event-Finder-App)",
    summary: "Event discovery app. Case study on Behance.",
  },
  {
    slug: "directoride",
    tier: "listing",
    title: "DirectoRide",
    subtitle: "Ride and transport product",
    category: "Consumer · Mobile",
    role: "Product Designer",
    year: "2022",
    externalUrl: "https://www.behance.net/gallery/158935617/DirectoRide",
    summary: "Case study on Behance.",
  },
  {
    slug: "covet-fashion",
    tier: "listing",
    title: "Covet Fashion Tweak",
    subtitle: "App redesign study",
    category: "E-commerce · Mobile",
    role: "Product Designer",
    year: "2022",
    externalUrl: "https://www.behance.net/gallery/156281765/Covet-Fashion-Tweak",
    summary: "Case study on Behance.",
  },
  {
    slug: "graphics",
    tier: "listing",
    cover: "assets/projects/graphics.jpg",
    title: "Brand & campaign graphics",
    subtitle: "Social campaigns, event collateral and brand identity",
    category: "Graphic design",
    role: "Graphic Designer",
    year: "2021, Present",
    summary:
      "Selected campaign and identity work for food brands, fintech, and community organisations.",
  },
];

const caseStudies = projects.filter((p) => p.tier === "case");
const listings = projects.filter((p) => p.tier === "listing");

function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

/**
 * Project covers.
 * Presentation covers render whole (contain) so nothing important gets cropped.
 * Raw screenshots get wrapped in a browser or phone frame instead.
 */

function placeholder(project) {
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return `<div class="cover-placeholder"><span>${initials}</span></div>`;
}

function renderCover(project, options = {}) {
  const { wide = false } = options;
  const tile = project.tileColor || "#1c1c1c";
  const cls = `cover-frame${wide ? " cover-frame--wide" : ""}`;

  if (!project.cover) {
    return `<div class="${cls}" style="background:${tile}">${placeholder(project)}</div>`;
  }

  const img = `<img class="cover-img" src="${project.cover}" alt="${project.title} project cover" loading="lazy" onerror="this.remove()" />`;

  if (project.frame === "browser") {
    return `
      <div class="${cls} cover-frame--device" style="background:${tile}">
        <div class="device device--browser">
          <div class="device-chrome"><span></span><span></span><span></span><i></i></div>
          <div class="device-screen">${img}</div>
        </div>
      </div>`;
  }

  if (project.frame === "phone") {
    return `
      <div class="${cls} cover-frame--device" style="background:${tile}">
        <div class="device device--phone">
          <div class="device-notch"></div>
          <div class="device-screen">${img}</div>
        </div>
      </div>`;
  }

  return `<div class="${cls}" style="background:${tile}">${img}</div>`;
}

function initCarousel(container) {
  const featured = caseStudies.filter((p) => p.featured).slice(0, 5);
  let index = 0;
  const n = featured.length;

  const getPos = (i) => {
    if (i === index) return "center";
    if (i === (index - 1 + n) % n) return "left";
    if (i === (index + 1) % n) return "right";
    return "hidden";
  };

  const render = () => {
    container.innerHTML = `
      <div class="carousel-stage">
        <button type="button" class="carousel-btn carousel-btn--prev" aria-label="Previous">&lsaquo;</button>
        <div class="carousel-track">
          ${featured
            .map(
              (p, i) => `
            <a href="work.html?project=${p.slug}" class="carousel-item carousel-item--${getPos(i)}">
              <div class="carousel-item-inner">
                ${renderCover(p)}
                <div class="carousel-item-caption">
                  <span class="carousel-item-label">${p.title}</span>
                  <span class="carousel-item-cat">${p.category}</span>
                </div>
              </div>
            </a>`
            )
            .join("")}
        </div>
        <button type="button" class="carousel-btn carousel-btn--next" aria-label="Next">&rsaquo;</button>
      </div>
      <div class="carousel-dots">
        ${featured
          .map(
            (_, i) =>
              `<button type="button" class="carousel-dot ${i === index ? "is-active" : ""}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
          )
          .join("")}
      </div>`;

    container.querySelector(".carousel-btn--prev")?.addEventListener("click", (e) => {
      e.preventDefault();
      index = (index - 1 + n) % n;
      render();
    });
    container.querySelector(".carousel-btn--next")?.addEventListener("click", (e) => {
      e.preventDefault();
      index = (index + 1) % n;
      render();
    });
    container.querySelectorAll(".carousel-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        index = Number(dot.dataset.index);
        render();
      });
    });
  };

  render();
}

/** Light or dark tile decides the text colour on the card. */
function tone(hex) {
  if (!hex) return "dark";
  const c = hex.replace("#", "");
  const n = c.length === 3 ? c.split("").map((x) => x + x).join("") : c;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16));
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6 ? "light" : "dark";
}

function cardMarkup(p) {
  const isCase = p.tier === "case";
  const live = p.externalUrl
    ? `<a href="${p.externalUrl}" target="_blank" rel="noopener" class="btn">See it live</a>`
    : "";
  return `
    <article class="grid-card${isCase ? "" : " grid-card--listing"}" data-slug="${p.slug}" data-tone="${tone(p.tileColor)}" style="--tile:${p.tileColor || "#1e1e1e"}">
      <button type="button" class="grid-card-trigger" aria-expanded="false">
        <div class="grid-card-cover">${renderCover(p)}</div>
        <div class="grid-card-head">
          <div class="grid-card-headtext">
            <h3 class="grid-card-title">${p.title}</h3>
            <p class="grid-card-cat">${p.category}</p>
          </div>
          <span class="grid-expand-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </div>
      </button>
      <div class="grid-card-panel" hidden>
        <div class="panel-body">
          ${
            p.platforms
              ? `<div class="panel-platforms">
                  <span class="panel-platforms-label">Platforms</span>
                  ${p.platforms.map((pl) => `<span class="panel-chip">${pl}</span>`).join("")}
                </div>`
              : ""
          }
          <p class="grid-card-summary">${p.summary || ""}</p>
          ${
            p.metrics
              ? `<div class="grid-card-metrics">
                  ${p.metrics.map((m) => `<div><strong>${m.value}</strong><span>${m.label}</span></div>`).join("")}
                </div>`
              : ""
          }
          <div class="panel-actions">
            ${isCase ? `<a href="work.html?project=${p.slug}" class="btn btn-primary">Read the case study</a>` : ""}
            ${live}
            ${p.behanceUrl ? `<a href="${p.behanceUrl}" target="_blank" rel="noopener" class="btn">Case study on Behance</a>` : ""}
          </div>
        </div>
      </div>
    </article>`;
}

function wireToggles(container) {
  container.querySelectorAll(".grid-card-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".grid-card");
      const panel = card.querySelector(".grid-card-panel");
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      container.querySelectorAll(".grid-card").forEach((c) => {
        c.classList.remove("is-open");
        c.querySelector(".grid-card-trigger")?.setAttribute("aria-expanded", "false");
        const pn = c.querySelector(".grid-card-panel");
        if (pn) pn.hidden = true;
      });

      if (!isOpen) {
        card.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        panel.hidden = false;
      }
      container.classList.toggle("has-open", !isOpen);
    });
  });
}

function renderInteractiveGrid(container, options = {}) {
  const { limit, include = "case" } = options;
  let list = include === "all" ? projects : caseStudies;
  if (limit) list = list.slice(0, limit);
  container.innerHTML = list.map(cardMarkup).join("");
  wireToggles(container);
}

const navItems = [
  { href: "index.html", label: "Home", id: "home" },
  { href: "projects.html", label: "Work", id: "work" },
  { href: "about.html", label: "About", id: "about" },
  { href: "cv.html", label: "CV", id: "cv" },
  { href: "contact.html", label: "Contact", id: "contact" },
];

function renderLayout(activePage = "home") {
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio inquiry from your site")}`;

  const nav = document.getElementById("site-nav");
  if (nav) {
    nav.innerHTML = `
      <div class="nav-inner container">
        <a href="index.html" class="logo">${profile.name}</a>
        <ul class="nav-links">
          ${navItems
            .map(
              (item) =>
                `<li><a href="${item.href}" class="${activePage === item.id ? "is-active" : ""}">${item.label}</a></li>`
            )
            .join("")}
        </ul>
        <a href="${profile.bookUrl}" class="nav-book" target="_blank" rel="noopener">Book me</a>
        <a href="${mailHref}" class="btn btn-primary nav-cta">Email</a>
        <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span>
        </button>
      </div>
      <div class="nav-mobile" id="nav-mobile" hidden>
        ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        <a href="${profile.bookUrl}" class="btn" target="_blank" rel="noopener">Book on Prooval</a>
        <a href="${mailHref}" class="btn btn-primary">Email</a>
      </div>`;

    const toggle = nav.querySelector(".nav-toggle");
    const mobile = document.getElementById("nav-mobile");
    toggle?.addEventListener("click", () => {
      const open = mobile.hidden;
      mobile.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
    });

    window.addEventListener("scroll", () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="container footer-inner">
        <div>
          <p class="footer-name">${profile.name}</p>
          <p class="footer-meta">${profile.title} · ${profile.location}</p>
        </div>
        <div class="footer-links">
          <a href="${profile.bookUrl}" target="_blank" rel="noopener">Book on Prooval</a>
          <a href="${mailHref}">${profile.email}</a>
          <a href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="${profile.behance}" target="_blank" rel="noopener">Behance</a>
        </div>
        <p class="footer-copy">© ${new Date().getFullYear()} ${profile.name}</p>
      </div>`;
  }
}

function renderHomePage() {

document.getElementById("hero-headline").innerHTML =
  `I'm ${profile.name},<br />the <em>architect</em><br />for your products.`;
document.getElementById("hero-body").textContent = profile.headline;
document.title = `${profile.name}, ${profile.title}`;

document.getElementById("hero-stats").innerHTML = profile.stats
  .map((s) => `<div class="stat-cell"><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`)
  .join("");

/* How I work: icon strip, then numbered steps */
const PROC_ICONS = [
  `<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>`,
  `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>`,
  `<path d="M4 20l6-6"/><path d="M14 4l6 6"/><path d="M13 3l8 8-9 9H4v-8z"/>`,
  `<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>`,
];
document.getElementById("process-icons").innerHTML = profile.process
  .map(
    (_, i) => `
    <span class="proc-icon-wrap">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${PROC_ICONS[i] || PROC_ICONS[0]}</svg>
    </span>
    ${i < profile.process.length - 1 ? '<span class="proc-connector"></span>' : ""}`
  )
  .join("");

document.getElementById("process-grid").innerHTML = profile.process
  .map(
    (p) => `
    <div class="proc-step">
      <span class="proc-num">${p.step}</span>
      <h3 class="proc-title">${p.title}</h3>
      <p class="proc-body">${p.body}</p>
    </div>`
  )
  .join("");

/* Testimonials: stagger carousel */
const testiEl = document.getElementById("testimonials-grid");
let testiIndex = 0;
const PER_VIEW = () => (window.innerWidth < 900 ? 1 : 2);

function renderTestimonials() {
  const list = profile.testimonials;
  const per = PER_VIEW();
  const shown = list.slice(testiIndex, testiIndex + per);
  testiEl.innerHTML = shown
    .map((t, i) => {
      if (t.pending) {
        return `<blockquote class="testi-card testi-card--pending">
          <strong>Testimonial slot ${t.slot}</strong>
          <span>Add the quote, name and role</span>
        </blockquote>`;
      }
      const initials = t.name.split(/\s+/).slice(0, 2).map((w) => w[0]).join("");
      return `
      <blockquote class="testi-card" style="transform: rotate(${i % 2 ? 0.7 : -0.7}deg)">
        <span class="testi-quote-mark">&ldquo;</span>
        <p class="testi-quote">${t.quote}</p>
        <footer class="testi-avatar">
          <span class="testi-avatar-ring">${initials}</span>
          <span>
            <span class="testi-name">${t.name}</span>
            ${t.role ? `<span class="testi-role">${t.role}</span>` : ""}
          </span>
        </footer>
      </blockquote>`;
    })
    .join("");

  document.getElementById("testi-prev").disabled = testiIndex === 0;
  document.getElementById("testi-next").disabled = testiIndex + per >= list.length;
}
document.getElementById("testi-prev").addEventListener("click", () => {
  testiIndex = Math.max(0, testiIndex - 1);
  renderTestimonials();
});
document.getElementById("testi-next").addEventListener("click", () => {
  if (testiIndex + PER_VIEW() < profile.testimonials.length) testiIndex += 1;
  renderTestimonials();
});
renderTestimonials();

document.getElementById("speaking-list").innerHTML = profile.speaking
  .map(
    (s) => `
    <div class="speaking-item">
      <span class="speaking-thumb">${s.image ? `<img src="${s.image}" alt="${s.title}" />` : "Add photo"}</span>
      <span class="speaking-body">
        <h3>${s.title}</h3>
        <p>${s.detail}</p>
      </span>
    </div>`
  )
  .join("");


document.getElementById("community-list").innerHTML = profile.community
  .map(
    (s) => `
    <div class="speaking-item">
      <span class="speaking-thumb">${s.image ? `<img src="${s.image}" alt="${s.title}" />` : "Add photo"}</span>
      <span class="speaking-body">
        <h3>${s.title}</h3>
        <p>${s.detail}</p>
      </span>
    </div>`
  )
  .join("");


document.getElementById("cta-body").textContent =
  "From discovery to delivery, I bring structure, clarity and craft to every product I touch. " +
  profile.availability + ".";
document.getElementById("cta-actions").innerHTML = `
  <a href="${profile.bookUrl}" class="btn-cta-primary" target="_blank" rel="noopener">${profile.bookLabel}</a>
  <a href="mailto:${profile.email}" class="btn-cta-secondary">Send an email</a>`;

initCarousel(document.getElementById("featured-carousel"));
renderInteractiveGrid(document.getElementById("home-grid"), { limit: 6 });
}

function renderAboutPage() {

document.getElementById("about-lead").textContent = profile.about;

document.getElementById("about-gallery").innerHTML = `
  <img src="${profile.photos.aboutPrimary}" alt="${profile.name}, professional portrait" />
  <img src="${profile.photos.hero}" alt="${profile.name}" />
  <img src="${profile.photos.aboutSecondary}" alt="${profile.name}, full length" />
`;

document.getElementById("about-content").innerHTML = `
  <h2>Who I am</h2>
  <p>
    I'm a Product Designer with 4+ years of experience designing and delivering digital products
    across SaaS, fintech, marketplaces, and emerging technology platforms. I specialise in turning
    complex product ideas into clear user experiences that support real-world use and business goals.
  </p>
  <p>
    My work covers web and mobile applications used across the UK, US, and international markets.
    I collaborate closely with engineers and founders to move products from early concept through
    to production release.
  </p>

  <h2>What I bring</h2>
  <p>${profile.services.join(" · ")}</p>

  <h2>Community & leadership</h2>
  <ul class="about-list">
    <li>Co-Organiser, Friends of Figma Abeokuta</li>
    <li>External judge at Uranus Academy and Grazac Academy graduation showcases</li>
    <li>Speaker at NextGen Conference on UX and product development</li>
    <li>Team Lead, Ogun Digital Summit, leading 120+ volunteers</li>
    <li>Mentor to 300+ early-career designers</li>
    <li>Featured in Tech Economy for ODS leadership</li>
  </ul>

  <h2>On stage &amp; in the community</h2>
  <div class="about-speaking-gallery" id="about-speaking-gallery"></div>

  <h2>Let's connect</h2>
  <p>
    <a href="contact.html" class="text-link">Send me an email</a> or view my
    <a href="cv.html" class="text-link">full CV</a>.
  </p>
`;

const speakingPhotos = profile.speakingPhotos || [];
document.getElementById("about-speaking-gallery").innerHTML = speakingPhotos.length
  ? speakingPhotos.map((src) => `<img src="${src}" alt="Joy Omowaye speaking" />`).join("")
  : Array.from({ length: 4 })
      .map(() => `<div class="ph">Speaking photo</div>`)
      .join("");
}

function renderCvPage() {

const mail = `mailto:${profile.email}?subject=${encodeURIComponent("Regarding your CV")}`;

document.getElementById("cv-content").innerHTML = `
  <aside class="cv-sidebar">
    <img src="${profile.photos.aboutPrimary}" alt="${profile.name}" />
    <div class="cv-contact">
      <a href="${mail}">${profile.email}</a>
      <a href="tel:${profile.phone.replace(/\s/g, "")}">${profile.phone}</a>
      <a href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${profile.behance}" target="_blank" rel="noopener">Behance</a>
    </div>
    <a href="${mail}" class="btn btn-primary" style="width:100%;margin-top:12px">Email me</a>
    <a href="${profile.bookUrl}" class="btn" style="width:100%;margin-top:8px" target="_blank" rel="noopener">Book on Prooval</a>
    <button type="button" class="btn" style="width:100%;margin-top:8px" onclick="window.print()">Save as PDF</button>
  </aside>
  <div class="cv-main">
    <section class="cv-block">
      <h2>Summary</h2>
      <p style="color:var(--text-soft);margin:0">
        Product Designer with 4+ years across SaaS, fintech, marketplaces, and platforms for UK, US,
        and international markets. Founding designer experience. Strong in research, systems, and
        cross-functional delivery.
      </p>
    </section>

    <section class="cv-block">
      <h2>Experience</h2>
      <div class="cv-entry">
        <h3>Founding Product Designer, Prooval</h3>
        <p class="meta">Nigeria · Jan 2024 – Present</p>
        <ul>
          <li>Led design from research through launch; HacktheJobs → Prooval pivot</li>
          <li>Expert profiles, bookings, digital products, webinars</li>
          <li>16,000+ registered users post-launch</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Product Designer, Ingenious App Studios</h3>
        <p class="meta">UK · Mar 2023 – May 2025</p>
        <ul>
          <li>UX/UI across 20+ client products</li>
          <li>Design systems and engineer collaboration</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>UI/UX and Graphic Designer, Nomad Internet</h3>
        <p class="meta">US · Feb 2024 – Aug 2024</p>
        <ul>
          <li>Website navigation, Shopify consistency (+15%)</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Product Designer, LevenUp</h3>
        <p class="meta">San Francisco · Oct 2021 – Aug 2022</p>
        <ul>
          <li>Event-discovery platform; 150+ screens</li>
        </ul>
      </div>
    </section>

    <section class="cv-block">
      <h2>Skills</h2>
      <div class="cv-skills">
        ${[
          "Product design",
          "UX research",
          "UI design",
          "Design systems",
          "Prototyping",
          "Information architecture",
          "Figma",
          "Agile",
        ]
          .map((s) => `<span>${s}</span>`)
          .join("")}
      </div>
    </section>

    <section class="cv-block">
      <h2>Certifications</h2>
      <ul style="color:var(--text-soft);padding-left:18px;font-size:0.9rem">
        ${profile.certifications.map((c) => `<li style="margin-bottom:8px">${c}</li>`).join("")}
      </ul>
    </section>

    <section class="cv-block">
      <h2>Leadership</h2>
      <div class="cv-entry">
        <h3>Team Lead, Ogun Digital Summit</h3>
        <p class="meta">Ongoing</p>
        <ul><li>120+ volunteers · largest tech event in Ogun State</li></ul>
      </div>
      <div class="cv-entry">
        <h3>Product Designer, Grazac</h3>
        <p class="meta">Aug 2023 – Present · Abeokuta</p>
      </div>
    </section>

    <section class="cv-block">
      <h2>Education</h2>
      <div class="cv-entry">
        <h3>Obafemi Awolowo University</h3>
        <p class="meta">B.Sc.Ed Biology · 2016 – 2022</p>
      </div>
      <div class="cv-entry">
        <h3>Uranus Academy, Product Design Certification</h3>
        <p class="meta">2022</p>
      </div>
    </section>

    <section class="cv-block">
      <h2>Selected projects</h2>
      <p style="color:var(--text-soft)">
        <a href="projects.html" class="text-link">View full portfolio</a>
      </p>
    </section>
  </div>
`;
}

function renderContactPage() {

const mail = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio inquiry, Joy Omowaye")}&body=${encodeURIComponent("Hi Joy,\n\n")}`;

document.getElementById("contact-content").innerHTML = `
  <div class="contact-card">
    <h2>Email</h2>
    <p>The fastest way to reach me for roles, collaborations, or speaking.</p>
    <p class="contact-email">${profile.email}</p>
    <a href="${mail}" class="btn btn-primary">Send email</a>
    <a href="${profile.bookUrl}" class="btn" style="margin-left:12px" target="_blank" rel="noopener">${profile.bookLabel}</a>
    <p style="margin-top:24px;font-size:0.85rem;color:var(--text-muted)">
      Opens your default mail app with a pre-filled subject line.
    </p>
  </div>
  <div>
    <img src="${profile.photos.hero}" alt="${profile.name}" class="contact-photo" />
    <p style="margin-top:20px;color:var(--text-muted);font-size:0.9rem">
      ${profile.availability}
    </p>
    <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:10px">
      <a href="${profile.linkedin}" class="btn" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${profile.behance}" class="btn" target="_blank" rel="noopener">Behance</a>
      <a href="cv.html" class="btn">View CV</a>
    </div>
  </div>
`;
}

function renderCasePage(slug) {

slug = slug || "mb11";
const project = getProject(slug);
const root = document.getElementById("case-study");

if (!project || project.tier !== "case") {
  root.innerHTML = `<div class="container case-hero">
    <a href="projects.html" class="back-link">← All work</a>
    <h1>Case study coming soon</h1>
    <p class="lead">This project is listed on the work page. The full write-up isn't published yet.</p>
  </div>`;
} else {
  document.title = `${project.title}, Joy Omowaye`;

  const sections = (items) =>
    items
      ? items
          .map(
            (s) => `
        <h2>${s.title}</h2>
        <p>${s.body}</p>
        ${s.bullets ? `<ul>${s.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}`
          )
          .join("")
      : "";

  const idx = caseStudies.findIndex((p) => p.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  root.innerHTML = `
    <div class="container case-hero">
      <a href="projects.html" class="back-link">← All work</a>
      <p class="eyebrow">${project.category}</p>
      <h1>${project.title}</h1>
      <p class="lead" style="margin:0">${project.subtitle}</p>
      <div class="case-meta-row">
        <span>${project.role}</span>
        <span>${project.year}</span>
        ${
          project.externalUrl
            ? `<a href="${project.externalUrl}" target="_blank" rel="noopener" class="text-link">See it live ↗</a>`
            : ""
        }
        ${
          project.behanceUrl
            ? `<a href="${project.behanceUrl}" target="_blank" rel="noopener" class="text-link">Full case study on Behance ↗</a>`
            : ""
        }
      </div>
      <div class="metrics-row">
        ${project.metrics.map((m) => `<div class="metric-card"><strong>${m.value}</strong><span>${m.label}</span></div>`).join("")}
      </div>
    </div>
    <div class="container case-body">
      <p class="case-summary">${project.summary}</p>
      <div class="case-cover">${renderCover(project, { wide: true })}</div>
      ${sections(project.overview)}
      ${sections(project.process)}
      ${sections(project.outcome)}
      <p class="case-next">
        <span class="eyebrow">Next project</span>
        <a href="work.html?project=${next.slug}" class="text-link">${next.title}</a>
      </p>
    </div>
  `;
}
}

const TEMPLATES = {
  home: { cls: ``, html: `<section class="hero-section">
        <span class="hero-corner-shape"></span>
        <div class="container hero-inner">
          <div class="hero-content">
            <p class="hero-select-label">
              Do not build without a plan
              <span class="hero-select-corner-bl"></span>
              <span class="hero-select-corner-br"></span>
            </p>
            <h1 class="hero-headline" id="hero-headline"></h1>
            <p class="hero-body" id="hero-body"></p>
            <div class="hero-ctas">
              <a href="projects.html" class="btn-hero-primary">
                View my work
                <span class="btn-hero-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </a>
              <a href="contact.html" class="btn-hero-secondary">Hire me</a>
            </div>
          </div>

          <div class="hero-photo-zone">
            <span class="hero-blob"></span>
            <div class="hero-photo-frame">
              <img src="assets/photos/joy-portrait.png" alt="Joy Omowaye" />
            </div>
            <span class="hero-chip hero-chip-a">Design systems</span>
            <span class="hero-chip hero-chip-b">Product strategy</span>
            <div class="hero-stamp-wrap">
              <svg class="hero-stamp" viewBox="0 0 100 100">
                <defs><path id="stampCircle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                <text font-size="9.4" font-weight="700" letter-spacing="1.6" fill="#0f766e">
                  <textPath href="#stampCircle" startOffset="0%">HIRE ME &#8226; HIRE ME &#8226; HIRE ME &#8226; </textPath>
                </text>
              </svg>
              <div class="hero-stamp-center">
                <a href="contact.html" class="hero-stamp-arrow" aria-label="Contact me">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="stats-strip">
        <div class="container stats-grid" id="hero-stats"></div>
      </section>

      <section class="selected-work-section">
        <div class="container">
          <div class="selected-work-head">
            <div>
              <p class="eyebrow">Portfolio</p>
              <h2>Selected work</h2>
            </div>
          </div>
          <div id="featured-carousel"></div>
        </div>
      </section>

      <section class="home-grid-preview container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Explore</p>
            <h2>Selected case studies</h2>
          </div>
          <a href="projects.html" class="text-link">See all work</a>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin: -16px 0 24px; max-width: 52ch">
          Click a card for the summary, or open the full case study.
        </p>
        <div class="project-grid-interactive" id="home-grid"></div>

      </section>

      <section class="section-block container">
        <p class="eyebrow">How I work</p>
        <h2 class="section-title">End-to-end product design</h2>
        <div class="process-icon-row" id="process-icons"></div>
        <div class="process-steps" id="process-grid"></div>
      </section>

      <section class="testi-section">
        <div class="container testi-inner">
          <div class="testi-top">
            <div>
              <h2 class="testi-headline">People I've <em>worked with</em></h2>
              <p class="testi-sub">What colleagues say about working with me.</p>
            </div>
            <div class="testi-arrows">
              <button type="button" class="testi-arrow" id="testi-prev" aria-label="Previous">&lsaquo;</button>
              <button type="button" class="testi-arrow" id="testi-next" aria-label="Next">&rsaquo;</button>
            </div>
          </div>
          <div class="testi-stagger" id="testimonials-grid"></div>
        </div>
      </section>

      <section class="section-block container">
        <p class="eyebrow">Speaking</p>
        <h2 class="section-title">Talks &amp; conferences</h2>
        <div class="speaking-list" id="speaking-list"></div>
      </section>

      <section class="section-block container" style="padding-top:0">
        <p class="eyebrow">Community &amp; leadership</p>
        <h2 class="section-title">Beyond the product work</h2>
        <div class="speaking-list" id="community-list"></div>
      </section>

      <section class="cta-section">
        <span class="cta-eyebrow">Ready to build?</span>
        <h2 class="cta-heading">Let's design something that actually works.</h2>
        <p class="cta-body" id="cta-body"></p>
        <div class="cta-actions" id="cta-actions"></div>
      </section>` },
  work: { cls: `page`, html: `<header class="page-header container">
        <p class="eyebrow">Work</p>
        <h1>All projects</h1>
        <p class="lead">
          Case studies across gaming, SaaS, fintech, edtech and B2B dashboards. Click any card for
          the summary, or open the full case study.
        </p>
      </header>

      <section class="container">
        <div class="project-grid-interactive" id="projects-grid"></div>
      </section>` },
  about: { cls: `page`, html: `<header class="page-header container">
        <p class="eyebrow">About</p>
        <h1>Designing products with clarity and intent</h1>
        <p class="lead" id="about-lead"></p>
      </header>

      <div class="container about-layout">
        <div class="about-gallery" id="about-gallery"></div>
        <div class="about-content" id="about-content"></div>
      </div>` },
  cv: { cls: `page`, html: `<header class="page-header container">
        <p class="eyebrow">CV</p>
        <h1>Joy Omowaye</h1>
        <p class="lead">Senior Product Designer · 4+ years · UK, US &amp; international markets</p>
      </header>

      <div class="container cv-layout" id="cv-content"></div>` },
  contact: { cls: `page`, html: `<header class="page-header container">
        <p class="eyebrow">Contact</p>
        <h1>Let's work together</h1>
        <p class="lead">
          Open to senior product design roles, founding teams, and select contract engagements.
        </p>
      </header>

      <div class="container contact-layout" id="contact-content"></div>` },
  case: { cls: `page`, html: `<div id="case-study"></div>` }
};


const PHOTOS = {
  "assets/photos/joy-full.png": "assets/photos/joy-full.jpg",
  "assets/photos/joy-headshot.png": "assets/photos/joy-headshot.jpg",
  "assets/photos/joy-portrait.png": "assets/photos/joy-portrait.jpg",
  "assets/projects/farm-market.jpg": "assets/projects/farm-market.jpg",
  "assets/projects/graphics.jpg": "assets/projects/graphics.jpg",
  "assets/projects/mb11.jpg": "assets/projects/mb11.jpg",
  "assets/projects/nimra.jpg": "assets/projects/nimra.jpg",
  "assets/projects/nomad-internet.jpg": "assets/projects/nomad-internet.jpg",
  "assets/projects/prooval.jpg": "assets/projects/prooval.jpg",
  "assets/projects/screws-and-spanners.jpg": "assets/projects/screws-and-spanners.jpg",
  "assets/projects/spectrum.jpg": "assets/projects/spectrum.jpg",
  "assets/projects/velvot-pay.jpg": "assets/projects/velvot-pay.jpg",
  "assets/projects/zsms.jpg": "assets/projects/zsms.jpg"
};

const ROUTES = {
  "": "home", "/": "home", "/home": "home",
  "/work": "work", "/about": "about", "/cv": "cv", "/contact": "contact",
};

const LINK_MAP = {
  "index.html": "#/home",
  "projects.html": "#/work",
  "about.html": "#/about",
  "cv.html": "#/cv",
  "contact.html": "#/contact",
};

/* Photos and covers ship as real files in this build; PHOTOS remaps the
   original .png keys onto the actual encoded filenames on disk. */
function resolveAssets(root) {
  root.querySelectorAll("img[src]").forEach((img) => {
    const raw = img.getAttribute("src");
    if (PHOTOS[raw]) img.setAttribute("src", PHOTOS[raw]);
  });
}

/* Rewrite the multi-page hrefs to hash routes. */
function resolveLinks(root) {
  root.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (LINK_MAP[href]) { a.setAttribute("href", LINK_MAP[href]); return; }
    const m = href.match(/^work\.html\?project=(.+)$/);
    if (m) a.setAttribute("href", "#/case/" + m[1]);
  });
}

function paint(root) { resolveAssets(root); resolveLinks(root); }

const app = document.getElementById("app");

function navigate() {
  const hash = location.hash.replace(/^#/, "");
  const caseMatch = hash.match(/^\/case\/(.+)$/);
  const key = caseMatch ? "case" : (ROUTES[hash] || "home");
  const tpl = TEMPLATES[key];

  app.className = "route-view " + tpl.cls;
  app.innerHTML = tpl.html;

  renderLayout(key === "case" ? "work" : key);

  if (key === "home") renderHomePage();
  else if (key === "work") renderInteractiveGrid(document.getElementById("projects-grid"), { include: "all" });
  else if (key === "about") renderAboutPage();
  else if (key === "cv") renderCvPage();
  else if (key === "contact") renderContactPage();
  else if (key === "case") renderCasePage(caseMatch[1]);

  paint(document.body);
  document.querySelector(".accent-bar").hidden = key !== "home";
  window.scrollTo(0, 0);
}

/* Re-resolve assets/links for markup the page scripts inject after a click. */
new MutationObserver((muts) => {
  for (const m of muts) {
    for (const node of m.addedNodes) {
      if (node.nodeType === 1) paint(node);
    }
  }
}).observe(document.body, { childList: true, subtree: true });

window.addEventListener("hashchange", navigate);
navigate();


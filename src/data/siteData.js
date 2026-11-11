export const SITE = "https://dreamservicesoftware.com";

// Images are placeholders until you add files to src/assets/images/ (see README there).
// Names below are the file names (without extension) the <ImageSlot name="..."/> looks for.

// Internal routes (react-router). Slugs match the WordPress URLs.
export const menu = [
  {
    label: "Platform",
    columns: [
      {
        title: "By product",
        links: [
          ["Dream Sales CRM", "/sales-crm"],
          ["Dream ERP", "/erp"],
          ["Dream Pulse", "/pulse"],
          ["All Features", "/software-features"],
        ],
      },
      {
        title: "By solution",
        links: [
          ["Pricing & Quotation", "/software-features#salesfeature2"],
          ["Workorder Generation", "/software-features#salesfeature3"],
          ["Workorder Management", "/software-features#salesfeature4"],
          ["Mobile App for Field Technicians", "/software-features#salesfeature5"],
          ["Batch Management & Invoicing", "/software-features#salesfeature6"],
          ["Payments & Collection", "/software-features#salesfeature7"],
          ["Customer Portal", "/customer-portal"],
          ["Dream Pay", "/software-features#salesfeature11"],
        ],
      },
      {
        title: "Dream Leads",
        titleLink: "/dream-leads",
        links: [
          ["Pricing Automation", "/sales-crm#crmfeature2"],
          ["Graphing Tool", "/sales-crm#crmfeature3"],
          ["Open Integration", "/sales-crm#crmfeature4"],
          ["Paperless Agreement", "/sales-crm#crmfeature5"],
          ["Marketing Automation", "/sales-crm#crmfeature6"],
        ],
      },
      {
        title: "Built for pest control",
        links: [
          ["WDO / Termite management", "/termite-inspection-report-software"],
          ["E-Logbook", "/software-features#salesfeature9"],
          ["Door to Door", "/door-to-door"],
          ["LeadNOW", "/leadnow"],
          ["Commercial Specific Flow", "/commercial-sales"],
          ["Routing & Optimization", "/route-planning-and-optimization-software"],
          ["Scheduling & Dispatch", "/dispatching-and-scheduling-software"],
        ],
      },
    ],
  },
  {
    label: "Why Dream",
    links: [
      ["Built by Operators", "/about-us"],
      ["Customer Results", "/testimonial"],
    ],
  },
  {
    label: "Resources",
    links: [
      ["Blogs", "/blogs"],
      ["Customer Stories / Testimonials", "/testimonial"],
      ["FAQ", "/faq"],
    ],
  },
  { label: "Blogs", to: "/blogs" },
];

export const trusted = [
  ["trusted-1", "ABC Home & Commercial"],
  ["trusted-2", "Clark Pest Control"],
  ["trusted-3", "J.P. McCall"],
  ["trusted-4", "Makot Service"],
  ["trusted-5", "Big Blue Bug"],
];

export const oldTools = ["CRM", "ERP", "Termite / WDO", "QuickBooks", "Spreadsheet", "Graphing Tool", "Paper Binder"];

export const painStats = [
  { label: "LOST REVENUE", value: "~32%", text: "of pipeline lost at every tool handoff", foot: "↓ per handoff", img: "stat-lost-revenue" },
  { label: "DISSATISFIED CUSTOMERS", value: "1 in 4", text: "leads lost between disconnected tools", foot: "↑ churn risk", img: "stat-dissatisfied" },
  { label: "OPS OVERHEAD", value: "7+ Tools", text: "7 bills, 7 logins, zero visibility", foot: "↑ cost creep", img: "stat-ops-overhead" },
];

export const arcSteps = [
  ["Handraiser", "AI lead scoring, Dream Sales Agent"],
  ["Close", "CRM across Phone, Field, D2D, Web-Bot"],
  ["Schedule", "Smart routing & dispatch"],
  ["Service", "Field app, WDO, compliance tools"],
  ["Advocacy", "Drip, reviews, retention agent"],
];

export const layers = [
  ["01", "System of Record", "One customer record from handraiser to advocacy. Pest-native modules underneath: WDO, E-Logbook, D2D, commercial flow. Avoid the generic FSM with pest stickers."],
  ["02", "System of Orchestration", "Enterprise resource planning across departments, technician route optimization to increase productivity and seamless accounting and collections."],
  ["03", "System of Action", "Dream Agents take the action. Dream Sales Agent, Dream Service Agent, Dream Retention Agent. Attribution closes inside the platform."],
];

export const personas = [
  ["CEO / Owner", "Revenue growth, EBITDA, retention, revenue per employee.", "Dream closes the top-line and bottom-line leaks across CRM, ERP, scheduling, and field teams."],
  ["VP of Sales", "Close rate, revenue per rep, pipeline velocity.", "The AI-powered single-call flow takes a contact to quote to e-signature to scheduling in one conversation."],
  ["Office Manager", "CSR productivity, scheduling accuracy, complaint volume.", "One CSR screen instead of three or four — from first call to completed work order."],
  ["Dispatchers, Technicians, HR, Finance", "Productivity, Service Quality, Customer Delight, Cash and Commissions", "Dream CRM + ERP ensures that the back office operates like a well-oiled engine. Technician routes are optimized, customers are delighted with excellent service, and books are closed on time with deep integrations."],
];

export const storyStats = [
  ["14", "Years in operation"],
  ["1", "Same Founder since day one"],
  ["✓", "Operator Owned No Private Equity"],
];

export const arcFeatures = [
  ["AI single-call handraiser-to-cash flow", "(contact, quote, e-signature, schedule, in one conversation)"],
  ["Route Optimized and best fit scheduling for optimal productivity", "(contact, quote, e-signature, schedule, in one conversation)"],
  ["Agentic CS for rescheduling, pricing, and after-hours inbound", "(The CSR’s job, made simpler by an agent)"],
  ["Automated 7-15 touch post-proposal nurture", "(the part most teams skip)"],
  ["Technician-as-salesperson lead capture", "(the expansion revenue most teams leave on the route)"],
];

export const products = [
  {
    tag: "PRODUCT 01",
    name: "Dream Sales CRM",
    headline: "Handraiser to close.",
    desc: "Run on top of whatever ERP you have today: PestPac, Evolve, Sage, NetSuite, or your own stack.",
    items: ["Lead Management", "Multi-Service Sales Flow", "Pricing & Quotation", "D2D Sales", "Paperless Agreement & E-Sign", "Marketing Automation", "AI Single-Call Flow", "Technician Qualified Leads"],
    cta: "Explore Dream Sales CRM →",
    to: "/sales-crm",
  },
  {
    tag: "PRODUCT 02",
    name: "Dream ERP",
    headline: "Signed deal to back office.",
    desc: "Replace the generic FSM and consolidate work orders, routing, compliance, and invoicing into one pest-native platform.",
    items: ["Work Order Management", "Dispatch Management", "AI Scheduling & Routing", "Route Optimizer & Best Fit, VRM", "Field Tech Mobile", "Batch & Invoice Reconciliation", "E-Logbook & WDO Compliance", "Dream Pay", "Auto Inventory Management", "Collections Module"],
    cta: "Explore Dream ERP",
    to: "/erp",
  },
  {
    tag: "PRODUCT 03",
    name: "Dream Pulse",
    headline: "Service to advocacy.",
    desc: "Close the loop on every customer relationship — delight, retain, and convert satisfied customers into your best growth channel.",
    items: ["Customer Delight & Feedback", "Customer Advocacy", "Customer Loyalty & Engagement", "Employee Delight & Feedback", "Service Quality Flashlight", "AI Insights & Self-Learning"],
    cta: "Explore Dream Pulse",
    to: "/pulse",
  },
];

export const testimonials = [
  { initial: "R", name: "Russell Jenkins", company: "ABC Home & Commercial Services", quote: "Dream has been a game-changer for our business, providing an all-in-one CRM that seamlessly integrates with service, routing, and accounting needs." },
  { initial: "N", name: "Nicole Keefe", company: "Clark Pest Control", quote: "At Clark Pest Control, we needed a Sales CRM that could manage both residential and commercial sales across various channels: Phone, Field, Door-to-Door, and Web-Bot interactions. DREAM CRM exceeded our expectations, even creating a custom WDO solution and handling complex payroll calculations effortlessly. We highly recommend DREAM Sales CRM to other pest control operators seeking a robust, industry-specific solution." },
  { initial: "B", name: "Bo Jenkins", company: "ABC Home & Commercial Services", quote: "Dream CRM has transformed our sales process. With automatic follow-ups, drip marketing, and easy-to-access KPIs, our closing rate has soared, and team management has become more efficient. The streamlined agreement-building tool allows our field sales team to bid jobs on the spot." },
];

export const footer = {
  Product: [
    ["Sales CRM", "/sales-crm"],
    ["ERP", "/erp"],
    ["Dream Pulse", "/pulse"],
    ["All Features", "/software-features"],
  ],
  Solutions: [
    ["Routing & Optimization", "/route-planning-and-optimization-software"],
    ["Scheduling & Dispatch", "/dispatching-and-scheduling-software"],
    ["Commercial Sales", "/commercial-sales"],
    ["Door to Door", "/door-to-door"],
    ["LeadNOW", "/leadnow"],
    ["Graphing", "/graphing"],
    ["WDO / Termite", "/termite-inspection-report-software"],
  ],
  Company: [
    ["About Us", "/about-us"],
    ["Blog", "/blogs"],
    ["Testimonial", "/testimonial"],
    ["Social Initiative", "https://www.dreamdonations.org/"],
    ["Faq", "/faq"],
    ["Contact", "/contact"],
    ["Privacy Policy", "/privacy-policy-dream-service-software"],
    ["Terms of Service", "/terms-of-service"],
  ],
};

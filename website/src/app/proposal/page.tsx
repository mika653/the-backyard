import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarCheck,
  Calendar,
  CheckCircle2,
  Check,
  Minus,
  Sparkles,
  Megaphone,
  TrendingUp,
  PenTool,
  Palette,
  Package,
  LayoutDashboard,
  MessageCircle,
  Sun,
  Image as ImageIcon,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Backyard Place — Website Proposal",
  description:
    "Proposed scope, smart features, timeline, and investment tiers for The Backyard Place's new website.",
};

const aiFeatures = [
  {
    icon: <CalendarCheck size={20} />,
    name: "Smart Reservation Concierge",
    summary:
      "Customers describe the night — \"barkada Friday\", \"birthday for 12\", \"date night\" — and the concierge picks the right table (booth, garden, group) and confirms via Messenger or phone in seconds.",
    impact:
      "Replaces back-and-forth Messenger pings. Captures bookings after hours, including weekend rushes when calls go unanswered.",
  },
  {
    icon: <Sparkles size={20} />,
    name: "Smart Group Set Builder",
    summary:
      "Pick a headcount, the planner builds the spread — Set 2 for the table, plus an extra Bad Boy Platter and a fruit-shake round — bundled into one bookable plan.",
    impact:
      "Sells the experience, not just the seat. Bigger spend per booking, longer dwell time, and a cleaner ask for big groups.",
  },
  {
    icon: <MessageCircle size={20} />,
    name: "Smart Menu Recommender",
    summary:
      "Customer types &ldquo;something not too spicy, with seafood, for two&rdquo; and the AI surfaces 3 dishes from the menu — with prices, photos, and a one-tap add to the reservation note.",
    impact:
      "Turns the menu page into a guided experience. Cuts the &ldquo;ano ba pwede?&rdquo; question and gets walk-ins ordering faster.",
  },
];

const scope = [
  {
    title: "Design",
    items: [
      "Tropical-rustic design system (cream, amber, ocean teal, coral, bark)",
      "Mobile-first layouts for desktop, tablet, and phone",
      "Bento-grid homepage that highlights signature dishes and ambience",
      "Photography direction for hero shots, platters, and interior",
    ],
  },
  {
    title: "Build",
    items: [
      "Next.js + Tailwind for fast loads on Filipino mobile data",
      "Optional CMS so your team can update menu, prices, and promos without us",
      "Smart features built with custom logic — no API subscriptions or ongoing usage costs",
      "Local SEO, schema markup, sitemaps, Google Analytics",
    ],
  },
  {
    title: "Content & Launch",
    items: [
      "Rewritten food & drink copy (taste-led, conversational)",
      "Featured platter + signature shake spotlights",
      "Group-meal sets and barkada packages template",
      "Migration, redirects, training session for the team",
    ],
  },
];

const pillars = [
  {
    icon: <Sun size={18} />,
    title: "Tropical Rustic Palette",
    body: "Warm creams, amber tones, ocean teals, and earthy bark — a colour palette that feels like an island grill bar under the stars.",
  },
  {
    icon: <ImageIcon size={18} />,
    title: "Mouth-Watering Imagery",
    body: "Hero shots of sizzling platters, fresh talaba, and the open-air dining area that make visitors hungry before they even read a word.",
  },
  {
    icon: <PhoneCall size={18} />,
    title: "Action-First UI",
    body: "Sticky click-to-call, prominent hours and location, and a shareable menu — designed so mobile visitors can act instantly.",
  },
];

const timeline = [
  { week: "Day 0",     phase: "Discovery & onboarding",    deliverable: "Brand assets, photos, and menu info gathered (1–3 days, before the 7-day clock starts)" },
  { week: "Day 1",     phase: "Kickoff & direction",        deliverable: "Sitemap confirmed, design direction locked, content outline approved" },
  { week: "Days 2–3",  phase: "Design",                     deliverable: "Homepage + menu page designs ready for sign-off" },
  { week: "Days 4–5",  phase: "Build",                      deliverable: "Site built, content placed, mobile + tablet checked" },
  { week: "Day 6",     phase: "QA & polish",                 deliverable: "Cross-browser checks, performance pass, local SEO basics in place" },
  { week: "Day 7",     phase: "Launch 🚀",                   deliverable: "Site goes live, you get the keys, walkthrough call done" },
  { week: "Week 2+",   phase: "Smart features layered in",   deliverable: "Optional — Reservation Concierge, Group Set Builder, or Menu Recommender added live (Growth & Pro tiers)" },
];

const addOns = [
  { icon: <LayoutDashboard size={20} />, name: "CMS Setup",                price: "₱2,500", unit: "/one-time", body: "Simple admin panel so your team can update menu items, prices, promos, and event posts without us. Already included in Growth and Pro — add this to Starter if you want self-edit capability without committing to a monthly retainer." },
  { icon: <Megaphone size={20} />,        name: "Social Media Management", price: "₱3,000", unit: "/month",    body: "Content calendar, post creation, and scheduling for Facebook and Instagram. Includes 8 branded posts per month — perfect for surfacing weekend specials, new arrivals, and group-meal promos." },
  { icon: <TrendingUp size={20} />,       name: "AI-Powered SEO",          price: "₱2,500", unit: "/month",    body: "Keyword research, meta tag optimisation, schema markup, and monthly ranking reports for terms like \"seafood restaurant Kalibo\", \"grill bar near Boracay\", and \"talaba Aklan\". Keeps your site climbing local Google results." },
  { icon: <PenTool size={20} />,          name: "Blog & Content Writing",  price: "₱2,000", unit: "/month",    body: "2 SEO-optimised articles per month — seasonal seafood guides, behind-the-grill stories, group-meal planning. Drives organic traffic and turns the site into a real local destination." },
  { icon: <Palette size={20} />,          name: "Social Media Design",     price: "₱350",   unit: "/design",   body: "Design-only service for individual social posts — branded graphics for promos, weekly specials, and new dishes. No scheduling or management included. Perfect if your team handles posting in-house." },
];

type Cell = boolean | string;
type CompareRow = { label: string; starter: Cell; growth: Cell; pro: Cell };
type CompareGroup = { group: string; rows: CompareRow[] };

const comparison: CompareGroup[] = [
  {
    group: "What's included",
    rows: [
      { label: "Live in 7 days",                 starter: true,  growth: true,    pro: true },
      { label: "Pages included",                  starter: "2 (Home + Menu)", growth: "4–5", pro: "Up to 8" },
      { label: "Mobile-first responsive",         starter: true,  growth: true,    pro: true },
      { label: "Branded with your logo & colours", starter: true, growth: true,    pro: true },
      { label: "Click-to-call button",            starter: true,  growth: true,    pro: true },
    ],
  },
  {
    group: "Design depth",
    rows: [
      { label: "Custom design polish",            starter: false, growth: "Light", pro: "Full design system" },
      { label: "Group-meal sets template",        starter: false, growth: false,    pro: true },
      { label: "Featured dish / signature spotlight", starter: false, growth: false, pro: true },
    ],
  },
  {
    group: "Smart layers",
    rows: [
      { label: "Smart features",                  starter: false, growth: "1 feature", pro: "2 features" },
      { label: "CMS for self-editing",            starter: false, growth: true,        pro: true },
    ],
  },
  {
    group: "Monthly retainer",
    rows: [
      { label: "Monthly fee",                     starter: "—",   growth: "₱1,500/mo", pro: "₱3,000/mo" },
      { label: "Menu / page updates per month",    starter: false, growth: "2",        pro: "4" },
      { label: "Monthly performance check + insights", starter: false, growth: false,  pro: true },
      { label: "Priority support (same-day response)", starter: false, growth: false,  pro: true },
      { label: "Lock-in commitment",              starter: "None", growth: "Month-to-month", pro: "Month-to-month" },
    ],
  },
  {
    group: "Tech & support",
    rows: [
      { label: "Vercel hosting (year 1 included)", starter: true, growth: true, pro: true },
      { label: "Local SEO + Google Analytics",     starter: true, growth: true, pro: true },
      { label: "Revision rounds",                  starter: "1",  growth: "2",  pro: "2" },
    ],
  },
];

const tiers = [
  {
    name: "Starter Site",
    tagline: "Best for restaurants that just need an online presence and a shareable menu.",
    price: "₱8,000",
    monthly: null,
    pillNote: "One-Time Payment",
    bullets: [
      "Homepage + Menu page",
      "Mobile-first, fast on Filipino data",
      "Click-to-call button",
      "Basic local SEO setup",
      "Vercel hosting (year 1 included)",
      "1 round of revisions",
    ],
    bottomStrip: "No monthly fees. No lock-in.",
    bottomStripVariant: "neutral" as const,
    accent: "#94A3B8",
    highlight: false,
  },
  {
    name: "Growth Site",
    tagline: "Best for restaurants that want a polished site with regular menu updates and support.",
    price: "₱7,000",
    monthly: "₱1,500",
    pillNote: "Initial + Monthly Retainer",
    bullets: [
      "Everything in Starter, plus:",
      "Up to 5 pages with light custom polish",
      "1 smart feature of your choice — Reservation Concierge, Group Set Builder, or Menu Recommender",
      "Simple CMS so your team can edit content",
      "Google Maps + analytics tracking",
      "Messenger chat integration",
      "2 menu / content updates per month",
      "2 rounds of revisions",
    ],
    bottomStrip: "Includes 2 menu updates / month.",
    bottomStripVariant: "primary" as const,
    accent: "#ffb868",
    highlight: true,
  },
  {
    name: "Pro Site",
    tagline: "Best for restaurants that want to stay active, grow online, and attract more customers.",
    price: "₱6,000",
    monthly: "₱3,000",
    pillNote: "Initial + Monthly Retainer",
    bullets: [
      "Everything in Growth, plus:",
      "Up to 8 pages with custom design system",
      "2 smart features of your choice (from Reservation Concierge, Group Set Builder, Menu Recommender)",
      "Group-meal sets template",
      "Signature platter / dish spotlight section",
      "4 menu / content updates per month",
      "Monthly performance check + insights",
      "Priority support (same-day response)",
    ],
    bottomStrip: "Priority support + monthly insights.",
    bottomStripVariant: "primary" as const,
    accent: "#1f0f09",
    highlight: false,
  },
];

export default function ProposalPage() {
  return (
    <main
      className="bg-white text-neutral-900"
      style={{ fontFamily: "var(--font-nunito, sans-serif)" }}
    >
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-[#ffb868]/40">
              <img src="/logo.jpg" alt="The Backyard Place" className="w-full h-full object-cover" />
            </div>
            <span
              className="text-sm font-bold text-neutral-800 hidden sm:inline tracking-wide"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              THE BACKYARD PLACE
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft size={14} /> Back to overview
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-br from-[#1f0f09] via-[#2a1810] to-[#3D2B1F] text-white">
        <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffb868]/15 text-[#ffd699] text-xs font-bold uppercase tracking-[0.18em] mb-6">
            Website Proposal · March 2026
          </div>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] mb-6"
            style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
          >
            From Facebook Page
            <br />
            <span className="text-[#ffb868]">to Digital Destination.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed mb-8">
            A new website for The Backyard Place — built for what guests
            actually want: faster reservations, a shareable menu, and a grill
            bar that feels modern, magnetic, and unmistakably yours.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 pt-8 border-t border-white/10 text-sm">
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Delivery</div>
              <div className="font-bold text-white">Live in 7 days</div>
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Investment</div>
              <div className="font-bold text-white">From ₱6,000 + retainer</div>
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Smart features</div>
              <div className="font-bold text-white">Up to 2</div>
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Validity</div>
              <div className="font-bold text-white">90 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Promise */}
      <section className="border-b border-neutral-200 bg-[#ffb868] text-[#1f0f09]">
        <div className="max-w-5xl mx-auto px-6 py-14 sm:py-16 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f0f09]/15 text-[#1f0f09] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
              The Fishbone Promise
            </div>
            <div
              className="text-7xl sm:text-8xl font-extrabold tracking-tight leading-[0.9]"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              7 days.
            </div>
            <div
              className="text-2xl font-bold text-[#1f0f09]/85 mt-3"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              From kickoff to live.
            </div>
          </div>
          <div className="md:col-span-7 text-[#1f0f09]/85 text-lg leading-relaxed space-y-4">
            <p>
              Once we&rsquo;ve gathered your assets and aligned on direction,
              your new site goes live in{" "}
              <strong className="text-[#1f0f09]">seven calendar days</strong>.
              No drag, no &ldquo;final-final&rdquo; loop, no surprise
              extensions.
            </p>
            <p className="text-[#1f0f09]/70 text-base">
              Discovery and onboarding (1–3 days of brand assets, photos, and
              menu info) happen <em>before</em> the 7-day clock starts, so the
              build phase stays focused. Smart features in Growth and Pro
              tiers are layered in{" "}
              <strong className="text-[#1f0f09]">after launch</strong> — the
              site is already live and earning while we add the smart layers
              on top.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8623A] mb-3">
          01 &mdash; The Vision
        </div>
        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
        >
          The site should match the reputation.
        </h2>
        <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
          The Backyard Place has been Kalibo&rsquo;s go-to tropical seafood
          grill bar since 2016 &mdash; a decade of sizzling platters, fresh
          talaba, cold drinks, and good vibes. The new website should feel
          the same way: a welcoming digital storefront that makes hungry
          customers call, visit, and come back.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
              <div className="w-10 h-10 rounded-lg bg-[#ffb868]/15 text-[#E8623A] flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <div
                className="font-bold text-neutral-900 mb-2"
                style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
              >
                {p.title}
              </div>
              <div className="text-neutral-600 text-sm leading-relaxed">{p.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Smart Features */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8623A] mb-3">
            02 &mdash; Smart Features
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
          >
            Three smart features designed for the grill-bar guest.
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
            Each one solves a real friction point in the customer journey —
            and each runs on built-in logic, so there are no ongoing API
            costs.{" "}
            <strong className="text-neutral-900">Growth</strong> ships with 1
            feature of your choice; <strong className="text-neutral-900">Pro</strong>{" "}
            ships with 2.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {aiFeatures.map((f) => (
              <div key={f.name} className="bg-white rounded-xl border border-neutral-200 p-6 hover:border-[#ffb868] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#ffb868]/15 text-[#E8623A] flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div className="flex-1">
                    <div
                      className="font-bold text-neutral-900 mb-1.5"
                      style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                    >
                      {f.name}
                    </div>
                    <p
                      className="text-neutral-700 text-sm leading-relaxed mb-2"
                      dangerouslySetInnerHTML={{ __html: f.summary }}
                    />
                    <p className="text-neutral-500 text-xs leading-relaxed italic">
                      <span className="font-semibold text-[#E8623A] not-italic">Why it matters:</span>{" "}
                      {f.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8623A] mb-3">
          03 &mdash; Scope
        </div>
        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10"
          style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
        >
          What we&rsquo;ll deliver
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {scope.map((s) => (
            <div key={s.title} className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
              <div
                className="font-bold text-neutral-900 mb-3 text-lg"
                style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
              >
                {s.title}
              </div>
              <ul className="space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-neutral-700 leading-relaxed">
                    <CheckCircle2 size={16} className="text-[#ffb868] shrink-0 mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#1f0f09] text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 border border-[#ffb868]/30">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-[#ffb868]/20 text-[#ffd699] flex items-center justify-center">
            <ShieldCheck size={22} />
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffd699] mb-1.5">
              Full ownership guarantee
            </div>
            <div
              className="font-bold text-lg sm:text-xl mb-1"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              You own your domain, hosting, and all code from Day 1.
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              No lock-in. No hidden fees. Full control, always.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8623A] mb-3">
            04 &mdash; Timeline
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
          >
            Seven days, start to finish
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
            Discovery happens before the clock starts. Once we kick off, the
            build is laser-focused on shipping by Day 7.
          </p>
          <div className="space-y-3">
            {timeline.map((t, i) => (
              <div key={t.phase} className="bg-white rounded-xl border border-neutral-200 p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center">
                <div className="flex items-center gap-3 sm:w-44 shrink-0">
                  <div className="w-9 h-9 rounded-full bg-[#ffb868] text-[#1f0f09] flex items-center justify-center text-xs font-extrabold shrink-0">
                    {i + 1}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                    {t.week}
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className="font-bold text-neutral-900"
                    style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                  >
                    {t.phase}
                  </div>
                  <div className="text-sm text-neutral-600">{t.deliverable}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8623A] mb-3">
          05 &mdash; Investment
        </div>
        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
        >
          Choose your plan
        </h2>
        <p className="text-neutral-600 text-lg max-w-3xl mb-10 leading-relaxed">
          Every tier ships in 7 days. Starter is a clean one-time build.
          Growth and Pro pair a smaller upfront with a monthly retainer that
          keeps your site fresh — menu updates, performance insights, and
          ongoing support handled by us, month after month.
        </p>
        <div className="grid lg:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border flex flex-col overflow-hidden ${
                t.highlight ? "border-[#ffb868] shadow-xl shadow-[#ffb868]/20 bg-white" : "border-neutral-200 bg-white"
              }`}
            >
              {t.highlight && (
                <div className="bg-[#ffb868] text-[#1f0f09] text-[10px] font-extrabold uppercase tracking-[0.22em] px-3 py-2 text-center">
                  ★ Recommended
                </div>
              )}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-4">
                  {t.name}
                </div>
                <div className="mb-5 pb-5 border-b border-neutral-200">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className="text-4xl font-extrabold text-neutral-900"
                      style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                    >
                      {t.price}
                    </span>
                  </div>
                  {t.monthly && (
                    <div className="mb-2">
                      <span className={`text-sm font-bold ${t.highlight ? "text-[#E8623A]" : "text-neutral-700"}`}>
                        + {t.monthly}
                      </span>
                      <span className={`text-xs font-normal ${t.highlight ? "text-[#E8623A]/70" : "text-neutral-500"}`}>
                        /month
                      </span>
                    </div>
                  )}
                  <div className="text-[11px] text-neutral-500 uppercase tracking-[0.12em]">
                    {t.pillNote}
                  </div>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {t.tagline}
                </p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-neutral-700 leading-relaxed">
                      <CheckCircle2 size={16} className="text-[#ffb868] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:hello@fishbonecreative.com?subject=The%20Backyard%20Place%20%E2%80%94%20${encodeURIComponent(t.name)}`}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                    t.highlight
                      ? "bg-[#ffb868] hover:bg-[#E8623A] hover:text-white text-[#1f0f09]"
                      : "border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900"
                  }`}
                >
                  Start with {t.name} <ArrowUpRight size={15} />
                </a>
              </div>
              <div
                className={`px-6 py-4 border-t ${
                  t.bottomStripVariant === "primary"
                    ? "bg-[#ffb868]/10 border-[#ffb868]/20 text-[#E8623A]"
                    : "bg-neutral-50 border-neutral-200 text-neutral-500 italic"
                }`}
              >
                <p className="text-xs font-semibold leading-relaxed">{t.bottomStrip}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <div className="mt-16">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8623A] mb-3">
            Compare side-by-side
          </div>
          <h3
            className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8"
            style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
          >
            Everything in each tier, at a glance.
          </h3>

          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[640px] rounded-2xl border border-neutral-200 overflow-hidden">
              <div className="grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] bg-neutral-50 border-b border-neutral-200">
                <div className="p-4 sm:p-5"></div>
                {[
                  { name: "Starter Site", price: "₱8,000", monthly: null,             highlight: false },
                  { name: "Growth Site",  price: "₱7,000", monthly: "+ ₱1,500/mo",    highlight: true },
                  { name: "Pro Site",     price: "₱6,000", monthly: "+ ₱3,000/mo",    highlight: false },
                ].map((t) => (
                  <div key={t.name} className={`p-4 sm:p-5 text-center border-l border-neutral-200 ${t.highlight ? "bg-[#ffb868]/10" : ""}`}>
                    {t.highlight && (
                      <div className="inline-block bg-[#ffb868] text-[#1f0f09] text-[9px] font-extrabold uppercase tracking-[0.16em] px-2 py-0.5 rounded mb-2">
                        ★ Recommended
                      </div>
                    )}
                    <div
                      className={`text-sm font-bold ${t.highlight ? "text-[#E8623A]" : "text-neutral-900"}`}
                      style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                    >
                      {t.name}
                    </div>
                    <div className={`text-xs mt-1 ${t.highlight ? "text-[#E8623A]" : "text-neutral-500"}`}>{t.price}</div>
                    {t.monthly && (
                      <div className={`text-[10px] mt-0.5 ${t.highlight ? "text-[#E8623A]/80" : "text-neutral-400"}`}>{t.monthly}</div>
                    )}
                  </div>
                ))}
              </div>

              {comparison.map((group, gi) => (
                <div key={group.group}>
                  <div className={`grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] ${gi === 0 ? "" : "border-t border-neutral-200"}`}>
                    <div className="col-span-4 px-5 py-2.5 bg-neutral-50/70 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                      {group.group}
                    </div>
                  </div>
                  {group.rows.map((row, ri) => (
                    <div key={row.label} className={`grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] ${ri !== 0 || gi !== 0 ? "border-t border-neutral-100" : ""}`}>
                      <div className="px-5 py-3.5 text-sm text-neutral-700">{row.label}</div>
                      {(["starter", "growth", "pro"] as const).map((tier) => {
                        const cell = row[tier];
                        const isGrowth = tier === "growth";
                        return (
                          <div key={tier} className={`px-4 py-3.5 text-center border-l border-neutral-100 ${isGrowth ? "bg-[#ffb868]/8" : ""}`}>
                            {cell === true ? (
                              <Check size={18} className="mx-auto text-[#ffb868]" strokeWidth={3} />
                            ) : cell === false ? (
                              <Minus size={16} className="mx-auto text-neutral-300" />
                            ) : (
                              <span className={`text-xs sm:text-sm font-semibold ${isGrowth ? "text-[#E8623A]" : "text-neutral-900"}`}>{cell}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}

              <div className="grid grid-cols-[minmax(180px,1.4fr)_1fr_1fr_1fr] border-t border-neutral-200 bg-neutral-50">
                <div className="p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-neutral-500 self-center">
                  Get started
                </div>
                {[
                  { name: "Starter Site", highlight: false },
                  { name: "Growth Site", highlight: true },
                  { name: "Pro Site",    highlight: false },
                ].map((t) => (
                  <div key={t.name} className={`p-3 sm:p-4 border-l border-neutral-200 ${t.highlight ? "bg-[#ffb868]/10" : ""}`}>
                    <a
                      href={`mailto:hello@fishbonecreative.com?subject=The%20Backyard%20Place%20%E2%80%94%20${encodeURIComponent(t.name)}`}
                      className={`block text-center text-xs font-bold uppercase tracking-wider px-3 py-2.5 rounded-lg transition-colors ${
                        t.highlight
                          ? "bg-[#ffb868] hover:bg-[#E8623A] hover:text-white text-[#1f0f09]"
                          : "border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900"
                      }`}
                    >
                      Choose {t.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What client covers */}
        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-2">Domain</div>
            <div
              className="font-bold text-2xl text-neutral-900 mb-1"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              ₱800–1,500<span className="text-sm text-neutral-500 font-normal">/yr</span>
            </div>
            <div className="text-sm text-neutral-600">Bought under your account.</div>
          </div>
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-2">Hosting</div>
            <div
              className="font-bold text-2xl text-neutral-900 mb-1"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              Free <span className="text-sm text-neutral-500 font-normal">via Vercel</span>
            </div>
            <div className="text-sm text-neutral-600">Year 1 free; ~₱500/mo if you outgrow it.</div>
          </div>
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-2">Lock-in</div>
            <div
              className="font-bold text-2xl text-neutral-900 mb-1"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              None.
            </div>
            <div className="text-sm text-neutral-600">We build it. You own it. We maintain it.</div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8623A] mb-3">
            06 &mdash; Optional Add-ons
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
          >
            Layer in extra firepower.
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mb-3 leading-relaxed">
            Available across all tiers. Monthly services are billed alongside
            any retainer (cancellable with 15 days written notice); one-time
            services are billed at setup.
          </p>
          <p className="text-sm text-neutral-500 italic mb-10">Mix and match — pick any combination below.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {addOns.map((a) => (
              <article key={a.name} className="bg-white rounded-2xl border border-neutral-200 hover:border-[#ffb868] transition-colors p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#ffb868]/15 text-[#E8623A] flex items-center justify-center">
                    {a.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h3
                        className="font-bold text-neutral-900 text-lg leading-tight"
                        style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                      >
                        {a.name}
                      </h3>
                      <div className="shrink-0 text-right">
                        <span
                          className="text-xl font-extrabold text-[#E8623A]"
                          style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                        >
                          {a.price}
                        </span>
                        <span className="text-xs font-normal text-[#E8623A]/80">{a.unit}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">{a.body}</p>
              </article>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#1f0f09] to-[#3D2B1F] text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 border border-[#ffb868]/30">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#ffb868]/20 text-[#ffd699] flex items-center justify-center">
              <Package size={22} />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffd699] mb-1.5">
                Bundle deal
              </div>
              <div
                className="font-bold text-lg sm:text-xl mb-1"
                style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
              >
                Bundle the three monthly marketing services for ₱6,500/month.
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                That&rsquo;s Social Media Management + AI-Powered SEO + Blog
                Writing — together you save ₱1,000/month versus picking them
                individually. Add-ons begin after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts CTA */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <div className="bg-[#1f0f09] text-white rounded-2xl p-8 sm:p-12 border border-[#ffb868]/20">
          <h3
            className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
          >
            See three directions, side-by-side.
          </h3>
          <p className="text-white/80 leading-relaxed mb-6 max-w-3xl">
            We built three concept directions, each leading with a different
            visual story so you can see how the brand could feel in different
            worlds. Open each and switch between mobile, tablet, and desktop
            views to compare.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {[
              { href: "/concept-1", label: "Concept 1", sub: "Tropical Rustic"  },
              { href: "/concept-2", label: "Concept 2", sub: "Charred Hearth"   },
              { href: "/concept-3", label: "Concept 3", sub: "Coastal Almanac"  },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-xl bg-white/5 border border-white/10 hover:border-[#ffb868] hover:bg-white/10 transition-all p-5 group"
              >
                <div className="text-xs uppercase tracking-[0.14em] text-[#ffb868] font-bold mb-2">
                  {c.label}
                </div>
                <div
                  className="font-bold text-white text-lg group-hover:text-[#ffd699] transition-colors"
                  style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                >
                  {c.sub}
                </div>
                <div className="mt-3 text-sm text-white/60 inline-flex items-center gap-1">
                  Open <ArrowUpRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@fishbonecreative.com?subject=The%20Backyard%20Place%20%E2%80%94%20Let%27s%20talk"
              className="inline-flex items-center gap-2 bg-[#ffb868] hover:bg-[#ffd699] transition-colors text-[#1f0f09] px-5 py-3 rounded-lg text-sm font-extrabold"
            >
              <Calendar size={16} /> Book a 30-min walkthrough
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock,
  Compass,
  Anchor,
  Waves,
  Sun,
} from "lucide-react";

function Facebook({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function Instagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const tides = [
  { time: "10:00 AM", title: "Doors open",     body: "Hangover cures: lomi, garlic rice, calamansi juice.", tag: "Daily" },
  { time: "5:00 PM",  title: "Charcoal lit",   body: "The grill picks up. Oysters land on ice. First bottles open.", tag: "Daily" },
  { time: "8:00 PM",  title: "Family hour",     body: "Big tables fill. Kids chase dogs. The platters get serious.", tag: "Fri–Sun" },
  { time: "11:30 PM", title: "Last call",       body: "Last sizzle off the iron. Buko juice for the road.", tag: "Daily" },
];

const fieldNotes = [
  { num: "01", kicker: "On the catch",    body: "Talaba comes from a single supplier in Numancia who pulls them at dawn. They&rsquo;re shucked when you order, never before." },
  { num: "02", kicker: "On the fire",     body: "We don&rsquo;t use gas. The grill is charcoal, the smoke is real, and the burn is exactly what the chef wants — every plate." },
  { num: "03", kicker: "On the platter",  body: "The Bad Boy was an accident — a Friday-night ask that turned into a regular. Now it feeds half the tables on a weekend." },
  { num: "04", kicker: "On the night",    body: "We close when the kitchen says it&rsquo;s done. Usually 12. Sometimes 1. We don&rsquo;t hurry the last table." },
];

const dishes = [
  { kicker: "Best seller",  name: "Bad Boy Platter",   price: "1,399", tags: ["Sharing", "Mixed"] },
  { kicker: "Must try",      name: "Steamed Talaba",    price: "249",   tags: ["Daily catch"] },
  { kicker: "Sizzling",      name: "Pork Sisig",        price: "159",   tags: ["Iron plate"] },
  { kicker: "From the sea",  name: "Grilled Tanigue",   price: "299",   tags: ["Charcoal"] },
  { kicker: "From the bone", name: "Crispy Pata",       price: "399",   tags: ["Crowd"] },
  { kicker: "From the bar",  name: "Mango Shake",       price: "129",   tags: ["Cold"] },
];

const cocktails: Array<[string, string]> = [
  ["Margarita",       "189"],
  ["Piña Colada",      "169"],
  ["Mojito",           "159"],
  ["Mai Tai",          "179"],
  ["Tequila Sunrise",  "159"],
  ["Long Island",      "229"],
  ["Daiquiri",         "139"],
  ["Blue Lagoon",      "179"],
];

export default function Concept3() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      className="bg-[#F4EDE0] text-[#1B2530] min-h-screen relative"
      style={{ fontFamily: "var(--font-grotesk, sans-serif)" }}
    >
      <div className="pointer-events-none fixed inset-0 z-[60] opacity-[0.03] bg-noise" aria-hidden />

      {/* Pitch deck back-bar */}
      <div className="bg-[#1B2530] text-[#F4EDE0] text-xs flex items-center justify-between px-4 sm:px-6 py-2 sticky top-0 z-50">
        <span className="uppercase tracking-[0.22em] font-bold text-[#E8B340]" style={{ fontFamily: "var(--font-grotesk, sans-serif)" }}>
          Concept 03 — Coastal Almanac
        </span>
        <Link href="/" className="flex items-center gap-1.5 text-[#F4EDE0]/70 hover:text-[#E8B340] transition-colors">
          <ArrowLeft size={12} /> Back to overview
        </Link>
      </div>

      {/* Nav */}
      <nav
        className={`sticky top-[33px] z-40 transition-all duration-300 ${
          scrolled ? "bg-[#F4EDE0]/96 backdrop-blur-xl border-b border-[#1B2530]/8" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="#hero" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#2E6B6E]/30">
              <img src="/logo.jpg" alt="The Backyard Place" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-base tracking-tight" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
              The Backyard <span className="text-[#2E6B6E] italic">Almanac</span>
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm text-[#1B2530]/75">
            <li><a href="#almanac" className="hover:text-[#2E6B6E]">Almanac</a></li>
            <li><a href="#tides" className="hover:text-[#2E6B6E]">Tides</a></li>
            <li><Link href="/menu" className="hover:text-[#2E6B6E]">Menu</Link></li>
            <li><a href="#bar" className="hover:text-[#2E6B6E]">Bar</a></li>
            <li><a href="#visit" className="hover:text-[#2E6B6E]">Visit</a></li>
          </ul>
          <a
            href="tel:+639511306264"
            className="hidden sm:inline-flex items-center gap-2 bg-[#1B2530] hover:bg-[#2D3A47] text-[#F4EDE0] px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.06em]"
          >
            <Phone size={13} /> 0951 130 6264
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative border-b border-[#1B2530]/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-20">
          {/* Almanac masthead */}
          <div className="flex items-end justify-between mb-12 pb-6 border-b-2 border-[#1B2530]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#2E6B6E] font-bold">
                Vol. X · Issue Mar 2026 · Old Buswang Edition
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#1B2530]/55 mt-1">
                Published every night that the grill is lit · Free with your first San Mig
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#1B2530]/55">Issued from</div>
              <div className="text-sm font-bold text-[#1B2530]" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
                Kalibo, Aklan · 11.7°N
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1
                className="font-bold leading-[0.92] tracking-[-0.025em] text-6xl sm:text-7xl lg:text-[120px]"
                style={{ fontFamily: "var(--font-fraunces, serif)" }}
              >
                The
                <em className="italic font-light text-[#2E6B6E]"> backyard </em>
                stays<br />
                <span className="text-[#D8593C]">open</span> until the
                <em className="italic font-light"> tide </em>says
                <span className="text-[#E8B340]"> stop.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-4">
              <p
                className="text-lg text-[#1B2530]/85 leading-[1.55] mb-7"
                style={{ fontFamily: "var(--font-fraunces, serif)" }}
              >
                A field journal of <em className="text-[#2E6B6E]">fresh seafood, charcoal grilling,
                and humid evenings</em> at Old Buswang&rsquo;s favorite grill bar.
                Ten years on the same corner.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-[#2E6B6E] hover:bg-[#3F8688] text-[#F4EDE0] px-5 py-3 rounded-full text-sm font-semibold transition-colors"
                >
                  Read the menu <ArrowRight size={15} />
                </Link>
                <a
                  href="#tides"
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#1B2530] underline decoration-[#E8B340] decoration-2 underline-offset-4"
                >
                  See tonight&rsquo;s tides
                </a>
              </div>
            </div>
          </div>

          {/* Forecast strip */}
          <div className="mt-14 pt-8 border-t border-[#1B2530]/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: <Sun size={14} />,     label: "Today",      val: "10AM &mdash; 12MN" },
              { icon: <Compass size={14} />, label: "Bearing",    val: "Old Buswang" },
              { icon: <Anchor size={14} />,  label: "Anchor",     val: "Talaba & Grill" },
              { icon: <Waves size={14} />,   label: "Conditions", val: "Hot. Humid. Hungry." },
            ].map((f) => (
              <div key={f.label}>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#2E6B6E] font-bold mb-1.5">
                  {f.icon} {f.label}
                </div>
                <div
                  className="text-lg font-semibold text-[#1B2530] leading-tight"
                  style={{ fontFamily: "var(--font-fraunces, serif)" }}
                  dangerouslySetInnerHTML={{ __html: f.val }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Almanac — chapters / field notes */}
      <section id="almanac" className="border-b border-[#1B2530]/10 bg-[#EDE3D0]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#D8593C] font-bold mb-3">
              Field Notes &mdash; The Almanac
            </div>
            <h2
              className="text-5xl sm:text-6xl font-bold leading-[1.0] tracking-[-0.015em] mb-6"
              style={{ fontFamily: "var(--font-fraunces, serif)" }}
            >
              Things we&rsquo;ve <em className="italic font-light text-[#2E6B6E]">learned</em> running a grill bar in <em className="italic font-light text-[#D8593C]">Aklan.</em>
            </h2>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-[#1B2530] relative bg-[#1B2530]">
              <img src="/rattan.jpg" alt="Rattan pendant lamps over dining tables" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 right-3 bg-[#F4EDE0] text-[#1B2530] px-3 py-2 text-[10px] uppercase tracking-[0.18em] font-bold flex items-center justify-between">
                <span>Plate №01</span>
                <span>The dining room</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {fieldNotes.map((n, i) => (
                <article
                  key={n.num}
                  className={`grid grid-cols-12 gap-5 sm:gap-7 pb-6 ${
                    i < fieldNotes.length - 1 ? "border-b border-dashed border-[#1B2530]/20" : ""
                  }`}
                >
                  <div className="col-span-2">
                    <div
                      className="text-5xl sm:text-6xl font-bold text-[#D8593C] leading-none"
                      style={{ fontFamily: "var(--font-fraunces, serif)" }}
                    >
                      {n.num}
                    </div>
                  </div>
                  <div className="col-span-10">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[#2E6B6E] font-bold mb-2">
                      {n.kicker}
                    </div>
                    <p
                      className="text-lg text-[#1B2530] leading-[1.55]"
                      style={{ fontFamily: "var(--font-fraunces, serif)" }}
                      dangerouslySetInnerHTML={{ __html: n.body }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Today's tides — schedule */}
      <section id="tides" className="border-b border-[#1B2530]/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#2E6B6E] font-bold mb-3">
              Today&rsquo;s Tides &mdash; The day, in hours
            </div>
            <h2
              className="text-5xl sm:text-6xl font-bold leading-[1.0] tracking-[-0.015em]"
              style={{ fontFamily: "var(--font-fraunces, serif)" }}
            >
              How a day at <em className="italic font-light text-[#D8593C]">The Backyard</em> moves.
            </h2>
            <p className="mt-5 text-[#1B2530]/75 leading-relaxed max-w-md">
              The kitchen wakes early, the grill warms slowly, and by sundown
              the platters arrive shoulder-to-shoulder. Drop in any time the
              door is open.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ol className="relative border-l-2 border-[#2E6B6E] ml-2">
              {tides.map((t, i) => (
                <li key={t.title} className={`relative pl-8 ${i < tides.length - 1 ? "pb-8" : ""}`}>
                  <span className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full bg-[#E8B340] ring-4 ring-[#F4EDE0]" />
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <span
                      className="text-2xl font-bold text-[#1B2530]"
                      style={{ fontFamily: "var(--font-fraunces, serif)" }}
                    >
                      {t.time}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#2E6B6E] font-bold">
                      {t.tag}
                    </span>
                  </div>
                  <div
                    className="text-xl font-semibold text-[#1B2530] mb-1.5"
                    style={{ fontFamily: "var(--font-fraunces, serif)" }}
                  >
                    {t.title}
                  </div>
                  <p className="text-[#1B2530]/75 leading-relaxed text-base max-w-xl">
                    {t.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* The catch — postcards */}
      <section id="catch" className="border-b border-[#1B2530]/10 bg-[#1B2530] text-[#F4EDE0]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-7">
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#E8B340] font-bold mb-3">
                The Catch &mdash; Today&rsquo;s arrivals
              </div>
              <h2
                className="text-5xl sm:text-6xl font-bold leading-[1.0] tracking-[-0.015em]"
                style={{ fontFamily: "var(--font-fraunces, serif)" }}
              >
                A small <em className="italic font-light text-[#A8C5BD]">postcard rack</em><br />
                from the kitchen.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-3 self-end">
              <p className="text-[#F4EDE0]/80 leading-relaxed text-lg" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
                Six dishes the floor staff push when you ask <em>&ldquo;what&rsquo;s good
                tonight?&rdquo;</em> Photos and pricing for the rest live on the menu.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dishes.map((d, i) => (
              <article
                key={d.name}
                className="bg-[#F4EDE0] text-[#1B2530] rounded-sm p-5 relative shadow-[6px_6px_0_0_rgba(232,179,64,0.6)]"
                style={{ transform: i % 2 === 0 ? "rotate(-0.4deg)" : "rotate(0.4deg)" }}
              >
                <div className="flex items-baseline justify-between gap-3 pb-3 mb-3 border-b border-[#1B2530]/15">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#D8593C] font-bold">
                    {d.kicker}
                  </div>
                  <div
                    className="text-2xl font-bold text-[#2E6B6E]"
                    style={{ fontFamily: "var(--font-fraunces, serif)" }}
                  >
                    ₱{d.price}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-fraunces, serif)" }}
                >
                  {d.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {d.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-[0.16em] text-[#1B2530]/60 bg-[#EDE3D0] px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#D8593C] text-[#F4EDE0] text-[10px] font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-grotesk, sans-serif)" }}>
                  ★
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#E8B340] hover:bg-[#F4C455] text-[#1B2530] px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-[0.16em] transition-colors"
            >
              Open the full menu <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bar list */}
      <section id="bar" className="border-b border-[#1B2530]/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#D8593C] font-bold mb-3">
              The Bar &mdash; Glassware in rotation
            </div>
            <h2
              className="text-5xl sm:text-6xl font-bold leading-[1.0] tracking-[-0.015em] mb-6"
              style={{ fontFamily: "var(--font-fraunces, serif)" }}
            >
              <em className="italic font-light text-[#2E6B6E]">Cold,</em> bright, &amp; built<br />
              for humid <em className="italic font-light text-[#E8B340]">nights.</em>
            </h2>
            <p className="text-[#1B2530]/75 text-lg leading-relaxed mb-7" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
              Tropical cocktails, fresh fruit shakes, and the bottled
              classics. House special: the Backyard Shake, ₱189, served in a
              glass that won&rsquo;t fit anywhere in your fridge.
            </p>
            <div className="bg-[#EDE3D0] border-2 border-[#1B2530]/15 p-6 rounded-sm">
              <div className="text-[10px] uppercase tracking-[0.32em] text-[#2E6B6E] font-bold mb-2">
                ◆ Tagay Note
              </div>
              <p className="text-[#1B2530] leading-relaxed" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
                Buckets of San Mig: ₱310 for 5. Order with a platter and the
                kitchen throws in the extra calamansi.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-2 border-[#1B2530] rounded-sm overflow-hidden">
              <div className="bg-[#1B2530] text-[#F4EDE0] px-5 py-3 flex items-baseline justify-between">
                <span className="text-[11px] uppercase tracking-[0.32em] text-[#E8B340] font-bold">
                  Cocktail List · Vol. X
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#F4EDE0]/60" style={{ fontFamily: "var(--font-grotesk, sans-serif)" }}>
                  Glassware ※ All-night
                </span>
              </div>
              <div className="divide-y divide-[#1B2530]/15">
                {cocktails.map(([name, price]) => (
                  <div key={name} className="flex items-baseline justify-between gap-4 px-5 py-3.5 hover:bg-[#EDE3D0]/60 transition-colors">
                    <span
                      className="text-lg text-[#1B2530]"
                      style={{ fontFamily: "var(--font-fraunces, serif)" }}
                    >
                      {name}
                    </span>
                    <span className="border-b border-dashed border-[#1B2530]/25 flex-1 mb-1.5" />
                    <span className="text-lg font-bold text-[#D8593C] tabular-nums" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
                      ₱{price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="border-b border-[#1B2530]/10 bg-[#EDE3D0]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#2E6B6E] font-bold mb-3">
              ◆ Pull up
            </div>
            <h2
              className="text-5xl sm:text-7xl font-bold leading-[0.95] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "var(--font-fraunces, serif)" }}
            >
              The plate is on. <em className="italic font-light text-[#D8593C]">Come find</em> the table.
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              <div className="bg-[#F4EDE0] border-2 border-[#1B2530]/12 p-5 rounded-sm">
                <div className="flex items-center gap-2 text-[#2E6B6E] text-[10px] uppercase tracking-[0.28em] font-bold mb-2">
                  <MapPin size={13} /> Location
                </div>
                <div
                  className="text-lg font-semibold text-[#1B2530] leading-snug"
                  style={{ fontFamily: "var(--font-fraunces, serif)" }}
                >
                  Old Buswang<br />Kalibo, Aklan
                </div>
              </div>
              <div className="bg-[#F4EDE0] border-2 border-[#1B2530]/12 p-5 rounded-sm">
                <div className="flex items-center gap-2 text-[#2E6B6E] text-[10px] uppercase tracking-[0.28em] font-bold mb-2">
                  <Clock size={13} /> Hours
                </div>
                <div
                  className="text-lg font-semibold text-[#1B2530] leading-snug"
                  style={{ fontFamily: "var(--font-fraunces, serif)" }}
                >
                  Daily<br />10AM &ndash; 12MN
                </div>
              </div>
              <div className="bg-[#F4EDE0] border-2 border-[#1B2530]/12 p-5 rounded-sm">
                <div className="flex items-center gap-2 text-[#2E6B6E] text-[10px] uppercase tracking-[0.28em] font-bold mb-2">
                  <Phone size={13} /> Reserve
                </div>
                <a
                  href="tel:+639511306264"
                  className="text-lg font-semibold text-[#1B2530] hover:text-[#D8593C] leading-snug"
                  style={{ fontFamily: "var(--font-fraunces, serif)" }}
                >
                  0951 130<br />6264
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href="https://facebook.com/backyardkalibo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1B2530] hover:bg-[#2D3A47] text-[#F4EDE0] px-5 py-3 rounded-full text-sm font-semibold transition-colors"
              >
                <Facebook size={15} /> Facebook
              </a>
              <a
                href="https://instagram.com/backyardkalibo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#1B2530] hover:bg-[#1B2530] hover:text-[#F4EDE0] text-[#1B2530] px-5 py-3 rounded-full text-sm font-semibold transition-colors"
              >
                <Instagram size={15} /> Instagram
              </a>
              <a
                href="tel:+639511306264"
                className="inline-flex items-center gap-2 bg-[#D8593C] hover:bg-[#E66E48] text-[#F4EDE0] px-5 py-3 rounded-full text-sm font-semibold transition-colors"
              >
                <Phone size={15} /> Call us
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-sm overflow-hidden border-4 border-[#1B2530] relative bg-[#1B2530]">
              <img src="/dining.jpg" alt="The Backyard Place dining room" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#F4EDE0] text-[#1B2530] px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#D8593C] font-bold mb-1">
                  ※ Postcard from the floor
                </div>
                <div
                  className="text-base text-[#1B2530] leading-tight"
                  style={{ fontFamily: "var(--font-fraunces, serif)" }}
                >
                  The dining room, just before the rush.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B2530] text-[#F4EDE0]/70 px-6 py-14">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#E8B340] font-bold mb-3">
              The Almanac
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
              A field journal of fresh seafood, charcoal grilling, and humid
              evenings — published nightly out of Old Buswang.
            </p>
            <div className="text-xs text-[#F4EDE0]/45">
              © {new Date().getFullYear()} The Backyard Place
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#E8B340] font-bold mb-3">
              Read more
            </div>
            <ul className="space-y-1.5 text-sm">
              <li><a href="#almanac" className="hover:text-[#E8B340]">Field notes</a></li>
              <li><a href="#tides" className="hover:text-[#E8B340]">Today&rsquo;s tides</a></li>
              <li><Link href="/menu" className="hover:text-[#E8B340]">Full menu</Link></li>
              <li><a href="#bar" className="hover:text-[#E8B340]">The bar</a></li>
              <li><a href="#visit" className="hover:text-[#E8B340]">Visit</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#E8B340] font-bold mb-3">
              Find us
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
              Old Buswang, Kalibo, Aklan<br />
              Open 10AM &mdash; 12MN, daily
            </p>
            <a href="tel:+639511306264" className="text-[#E8B340] hover:text-[#F4C455] text-sm font-semibold">
              0951 130 6264
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-6 border-t border-[#F4EDE0]/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-[#F4EDE0]/45">
          <span>Concept 03 — Coastal Almanac</span>
          <span>Set in Fraunces &amp; Space Grotesk · Issued from 11.7°N</span>
        </div>
      </footer>
    </main>
  );
}

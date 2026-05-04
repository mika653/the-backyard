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
  Flame,
  Fish,
  Beef,
  Wine,
  CalendarCheck,
} from "lucide-react";

const chapters = [
  { num: "I",   title: "The Catch",     body: "Talaba pulled from Aklan&rsquo;s waters at first light — shucked, steamed, kissed by lemon and chili." },
  { num: "II",  title: "The Fire",      body: "Charcoal that&rsquo;s old enough to know better. Tanigue, bangus, prawns, all painted with smoke." },
  { num: "III", title: "The Sizzle",    body: "Iron plates that arrive louder than the table. Pork sisig that snaps before it hushes the room." },
  { num: "IV",  title: "The Last Pour", body: "San Mig in glass that sweats. Rum that warms. Buko that finishes a long, humid night." },
];

const signatures = [
  { kicker: "Sharing board",  title: "The Bad Boy Platter", price: "1,399", note: "Grilled meats. Fresh seafood. Built for a serious table.", img: "/bad-boy-platter.jpg" },
  { kicker: "Sizzling iron",  title: "Pork Sinigang",       price: "319",   note: "Sour-soured broth, served until the plate stops singing.", img: "/sizzling-pork-sinigang.jpg" },
  { kicker: "Daily harvest",  title: "Steamed Talaba",      price: "249",   note: "Six on the half-shell. Calamansi, bird&rsquo;s-eye, vinegar.", img: "/booth.jpg" },
];

const menuTeaser = [
  { cat: "Seafood",   items: [["Seafood Platter", "1,299"], ["Grilled Tanigue", "299"], ["Lapu-Lapu Grilled", "449"], ["Mussels Marinara", "289"]] },
  { cat: "From the Grill", items: [["Crispy Pata", "399"], ["Grilled Bangus", "349"], ["BBQ Shrimp", "329"], ["Pork Sisig", "159"]] },
  { cat: "Pulutan",   items: [["Calamares", "269"], ["Chicken Wings", "199"], ["Lumpia Shanghai", "129"], ["Nachos", "149"]] },
  { cat: "Tagay",     items: [["San Miguel Beer", "65"], ["Margarita", "189"], ["Mango Shake", "129"], ["Buko Juice", "89"]] },
];

export default function Concept2() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      className="bg-[#14100D] text-[#E8DDC9] min-h-screen relative"
      style={{ fontFamily: "var(--font-nunito, sans-serif)" }}
    >
      <div className="pointer-events-none fixed inset-0 z-[60] opacity-[0.04] bg-noise" aria-hidden />

      {/* Pitch deck back-bar */}
      <div className="bg-[#0a0806] text-[#F0822A] text-xs flex items-center justify-between px-4 sm:px-6 py-2 sticky top-0 z-50 border-b border-[#F0822A]/20">
        <span className="uppercase tracking-[0.22em] font-bold" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
          ◆ Concept 02 — Charred Hearth
        </span>
        <Link href="/" className="flex items-center gap-1.5 text-[#E8DDC9]/60 hover:text-[#F0822A] transition-colors">
          <ArrowLeft size={12} /> Back to overview
        </Link>
      </div>

      {/* Nav */}
      <nav
        className={`sticky top-[33px] z-40 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#14100D]/92 backdrop-blur-xl border-[#F0822A]/15"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="#hero" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-sm overflow-hidden ring-1 ring-[#F0822A]/40">
              <img src="/logo.jpg" alt="The Backyard Place" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.32em] text-[#F0822A]" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                The Backyard
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#E8DDC9]/40">
                Est. MMXVI · Kalibo
              </div>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8DDC9]/70">
            <li><a href="#chapters" className="hover:text-[#F0822A]">Chapters</a></li>
            <li><a href="#signatures" className="hover:text-[#F0822A]">Signatures</a></li>
            <li><Link href="/menu" className="hover:text-[#F0822A]">Menu</Link></li>
            <li><a href="#barkada" className="hover:text-[#F0822A]">Barkada</a></li>
            <li><a href="#visit" className="hover:text-[#F0822A]">Visit</a></li>
          </ul>

          <a
            href="tel:+639511306264"
            className="hidden sm:inline-flex items-center gap-2 bg-[#F0822A] hover:bg-[#D26A47] text-[#14100D] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] transition-colors"
          >
            <Phone size={13} /> Reserve
          </a>
        </div>
      </nav>

      {/* Hero — editorial split */}
      <section id="hero" className="relative overflow-hidden border-b border-[#F0822A]/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_30%,rgba(240,130,42,0.16)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-12 gap-10 relative">
          {/* Marker */}
          <div className="lg:col-span-12 flex items-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-[120px] bg-[#F0822A]/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F0822A]" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
              Vol. 01 · Issue Mar &lsquo;26
            </span>
            <div className="h-px flex-1 bg-[#F0822A]/40" />
          </div>

          {/* Headline */}
          <div className="lg:col-span-7">
            <h1
              className="font-light tracking-[-0.025em] leading-[0.92] text-[64px] sm:text-[96px] lg:text-[136px]"
              style={{ fontFamily: "var(--font-fraunces, serif)" }}
            >
              <span className="block text-[#E8DDC9]">Smoke,</span>
              <span className="block italic text-[#F0822A]">salt,</span>
              <span className="block text-[#E8DDC9]">&amp; the long</span>
              <span className="block italic text-[#B85A3C]">Aklan night.</span>
            </h1>
          </div>

          {/* Side column */}
          <div className="lg:col-span-5 lg:pt-12 flex flex-col justify-between">
            <p
              className="text-lg sm:text-xl text-[#E8DDC9]/85 leading-[1.55] mb-9"
              style={{ fontFamily: "var(--font-fraunces, serif)" }}
            >
              A backyard grill bar in Old Buswang, Kalibo. Ten years in,
              still arguing with the charcoal — and still winning. <em className="not-italic font-semibold text-[#F0822A]">Fresh
              talaba, hand-cut platters, ice-cold pours.</em>
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 pb-10 border-b border-[#F0822A]/15">
              <div>
                <div className="text-3xl sm:text-4xl font-light text-[#F0822A]" style={{ fontFamily: "var(--font-fraunces, serif)" }}>10</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#E8DDC9]/45 mt-1">Years on the grill</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-light text-[#F0822A]" style={{ fontFamily: "var(--font-fraunces, serif)" }}>60+</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#E8DDC9]/45 mt-1">Dishes on the menu</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-light text-[#F0822A]" style={{ fontFamily: "var(--font-fraunces, serif)" }}>14</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#E8DDC9]/45 mt-1">Hours, daily</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-[#F0822A] hover:bg-[#D26A47] text-[#14100D] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.24em] transition-colors"
              >
                Read the menu <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+639511306264"
                className="inline-flex items-center gap-2 border border-[#F0822A]/40 hover:border-[#F0822A] text-[#F0822A] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.24em] transition-colors"
              >
                <Phone size={14} /> 0951 130 6264
              </a>
            </div>
          </div>
        </div>

        {/* Photo strip */}
        <div className="border-t border-[#F0822A]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#F0822A]/10">
              {[
                { img: "/bad-boy-platter.jpg",         caption: "The Bad Boy Platter",          tag: "01" },
                { img: "/sizzling-pork-sinigang.jpg",   caption: "Pork Sinigang on iron",        tag: "02" },
                { img: "/booth.jpg",                    caption: "Booths under tropical print",  tag: "03" },
                { img: "/rattan.jpg",                   caption: "Rattan, late night",            tag: "04" },
              ].map((p) => (
                <figure key={p.tag} className="relative aspect-[4/5] overflow-hidden bg-[#1C1814] group">
                  <img
                    src={p.img}
                    alt={p.caption}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[12%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/85 via-[#0a0806]/10 to-transparent" />
                  <figcaption className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[#F0822A] mb-1" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                      № {p.tag}
                    </div>
                    <div
                      className="text-[#E8DDC9] text-base leading-tight"
                      style={{ fontFamily: "var(--font-fraunces, serif)" }}
                    >
                      {p.caption}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-[#F0822A]/10 bg-[#1C1814]">
        <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Fish size={16} />,  label: "Fresh local talaba" },
            { icon: <Flame size={16} />, label: "Charcoal grilled, daily" },
            { icon: <Beef size={16} />,  label: "Hand-cut platters" },
            { icon: <Clock size={16} />, label: "Open 10AM – 12MN" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3 text-[#E8DDC9]/85">
              <div className="text-[#F0822A]">{t.icon}</div>
              <div className="text-sm font-medium">{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Chapters */}
      <section id="chapters" className="border-b border-[#F0822A]/10">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#F0822A] mb-3" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
              The Backyard, in chapters
            </div>
            <h2
              className="text-5xl sm:text-6xl font-light leading-[1.0] tracking-[-0.02em] text-[#E8DDC9]"
              style={{ fontFamily: "var(--font-fraunces, serif)" }}
            >
              An evening<br />
              <em className="italic font-light text-[#F0822A]">told in four</em><br />
              parts.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-px bg-[#F0822A]/10">
            {chapters.map((c) => (
              <article key={c.num} className="bg-[#14100D] hover:bg-[#1C1814] transition-colors p-7 grid sm:grid-cols-12 gap-5 items-start">
                <div className="sm:col-span-2">
                  <div className="text-5xl font-light text-[#F0822A] leading-none" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
                    {c.num}
                  </div>
                </div>
                <div className="sm:col-span-10">
                  <h3
                    className="text-2xl text-[#E8DDC9] mb-2"
                    style={{ fontFamily: "var(--font-fraunces, serif)" }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-[#E8DDC9]/70 text-base leading-relaxed max-w-2xl"
                    dangerouslySetInnerHTML={{ __html: c.body }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signatures — large editorial cards */}
      <section id="signatures" className="border-b border-[#F0822A]/10 bg-[#1C1814]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#F0822A] mb-3" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                ※ Signatures of the house
              </div>
              <h2
                className="text-5xl sm:text-6xl font-light leading-[1.0] tracking-[-0.02em] text-[#E8DDC9] max-w-2xl"
                style={{ fontFamily: "var(--font-fraunces, serif)" }}
              >
                Three plates that<br />
                <em className="italic text-[#F0822A]">do the heavy lifting.</em>
              </h2>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#F0822A] hover:text-[#D26A47]"
              style={{ fontFamily: "var(--font-dm-mono, monospace)" }}
            >
              All 60+ dishes <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F0822A]/10">
            {signatures.map((s) => (
              <article key={s.title} className="bg-[#14100D] flex flex-col">
                <figure className="aspect-[4/5] overflow-hidden bg-[#1C1814] relative">
                  <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100D]/30 to-transparent" />
                </figure>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-[#F0822A] mb-3" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                    {s.kicker}
                  </div>
                  <h3
                    className="text-3xl text-[#E8DDC9] mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-fraunces, serif)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#E8DDC9]/65 leading-relaxed mb-6 flex-1">
                    {s.note}
                  </p>
                  <div className="flex items-baseline justify-between border-t border-[#F0822A]/15 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#E8DDC9]/40" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                      Php
                    </span>
                    <span className="text-3xl text-[#F0822A] font-light" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
                      ₱{s.price}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Menu teaser */}
      <section className="border-b border-[#F0822A]/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#F0822A] mb-3" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                A taste of the bill
              </div>
              <h2
                className="text-5xl sm:text-6xl font-light leading-[1.0] tracking-[-0.02em] text-[#E8DDC9]"
                style={{ fontFamily: "var(--font-fraunces, serif)" }}
              >
                Sixty plates,<br />
                <em className="italic text-[#F0822A]">thirty pours,</em><br />
                one long table.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8 self-end">
              <p
                className="text-lg text-[#E8DDC9]/75 leading-[1.6]"
                style={{ fontFamily: "var(--font-fraunces, serif)" }}
              >
                Below is the short list — the working version of what
                regulars order without thinking. The full menu lives on its
                own page, with photos and the full price list.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F0822A]/10 border-y border-[#F0822A]/10">
            {menuTeaser.map((cat) => (
              <div key={cat.cat} className="bg-[#14100D] p-7">
                <div className="text-[10px] uppercase tracking-[0.32em] text-[#F0822A] mb-5" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                  {cat.cat}
                </div>
                <ul className="space-y-3">
                  {cat.items.map(([name, price]) => (
                    <li key={name} className="flex items-baseline gap-3 text-sm">
                      <span
                        className="text-[#E8DDC9] flex-1"
                        style={{ fontFamily: "var(--font-fraunces, serif)" }}
                      >
                        {name}
                      </span>
                      <span className="border-b border-dashed border-[#F0822A]/25 flex-shrink min-w-[12px] flex-1" />
                      <span className="text-[#F0822A] font-semibold tabular-nums" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                        {price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#F0822A] hover:bg-[#D26A47] text-[#14100D] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.24em] transition-colors"
            >
              Open the full menu <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Barkada — the big slab */}
      <section id="barkada" className="border-b border-[#F0822A]/10 bg-[#0a0806]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#F0822A] mb-3" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                Barkada Sets · For 4 to 15
              </div>
              <h2
                className="text-5xl sm:text-7xl font-light leading-[0.95] tracking-[-0.02em] text-[#E8DDC9]"
                style={{ fontFamily: "var(--font-fraunces, serif)" }}
              >
                Bring the<br />
                <em className="italic text-[#F0822A]">whole crew.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-3">
              <p
                className="text-lg text-[#E8DDC9]/75 leading-[1.6]"
                style={{ fontFamily: "var(--font-fraunces, serif)" }}
              >
                Pre-built spreads for birthdays, team dinners, big nights —
                priced flat, no surprises. <em className="text-[#F0822A] not-italic font-semibold">Call ahead so we can set it up
                right.</em>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F0822A]/10">
            {[
              { name: "Set I",   price: "1,449", pax: "4–5 pax", items: ["Whole Chicken Royale", "Seafood Pancit Canton", "Sweet & Sour Porkchop", "Rice & Iced Tea"] },
              { name: "Set II",  price: "2,299", pax: "6–7 pax", items: ["Signature Ribs", "Crispy Pancit Canton", "Whole Chicken Royale", "Lumpia Shanghai & Rice"] },
              { name: "Set III", price: "3,599", pax: "9–10 pax", items: ["Seafood Platter", "All Meat Platter", "2 Paco Fern Salad", "2 Steamed Talaba & Rice"] },
              { name: "Set IV",  price: "6,399", pax: "10–15 pax", items: ["2 Beef Kansi · 2 Pork Sisig", "2 Crispy Fried Chicken", "2 Calamares · 2 Salad", "2 Crispy Pata · 2 Rice"] },
            ].map((s) => (
              <div key={s.name} className="bg-[#14100D] p-7 flex flex-col">
                <div className="flex items-baseline justify-between mb-5">
                  <span
                    className="text-2xl text-[#E8DDC9]"
                    style={{ fontFamily: "var(--font-fraunces, serif)" }}
                  >
                    {s.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#E8DDC9]/40" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                    {s.pax}
                  </span>
                </div>
                <div className="text-5xl font-light text-[#F0822A] leading-none mb-6" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
                  ₱{s.price}
                </div>
                <ul className="space-y-2 mt-auto">
                  {s.items.map((it) => (
                    <li key={it} className="text-sm text-[#E8DDC9]/65 flex gap-2">
                      <span className="text-[#F0822A] mt-1 text-[10px]">◆</span>
                      <span style={{ fontFamily: "var(--font-fraunces, serif)" }}>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / pull quote */}
      <section id="visit" className="border-b border-[#F0822A]/10">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <blockquote
              className="text-3xl sm:text-5xl font-light leading-[1.1] tracking-[-0.01em] text-[#E8DDC9] mb-10"
              style={{ fontFamily: "var(--font-fraunces, serif)" }}
            >
              <span className="text-[#F0822A] text-6xl leading-none mr-2">&ldquo;</span>
              The kind of place where the talaba is fresh, the grill stays
              loud, and nobody hurries you out.
              <span className="text-[#F0822A] text-6xl leading-none ml-1">&rdquo;</span>
            </blockquote>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#F0822A]/15">
              <div>
                <div className="flex items-center gap-2 text-[#F0822A] text-[10px] uppercase tracking-[0.28em] mb-2" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                  <MapPin size={12} /> Found at
                </div>
                <div className="text-[#E8DDC9] font-semibold leading-snug" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
                  Old Buswang<br />Kalibo, Aklan
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[#F0822A] text-[10px] uppercase tracking-[0.28em] mb-2" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                  <Clock size={12} /> Open
                </div>
                <div className="text-[#E8DDC9] font-semibold leading-snug" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
                  Daily<br />10AM &mdash; 12MN
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[#F0822A] text-[10px] uppercase tracking-[0.28em] mb-2" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                  <Phone size={12} /> Ring
                </div>
                <div className="text-[#E8DDC9] font-semibold leading-snug" style={{ fontFamily: "var(--font-fraunces, serif)" }}>
                  0951 130<br />6264
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] bg-[#1C1814] relative overflow-hidden">
              <img src="/dining.jpg" alt="The Backyard Place dining area" className="w-full h-full object-cover grayscale-[20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100D]/70 via-transparent to-transparent" />
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.32em] text-[#F0822A]" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                  ◆ Vol. 01
                </span>
                <span className="text-[10px] uppercase tracking-[0.32em] text-[#E8DDC9]/60" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                  pg. 11
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] uppercase tracking-[0.32em] text-[#F0822A] mb-1" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
                  ※ The dining room
                </div>
                <div
                  className="text-[#E8DDC9] text-2xl leading-tight"
                  style={{ fontFamily: "var(--font-fraunces, serif)" }}
                >
                  Long tables, low light, and the kind of plates that <em className="text-[#F0822A]">arrive sizzling.</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F0822A] text-[#14100D]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] mb-5" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
            ◆ Reservations open every day
          </div>
          <h2
            className="text-5xl sm:text-7xl font-light leading-[1.0] tracking-[-0.02em] mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-fraunces, serif)" }}
          >
            Save the table.<br />
            <em className="italic">We&rsquo;ll keep the fire honest.</em>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+639511306264"
              className="inline-flex items-center gap-2 bg-[#14100D] hover:bg-[#0a0806] text-[#F0822A] px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] transition-colors"
            >
              <CalendarCheck size={15} /> Reserve via Phone
            </a>
            <a
              href="https://m.me/backyardkalibo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#14100D] hover:bg-[#14100D]/10 text-[#14100D] px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] transition-colors"
            >
              <Wine size={15} /> Message us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0806] text-[#E8DDC9]/60 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.22em]" style={{ fontFamily: "var(--font-dm-mono, monospace)" }}>
          <div>© {new Date().getFullYear()} The Backyard Place · Concept 02 — Charred Hearth</div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#F0822A]">All concepts</Link>
            <Link href="/proposal" className="hover:text-[#F0822A]">Proposal</Link>
            <Link href="/menu" className="hover:text-[#F0822A]">Menu</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

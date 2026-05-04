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
  ChevronDown,
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

const groupSets = [
  { name: "Set 1", price: "₱1,449", pax: "Good for 4–5 pax", items: ["Whole Chicken Royale", "Seafood Pancit Canton", "Sweet & Sour Porkchop", "Plain Rice & Iced Tea"] },
  { name: "Set 2", price: "₱2,299", pax: "Good for 6–7 pax", items: ["Signature Ribs", "Crispy Pancit Canton", "Whole Chicken Royale", "Lumpia Shanghai & Rice"] },
  { name: "Set 3", price: "₱6,399", pax: "Good for 10–15 pax", items: ["2 Beef Kansi & 2 Pork Sisig", "2 Crispy Fried Chicken", "2 Paco Fern Salad & 2 Calamares", "2 Crispy Pata & 2 Platter Rice"] },
  { name: "Set 4", price: "₱3,599", pax: "Good for 9–10 pax", items: ["Seafood Platter", "All Meat Platter", "2 Paco Fern Salad", "2 Steamed Talaba & Rice"] },
];

const drinkTiles = [
  { tone: "amber",  title: "Cocktails",          from: "from ₱139", body: "Tropical mixes, local favorites, and house specials to kick off the night." },
  { tone: "ocean",  title: "Fruit Shakes",       from: "from ₱129", body: "Thick, cold, and made from fresh fruit. Perfect with grilled fish." },
  { tone: "coral",  title: "Fresh Juices",       from: "from ₱75",  body: "Buko, dalandan, calamansi — straight from the source, no shortcuts." },
  { tone: "bark",   title: "Beer & Hard Drinks", from: "from ₱65",  body: "Cold bottles, spirits, and all the classics for a proper tagay session." },
];

const topPicks = [
  { name: "Seafood Platter", price: "₱1,299", tag: "Best Seller" },
  { name: "Steamed Talaba",  price: "₱249",   tag: "Must Try" },
  { name: "Grilled Tanigue", price: "₱299",   tag: null },
];

const moreFavs = [
  { name: "Pork Sisig",        price: "₱159", tag: null },
  { name: "Crispy Pata",       price: "₱399", tag: null },
  { name: "Special Halo-Halo", price: "₱179", tag: null },
];

function toneStyles(tone: string) {
  switch (tone) {
    case "amber": return { bg: "#ffb868", text: "#1f0f09",  sub: "rgba(31,15,9,0.65)" };
    case "ocean": return { bg: "#7dd5d9", text: "#1f0f09",  sub: "rgba(31,15,9,0.65)" };
    case "coral": return { bg: "#E8623A", text: "#FFF8F0",  sub: "rgba(255,248,240,0.78)" };
    case "bark":  return { bg: "#3D2B1F", text: "#FFF8F0",  sub: "rgba(255,248,240,0.7)" };
    default:      return { bg: "#FFF0D6", text: "#3D2B1F",  sub: "rgba(61,43,31,0.65)" };
  }
}

export default function Concept1() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      className="bg-[#FFF8F0] text-[#3D2B1F] min-h-screen relative overflow-x-hidden"
      style={{ fontFamily: "var(--font-nunito, sans-serif)" }}
    >
      {/* Subtle grain */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.018] bg-noise"
        aria-hidden
      />

      {/* Pitch deck back-bar */}
      <div className="bg-[#1f0f09] text-[#FFF8F0] text-xs flex items-center justify-between px-4 sm:px-6 py-2 sticky top-0 z-50">
        <span className="uppercase tracking-[0.2em] text-[#ffd699] font-bold">
          Concept 1 — Tropical Rustic
        </span>
        <Link href="/" className="flex items-center gap-1.5 hover:text-[#ffb868] transition-colors">
          <ArrowLeft size={12} /> Back to overview
        </Link>
      </div>

      {/* Nav */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "top-[33px] sm:top-[33px] bg-[#1f0f09]/80 backdrop-blur-xl py-2.5"
            : "top-[33px] sm:top-[33px] py-3.5"
        }`}
        style={{ paddingLeft: 20, paddingRight: 20 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5">
            <img
              src="/logo.jpg"
              alt="The Backyard Place"
              className="h-9 w-9 rounded-md object-cover"
            />
            <span
              className="hidden sm:inline text-sm font-bold text-[#FFF8F0] tracking-wide"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              THE BACKYARD <span className="text-[#ffb868]">PLACE</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#FFF8F0]/80">
            <li><a href="#identity" className="hover:text-[#ffd699]">About</a></li>
            <li><Link href="/menu" className="hover:text-[#ffd699]">Menu</Link></li>
            <li><a href="#drinks" className="hover:text-[#ffd699]">Drinks</a></li>
            <li><a href="#groups" className="hover:text-[#ffd699]">Groups</a></li>
            <li><a href="#visit" className="hover:text-[#ffd699]">Visit</a></li>
            <li>
              <a
                href="tel:+639511306264"
                className="bg-[#ffb868] text-[#1f0f09] px-4 py-1.5 rounded-full hover:bg-[#ffd699] transition-colors normal-case tracking-normal"
              >
                Reserve
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-[88vh] flex items-center justify-center text-center pt-32 pb-20 px-5 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(255,184,104,0.18), transparent 50%), radial-gradient(circle at 80% 30%, rgba(125,213,217,0.16), transparent 50%), linear-gradient(180deg, #1f0f09 0%, #2a1810 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10 text-[#FFF8F0]">
          <img
            src="/logo.jpg"
            alt="The Backyard Place"
            className="h-24 w-24 sm:h-28 sm:w-28 mx-auto rounded-full ring-4 ring-[#ffb868]/40 shadow-2xl shadow-black/40 mb-7"
          />
          <span className="inline-flex items-center gap-2 bg-[#ffb868]/15 border border-[#ffb868]/30 text-[#ffd699] text-[11px] font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full mb-7">
            Fresh Seafood · Live Grill · Cold Drinks
          </span>
          <h1
            className="font-extrabold tracking-tight leading-[1.04] text-5xl sm:text-7xl lg:text-[88px] mb-6"
            style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
          >
            Kalibo&rsquo;s Favorite
            <br />
            <span className="text-[#ffb868]">Seafood Grill Bar</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-[#FFF8F0]/80 max-w-2xl mx-auto mb-9 italic"
            style={{ fontFamily: "var(--font-nunito, sans-serif)" }}
          >
            Tropical platters, sizzling sisig, ice-cold San Mig. Old Buswang,
            Kalibo — your go-to grill bar since 2016.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#ffb868] hover:bg-[#ffd699] text-[#1f0f09] px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-[0.12em] transition-colors"
            >
              See Our Menu <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+639511306264"
              className="inline-flex items-center gap-2 border-2 border-[#FFF8F0]/30 hover:border-[#ffb868] text-[#FFF8F0] hover:text-[#ffb868] px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-[0.12em] transition-colors"
            >
              <Phone size={16} /> Call to Reserve
            </a>
          </div>
          <div className="mt-14 inline-flex flex-col items-center gap-1.5 text-[11px] uppercase tracking-[0.32em] text-[#FFF8F0]/45">
            <span>Scroll</span>
            <ChevronDown size={14} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-[#3D2B1F] text-[#ffb868] overflow-hidden border-y border-[#ffb868]/15">
        <div className="flex whitespace-nowrap py-4 by-marquee">
          {Array.from({ length: 2 }).map((_, group) => (
            <div key={group} className="flex items-center gap-6 pr-6 text-sm font-semibold uppercase tracking-[0.18em]">
              {[
                "Fresh Catch",
                "Live Grill",
                "Cold Drinks",
                "Good Vibes",
                "Talaba Nights",
                "Kalibo, Aklan",
                "Since 2016",
              ].map((t, i) => (
                <span key={`${group}-${i}`} className="inline-flex items-center gap-6">
                  <span>{t}</span>
                  <span className="text-[#ffb868]/50">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Identity / Bento grid */}
      <section id="identity" className="relative px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="block text-[11px] font-bold tracking-[0.32em] uppercase text-[#E8623A] mb-3"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              What We&rsquo;re Known For
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              The Backyard <span className="hand-underline">Experience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[260px]">
            {/* Talaba */}
            <div className="rounded-2xl bg-[#7dd5d9] text-[#1f0f09] p-7 lg:col-span-2 row-span-1 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#1f0f09] text-[#7dd5d9] px-2.5 py-1 rounded-full">
                Fresh Catch
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                Freshly Shucked Talaba
              </h3>
              <p className="text-[15px] text-[#1f0f09]/80 leading-relaxed max-w-md">
                Steamed, baked, or raw — our oysters come straight from
                Aklan&rsquo;s waters. The real deal, every time.
              </p>
            </div>

            {/* Grill */}
            <div className="rounded-2xl bg-[#FFF0D6] p-7 row-span-1 flex flex-col justify-end relative overflow-hidden">
              <span className="caveat absolute top-6 right-6 text-3xl text-[#E8623A]" style={{ fontFamily: "var(--font-caveat, cursive)" }}>
                yum!
              </span>
              <h3 className="text-2xl font-bold mb-2 text-[#3D2B1F]" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                Grilled Over Charcoal
              </h3>
              <p className="text-sm text-[#3D2B1F]/75 leading-relaxed">
                Tanigue, bangus, prawns — every catch kissed by real flame. No
                shortcuts, just smoke and flavor.
              </p>
            </div>

            {/* Photo booth */}
            <div className="rounded-2xl overflow-hidden relative row-span-1 group">
              <img
                src="/booth.jpg"
                alt="Interior booth with tropical wallpaper"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f0f09]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-[#FFF8F0]">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#ffb868] font-bold mb-1">
                  Tropical ambiance
                </div>
                <div className="font-bold text-lg" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                  Open-Air Dining
                </div>
              </div>
            </div>

            {/* Sizzling */}
            <div className="rounded-2xl bg-[#ffb868] p-7 lg:col-span-2 row-span-1 flex flex-col justify-end relative overflow-hidden">
              <span className="caveat absolute top-6 right-7 text-4xl text-[#1f0f09] -rotate-6" style={{ fontFamily: "var(--font-caveat, cursive)" }}>
                tssss!
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#1f0f09]" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                Sizzling Platters
              </h3>
              <p className="text-[15px] text-[#1f0f09]/80 leading-relaxed max-w-md">
                From sisig to sinigang — served piping hot on iron plates.
                You&rsquo;ll hear it before you see it.
              </p>
            </div>

            {/* Photo rattan */}
            <div className="rounded-2xl overflow-hidden relative row-span-1 group lg:col-span-2">
              <img
                src="/rattan.jpg"
                alt="Rattan pendant lamps over dining tables"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f0f09]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-[#FFF8F0]">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#ffb868] font-bold mb-1">
                  Warm Nights, Cold Beers
                </div>
                <div className="font-bold text-xl" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                  The kind of place you don&rsquo;t want to leave
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section id="signature" className="px-5 sm:px-8 py-20 sm:py-28 bg-[#FFF0D6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="block text-[20px] mb-1 text-[#E8623A]"
              style={{ fontFamily: "var(--font-caveat, cursive)" }}
            >
              Mga Paborito
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-3"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              What to <span className="hand-underline">Order</span>
            </h2>
            <p className="text-[#3D2B1F]/70 text-lg max-w-xl mx-auto italic">
              Tara, kain tayo. Here&rsquo;s what keeps people coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Bad Boy Platter feature */}
            <div className="lg:col-span-7 bg-[#1f0f09] text-[#FFF8F0] rounded-3xl overflow-hidden relative">
              <img
                src="/bad-boy-platter.jpg"
                alt="The Bad Boy Platter — signature seafood and meat sharing board"
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="p-7 sm:p-10">
                <span className="inline-block bg-[#E8623A] text-[#FFF8F0] text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-4">
                  Best Seller
                </span>
                <h3
                  className="text-3xl sm:text-4xl font-bold mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                >
                  The Bad Boy Platter
                </h3>
                <p className="text-[#FFF8F0]/75 leading-relaxed mb-5 max-w-lg">
                  The ultimate barkada sharing board — loaded with grilled
                  meats, fresh seafood, and all the good stuff in one massive
                  spread. Built for the table that&rsquo;s serious about
                  eating.
                </p>
                <div
                  className="text-4xl font-bold text-[#ffb868]"
                  style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                >
                  ₱1,399
                </div>
              </div>
            </div>

            {/* Sizzling photo */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-5">
              <div className="rounded-3xl overflow-hidden relative bg-[#1f0f09]">
                <img
                  src="/sizzling-pork-sinigang.jpg"
                  alt="Sizzling pork sinigang"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#1f0f09]/80 backdrop-blur text-[#ffb868] text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-[#ffb868]/30">
                  Sizzling Hot
                </div>
              </div>

              <div className="bg-[#FFF8F0] rounded-3xl p-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8623A] mb-3">
                  Top Picks
                </div>
                <ul className="space-y-3">
                  {topPicks.map((d) => (
                    <li key={d.name} className="flex items-baseline justify-between gap-3 pb-3 border-b border-[#3D2B1F]/8 last:border-0 last:pb-0">
                      <div>
                        <span className="font-semibold" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                          {d.name}
                        </span>
                        {d.tag && (
                          <span className="ml-2 text-[9px] uppercase tracking-[0.18em] text-[#E8623A] font-bold">
                            {d.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-[#ffb868] font-bold" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                        {d.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* More favs + CTA */}
            <div className="lg:col-span-7 bg-[#FFF8F0] rounded-3xl p-7">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8623A] mb-4">
                More Favorites
              </div>
              <ul className="grid sm:grid-cols-3 gap-4">
                {moreFavs.map((d) => (
                  <li key={d.name} className="bg-[#FFF0D6] rounded-xl p-4 flex flex-col">
                    <span className="font-semibold mb-1" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                      {d.name}
                    </span>
                    <span className="text-[#ffb868] font-bold mt-auto" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                      {d.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#ffb868] to-[#E8623A] text-[#1f0f09] rounded-3xl p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                  And so much more&hellip;
                </h3>
                <p className="text-sm text-[#1f0f09]/80 leading-relaxed mb-3">
                  60+ dishes on the menu. Seafood, grilled favorites, sizzlers,
                  pasta, rice meals, and desserts — it&rsquo;s all there.
                </p>
              </div>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-[#1f0f09] hover:bg-[#3D2B1F] text-[#ffb868] px-5 py-3 rounded-full text-sm font-bold uppercase tracking-[0.14em] transition-colors w-fit"
              >
                View Full Menu <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Drinks */}
      <section id="drinks" className="px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="block text-[22px] mb-1 text-[#E8623A]"
              style={{ fontFamily: "var(--font-caveat, cursive)" }}
            >
              Tagay!
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-3"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              Tropical <span className="hand-underline">Sips</span>
            </h2>
            <p className="text-[#3D2B1F]/70 text-lg max-w-2xl mx-auto">
              Cold bottles, fresh blends, and cocktails made for humid nights.
              Whether it&rsquo;s San Mig or something fruity — we&rsquo;ve got
              your pair.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {drinkTiles.map((d) => {
              const s = toneStyles(d.tone);
              return (
                <div
                  key={d.title}
                  className="rounded-3xl p-7 flex flex-col justify-between min-h-[240px]"
                  style={{ background: s.bg, color: s.text }}
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: s.sub }}>
                    {d.from}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                      {d.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: s.sub }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Group Meals */}
      <section id="groups" className="px-5 sm:px-8 py-20 sm:py-28 bg-[#3D2B1F] text-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="block text-[11px] font-bold tracking-[0.32em] uppercase text-[#ffb868] mb-3"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              Barkada Deals
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-3"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              Group <span className="hand-underline">Meals</span>
            </h2>
            <p className="text-[#FFF8F0]/70 text-lg max-w-2xl mx-auto">
              Coming in big? We&rsquo;ve got sets for the whole crew. More
              food, less hassle, better night.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {groupSets.map((g) => (
              <div
                key={g.name}
                className="bg-[#FFF8F0] text-[#3D2B1F] rounded-3xl p-6 flex flex-col"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E8623A] mb-2">
                  {g.name}
                </div>
                <div
                  className="text-3xl font-bold text-[#ffb868] mb-1"
                  style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                >
                  {g.price}
                </div>
                <div className="text-sm text-[#3D2B1F]/65 mb-4 italic">{g.pax}</div>
                <ul className="space-y-2 mt-auto">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-[#3D2B1F]/85 flex gap-2">
                      <span className="text-[#E8623A]">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#FFF8F0]/8 border border-[#ffb868]/25 rounded-3xl p-7 text-center">
            <p className="text-[#FFF8F0]/85 mb-4">
              Planning a big celebration? Call ahead so we can set it up right.
            </p>
            <a
              href="tel:+639511306264"
              className="inline-flex items-center gap-2 bg-[#ffb868] hover:bg-[#ffd699] text-[#1f0f09] px-6 py-3 rounded-full text-sm font-bold tracking-[0.06em]"
            >
              <Phone size={15} /> 0951 130 6264
            </a>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden relative min-h-[420px]">
            <img src="/dining.jpg" alt="The Backyard Place wide dining area interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f0f09]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-[#1f0f09]/80 backdrop-blur text-[#ffb868] text-xs font-bold uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-[#ffb868]/30">
              Kalibo&rsquo;s #1 Grill Bar
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FFF0D6] rounded-3xl p-8 sm:p-10 flex flex-col">
            <span
              className="block text-[11px] font-bold tracking-[0.32em] uppercase text-[#E8623A] mb-3"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              Find Us
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-[1.05] mb-4"
              style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
            >
              Visit Us
            </h2>
            <p className="text-[#3D2B1F]/75 text-base mb-7 max-w-md">
              Pull up, find a table, and let the night do its thing.
              We&rsquo;re easy to find and hard to leave.
            </p>

            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ffb868] text-[#1f0f09] flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D2B1F]/55 mb-0.5">
                    Location
                  </div>
                  <div className="font-semibold" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                    Old Buswang, Kalibo, Aklan
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ffb868] text-[#1f0f09] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D2B1F]/55 mb-0.5">
                    Phone
                  </div>
                  <a href="tel:+639511306264" className="font-semibold hover:text-[#E8623A]" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                    0951 130 6264
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ffb868] text-[#1f0f09] flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D2B1F]/55 mb-0.5">
                    Hours
                  </div>
                  <div className="font-semibold" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                    Daily 10:00 AM &ndash; 12:00 MN
                  </div>
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="tel:+639511306264"
                className="inline-flex items-center gap-2 bg-[#1f0f09] hover:bg-[#3D2B1F] text-[#ffb868] px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-[0.12em]"
              >
                <Phone size={14} /> Call Now
              </a>
              <a
                href="https://facebook.com/backyardkalibo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#3D2B1F]/15 hover:border-[#E8623A] text-[#3D2B1F] hover:text-[#E8623A] px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-[0.12em] transition-colors"
              >
                <Facebook size={14} /> Follow on Facebook
              </a>
            </div>

            <div className="text-sm text-[#3D2B1F]/70 italic">
              ★★★★★ Kalibo&rsquo;s #1 rated grill bar on Facebook
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f0f09] text-[#FFF8F0]/80 px-5 sm:px-8 pt-16 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-12 gap-10 mb-10">
            <div className="sm:col-span-5">
              <img src="/logo.jpg" alt="The Backyard Place" className="h-14 w-14 rounded-md mb-4" />
              <div className="text-xl font-bold text-[#FFF8F0]" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                The Backyard Place
              </div>
              <div className="text-sm text-[#FFF8F0]/55 mt-1">
                Fresh Seafood. Live Grill. Cold Drinks.
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffb868] mb-3">
                Explore
              </div>
              <ul className="space-y-2 text-sm">
                <li><a href="#identity" className="hover:text-[#ffb868]">About</a></li>
                <li><Link href="/menu" className="hover:text-[#ffb868]">Menu</Link></li>
                <li><a href="#drinks" className="hover:text-[#ffb868]">Drinks</a></li>
                <li><a href="#groups" className="hover:text-[#ffb868]">Groups</a></li>
                <li><a href="#visit" className="hover:text-[#ffb868]">Visit</a></li>
              </ul>
            </div>
            <div className="sm:col-span-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffb868] mb-3">
                Follow
              </div>
              <div className="flex gap-3">
                <a href="https://facebook.com/backyardkalibo" className="w-10 h-10 rounded-full border border-[#FFF8F0]/15 hover:border-[#ffb868] hover:text-[#ffb868] flex items-center justify-center"><Facebook size={16} /></a>
                <a href="https://instagram.com/backyardkalibo" className="w-10 h-10 rounded-full border border-[#FFF8F0]/15 hover:border-[#ffb868] hover:text-[#ffb868] flex items-center justify-center"><Instagram size={16} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#FFF8F0]/8 pt-6 text-xs text-[#FFF8F0]/45 flex flex-col sm:flex-row justify-between gap-2">
            <div>Old Buswang, Kalibo, Aklan · 0951 130 6264 · Open Daily 10AM&ndash;12MN</div>
            <div>© {new Date().getFullYear()} The Backyard Place. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

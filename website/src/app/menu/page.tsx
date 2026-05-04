"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Phone, Search, ChevronUp } from "lucide-react";

type Item = { name: string; price: string; tag?: string };
type Category = { id: string; label: string; items: Item[] };

const categories: Category[] = [
  {
    id: "signatures",
    label: "Signatures",
    items: [
      { name: "Seafood Platter",   price: "1,299", tag: "Best Seller" },
      { name: "Steamed Talaba",     price: "249",   tag: "Must Try" },
      { name: "Grilled Tanigue",    price: "299" },
      { name: "Pork Sisig",         price: "159" },
      { name: "Crispy Pata",        price: "399" },
      { name: "Special Halo-Halo",  price: "179" },
      { name: "The Bad Boy Platter", price: "1,399", tag: "House Special" },
    ],
  },
  {
    id: "shrimp",
    label: "Shrimp",
    items: [
      { name: "Butter Garlic Shrimp",  price: "349" },
      { name: "Crispy Calamares",       price: "269" },
      { name: "BBQ Shrimp",             price: "329" },
      { name: "Shrimp Tempura",         price: "299" },
      { name: "Garlic Shrimp Spaghetti", price: "289" },
      { name: "Lemon Butter Shrimp",    price: "349" },
      { name: "Shrimp Sisig",           price: "319" },
      { name: "Shrimp Satay",           price: "289" },
      { name: "Grilled Shrimp",         price: "349" },
    ],
  },
  {
    id: "fish",
    label: "Fish",
    items: [
      { name: "Grilled Bangus",      price: "349" },
      { name: "Crispy Tilapia",      price: "269" },
      { name: "Steamed Fish",        price: "299" },
      { name: "Grilled Tanigue",     price: "299" },
      { name: "Crispy Fish Fillet",  price: "249" },
      { name: "Fish Sinigang",       price: "319" },
      { name: "Lapu-Lapu Grilled",   price: "449" },
      { name: "Pompano Fish",        price: "389" },
      { name: "Milkfish Sinigang",   price: "299" },
      { name: "Grilled Grouper",     price: "389" },
      { name: "Fish Curry",          price: "349" },
      { name: "Breaded Fish Fillet", price: "269" },
      { name: "Salt-Crusted Fish",   price: "399" },
      { name: "Fish in Banana Leaf", price: "329" },
      { name: "Grilled Mackerel",    price: "249" },
      { name: "Pan-Fried Fish",      price: "289" },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    items: [
      { name: "Mixed Seafood Platter",  price: "549" },
      { name: "Clams in Garlic Sauce",  price: "349" },
      { name: "Mussels Marinara",       price: "289" },
    ],
  },
  {
    id: "noodles",
    label: "Noodles",
    items: [
      { name: "Pancit Canton Stir-Fried", price: "119" },
      { name: "Seafood Pancit Canton",     price: "199" },
      { name: "Spaghetti Aglio Olio",      price: "139" },
      { name: "Meat Spaghetti",            price: "169" },
      { name: "Carbonara",                 price: "159" },
      { name: "Pesto Pasta",               price: "149" },
      { name: "Lomi",                      price: "99" },
      { name: "Kare-Kare",                 price: "129" },
      { name: "Chow Mein",                 price: "119" },
      { name: "Seafood Noodle Soup",       price: "189" },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    items: [
      { name: "Chicken Wings",      price: "199" },
      { name: "Nachos with Cheese", price: "149" },
      { name: "French Fries",       price: "89"  },
      { name: "Fried Lumpia",       price: "129" },
      { name: "Fried Squid Rings",  price: "169" },
      { name: "Breaded Mushroom",   price: "109" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      { name: "Fettuccine Alfredo",      price: "179" },
      { name: "Creamy Mushroom Pasta",   price: "159" },
      { name: "Seafood Linguine",        price: "229" },
      { name: "Garlic Oil Pasta",        price: "129" },
      { name: "Tomato Basil Pasta",      price: "139" },
    ],
  },
  {
    id: "student-meals",
    label: "Student Meals",
    items: [
      { name: "Chicken & Rice",        price: "89" },
      { name: "Pork Adobo with Rice",  price: "79" },
      { name: "Beef Tapa with Rice",   price: "99" },
      { name: "Fish Fillet with Rice", price: "89" },
      { name: "Egg & Rice",            price: "59" },
      { name: "Vegetable & Rice",      price: "69" },
      { name: "Noodle Soup",           price: "79" },
    ],
  },
  {
    id: "rice",
    label: "Rice",
    items: [
      { name: "Garlic Rice",          price: "49" },
      { name: "Fried Rice",           price: "99" },
      { name: "Butter Rice",          price: "59" },
      { name: "Plain Rice",           price: "29" },
      { name: "Mixed Vegetable Rice", price: "79" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Halo-Halo",             price: "149" },
      { name: "Leche Flan",            price: "79"  },
      { name: "Ube Cake",              price: "99"  },
      { name: "Chocolate Mousse",      price: "89"  },
      { name: "Mango Tart",            price: "119" },
      { name: "Coconut Crème Brûlée",  price: "109" },
      { name: "Ice Cream Sundae",      price: "129" },
      { name: "Banana Split",          price: "139" },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    items: [
      { name: "Margarita",         price: "189" },
      { name: "Piña Colada",        price: "169" },
      { name: "Mojito",             price: "159" },
      { name: "Daiquiri",           price: "139" },
      { name: "Mai Tai",            price: "179" },
      { name: "Long Island Iced Tea", price: "229" },
      { name: "Cosmopolitan",       price: "169" },
      { name: "Sangria",            price: "149" },
      { name: "Tequila Sunrise",    price: "159" },
      { name: "Blue Lagoon",        price: "179" },
    ],
  },
  {
    id: "wine",
    label: "Wine",
    items: [
      { name: "Red Wine (per glass)",        price: "189" },
      { name: "White Wine (per glass)",      price: "169" },
      { name: "Rosé Wine (per glass)",       price: "149" },
      { name: "Sparkling Wine (per bottle)", price: "899" },
      { name: "Port Wine",                   price: "189" },
      { name: "Dessert Wine",                price: "159" },
    ],
  },
  {
    id: "shakes",
    label: "Fruit Shakes",
    items: [
      { name: "Mango Shake",      price: "129" },
      { name: "Banana Shake",     price: "119" },
      { name: "Strawberry Shake", price: "139" },
      { name: "Avocado Shake",    price: "149" },
      { name: "Calamansi Shake",  price: "129" },
      { name: "Pineapple Shake",  price: "119" },
      { name: "Mixed Fruit Shake", price: "159" },
      { name: "Papaya Shake",     price: "129" },
      { name: "Coconut Shake",    price: "139" },
      { name: "Orange Shake",     price: "119" },
      { name: "Guava Shake",      price: "129" },
      { name: "Watermelon Shake", price: "119" },
    ],
  },
  {
    id: "signature-shakes",
    label: "Signature Shakes & Hard Drinks",
    items: [
      { name: "Signature Backyard Shake",  price: "189", tag: "House" },
      { name: "Tropical Paradise Shake",   price: "179" },
      { name: "Rum & Coke",                price: "149" },
      { name: "Whiskey Soda",              price: "169" },
      { name: "Vodka Mix",                 price: "159" },
      { name: "Beer Shandy",               price: "139" },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "San Miguel Beer",   price: "65" },
      { name: "San Miguel Light",  price: "59" },
      { name: "Sprite",            price: "49" },
      { name: "Coca-Cola",         price: "49" },
      { name: "Royal",             price: "45" },
      { name: "Juice Box",         price: "39" },
      { name: "Bottled Water",     price: "29" },
      { name: "Iced Tea",          price: "39" },
      { name: "Lemonade",          price: "49" },
      { name: "Ginger Ale",        price: "45" },
    ],
  },
  {
    id: "hot",
    label: "Hot Beverages",
    items: [
      { name: "Coffee",         price: "59" },
      { name: "Hot Chocolate",  price: "69" },
      { name: "Chamomile Tea",  price: "49" },
    ],
  },
  {
    id: "juices",
    label: "Fresh Fruit Juices",
    items: [
      { name: "Orange Juice",     price: "79" },
      { name: "Lemon Juice",      price: "75" },
      { name: "Pineapple Juice",  price: "79" },
      { name: "Watermelon Juice", price: "89" },
      { name: "Papaya Juice",     price: "79" },
      { name: "Guava Juice",      price: "79" },
      { name: "Mixed Fruit Juice", price: "99" },
    ],
  },
];

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return categories;
    const q = query.toLowerCase();
    return categories
      .map((c) => ({ ...c, items: c.items.filter((i) => i.name.toLowerCase().includes(q)) }))
      .filter((c) => c.items.length > 0);
  }, [query]);

  return (
    <main
      className="bg-[#FFF8F0] text-[#3D2B1F] min-h-screen relative"
      style={{ fontFamily: "var(--font-nunito, sans-serif)" }}
    >
      <div className="pointer-events-none fixed inset-0 z-[60] opacity-[0.018] bg-noise" aria-hidden />

      {/* Pitch deck back-bar */}
      <div className="bg-[#1f0f09] text-[#FFF8F0] text-xs flex items-center justify-between px-4 sm:px-6 py-2 sticky top-0 z-50">
        <span className="uppercase tracking-[0.2em] text-[#ffd699] font-bold">
          Menu — The Backyard Place
        </span>
        <Link href="/" className="flex items-center gap-1.5 hover:text-[#ffb868] transition-colors">
          <ArrowLeft size={12} /> Back to overview
        </Link>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-br from-[#1f0f09] via-[#2a1810] to-[#3D2B1F] text-[#FFF8F0] pt-12 pb-12 px-5 sm:px-8 border-b border-[#ffb868]/15">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-7">
            <img src="/logo.jpg" alt="The Backyard Place" className="h-14 w-14 rounded-md ring-2 ring-[#ffb868]/40" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-[#ffb868] font-bold">
                Old Buswang, Kalibo
              </div>
              <div className="text-base font-bold" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                The Backyard Place
              </div>
            </div>
          </div>
          <h1
            className="text-5xl sm:text-7xl font-extrabold leading-[1.0] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
          >
            Our <span className="text-[#ffb868]">Menu</span>
          </h1>
          <p className="text-[#FFF8F0]/75 text-lg max-w-2xl mb-6">
            Fresh seafood, sizzling platters, ice-cold drinks. 60+ dishes,
            served daily 10AM &mdash; 12MN.
          </p>

          {/* Search */}
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFF8F0]/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu (e.g. talaba, sisig, mango)"
              className="w-full bg-[#FFF8F0]/8 border border-[#FFF8F0]/15 hover:border-[#ffb868]/40 focus:border-[#ffb868] rounded-full pl-11 pr-4 py-3 text-sm text-[#FFF8F0] placeholder-[#FFF8F0]/40 outline-none transition-colors"
            />
          </div>
        </div>
      </header>

      {/* Category jump bar */}
      <div className="sticky top-[33px] z-40 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#3D2B1F]/8">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-3 overflow-x-auto no-scrollbar">
          <ul className="flex items-center gap-1.5 whitespace-nowrap">
            {categories.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="inline-block px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#3D2B1F]/70 hover:text-[#1f0f09] hover:bg-[#FFF0D6] rounded-full transition-colors"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Categories */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16 space-y-14">
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-[#3D2B1F]/55 italic" style={{ fontFamily: "var(--font-caveat, cursive)" }}>
              <span className="text-2xl">No matches for &ldquo;{query}&rdquo;</span>
            </div>
          </div>
        )}
        {filtered.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-32">
            <div className="flex items-end justify-between mb-7 pb-4 border-b-2 border-[#3D2B1F]/15">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#E8623A] mb-1">
                  Category &middot; {String(filtered.indexOf(cat) + 1).padStart(2, "0")}
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                >
                  {cat.label}
                </h2>
              </div>
              <span className="text-xs text-[#3D2B1F]/45 font-semibold">
                {cat.items.length} items
              </span>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {cat.items.map((it) => (
                <li
                  key={`${cat.id}-${it.name}`}
                  className="flex items-baseline gap-3 py-2 border-b border-dashed border-[#3D2B1F]/10"
                >
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-[#3D2B1F]" style={{ fontFamily: "var(--font-rubik, sans-serif)" }}>
                      {it.name}
                    </span>
                    {it.tag && (
                      <span className="ml-2 text-[9px] uppercase tracking-[0.16em] text-[#E8623A] font-bold align-middle">
                        {it.tag}
                      </span>
                    )}
                  </div>
                  <span className="border-b border-dashed border-[#3D2B1F]/15 flex-1 mb-1.5 max-w-[60px]" />
                  <span
                    className="text-lg font-bold text-[#ffb868] tabular-nums"
                    style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
                  >
                    ₱{it.price}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>

      {/* Call CTA */}
      <section className="bg-[#3D2B1F] text-[#FFF8F0] px-5 sm:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#ffb868] mb-3">
            Ready to order?
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold mb-7 leading-tight"
            style={{ fontFamily: "var(--font-rubik, sans-serif)" }}
          >
            Call us &mdash; we&rsquo;ll save you a table.
          </h2>
          <a
            href="tel:+639511306264"
            className="inline-flex items-center gap-2 bg-[#ffb868] hover:bg-[#ffd699] text-[#1f0f09] px-7 py-4 rounded-full text-sm font-bold uppercase tracking-[0.16em] transition-colors"
          >
            <Phone size={16} /> 0951 130 6264
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f0f09] text-[#FFF8F0]/55 px-5 sm:px-8 py-8 text-xs">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} The Backyard Place &middot; Old Buswang, Kalibo, Aklan</span>
          <span>Daily 10AM&ndash;12MN &middot; 0951 130 6264</span>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#ffb868] hover:bg-[#ffd699] text-[#1f0f09] shadow-2xl shadow-black/30 flex items-center justify-center transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </main>
  );
}

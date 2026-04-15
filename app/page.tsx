"use client";

import { useEffect, useState } from "react";

const tabs = ["Flights", "Hotels", "Holidays", "Trains"];
const tripTypes = ["One Way", "Round Trip", "Multi City"];
const navItems = ["Flights", "Hotels", "Holidays", "Trains", "Offers"];
const stats = [
  ["12M+", "Happy Travellers"],
  ["500+", "Airlines Covered"],
  ["₹200", "Avg. Savings/Ticket"],
  ["150+", "Countries Supported"],
] as const;

const offers = [
  {
    badge: "30% OFF",
    title: "Delhi → Goa",
    meta: "IndiGo · Non-Stop",
    price: "₹2,499",
    note: "per person",
    tag: "USE: TIH30",
    accent: "from-sky-500 via-sky-300 to-cyan-100",
  },
  {
    badge: "HOTEL DEAL",
    title: "Snowfield Mountain Resort",
    meta: "4★ Resort · Manali",
    price: "₹3,200",
    note: "per night",
    tag: "Save ₹800",
    accent: "from-slate-800 via-sky-700 to-cyan-300",
  },
  {
    badge: "HOLIDAY PKG",
    title: "All-inclusive Paradise Escape",
    meta: "5D/4N · Maldives",
    price: "₹42,999",
    note: "per couple",
    tag: "20% OFF",
    accent: "from-cyan-700 via-sky-400 to-emerald-100",
  },
  {
    badge: "INTERNATIONAL",
    title: "Mumbai → Paris",
    meta: "Air France · 1 Stop",
    price: "₹38,500",
    note: "per person",
    tag: "Save ₹5,000",
    accent: "from-slate-950 via-indigo-900 to-violet-500",
  },
] as const;

const destinations = [
  {
    city: "Bali",
    country: "Indonesia",
    price: "From ₹28,999",
    accent: "from-orange-400 via-sky-400 to-emerald-300",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    city: "Dubai",
    country: "UAE",
    price: "From ₹18,499",
    accent: "from-amber-300 via-orange-300 to-stone-200",
    size: "",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    price: "From ₹14,999",
    accent: "from-pink-500 via-orange-300 to-amber-100",
    size: "",
  },
  {
    city: "Paris",
    country: "France",
    price: "From ₹38,000",
    accent: "from-slate-950 via-indigo-900 to-violet-700",
    size: "",
  },
  {
    city: "Singapore",
    country: "Singapore",
    price: "From ₹16,800",
    accent: "from-cyan-500 via-blue-500 to-sky-900",
    size: "",
  },
] as const;

const trustCards = [
  ["💸", "Lowest Price Guarantee", "Found it cheaper? We'll refund the difference, no questions asked."],
  ["🔒", "100% Secure Payments", "PCI-DSS compliant gateway with 256-bit SSL encryption on every transaction."],
  ["📞", "24/7 Expert Support", "Real humans available round the clock via chat, call, or WhatsApp."],
  ["⚡", "Instant Confirmation", "E-tickets sent in seconds. Modify or cancel hassle-free from your dashboard."],
] as const;

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-sky-500 text-white shadow-[0_8px_24px_rgba(26,111,232,0.35)]">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none">
          <path
            d="M12 2C9.79 2 8 3.79 8 6c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4z"
            fill="white"
            opacity="0.95"
          />
          <circle cx="12" cy="6" r="1.8" fill="#1A6FE8" />
          <path
            d="M3 17l2-1 3 2 7-4-9-2 1-2 10 1 2-1c.55 0 1 .45 1 1s-.45 1-1 1l-2 1-10 5-3-1z"
            fill="white"
            opacity="0.9"
          />
        </svg>
      </div>
      <div className="leading-none">
        <div
          className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500"
          style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}
        >
          travel smarter
        </div>
        <div
          className="bg-gradient-to-r from-sky-600 via-sky-500 to-orange-500 bg-clip-text text-xl font-extrabold text-transparent"
          style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}
        >
          Trip In <span className="text-orange-500">Hand</span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Flights");
  const [tripType, setTripType] = useState("One Way");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!searching) return;
    const timer = window.setTimeout(() => setSearching(false), 1800);
    return () => window.clearTimeout(timer);
  }, [searching]);

  return (
    <main
      className="min-h-screen bg-slate-50 text-slate-900"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
    >
      <div className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-10">
        <div
          className={`mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-2xl border border-white/60 px-4 py-3 transition-all sm:px-6 ${
            scrolled ? "bg-white/95 shadow-lg backdrop-blur-xl" : "bg-white/80 backdrop-blur-md"
          }`}
        >
          <a href="#" className="shrink-0">
            <Logo />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-600 transition hover:text-sky-600">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:text-sky-600">
              Log In
            </button>
            <button className="rounded-xl bg-gradient-to-r from-sky-600 to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(26,111,232,0.3)] transition hover:-translate-y-0.5">
              Sign Up Free
            </button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-xl border border-slate-200 p-2 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <div className="flex w-5 flex-col gap-1">
              <span className={`h-0.5 rounded bg-slate-900 transition ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 rounded bg-slate-900 transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 rounded bg-slate-900 transition ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 flex h-full w-[85vw] max-w-xs flex-col gap-6 bg-white px-6 pb-8 pt-28 shadow-2xl md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="border-b border-slate-200 pb-4 text-base font-medium text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">
              Log In
            </button>
            <button className="rounded-xl bg-gradient-to-r from-sky-600 to-sky-400 px-4 py-3 text-sm font-semibold text-white">
              Sign Up Free
            </button>
          </div>
        </>
      )}

      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#ebf3ff_0%,#f0f6ff_40%,#fff4ee_100%)]" />
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-sky-200/70 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
        <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Best fares, updated every 30 minutes
            </div>
            <h1
              className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}
            >
              Travel <span className="text-sky-600">Smarter,</span>
              <br />
              Spend <span className="text-orange-500">Less</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Book flights, hotels and holiday packages at unbeatable prices. Trusted by
              12 million+ travellers.
            </p>
          </div>

          <div className="relative z-10 mx-auto mt-10 max-w-5xl rounded-[2rem] border border-slate-200/70 bg-white p-5 shadow-[0_20px_60px_rgba(13,31,60,0.15)] sm:p-7">
            <div className="flex gap-2 overflow-x-auto rounded-2xl bg-slate-100 p-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`min-w-fit rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    activeTab === tab ? "bg-white text-sky-600 shadow-sm" : "text-slate-500"
                  }`}
                >
                  {tab === "Flights" && "✈️ "}
                  {tab === "Hotels" && "🏨 "}
                  {tab === "Holidays" && "🌴 "}
                  {tab === "Trains" && "🚂 "}
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-4">
              {tripTypes.map((type) => (
                <label key={type} className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                  <input
                    type="radio"
                    name="tripType"
                    className="hidden"
                    checked={tripType === type}
                    onChange={() => setTripType(type)}
                  />
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      tripType === type ? "border-sky-600" : "border-slate-300"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${tripType === type ? "bg-sky-600" : "bg-transparent"}`}
                    />
                  </span>
                  <span className={tripType === type ? "font-semibold text-sky-600" : ""}>{type}</span>
                </label>
              ))}
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_auto]">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-transparent transition hover:ring-sky-200">
                  <div className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-slate-500">From</div>
                  <div className="mt-1 text-lg font-bold text-slate-950" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>Delhi</div>
                  <div className="text-sm text-slate-500">DEL · Indira Gandhi Intl.</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-transparent transition hover:ring-sky-200">
                  <div className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-slate-500">To</div>
                  <div className="mt-1 text-lg font-bold text-slate-950" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>Mumbai</div>
                  <div className="text-sm text-slate-500">BOM · Chhatrapati Shivaji Intl.</div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-transparent transition hover:ring-sky-200">
                <div className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-slate-500">Departure</div>
                <div className="mt-1 text-base font-bold text-slate-950" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>24 Mar, 2026</div>
                <div className="text-sm text-slate-500">Tuesday</div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-transparent transition hover:ring-sky-200">
                <div className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-slate-500">
                  Travellers &amp; Class
                </div>
                <div className="mt-1 text-base font-bold text-slate-950" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>1 Adult</div>
                <div className="text-sm text-slate-500">Economy Class</div>
              </div>

              <button
                type="button"
                onClick={() => setSearching(true)}
                className={`rounded-2xl px-6 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(255,107,43,0.35)] transition hover:-translate-y-0.5 ${
                  searching
                    ? "bg-gradient-to-r from-sky-600 to-sky-400"
                    : "bg-gradient-to-r from-orange-500 to-orange-400"
                }`}
                style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}
              >
                {searching ? "⏳ Searching..." : "🔍 Search Flights"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-sky-600" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>{value}</div>
              <div className="mt-1 text-sm font-medium text-slate-600">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-950" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>
                ✨ Today&apos;s <span className="text-sky-600">Best Deals</span>
              </h2>
              <p className="mt-2 text-sm text-slate-600">Limited-time offers, handpicked for you</p>
            </div>
            <a href="#" className="text-sm font-semibold text-sky-600">
              See all deals →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`relative h-36 bg-gradient-to-br ${offer.accent}`}>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/15 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-bold tracking-[0.04em] text-slate-900">
                    {offer.badge}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-medium text-slate-500">{offer.meta}</div>
                  <div className="mt-1 text-base font-bold text-slate-950" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>{offer.title}</div>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <div className="text-xl font-extrabold text-sky-600" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>
                      {offer.price}
                      <div className="text-xs font-normal text-slate-500">{offer.note}</div>
                    </div>
                    <div className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500">
                      {offer.tag}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-950" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>
                🗺️ <span className="text-sky-600">Popular</span> Destinations
              </h2>
              <p className="mt-2 text-sm text-slate-600">Trending places Indians are flying to</p>
            </div>
            <a href="#" className="text-sm font-semibold text-sky-600">
              Explore more →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2">
            {destinations.map((destination) => (
              <article
                key={destination.city}
                className={`relative min-h-56 overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${destination.accent} ${destination.size}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="text-xl font-bold" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>{destination.city}</div>
                  <div className="text-sm text-white/75">{destination.country}</div>
                  <div className="mt-3 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm font-semibold backdrop-blur">
                    {destination.price}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-sky-900 to-sky-600 px-6 py-10 text-white shadow-[0_20px_60px_rgba(13,31,60,0.18)] sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.05em]">
              💳 Trip In Hand Credit Card
            </div>
            <h2 className="text-3xl font-extrabold leading-tight" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>
              Earn Miles on
              <br />
              Every Rupee Spent
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">
              Get 5× reward miles on flights, 3× on hotels. Welcome bonus of 10,000
              miles, enough for a free domestic flight.
            </p>
          </div>
          <button
            className="rounded-2xl bg-orange-500 px-6 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(255,107,43,0.35)]"
            style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}
          >
            Apply Now - It&apos;s Free →
          </button>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>
              Why <span className="text-sky-600">12 Million+</span> Choose Trip In Hand
            </h2>
            <p className="mt-2 text-sm text-slate-600">Built for travellers, by travellers</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustCards.map(([icon, title, desc]) => (
              <article
                key={title}
                className="rounded-[1.4rem] border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-2xl">
                  {icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-950" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-16 text-white/70 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
            <div>
              <a href="#" className="inline-block">
                <Logo />
              </a>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
                Making travel accessible and affordable for every Indian. Book with confidence.
              </p>
              <div className="mt-5 flex gap-3">
                {["𝕏", "f", "in", "▶"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm text-white/70 transition hover:bg-sky-600 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-white" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>Services</h4>
              <div className="mt-4 space-y-3 text-sm">
                <a href="#" className="block hover:text-white">Domestic Flights</a>
                <a href="#" className="block hover:text-white">International Flights</a>
                <a href="#" className="block hover:text-white">Hotels</a>
                <a href="#" className="block hover:text-white">Holiday Packages</a>
                <a href="#" className="block hover:text-white">Train Booking</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-white" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>Company</h4>
              <div className="mt-4 space-y-3 text-sm">
                <a href="#" className="block hover:text-white">About Us</a>
                <a href="#" className="block hover:text-white">Careers</a>
                <a href="#" className="block hover:text-white">Press Room</a>
                <a href="#" className="block hover:text-white">Blog</a>
                <a href="#" className="block hover:text-white">Affiliate</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-white" style={{ fontFamily: "'Sora', 'Trebuchet MS', sans-serif" }}>Support</h4>
              <div className="mt-4 space-y-3 text-sm">
                <a href="#" className="block hover:text-white">Help Center</a>
                <a href="#" className="block hover:text-white">Cancellation Policy</a>
                <a href="#" className="block hover:text-white">Refund Status</a>
                <a href="#" className="block hover:text-white">Privacy Policy</a>
                <a href="#" className="block hover:text-white">Terms of Use</a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
            <p>© 2026 Trip In Hand Travel Technologies Pvt. Ltd. All rights reserved.</p>
            <p className="text-white/50">🔒 Secure · PCI Compliant · ISO 27001</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronRight,
  Factory,
  GraduationCap,
  Hotel,
  Leaf,
  Menu,
  Package,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const companies = [
  {
    number: "01",
    name: "Loremm Global Concept Ltd",
    registration: "RC 1152733",
    focus: "Construction & Real Estate",
    descriptor: "Flagship",
    icon: Building2,
  },
  {
    number: "02",
    name: "Loremm Group of Companies",
    registration: "RC 697287",
    focus: "Strategic Holding & Oversight",
    descriptor: "",
    icon: ShieldCheck,
  },
  {
    number: "03",
    name: "Loremm Integrated Farms Ltd",
    registration: "RC 1330160",
    focus: "Agribusiness & Food Security",
    descriptor: "",
    icon: Leaf,
  },
  {
    number: "04",
    name: "Loremm Suites Ltd",
    registration: "RC 654144",
    focus: "Hospitality & Short-Stay Accommodation",
    descriptor: "",
    icon: Hotel,
  },
  {
    number: "05",
    name: "Loremm Properties and Investment Ltd",
    registration: "RC 5005485",
    focus: "Real Estate Investment & Management",
    descriptor: "",
    icon: Building2,
  },
  {
    number: "06",
    name: "Loremm Enterprises",
    registration: "BN 3220090",
    focus: "General Trade & Supply Chain",
    descriptor: "",
    icon: Package,
  },
  {
    number: "07",
    name: "Loremm Laundry and Dry Cleaning Services",
    registration: "RC 10434646",
    focus: "Facility Support Services",
    descriptor: "",
    icon: Sparkles,
  },
  {
    number: "08",
    name: "Loremm International School Ltd",
    registration: "RC 702753",
    focus: "Educational Infrastructure",
    descriptor: "",
    icon: GraduationCap,
  },
];

export default function EcosystemPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#f6f3ed] text-[#171512]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ed]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:min-h-[80px] sm:px-8 lg:px-12">
          <a
            href="/"
            onClick={closeMobileMenu}
            className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#b89452]/50 bg-white shadow-sm sm:h-12 sm:w-12">
              <img
                src="/loremm-logo.jpg"
                alt="LOREMM logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="font-serif text-lg font-bold tracking-[0.1em] sm:text-xl sm:tracking-[0.12em]">
                LOREMM
              </div>

              <div className="hidden text-[8px] font-semibold uppercase tracking-[0.18em] text-[#776c5d] sm:block sm:tracking-[0.22em]">
                Hospitality Management & Consulting
              </div>
            </div>
          </a>

          {/* DESKTOP */}
          <nav className="hidden items-center gap-2 lg:flex">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#171512] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b89452]"
            >
              <ArrowLeft size={15} />
              Home
            </a>

            <a
              href="/services"
              className="rounded-full border border-[#b89452]/50 bg-[#b89452]/10 px-5 py-2.5 text-sm font-bold text-[#8c6829] transition hover:bg-[#b89452] hover:text-white"
            >
              Services
            </a>

            <a
              href="/ecosystem"
              className="rounded-full border border-[#b89452] bg-[#b89452] px-5 py-2.5 text-sm font-bold text-white"
            >
              Group Ecosystem
            </a>

            <a
              href="/#about"
              className="rounded-full px-4 py-2.5 text-sm font-medium transition hover:bg-black/5 hover:text-[#a77c2d]"
            >
              About
            </a>

            <a
              href="/#approach"
              className="rounded-full px-4 py-2.5 text-sm font-medium transition hover:bg-black/5 hover:text-[#a77c2d]"
            >
              Approach
            </a>

            <a
              href="/#contact"
              className="ml-1 rounded-full bg-[#171512] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b89452]"
            >
              Contact Us
            </a>
          </nav>

          {/* MOBILE */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href="/services"
              className="hidden rounded-full border border-[#b89452]/50 bg-[#b89452]/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wide text-[#8c6829] sm:inline-flex"
            >
              Services
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition hover:border-[#b89452] hover:text-[#b89452]"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="border-t border-black/10 bg-[#f6f3ed] px-4 py-4 lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2">
              {[
                ["Home", "/"],
                ["About", "/#about"],
                ["Our Services", "/services"],
                ["Group Ecosystem", "/ecosystem"],
                ["Approach", "/#approach"],
                ["Values", "/#values"],
                ["Contact Us", "/#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                  className="flex min-h-12 items-center justify-between rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold transition hover:border-[#b89452] hover:text-[#a77c2d]"
                >
                  {label}
                  <ChevronRight size={17} className="text-[#b89452]" />
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#171512]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(184,148,82,0.2),transparent_35%)]" />
        <div className="absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-[#b89452]/10 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af67] sm:text-xs sm:tracking-[0.32em]">
              <span className="h-px w-8 shrink-0 bg-[#d4af67] sm:w-12" />
              The Loremm Group
            </div>

            <h1 className="break-words font-serif text-[2.75rem] font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
              The Loremm
              <span className="block text-[#d4af67]">Group Ecosystem</span>
            </h1>

            <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65 sm:text-lg sm:leading-8">
              A diversified ecosystem of companies operating across
              construction and real estate, strategic holding, agribusiness,
              hospitality, investment, trade, facility support, and
              educational infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#d4af67] to-transparent" />
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          <div className="border-b border-black/10 p-6 sm:p-10 md:border-b-0 md:border-r">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#b89452]">
              01
            </div>

            <h2 className="mt-3 font-serif text-2xl font-semibold">
              One Ecosystem
            </h2>

            <p className="mt-3 text-sm leading-6 text-black/55">
              Multiple businesses working across complementary sectors under
              the broader Loremm ecosystem.
            </p>
          </div>

          <div className="border-b border-black/10 p-6 sm:p-10 md:border-b-0 md:border-r">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#b89452]">
              02
            </div>

            <h2 className="mt-3 font-serif text-2xl font-semibold">
              Diverse Sectors
            </h2>

            <p className="mt-3 text-sm leading-6 text-black/55">
              From property and construction to agriculture, hospitality,
              education, trade, and support services.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#b89452]">
              03
            </div>

            <h2 className="mt-3 font-serif text-2xl font-semibold">
              Shared Direction
            </h2>

            <p className="mt-3 text-sm leading-6 text-black/55">
              A connected business ecosystem built around strategic growth,
              professional management, and long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM DIRECTORY */}
      <section className="bg-[#f6f3ed] py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b89452] sm:text-xs sm:tracking-[0.28em]">
              <span className="h-px w-7 shrink-0 bg-[#b89452] sm:w-10" />
              Group Companies
            </div>

            <h2 className="break-words font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              The businesses behind
              <span className="block text-[#a77c2d]">
                the Loremm ecosystem.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-black/60 sm:text-base">
              Explore the companies and focus areas that make up the broader
              Loremm Group ecosystem.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div className="mt-14 hidden overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm lg:block">
            <div className="grid grid-cols-[70px_1.5fr_180px_1.4fr] border-b border-black/10 bg-[#171512] px-6 py-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <div>#</div>
              <div>Company</div>
              <div>RC / BN</div>
              <div>Focus Area</div>
            </div>

            {companies.map((company, index) => {
              const Icon = company.icon;

              return (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="grid grid-cols-[70px_1.5fr_180px_1.4fr] items-center border-b border-black/10 px-6 py-7 last:border-b-0 transition hover:bg-[#faf8f3]"
                >
                  <div className="text-sm font-bold text-[#b89452]">
                    {company.number}
                  </div>

                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#171512] text-[#d4af67]">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0">
                      <div className="break-words font-serif text-lg font-semibold">
                        {company.name}
                      </div>

                      {company.descriptor && (
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b89452]">
                          {company.descriptor}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-black/65">
                    {company.registration}
                  </div>

                  <div className="text-sm leading-6 text-black/60">
                    {company.focus}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* MOBILE / TABLET */}
          <div className="mt-10 grid gap-4 lg:hidden">
            {companies.map((company, index) => {
              const Icon = company.icon;

              return (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                  }}
                  className="min-w-0 rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex min-w-0 items-start justify-between gap-3">
                    <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#171512] text-[#d4af67] sm:h-11 sm:w-11">
                        <Icon size={19} strokeWidth={1.6} />
                      </div>

                      <div className="min-w-0">
                        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b89452] sm:text-[10px] sm:tracking-[0.2em]">
                          {company.number}
                        </div>

                        <h3 className="mt-1 break-words font-serif text-lg font-semibold leading-tight sm:text-xl">
                          {company.name}
                        </h3>
                      </div>
                    </div>

                    {company.descriptor && (
                      <span className="shrink-0 rounded-full bg-[#b89452]/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#98712d] sm:px-3 sm:text-[9px] sm:tracking-[0.15em]">
                        {company.descriptor}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 grid gap-4 border-t border-black/10 pt-5 sm:grid-cols-2">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/35 sm:text-[10px] sm:tracking-[0.18em]">
                        Registration
                      </div>

                      <div className="mt-1 text-sm font-semibold text-black/70">
                        {company.registration}
                      </div>
                    </div>

                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/35 sm:text-[10px] sm:tracking-[0.18em]">
                        Focus Area
                      </div>

                      <div className="mt-1 text-sm leading-6 text-black/60">
                        {company.focus}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM STATEMENT */}
      <section className="bg-[#171512] py-16 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af67]/40 bg-[#d4af67]/10 text-[#d4af67] sm:h-16 sm:w-16">
            <Factory size={25} strokeWidth={1.4} />
          </div>

          <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#d4af67] sm:mt-8 sm:text-xs sm:tracking-[0.3em]">
            The Loremm Group Ecosystem
          </div>

          <h2 className="mt-5 break-words font-serif text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Diversification.
            <span className="block text-[#d4af67]">
              Integration. Growth.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-white/55 sm:text-lg sm:leading-8">
            The Loremm ecosystem brings together businesses across strategic
            sectors, creating a broader platform for investment, enterprise,
            service delivery, and sustainable development.
          </p>
        </div>
      </section>

      {/* HOSPITALITY CONNECTION */}
      <section className="bg-white py-16 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b89452] sm:text-xs sm:tracking-[0.28em]">
              <span className="h-px w-7 shrink-0 bg-[#b89452] sm:w-10" />
              LOREMM Hospitality
            </div>

            <h2 className="break-words font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              Hospitality within
              <span className="block text-[#a77c2d]">
                a larger ecosystem.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-black/70 sm:text-lg">
              LOREMM Hospitality Management and Consulting Ltd operates within
              this wider ecosystem, bringing specialist hospitality management
              and consulting capabilities to the group&apos;s broader business
              environment.
            </p>

            <p className="mt-6 text-sm leading-7 text-black/55 sm:text-base">
              Our focus is on professional hotel management, hospitality
              operations, consulting, staff development, procurement, property
              management, and sustainable business development.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#171512] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b89452] sm:w-auto"
            >
              Explore LOREMM Hospitality
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="overflow-hidden border-t border-white/10 bg-[#0f0e0c]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="h-11 w-11 shrink-0 overflow-hidden rounded-md border border-[#b89452]/40 bg-white"
            >
              <img
                src="/loremm-logo.jpg"
                alt="LOREMM"
                className="h-full w-full object-cover"
              />
            </a>

            <div className="min-w-0">
              <div className="font-serif text-lg font-bold tracking-[0.1em] text-white">
                LOREMM
              </div>

              <div className="text-[8px] uppercase tracking-[0.15em] text-white/35 sm:text-[9px] sm:tracking-[0.2em]">
                Hospitality Management & Consulting
              </div>
            </div>
          </div>

          <div className="text-left lg:text-right">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d4af67] sm:text-xs sm:tracking-[0.2em]">
              The Loremm Group Ecosystem
            </div>

            <p className="mt-2 text-xs leading-5 text-white/35">
              Building businesses. Creating value. Driving sustainable growth.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 px-5 py-5 text-center text-[10px] leading-5 text-white/25 sm:px-6 sm:text-[11px]">
          © {new Date().getFullYear()} LOREMM. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Factory,
  GraduationCap,
  Hotel,
  Leaf,
  Package,
  ShieldCheck,
  Sparkles,
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
  return (
    <main className="min-h-screen bg-[#f6f3ed] text-[#171512]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ed]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border border-[#b89452]/50 bg-white shadow-sm">
              <img
                src="/loremm-logo.jpg"
                alt="LOREMM logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="font-serif text-xl font-bold tracking-[0.12em]">
                LOREMM
              </div>

              <div className="hidden text-[8px] font-semibold uppercase tracking-[0.22em] text-[#776c5d] sm:block">
                Hospitality Management & Consulting
              </div>
            </div>
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-[#b89452] hover:text-[#a77c2d]"
          >
            <ArrowLeft size={16} />
            Back to Website
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#171512]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(184,148,82,0.2),transparent_35%)]" />

        <div className="absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-[#b89452]/10 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#d4af67]">
              <span className="h-px w-12 bg-[#d4af67]" />
              The Loremm Group
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
              The Loremm
              <span className="block text-[#d4af67]">
                Group Ecosystem
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
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
          <div className="border-b border-black/10 p-7 sm:p-10 md:border-b-0 md:border-r">
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

          <div className="border-b border-black/10 p-7 sm:p-10 md:border-b-0 md:border-r">
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

          <div className="p-7 sm:p-10">
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

      {/* ECOSYSTEM TABLE / DIRECTORY */}
      <section className="bg-[#f6f3ed] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b89452]">
              <span className="h-px w-10 bg-[#b89452]" />
              Group Companies
            </div>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              The businesses behind
              <span className="block text-[#a77c2d]">
                the Loremm ecosystem.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-black/60">
              Explore the companies and focus areas that make up the broader
              Loremm Group ecosystem.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div className="mt-14 hidden overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm lg:block">
            <div className="grid grid-cols-[80px_1.5fr_180px_1.4fr] border-b border-black/10 bg-[#171512] px-6 py-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
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
                  className="grid grid-cols-[80px_1.5fr_180px_1.4fr] items-center border-b border-black/10 px-6 py-7 last:border-b-0 transition hover:bg-[#faf8f3]"
                >
                  <div className="text-sm font-bold text-[#b89452]">
                    {company.number}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#171512] text-[#d4af67]">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <div>
                      <div className="font-serif text-lg font-semibold">
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

          {/* MOBILE / TABLET CARDS */}
          <div className="mt-12 grid gap-4 lg:hidden">
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
                  className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#171512] text-[#d4af67]">
                        <Icon size={20} strokeWidth={1.6} />
                      </div>

                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b89452]">
                          {company.number}
                        </div>

                        <h3 className="mt-1 font-serif text-xl font-semibold leading-tight">
                          {company.name}
                        </h3>
                      </div>
                    </div>

                    {company.descriptor && (
                      <span className="shrink-0 rounded-full bg-[#b89452]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#98712d]">
                        {company.descriptor}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 grid gap-4 border-t border-black/10 pt-5 sm:grid-cols-2">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
                        Registration
                      </div>

                      <div className="mt-1 text-sm font-semibold text-black/70">
                        {company.registration}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
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
      <section className="bg-[#171512] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af67]/40 bg-[#d4af67]/10 text-[#d4af67]">
            <Factory size={28} strokeWidth={1.4} />
          </div>

          <div className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#d4af67]">
            The Loremm Group Ecosystem
          </div>

          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Diversification.
            <span className="block text-[#d4af67]">
              Integration. Growth.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
            The Loremm ecosystem brings together businesses across strategic
            sectors, creating a broader platform for investment, enterprise,
            service delivery, and sustainable development.
          </p>
        </div>
      </section>

      {/* HOSPITALITY CONNECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b89452]">
              <span className="h-px w-10 bg-[#b89452]" />
              LOREMM Hospitality
            </div>

            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Hospitality within
              <span className="block text-[#a77c2d]">
                a larger ecosystem.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-black/70">
              LOREMM Hospitality Management and Consulting Ltd operates within
              this wider ecosystem, bringing specialist hospitality management
              and consulting capabilities to the group&apos;s broader business
              environment.
            </p>

            <p className="mt-6 leading-7 text-black/55">
              Our focus is on professional hotel management, hospitality
              operations, consulting, staff development, procurement, property
              management, and sustainable business development.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#171512] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b89452]"
            >
              Explore LOREMM Hospitality
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0f0e0c]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 overflow-hidden rounded-md border border-[#b89452]/40 bg-white">
              <img
                src="/loremm-logo.jpg"
                alt="LOREMM"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="font-serif text-lg font-bold tracking-[0.1em] text-white">
                LOREMM
              </div>

              <div className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Hospitality Management & Consulting
              </div>
            </div>
          </div>

          <div className="text-left lg:text-right">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af67]">
              The Loremm Group Ecosystem
            </div>

            <p className="mt-2 text-xs text-white/35">
              Building businesses. Creating value. Driving sustainable growth.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 px-6 py-5 text-center text-[11px] text-white/25">
          © {new Date().getFullYear()} LOREMM. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
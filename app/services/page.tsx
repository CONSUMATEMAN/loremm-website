"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Hotel,
  LineChart,
  PackageCheck,
  Settings2,
  Users,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Hotel,
    title: "Hotel Management",
    description:
      "Professional hotel management focused on operational discipline, guest experience, service quality, profitability, and sustainable growth.",
    points: [
      "Operational management",
      "Guest experience standards",
      "Performance monitoring",
      "Revenue and cost awareness",
    ],
  },
  {
    number: "02",
    icon: Settings2,
    title: "Hospitality Operations",
    description:
      "Structured operational systems that improve efficiency, accountability, service consistency, and day-to-day performance.",
    points: [
      "Operational systems",
      "Standard operating procedures",
      "Quality control",
      "Performance accountability",
    ],
  },
  {
    number: "03",
    icon: LineChart,
    title: "Business Development",
    description:
      "Strategic development solutions designed to strengthen hospitality businesses, unlock opportunities, and support long-term expansion.",
    points: [
      "Growth strategy",
      "Business opportunity assessment",
      "Market positioning",
      "Expansion planning",
    ],
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Property & Facility Management",
    description:
      "Professional oversight of hospitality properties and facilities with a focus on standards, maintenance, productivity, and asset performance.",
    points: [
      "Property oversight",
      "Facility coordination",
      "Maintenance standards",
      "Asset performance",
    ],
  },
  {
    number: "05",
    icon: BriefcaseBusiness,
    title: "Hospitality Consulting",
    description:
      "Practical consulting for owners and investors seeking stronger structures, better decisions, improved performance, and sustainable results.",
    points: [
      "Business assessment",
      "Management advisory",
      "Operational restructuring",
      "Strategic planning",
    ],
  },
  {
    number: "06",
    icon: PackageCheck,
    title: "Procurement & Supply Management",
    description:
      "Efficient procurement and supply systems that help control costs, maintain quality, and support uninterrupted hospitality operations.",
    points: [
      "Procurement planning",
      "Supplier coordination",
      "Cost control",
      "Supply continuity",
    ],
  },
  {
    number: "07",
    icon: Users,
    title: "Staff Recruitment & Development",
    description:
      "Recruitment, workforce development, performance structures, and people-focused solutions that create stronger hospitality teams.",
    points: [
      "Hospitality recruitment",
      "Team development",
      "Performance structures",
      "Workforce planning",
    ],
  },
  {
    number: "08",
    icon: Users,
    title: "Hotel Staff / Management Training",
    description:
      "Professional training programmes designed to improve leadership, service delivery, operational knowledge, guest relations, and workplace standards.",
    points: [
      "Management training",
      "Service excellence",
      "Guest relations",
      "Leadership development",
    ],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b89452]">
      <span className="h-px w-10 bg-[#b89452]" />
      {children}
    </div>
  );
}

export default function ServicesPage() {
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

          <nav className="hidden items-center gap-3 lg:flex">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#171512] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b89452]"
            >
              <ArrowLeft size={15} />
              Home
            </a>

            <a
              href="/services"
              className="rounded-full border border-[#b89452] bg-[#b89452] px-5 py-2.5 text-sm font-bold text-white"
            >
              Services
            </a>

            <a
              href="/ecosystem"
              className="rounded-full border border-[#b89452]/50 bg-[#b89452]/10 px-5 py-2.5 text-sm font-bold text-[#8c6829] transition hover:bg-[#b89452] hover:text-white"
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
              className="ml-2 rounded-full bg-[#171512] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b89452]"
            >
              Contact Us
            </a>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/"
              className="rounded-full bg-[#171512] px-4 py-2 text-xs font-semibold text-white"
            >
              Home
            </a>

            <a
              href="/services"
              className="rounded-full bg-[#b89452] px-4 py-2 text-xs font-bold text-white"
            >
              Services
            </a>

            <a
              href="/ecosystem"
              className="hidden rounded-full border border-[#b89452] bg-[#b89452]/10 px-4 py-2 text-xs font-bold text-[#8c6829] sm:block"
            >
              Ecosystem
            </a>
          </div>
        </div>
      </header>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#171512]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(184,148,82,0.18),transparent_35%)]" />

        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#b89452]/10 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-5xl"
          >
            <SectionLabel>LOREMM Hospitality</SectionLabel>

            <h1 className="font-serif text-5xl font-semibold leading-[1] text-white sm:text-6xl lg:text-8xl">
              Our Services
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
              Complete hospitality solutions built around performance.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
              From hotel management and operations to staff development,
              procurement, property oversight, and business consulting,
              LOREMM provides practical solutions across the hospitality value
              chain.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d4af67] px-7 py-3.5 text-sm font-bold text-[#171512] transition hover:bg-white"
              >
                Discuss Your Requirements
                <ArrowRight size={17} />
              </a>

              <a
                href="/"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#d4af67] hover:bg-[#d4af67] hover:text-[#171512]"
              >
                Return Home
                <ArrowLeft size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-center lg:px-12">
          <div>
            <SectionLabel>What We Do</SectionLabel>

            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Practical expertise across the hospitality value chain.
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-black/60">
            Our services are designed to help hospitality owners, investors,
            developers, operators, and management teams create stronger
            businesses through professional systems, capable people,
            disciplined execution, and continuous improvement.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#f6f3ed] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b89452]/50 hover:shadow-xl sm:p-9"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#b89452]/[0.06] transition group-hover:bg-[#b89452]/[0.12]" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#b89452]/30 bg-[#b89452]/10">
                      <Icon
                        size={26}
                        strokeWidth={1.5}
                        className="text-[#9b742f]"
                      />
                    </div>

                    <span className="font-serif text-5xl font-semibold text-black/[0.07]">
                      {service.number}
                    </span>
                  </div>

                  <div className="relative">
                    <h2 className="mt-8 font-serif text-3xl font-semibold">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#b89452]"
                          />

                          <span className="text-xs font-semibold text-black/65 sm:text-sm">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/#contact"
                      className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8c6829] transition group-hover:text-[#b89452]"
                    >
                      Discuss This Service
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-white">
        <div className="w-full overflow-hidden border-y border-[#b89452]/30">
          <img
            src="/loremm-banner-2.jpg"
            alt="LOREMM hospitality management"
            className="block h-auto min-h-[260px] w-full object-cover sm:min-h-[360px] lg:min-h-[430px]"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <SectionLabel>Operational Excellence</SectionLabel>

          <h2 className="max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Creating standards
            <span className="block text-[#a77c2d]">that last.</span>
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-black/60 sm:text-lg">
            Our objective is simple: build hospitality businesses that are well
            managed, commercially strong, operationally disciplined, and
            capable of delivering memorable guest experiences.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#171512]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <SectionLabel>Work With LOREMM</SectionLabel>

              <h2 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build a
                <span className="text-[#d4af67]">
                  {" "}
                  better hospitality business.
                </span>
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/55">
                Whether you are developing a new hospitality property,
                restructuring an existing operation, or looking for a stronger
                management partner, LOREMM is ready to discuss your objectives.
              </p>
            </div>

            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d4af67] px-8 py-4 text-sm font-bold text-[#171512] transition hover:bg-white"
            >
              Contact LOREMM
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0f0e0c]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="h-11 w-11 overflow-hidden rounded-md border border-[#b89452]/40 bg-white"
            >
              <img
                src="/loremm-logo.jpg"
                alt="LOREMM"
                className="h-full w-full object-cover"
              />
            </a>

            <div>
              <div className="font-serif text-lg font-bold tracking-[0.1em] text-white">
                LOREMM
              </div>

              <div className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Hospitality Management & Consulting
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-left sm:flex-row sm:items-center lg:text-right">
            <a
              href="/"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 transition hover:text-[#d4af67]"
            >
              Home
            </a>

            <a
              href="/services"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af67] transition hover:text-white"
            >
              Services
            </a>

            <a
              href="/ecosystem"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af67] transition hover:text-white"
            >
              Group Ecosystem
            </a>

            <div className="hidden h-4 w-px bg-white/10 sm:block" />

            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#d4af67]">
              Hospitality Management. Operational Excellence. Sustainable
              Growth.
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 px-6 py-5 text-center text-[11px] text-white/25">
          © {new Date().getFullYear()} LOREMM Hospitality Management and
          Consulting Ltd. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
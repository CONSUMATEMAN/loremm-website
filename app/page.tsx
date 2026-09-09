"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Hotel,
  LineChart,
  Menu,
  Settings2,
  Users,
  X,
} from "lucide-react";

const principles = [
  "Professional management systems",
  "Operational accountability",
  "Exceptional guest experience",
  "Financial and cost awareness",
  "Continuous performance improvement",
  "Sustainable business development",
];

const clients = [
  "Hotels & Resorts",
  "Boutique Hotels",
  "Serviced Apartments",
  "Restaurants & Hospitality Businesses",
  "Property Owners",
  "Investors & Developers",
];

const values = [
  {
    title: "Professionalism",
    text: "We maintain high professional standards in every engagement and every operational decision.",
  },
  {
    title: "Integrity",
    text: "We operate with transparency, accountability, responsibility, and respect for every client relationship.",
  },
  {
    title: "Excellence",
    text: "We continuously pursue better service, stronger systems, and improved business performance.",
  },
  {
    title: "Innovation",
    text: "We embrace smarter ideas, modern practices, and practical solutions for a changing hospitality industry.",
  },
  {
    title: "People",
    text: "We understand that outstanding hospitality begins with capable, motivated, and properly developed people.",
  },
  {
    title: "Growth",
    text: "We focus on creating measurable value and building hospitality businesses that are positioned for sustainable growth.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b89452] sm:text-xs sm:tracking-[0.28em]">
      <span className="h-px w-7 shrink-0 bg-[#b89452] sm:w-10" />
      {children}
    </div>
  );
}

function BannerSection({
  src,
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref,
  reverse = false,
}: {
  src: string;
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  reverse?: boolean;
}) {
  return (
    <section className="overflow-hidden bg-white">
      <div className="w-full overflow-hidden border-y border-[#b89452]/30 bg-white">
        <img
          src={src}
          alt={title}
          className="block h-auto w-full max-w-full object-contain"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className={`max-w-4xl ${reverse ? "ml-auto text-left sm:text-right" : ""}`}
        >
          <div
            className={`mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#b89452] sm:text-xs sm:tracking-[0.3em] ${
              reverse ? "sm:justify-end" : ""
            }`}
          >
            {!reverse && <span className="h-px w-7 shrink-0 bg-[#b89452] sm:w-10" />}
            {eyebrow}
            {reverse && <span className="hidden h-px w-10 bg-[#b89452] sm:block" />}
          </div>

          <h2 className="break-words font-serif text-3xl font-semibold leading-[1.08] text-[#171512] sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p
            className={`mt-5 max-w-3xl text-sm leading-7 text-black/60 sm:text-lg sm:leading-8 ${
              reverse ? "sm:ml-auto" : ""
            }`}
          >
            {description}
          </p>

          <a
            href={buttonHref}
            className="mt-7 inline-flex max-w-full items-center justify-center gap-3 rounded-full bg-[#171512] px-6 py-3.5 text-center text-xs font-semibold text-white transition hover:bg-[#b89452] sm:px-7 sm:text-sm"
          >
            {buttonText}
            <ArrowRight size={16} className="shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
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

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-2 lg:flex">
            <a
              href="/"
              className="rounded-full bg-[#171512] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b89452]"
            >
              Home
            </a>

            <a
              href="#about"
              className="rounded-full px-4 py-2.5 text-sm font-medium transition hover:bg-black/5 hover:text-[#a77c2d]"
            >
              About
            </a>

            <a
              href="/services"
              className="rounded-full border border-[#b89452]/50 bg-[#b89452]/10 px-5 py-2.5 text-sm font-bold text-[#8c6829] transition hover:bg-[#b89452] hover:text-white"
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
              href="#approach"
              className="rounded-full px-4 py-2.5 text-sm font-medium transition hover:bg-black/5 hover:text-[#a77c2d]"
            >
              Approach
            </a>

            <a
              href="#values"
              className="rounded-full px-4 py-2.5 text-sm font-medium transition hover:bg-black/5 hover:text-[#a77c2d]"
            >
              Values
            </a>

            <a
              href="#contact"
              className="ml-1 rounded-full bg-[#171512] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b89452]"
            >
              Contact Us
            </a>
          </nav>

          {/* MOBILE HEADER */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href="/services"
              className="hidden rounded-full border border-[#b89452] bg-[#b89452]/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wide text-[#8c6829] xs:inline-flex sm:inline-flex"
            >
              Services
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#171512] shadow-sm transition hover:border-[#b89452] hover:text-[#b89452]"
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(184,148,82,0.18),transparent_35%)]" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#b89452]/10 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-w-0"
          >
            <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af67] sm:text-xs sm:tracking-[0.32em]">
              <span className="h-px w-8 shrink-0 bg-[#d4af67] sm:w-12" />
              Hospitality Management & Consulting
            </div>

            <h1 className="max-w-4xl break-words font-serif text-[2.75rem] font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building Better
              <span className="block text-[#d4af67]">
                Hospitality Businesses.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-lg sm:leading-8">
              LOREMM Hospitality Management and Consulting Ltd provides
              professional management, consulting, operational, and development
              solutions designed to help hospitality businesses perform better,
              grow stronger, and deliver exceptional experiences.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:flex-row">
              <a
                href="/services"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d4af67] px-6 py-3.5 text-sm font-bold text-[#171512] transition hover:bg-white sm:w-auto sm:px-7"
              >
                Explore Our Services
                <ArrowRight size={17} />
              </a>

              <a
                href="/ecosystem"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#d4af67]/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d4af67] hover:text-[#171512] sm:w-auto sm:px-7"
              >
                Explore Group Ecosystem
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-5 rounded-full bg-[#b89452]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-[#d4af67]/35 bg-white/5 p-4 shadow-2xl backdrop-blur-sm sm:p-5">
              <div className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white">
                <img
                  src="/loremm-logo.jpg"
                  alt="LOREMM Hospitality Management and Consulting Ltd"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                  <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#d4af67] sm:text-[10px]">
                    Focus
                  </div>
                  <div className="mt-2 text-xs font-semibold text-white sm:text-sm">
                    Hospitality
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                  <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#d4af67] sm:text-[10px]">
                    Standard
                  </div>
                  <div className="mt-2 text-xs font-semibold text-white sm:text-sm">
                    Excellence
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BANNER 1 */}
      <BannerSection
        src="/loremm-banner-1.jpg"
        eyebrow="LOREMM Hospitality"
        title="Where Hospitality Meets Professional Management."
        description="We bring structure, discipline, expertise, and strategic thinking to hospitality businesses that want to operate at a higher standard."
        buttonText="Discover LOREMM"
        buttonHref="#about"
      />

      {/* INTRO STRIP */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {[
            [
              "01",
              "Expertise",
              "Professional hospitality management and consulting",
            ],
            [
              "02",
              "Focus",
              "Operational excellence and sustainable growth",
            ],
            [
              "03",
              "Coverage",
              "Management, development, people and performance",
            ],
          ].map(([number, title, text], index) => (
            <div
              key={number}
              className={`p-6 sm:p-9 ${
                index !== 2
                  ? "border-b border-black/10 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="text-xs font-bold tracking-[0.25em] text-[#b89452]">
                {number}
              </div>

              <div className="mt-3 font-serif text-2xl font-semibold">
                {title}
              </div>

              <p className="mt-2 text-sm leading-6 text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 bg-[#f6f3ed] py-16 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <SectionLabel>About LOREMM</SectionLabel>

            <h2 className="break-words font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              Professional thinking.
              <span className="block text-[#a77c2d]">
                Practical execution.
              </span>
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-black/75 sm:text-lg">
              LOREMM Hospitality Management and Consulting Ltd is focused on
              helping hospitality businesses achieve stronger operational
              performance, better service delivery, and sustainable business
              growth.
            </p>

            <p className="mt-6 text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              Our approach combines hospitality expertise with structured
              management systems, strategic thinking, people development,
              performance monitoring, procurement discipline, and practical
              business solutions.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {principles.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#b89452]"
                  />

                  <span className="text-sm font-medium leading-6 text-black/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="overflow-hidden bg-[#171512] py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-4xl">
              <SectionLabel>Our Services</SectionLabel>

              <h2 className="break-words font-serif text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Complete hospitality solutions
                <span className="block text-[#d4af67]">
                  built around performance.
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/60 sm:text-lg sm:leading-8">
                From hotel management and operations to staff development,
                procurement, property oversight, and business consulting,
                LOREMM provides practical solutions across the hospitality
                value chain.
              </p>
            </div>

            <a
              href="/services"
              className="group inline-flex w-full items-center justify-center gap-4 rounded-full border border-[#d4af67] bg-[#d4af67] px-6 py-4 text-sm font-bold text-[#171512] transition hover:bg-white sm:w-auto sm:px-8"
            >
              Explore All Services
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Hotel, title: "Hotel Management" },
              { icon: Settings2, title: "Hospitality Operations" },
              { icon: LineChart, title: "Business Development" },
              { icon: Users, title: "People & Training" },
              { icon: Settings2, title: "Property Management" },
              { icon: LineChart, title: "Hospitality Consulting" },
            ].map((service, index) => {
              const Icon = service.icon;

              return (
                <a
                  key={index}
                  href="/services"
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#d4af67]/40 hover:bg-white/[0.07] sm:gap-4 sm:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4af67]/30 bg-[#d4af67]/10 sm:h-11 sm:w-11">
                    <Icon size={18} className="text-[#d4af67]" />
                  </div>

                  <span className="min-w-0 text-xs font-semibold leading-5 text-white/75 sm:text-sm">
                    {service.title}
                  </span>

                  <ChevronRight
                    size={16}
                    className="ml-auto shrink-0 text-white/20 transition group-hover:translate-x-1 group-hover:text-[#d4af67]"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* BANNER 2 */}
      <BannerSection
        src="/loremm-banner-2.jpg"
        eyebrow="Operational Excellence"
        title="Creating Standards That Last."
        description="Our objective is simple: build hospitality businesses that are well managed, commercially strong, operationally disciplined, and capable of delivering memorable guest experiences."
        buttonText="Our Management Approach"
        buttonHref="#approach"
        reverse
      />

      {/* VISION & MISSION */}
      <section className="bg-[#211e19] py-16 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-10"
          >
            <SectionLabel>Our Vision</SectionLabel>

            <h2 className="font-serif text-2xl font-semibold leading-tight text-white sm:text-4xl">
              To become a trusted benchmark for hospitality excellence.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/55 sm:text-base">
              We aspire to help shape a hospitality industry where professional
              management, service excellence, innovation, and sustainable
              business practices become the standard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#d4af67]/25 bg-[#d4af67]/[0.06] p-6 sm:p-10"
          >
            <SectionLabel>Our Mission</SectionLabel>

            <h2 className="font-serif text-2xl font-semibold leading-tight text-white sm:text-4xl">
              To make hospitality businesses better.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/55 sm:text-base">
              Through professional management, consulting, training, systems,
              and strategic development, we help clients improve operations,
              strengthen teams, enhance guest experience, and create lasting
              value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="scroll-mt-24 bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel>Management Approach</SectionLabel>

              <h2 className="break-words font-serif text-3xl font-semibold leading-tight sm:text-5xl">
                Structured management
                <span className="block text-[#a77c2d]">
                  with measurable results.
                </span>
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {[
                {
                  n: "01",
                  title: "Assess",
                  text: "Understand the property, business model, team, market position, opportunities, and operational challenges.",
                },
                {
                  n: "02",
                  title: "Structure",
                  text: "Create practical systems, standards, responsibilities, processes, and performance expectations.",
                },
                {
                  n: "03",
                  title: "Execute",
                  text: "Translate strategy into disciplined day-to-day action through people, systems, monitoring, and leadership.",
                },
                {
                  n: "04",
                  title: "Improve",
                  text: "Review performance continuously, identify opportunities, and implement improvements that strengthen the business.",
                },
              ].map((item) => (
                <div key={item.n} className="border-t border-black/10 pt-6">
                  <div className="text-xs font-bold tracking-[0.25em] text-[#b89452]">
                    {item.n}
                  </div>

                  <h3 className="mt-3 font-serif text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-[#171512] py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <SectionLabel>Who We Serve</SectionLabel>

            <h2 className="break-words font-serif text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Supporting businesses across the hospitality landscape.
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div
                key={client}
                className="group flex min-w-0 items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#d4af67]/40 hover:bg-white/[0.06] sm:p-5"
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#d4af67] sm:text-xs">
                    0{index + 1}
                  </span>

                  <span className="text-xs font-semibold leading-5 text-white/80 sm:text-sm">
                    {client}
                  </span>
                </div>

                <ChevronRight
                  size={17}
                  className="shrink-0 text-white/20 transition group-hover:translate-x-1 group-hover:text-[#d4af67]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOREMM */}
      <section className="bg-[#f6f3ed] py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionLabel>Why LOREMM</SectionLabel>

              <h2 className="break-words font-serif text-3xl font-semibold leading-tight sm:text-5xl">
                More than management.
                <span className="block text-[#a77c2d]">
                  A partner for growth.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                Hospitality businesses require more than good intentions.
                They require clear systems, capable people, disciplined
                execution, commercial awareness, and consistent leadership.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                "Professional and structured approach",
                "Hospitality-focused expertise",
                "Practical operational solutions",
                "Strong focus on people and service",
                "Performance and accountability driven",
                "Long-term value creation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-black/10 py-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#171512] text-[#d4af67]">
                    <CheckCircle2 size={16} />
                  </div>

                  <span className="text-sm font-semibold leading-6 text-black/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="scroll-mt-24 bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <SectionLabel>Our Core Values</SectionLabel>

            <h2 className="break-words font-serif text-3xl font-semibold sm:text-5xl">
              The principles behind
              <span className="text-[#a77c2d]"> our work.</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="border-t border-black/10 pt-6"
              >
                <div className="text-xs font-bold tracking-[0.25em] text-[#b89452]">
                  0{index + 1}
                </div>

                <h3 className="mt-4 font-serif text-2xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/55">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 bg-[#171512]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-28 lg:grid-cols-[1fr_0.8fr] lg:px-12">
          <div>
            <SectionLabel>Start a Conversation</SectionLabel>

            <h2 className="max-w-3xl break-words font-serif text-3xl font-semibold leading-tight text-white sm:text-6xl">
              Let&apos;s build a
              <span className="text-[#d4af67]">
                {" "}
                better hospitality business.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-7">
              Whether you are developing a new hospitality property,
              restructuring an existing operation, or looking for a stronger
              management partner, LOREMM is ready to discuss your objectives.
            </p>

            <a
              href="mailto:Loremmgroup01@gmail.com"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d4af67] px-7 py-3.5 text-sm font-bold text-[#171512] transition hover:bg-white sm:w-auto"
            >
              Contact LOREMM
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-9">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af67]">
              Head Office
            </div>

            <div className="mt-5 break-words font-serif text-xl font-semibold leading-snug text-white sm:text-2xl">
              LOREMM Hospitality Management and Consulting Ltd
            </div>

            <div className="mt-7 space-y-5 text-sm leading-7 text-white/60">
              <p>
                No. 6, Chief Steve Onu Street,
                <br />
                Achike Udenwa Estate,
                <br />
                Owerri, Imo State, Nigeria.
              </p>

              <div className="h-px bg-white/10" />

              <p className="break-words">
                <span className="text-white/35">Email</span>
                <br />

                <a
                  href="mailto:Loremmgroup01@gmail.com"
                  className="text-white transition hover:text-[#d4af67]"
                >
                  Loremmgroup01@gmail.com
                </a>
              </p>

              <p>
                <span className="text-white/35">Phone</span>
                <br />

                <a
                  href="tel:+2348062556518"
                  className="text-white transition hover:text-[#d4af67]"
                >
                  +234 806 255 6518
                </a>
              </p>
            </div>
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

            <div className="max-w-md text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-[#d4af67]">
              Hospitality Management. Operational Excellence. Sustainable
              Growth.
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 px-5 py-5 text-center text-[10px] leading-5 text-white/25 sm:px-6 sm:text-[11px]">
          © {new Date().getFullYear()} LOREMM Hospitality Management and
          Consulting Ltd. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
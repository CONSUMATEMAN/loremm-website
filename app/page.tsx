"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Mail,
  Menu,
  Phone,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main
      className="min-h-screen bg-[#090807] pt-[82px] text-[#f7f1e5]"
      style={{
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
        letterSpacing: "0",
      }}
    >
      {/* =========================================================
          PREMIUM HEADER
      ========================================================== */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#d4af67]/30 bg-[#090807]/95 shadow-[0_8px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="h-[3px] w-full bg-gradient-to-r from-[#168ac0] via-[#d4af67] to-[#5ec8ff]" />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-[#d4af67]/20 blur-md transition group-hover:bg-[#5ec8ff]/30" />

              <Image
                src="/loremm-logo.jpg"
                alt="LOREMM Hospitality Management and Consulting Ltd"
                width={56}
                height={56}
                priority
                className="relative h-11 w-11 rounded-full border border-[#d4af67]/70 object-cover sm:h-12 sm:w-12"
              />
            </div>

            <div className="leading-none">
              <p className="text-lg font-bold tracking-[0.12em] text-[#f7f1e5]">
                LOREMM
              </p>

              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#d4af67] sm:text-[9px]">
                Hospitality Management
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-2 lg:flex">
            <nav className="flex items-center gap-1">
              <Link
                href="/"
                className="group relative rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#5ec8ff]"
              >
                Home
                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#5ec8ff]" />
              </Link>

              <Link
                href="#about"
                className="rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#d8d0c2] transition hover:bg-[#d4af67]/10 hover:text-[#d4af67]"
              >
                About
              </Link>

              <Link
                href="/services"
                className="rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#d8d0c2] transition hover:bg-[#d4af67]/10 hover:text-[#d4af67]"
              >
                Services
              </Link>

              <Link
                href="/ecosystem"
                className="rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#d8d0c2] transition hover:bg-[#d4af67]/10 hover:text-[#d4af67]"
              >
                Group Ecosystem
              </Link>

              <Link
                href="#approach"
                className="rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#d8d0c2] transition hover:bg-[#d4af67]/10 hover:text-[#d4af67]"
              >
                Approach
              </Link>

              <Link
                href="#values"
                className="rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#d8d0c2] transition hover:bg-[#d4af67]/10 hover:text-[#d4af67]"
              >
                Values
              </Link>
            </nav>

            {/* SOCIAL MEDIA LINKS */}
            <div className="ml-3 flex items-center gap-1.5 border-l border-[#d4af67]/25 pl-3">
              <a
                href="https://web.facebook.com/profile.php?id=61594461112273"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af67]/30 text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:bg-[#168ac0]/15 hover:text-[#5ec8ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[19px] w-[19px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.8V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8.2v3h2.6v8h2.7Z" />
                </svg>
              </a>

              <a
                href="https://x.com/LoremmHMC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af67]/30 text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:bg-[#168ac0]/15 hover:text-[#5ec8ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.85L18.9 2Zm-1.1 17.9h1.73L8.28 4H6.43L17.8 19.9Z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@LoremmHospitalityManagement"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af67]/30 text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:bg-[#168ac0]/15 hover:text-[#5ec8ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[19px] w-[19px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a31 31 0 0 0 .5-5.8A31 31 0 0 0 23.5 6.2ZM9.6 15.8V8.2l6.4 3.8-6.4 3.8Z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@loremm.hospitalit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af67]/30 text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:bg-[#168ac0]/15 hover:text-[#5ec8ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[19px] w-[19px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M19.3 7.1a5.8 5.8 0 0 1-3.6-1.2v8.2a5.9 5.9 0 1 1-5.1-5.8v3a2.9 2.9 0 1 0 2.2 2.8V2h3a5.8 5.8 0 0 0 3.5 2.6v2.5Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/loremmhospitality"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af67]/30 text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:bg-[#168ac0]/15 hover:text-[#5ec8ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[19px] w-[19px] fill-none stroke-current"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </a>
            </div>

            <Link
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4af67] to-[#e8c980] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#090807] shadow-lg transition hover:scale-[1.03] hover:from-[#f0d28d] hover:to-[#d4af67]"
            >
              Contact Us
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af67]/60 bg-[#d4af67]/10 text-[#d4af67] transition hover:bg-[#d4af67] hover:text-[#090807] lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div className="border-t border-[#d4af67]/20 bg-[#090807] px-5 pb-6 pt-3 shadow-2xl lg:hidden">
            <nav className="mx-auto flex max-w-xl flex-col">
              {[
                ["Home", "/"],
                ["About", "#about"],
                ["Services", "/services"],
                ["Group Ecosystem", "/ecosystem"],
                ["Approach", "#approach"],
                ["Values", "#values"],
                ["Contact Us", "#contact"],
              ].map(([label, href], index) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between border-b border-[#d4af67]/10 py-4 text-sm font-bold uppercase tracking-[0.1em] ${
                    index === 0 ? "text-[#5ec8ff]" : "text-[#f7f1e5]"
                  }`}
                >
                  {label}

                  <ChevronDown
                    size={15}
                    className="-rotate-90 text-[#d4af67]"
                  />
                </Link>
              ))}
            </nav>

            {/* MOBILE SOCIAL MEDIA LINKS */}
            <div className="mt-5 flex items-center justify-center gap-3 border-t border-[#d4af67]/20 pt-5">
              <a
                href="https://web.facebook.com/profile.php?id=61594461112273"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af67]/40 text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:text-[#5ec8ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.8V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8.2v3h2.6v8h2.7Z" />
                </svg>
              </a>

              <a
                href="https://x.com/LoremmHMC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af67]/40 text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:text-[#5ec8ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.85L18.9 2Zm-1.1 17.9h1.73L8.28 4H6.43L17.8 19.9Z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@LoremmHospitalityManagement"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af67]/40 text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:text-[#5ec8ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a31 31 0 0 0 .5-5.8A31 31 0 0 0 23.5 6.2ZM9.6 15.8V8.2l6.4 3.8-6.4 3.8Z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@loremm.hospitalit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af67]/40 text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:text-[#5ec8ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M19.3 7.1a5.8 5.8 0 0 1-3.6-1.2v8.2a5.9 5.9 0 1 1-5.1-5.8v3a2.9 2.9 0 1 0 2.2 2.8V2h3a5.8 5.8 0 0 0 3.5 2.6v2.5Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/loremmhospitality"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af67]/40 text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:text-[#5ec8ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          COMPANY INTRODUCTION
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-[#d4af67]/20 bg-[#090807]">
        <div className="absolute inset-x-0 top-0 h-px bg-[#d4af67]" />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#168ac0]/10 blur-[120px]" />

        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#d4af67]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-[#d4af67]/10 blur-3xl" />

                <div className="relative rounded-full border border-[#d4af67]/40 bg-[#11100d] p-3 shadow-[0_0_80px_rgba(212,175,103,0.12)]">
                  <Image
                    src="/loremm-logo.jpg"
                    alt="LOREMM"
                    width={500}
                    height={500}
                    className="h-56 w-56 rounded-full object-cover sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#5ec8ff]" />

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#5ec8ff]">
                  Professional Hospitality Management
                </p>
              </div>

              <h1 className="mt-5 text-6xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-8xl lg:text-[9rem]">
                LOREMM
              </h1>

              <p className="mt-5 max-w-3xl text-base font-bold uppercase tracking-[0.08em] text-[#d4af67] sm:text-lg lg:text-xl">
                HOSPITALITY MANAGEMENT &amp; CONSULTING LTD
              </p>

              <div className="mt-7 h-px w-28 bg-gradient-to-r from-[#d4af67] to-transparent" />

              <p className="mt-7 max-w-4xl text-lg leading-8 text-[#c9c0b1] sm:text-xl">
                Professional hotel management, operational improvement and
                strategic hospitality consulting designed to help owners
                achieve stronger performance, better service and sustainable
                growth.
              </p>

              <p className="mt-7 border-l-2 border-[#5ec8ff] pl-5 text-sm font-bold uppercase tracking-[0.1em] text-[#f7f1e5] sm:text-base">
                We manage your hotel, you enjoy the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOTEL OWNERS
      ========================================================== */}
      <section className="relative overflow-hidden border-y border-[#d4af67]/30 bg-[#070605] text-[#f7f1e5]">
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#d4af67]/10 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#d4af67]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-14 bg-[#d4af67]" />

              <p className="text-base font-bold uppercase tracking-[0.16em] text-[#d4af67] sm:text-lg lg:text-xl">
                LOREMM HOSPITALITY MANAGEMENT
              </p>
            </div>

            <h2 className="mt-7 text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] text-[#d4af67] sm:text-7xl lg:text-[6.5rem]">
              HOTEL OWNERS
              <span className="block text-[#f7f1e5]">
                WHO NEED OUR SERVICES.
              </span>
            </h2>

            <div className="mt-8 h-[2px] w-full max-w-4xl bg-gradient-to-r from-[#d4af67] via-[#d4af67]/50 to-transparent" />

            <p className="mt-8 max-w-3xl text-lg font-normal leading-8 text-[#bcb4a6] sm:text-xl">
              Is your hotel ready for better management? Whether you are
              looking for professional oversight, stronger operations,
              improved profitability or complete peace of mind, LOREMM is
              ready to manage the difference.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
            <div className="group">
              <h3 className="text-3xl font-bold uppercase leading-[1] tracking-[-0.02em] text-[#d4af67] sm:text-4xl lg:text-[2.55rem]">
                OWNERS WHO DO NOT HAVE ENOUGH TIME
              </h3>

              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-[#a7a094] sm:text-lg">
                Hotel owners who are busy with other businesses or personal
                activities and cannot dedicate the time required to manage the
                hotel effectively.
              </p>
            </div>

            <div className="group">
              <h3 className="text-3xl font-bold uppercase leading-[1] tracking-[-0.02em] text-[#d4af67] sm:text-4xl lg:text-[2.55rem]">
                OWNERS WHO LIVE OUTSIDE THE STATE OR COUNTRY
              </h3>

              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-[#a7a094] sm:text-lg">
                Owners who are not always around to supervise their hotel and
                need a trusted professional company to manage the property on
                their behalf.
              </p>
            </div>

            <div className="group">
              <h3 className="text-3xl font-bold uppercase leading-[1] tracking-[-0.02em] text-[#d4af67] sm:text-4xl lg:text-[2.55rem]">
                OWNERS WHO ARE NOT MAKING ENOUGH PROFIT
              </h3>

              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-[#a7a094] sm:text-lg">
                Hotel owners whose business is not performing well and need
                better management, marketing, cost control and commercial
                strategy.
              </p>
            </div>

            <div className="group">
              <h3 className="text-3xl font-bold uppercase leading-[1] tracking-[-0.02em] text-[#d4af67] sm:text-4xl lg:text-[2.55rem]">
                OWNERS WHO WANT TO IMPROVE THEIR HOTEL
              </h3>

              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-[#a7a094] sm:text-lg">
                Owners who want to increase bookings, improve services,
                strengthen their team, control costs and make their hotel more
                profitable.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-[#d4af67]/30 pt-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-3xl text-2xl font-bold uppercase leading-tight sm:text-3xl">
                YOUR HOTEL DESERVES
                <span className="text-[#d4af67]"> BETTER MANAGEMENT.</span>
              </p>

              <Link
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#d4af67] px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#090807] transition hover:bg-[#f0d28d] hover:shadow-[0_0_30px_rgba(212,175,103,0.2)]"
              >
                Talk To LOREMM
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN COMMERCIAL HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#090807]">
        <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-[#d4af67]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ec8ff]">
                The LOREMM Difference
              </p>

              <h2 className="mt-6 text-5xl font-bold uppercase leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                WE MANAGE
                <span className="block text-[#d4af67]">YOUR HOTEL.</span>
                <span className="block">YOU ENJOY</span>
                <span className="block text-[#5ec8ff]">THE RESULT.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg font-normal leading-8 text-[#aaa193]">
                We take the pressure of hotel management away from owners and
                bring professional structure, accountability, operational
                discipline and commercial thinking into the business.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 rounded-full bg-[#d4af67] px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#090807] transition hover:bg-[#f0d28d]"
                >
                  Explore Our Services
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-[#f7f1e5]/25 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#f7f1e5] transition hover:border-[#5ec8ff] hover:text-[#5ec8ff]"
                >
                  Talk To LOREMM
                </Link>
              </div>
            </div>

            <div className="border-l-2 border-[#d4af67] pl-7 sm:pl-10">
              <p className="text-3xl font-bold uppercase leading-tight">
                MANAGE BETTER.
              </p>

              <p className="mt-4 text-3xl font-bold uppercase leading-tight text-[#d4af67]">
                PERFORM BETTER.
              </p>

              <p className="mt-4 text-3xl font-bold uppercase leading-tight text-[#5ec8ff]">
                GROW BETTER.
              </p>

              <div className="mt-10 h-px bg-[#f7f1e5]/10" />

              <p className="mt-7 text-sm font-normal leading-7 text-[#aaa193]">
                Professional hospitality management built around operational
                excellence, guest satisfaction and sustainable commercial
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BANNER 1
      ========================================================== */}
      <section className="bg-[#11100d]">
        <Image
          src="/loremm-banner-1.jpg"
          alt="LOREMM Hospitality Management"
          width={1800}
          height={700}
          className="h-auto w-full object-cover"
        />
      </section>

      {/* =========================================================
          ABOUT
      ========================================================== */}
      <section id="about" className="bg-[#f4eee2] text-[#11100d]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-28">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-12 bg-[#168ac0]" />

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#168ac0]">
                About LOREMM
              </p>
            </div>

            <h2 className="mt-6 text-5xl font-bold uppercase leading-[0.92] tracking-[-0.035em] sm:text-7xl">
              PROFESSIONAL
              <span className="block text-[#9b7834]">MANAGEMENT.</span>
            </h2>
          </div>

          <div>
            <p className="text-xl font-semibold leading-9 text-[#302d28] sm:text-2xl">
              LOREMM Hospitality Management and Consulting Ltd provides
              professional hotel management and consulting solutions for
              owners who want stronger operations, better guest experiences
              and sustainable business growth.
            </p>

            <p className="mt-8 font-normal leading-8 text-[#5d574d]">
              We combine hospitality expertise, operational discipline and
              commercial thinking to help hotel businesses become more
              efficient, competitive and profitable.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="border-l-2 border-[#9b7834] pl-5">
                <Building2 className="text-[#168ac0]" size={26} />

                <h3 className="mt-4 font-bold uppercase">
                  Operational Excellence
                </h3>

                <p className="mt-2 text-sm font-normal leading-7 text-[#6b6459]">
                  Better systems, stronger accountability and disciplined hotel
                  operations.
                </p>
              </div>

              <div className="border-l-2 border-[#9b7834] pl-5">
                <TrendingUp className="text-[#168ac0]" size={26} />

                <h3 className="mt-4 font-bold uppercase">
                  Sustainable Growth
                </h3>

                <p className="mt-2 text-sm font-normal leading-7 text-[#6b6459]">
                  Practical strategies designed to improve performance and
                  commercial results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="bg-[#090807]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ec8ff]">
                What We Do
              </p>

              <h2 className="mt-5 text-5xl font-bold uppercase leading-[0.92] tracking-[-0.035em] sm:text-7xl">
                OUR
                <span className="text-[#d4af67]"> SERVICES.</span>
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.08em] text-[#d4af67] transition hover:text-[#5ec8ff]"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-16 grid gap-0 md:grid-cols-2">
            <div className="border-t border-[#d4af67]/30 py-10 md:border-r md:pr-12">
              <p className="text-sm font-bold text-[#5ec8ff]">01</p>

              <h3 className="mt-4 text-3xl font-bold uppercase">
                Hotel Management
              </h3>

              <p className="mt-4 font-normal leading-8 text-[#aaa193]">
                Professional oversight of hotel operations, teams, guest
                experience and business performance.
              </p>
            </div>

            <div className="border-t border-[#d4af67]/30 py-10 md:pl-12">
              <p className="text-sm font-bold text-[#5ec8ff]">02</p>

              <h3 className="mt-4 text-3xl font-bold uppercase">
                Staff &amp; Management Training
              </h3>

              <p className="mt-4 font-normal leading-8 text-[#aaa193]">
                Practical training that develops capable teams and stronger
                hospitality leadership.
              </p>
            </div>

            <div className="border-t border-[#d4af67]/30 py-10 md:border-r md:pr-12">
              <p className="text-sm font-bold text-[#5ec8ff]">03</p>

              <h3 className="mt-4 text-3xl font-bold uppercase">
                Revenue &amp; Performance
              </h3>

              <p className="mt-4 font-normal leading-8 text-[#aaa193]">
                Performance-focused strategies to improve revenue, occupancy,
                cost control and profitability.
              </p>
            </div>

            <div className="border-t border-[#d4af67]/30 py-10 md:pl-12">
              <p className="text-sm font-bold text-[#5ec8ff]">04</p>

              <h3 className="mt-4 text-3xl font-bold uppercase">
                Operational Consulting
              </h3>

              <p className="mt-4 font-normal leading-8 text-[#aaa193]">
                Targeted solutions for hotels that need operational
                restructuring, improvement or strategic direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BANNER 2
      ========================================================== */}
      <section className="bg-[#11100d]">
        <Image
          src="/loremm-banner-2.jpg"
          alt="LOREMM Hospitality Consulting"
          width={1800}
          height={700}
          className="h-auto w-full object-cover"
        />
      </section>

      {/* =========================================================
          VISION / MISSION
      ========================================================== */}
      <section className="bg-[#f4eee2] text-[#11100d]">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
          <div className="border-b border-[#9b7834]/30 pb-12 lg:border-b-0 lg:border-r lg:pr-16">
            <Globe2 className="text-[#168ac0]" size={32} />

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#168ac0]">
              Our Vision
            </p>

            <h2 className="mt-5 text-3xl font-bold uppercase leading-tight sm:text-4xl">
              TRUSTED HOSPITALITY PARTNERSHIP.
            </h2>

            <p className="mt-6 font-normal leading-8 text-[#5d574d]">
              To become a trusted hospitality management partner known for
              operational excellence, professional leadership and sustainable
              business results.
            </p>
          </div>

          <div className="pt-12 lg:pl-16 lg:pt-0">
            <Target className="text-[#168ac0]" size={32} />

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#168ac0]">
              Our Mission
            </p>

            <h2 className="mt-5 text-3xl font-bold uppercase leading-tight sm:text-4xl">
              BETTER SYSTEMS. BETTER SERVICE. BETTER RESULTS.
            </h2>

            <p className="mt-6 font-normal leading-8 text-[#5d574d]">
              To provide hotel owners with the expertise, systems and
              management discipline required to operate efficiently, serve
              guests exceptionally and grow profitably.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================== */}
      <section id="approach" className="bg-[#090807]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ec8ff]">
              Our Approach
            </p>

            <h2 className="mt-5 text-5xl font-bold uppercase leading-[0.92] tracking-[-0.035em] sm:text-7xl">
              SIMPLE.
              <span className="block text-[#d4af67]">DISCIPLINED.</span>
              RESULTS-DRIVEN.
            </h2>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <div>
              <span className="text-5xl font-bold text-[#d4af67]">01</span>

              <h3 className="mt-5 text-2xl font-bold uppercase">Assess</h3>

              <p className="mt-4 font-normal leading-8 text-[#aaa193]">
                We understand your hotel, identify operational weaknesses and
                establish clear priorities.
              </p>
            </div>

            <div>
              <span className="text-5xl font-bold text-[#d4af67]">02</span>

              <h3 className="mt-5 text-2xl font-bold uppercase">Improve</h3>

              <p className="mt-4 font-normal leading-8 text-[#aaa193]">
                We introduce practical systems, stronger management and better
                ways of working.
              </p>
            </div>

            <div>
              <span className="text-5xl font-bold text-[#d4af67]">03</span>

              <h3 className="mt-5 text-2xl font-bold uppercase">Grow</h3>

              <p className="mt-4 font-normal leading-8 text-[#aaa193]">
                We focus on performance, profitability and sustainable
                long-term business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BANNER 3
      ========================================================== */}
      <section className="bg-[#11100d]">
        <Image
          src="/loremm-banner-3.jpg"
          alt="LOREMM Hospitality Management and Consulting"
          width={1800}
          height={700}
          className="h-auto w-full object-cover"
        />
      </section>

      {/* =========================================================
          WHO WE SERVE
      ========================================================== */}
      <section className="border-t border-[#d4af67]/20 bg-[#11100d]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ec8ff]">
                Who We Serve
              </p>

              <h2 className="mt-5 text-5xl font-bold uppercase leading-[0.92] tracking-[-0.035em] sm:text-7xl">
                BUILT AROUND
                <span className="block text-[#d4af67]">OWNERS.</span>
              </h2>
            </div>

            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-t border-[#d4af67]/30 py-8 sm:pr-8">
                <Users className="text-[#5ec8ff]" size={26} />

                <h3 className="mt-5 text-xl font-bold uppercase">
                  Hotel Owners
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-[#aaa193]">
                  Owners who want professional oversight and stronger
                  performance.
                </p>
              </div>

              <div className="border-t border-[#d4af67]/30 py-8 sm:pl-8">
                <Building2 className="text-[#5ec8ff]" size={26} />

                <h3 className="mt-5 text-xl font-bold uppercase">
                  Hotel Investors
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-[#aaa193]">
                  Investors who need dependable operational management for
                  hospitality assets.
                </p>
              </div>

              <div className="border-t border-[#d4af67]/30 py-8 sm:pr-8">
                <TrendingUp className="text-[#5ec8ff]" size={26} />

                <h3 className="mt-5 text-xl font-bold uppercase">
                  Growing Hotels
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-[#aaa193]">
                  Hotels ready to improve systems, service and commercial
                  performance.
                </p>
              </div>

              <div className="border-t border-[#d4af67]/30 py-8 sm:pl-8">
                <CheckCircle2 className="text-[#5ec8ff]" size={26} />

                <h3 className="mt-5 text-xl font-bold uppercase">
                  Challenged Properties
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-[#aaa193]">
                  Hotels that need structure, accountability and a practical
                  turnaround approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================== */}
      <section id="values" className="bg-[#f4eee2] text-[#11100d]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#168ac0]">
            Our Values
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-bold uppercase leading-[0.92] tracking-[-0.035em] sm:text-7xl">
            HOW WE
            <span className="text-[#9b7834]"> WORK.</span>
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-t-2 border-[#9b7834] pt-7">
              <h3 className="text-xl font-bold uppercase">Integrity</h3>

              <p className="mt-4 text-sm font-normal leading-7 text-[#5d574d]">
                We operate with honesty, transparency and accountability.
              </p>
            </div>

            <div className="border-t-2 border-[#9b7834] pt-7">
              <h3 className="text-xl font-bold uppercase">Excellence</h3>

              <p className="mt-4 text-sm font-normal leading-7 text-[#5d574d]">
                We continuously seek better standards and stronger results.
              </p>
            </div>

            <div className="border-t-2 border-[#9b7834] pt-7">
              <h3 className="text-xl font-bold uppercase">Accountability</h3>

              <p className="mt-4 text-sm font-normal leading-7 text-[#5d574d]">
                We take responsibility for performance and execution.
              </p>
            </div>

            <div className="border-t-2 border-[#9b7834] pt-7">
              <h3 className="text-xl font-bold uppercase">Growth</h3>

              <p className="mt-4 text-sm font-normal leading-7 text-[#5d574d]">
                We focus on sustainable improvement for owners, teams and
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================== */}
      <section id="contact" className="bg-[#090807]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5ec8ff]">
                Start A Conversation
              </p>

              <h2 className="mt-5 text-5xl font-bold uppercase leading-[0.92] tracking-[-0.035em] sm:text-7xl">
                LET&apos;S MAKE
                <span className="block text-[#d4af67]">
                  YOUR HOTEL BETTER.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl font-normal leading-8 text-[#aaa193]">
                Whether you need complete hotel management, operational
                improvement, staff training or strategic consulting, LOREMM is
                ready to discuss your property and your goals.
              </p>
            </div>

            <div className="border-t border-[#d4af67]/30 pt-8">
              <div className="flex gap-5 border-b border-[#d4af67]/20 py-6">
                <Mail className="shrink-0 text-[#d4af67]" size={22} />

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5ec8ff]">
                    Email
                  </p>

                  <p className="mt-2 text-sm text-[#f7f1e5]">
                    Loremmgroup01@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5 border-b border-[#d4af67]/20 py-6">
                <Phone className="shrink-0 text-[#d4af67]" size={22} />

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5ec8ff]">
                    Phone
                  </p>

                  <p className="mt-2 text-sm text-[#f7f1e5]">
                    +234 806 255 6518
                  </p>

                  <p className="mt-2 text-sm text-[#f7f1e5]">
                    +234 708 534 5098
                  </p>
                </div>
              </div>

              <div className="flex gap-5 py-6">
                <Building2 className="shrink-0 text-[#d4af67]" size={22} />

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5ec8ff]">
                    Office
                  </p>

                  <p className="mt-2 text-sm font-normal leading-7 text-[#f7f1e5]">
                    No. 6, Chief Steve Onu Street,
                    <br />
                    Achike Udenwa Estate,
                    <br />
                    New Owerri, Owerri,
                    <br />
                    Imo State, Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-[#d4af67]/20 bg-[#060504]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="text-xl font-bold tracking-[0.1em] text-[#f7f1e5]">
              LOREMM
            </p>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-[#d4af67]">
              Hospitality Management &amp; Consulting Ltd
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.06em] text-[#777064]">
            We manage your hotel, you enjoy the result.
          </p>
        </div>
      </footer>
    </main>
  );
}
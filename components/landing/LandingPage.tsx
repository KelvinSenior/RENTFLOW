"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Package,
  Sparkles,
  Truck,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Bookings under control",
    description: "Schedule events, track deposits, and manage returns from one flow.",
  },
  {
    icon: Package,
    title: "Inventory intelligence",
    description: "Know what is available, rented, or in maintenance in real time.",
  },
  {
    icon: Truck,
    title: "Deliveries & dispatch",
    description: "Coordinate pickups, drop-offs, and field operations without chaos.",
  },
  {
    icon: Wallet,
    title: "Finance visibility",
    description: "Payments, expenses, and revenue insights built for rental teams.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <main className="relative -mx-4 min-h-[100dvh] overflow-hidden bg-[#070d1b] text-zinc-100 md:-mx-6 lg:-mx-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_42%),radial-gradient(circle_at_85%_20%,rgba(99,102,241,0.2),transparent_38%),linear-gradient(160deg,#040912_0%,#0a1324_45%,#090f1a_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25" />
        <motion.div
          className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 bottom-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-12 pt-8 md:px-6 md:pt-12 lg:px-8 lg:pb-16">
        <motion.header
          {...fadeUp}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-between"
        >
          <div className="inline-flex items-center gap-3">
            <div
              aria-hidden
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 text-sm font-bold text-slate-950 shadow-[0_8px_24px_rgba(14,165,233,0.35)]"
            >
              RF
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-cyan-100">RENTFLOW</p>
              <p className="text-xs text-zinc-400">Event rental operations</p>
            </div>
          </div>
          <Link
            href="/login"
            className="hidden rounded-xl border border-cyan-200/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-white/10 sm:inline-flex"
          >
            Sign in
          </Link>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <motion.section
            {...fadeUp}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-100">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Built for modern event rental businesses
            </div>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Smart rental management for teams that move fast.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              RENTFLOW helps you run bookings, inventory, deliveries, and finance in one premium
              operational workspace — designed mobile-first for crews in the field.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/signup"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-6 text-base font-semibold text-slate-950 shadow-[0_8px_28px_rgba(14,165,233,0.45)] transition hover:brightness-105"
              >
                Create account
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/login"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-cyan-200/20 bg-white/5 px-6 text-base font-semibold text-cyan-100 transition hover:bg-white/10"
              >
                Sign in
              </Link>
            </div>

            <p className="text-sm text-zinc-400">
              Set up your workspace in minutes, then sign in to start managing rentals.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-500/10 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-cyan-200/15 bg-white/10 p-5 shadow-[0_24px_48px_rgba(2,6,23,0.5)] backdrop-blur-2xl sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Operations preview</p>
                <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-medium text-emerald-200">
                  Live
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-200/15 bg-slate-950/50 p-4 sm:col-span-2">
                  <p className="text-xs text-zinc-400">Today&apos;s revenue</p>
                  <p className="mt-2 text-3xl font-semibold text-cyan-200">$18,420</p>
                  <p className="mt-1 text-xs text-emerald-300">+12.4% vs last week</p>
                </div>
                <div className="rounded-2xl border border-zinc-700/70 bg-slate-950/45 p-4">
                  <p className="text-xs text-zinc-400">Active bookings</p>
                  <p className="mt-2 text-2xl font-semibold">124</p>
                </div>
                <div className="rounded-2xl border border-zinc-700/70 bg-slate-950/45 p-4">
                  <p className="text-xs text-zinc-400">Deliveries today</p>
                  <p className="mt-2 text-2xl font-semibold">18</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {["Sound system package", "Marquee tent 10x20", "LED uplighting kit"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm"
                  >
                    <span className="text-zinc-200">{item}</span>
                    <span className="text-xs text-cyan-200">Reserved</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.24 + index * 0.05 }}
                className="rounded-2xl border border-cyan-200/10 bg-white/[0.04] p-4 backdrop-blur-sm"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <h2 className="mt-3 text-sm font-semibold text-white">{feature.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{feature.description}</p>
              </motion.article>
            );
          })}
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="border-t border-cyan-200/10 pt-6 text-center text-xs text-zinc-500 sm:text-left"
        >
          Premium operational software for event rental businesses.
        </motion.footer>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-24 text-white flex items-center">

      {/* Background Logo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/logos/health206-logo.png"
          alt="Health 206 Background"
          width={1000}
          height={1000}
          className="absolute right-[-150px] top-1/2 -translate-y-1/2 opacity-5 blur-sm scale-125"
          priority
        />
      </div>

      {/* Glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            Future of Healthcare
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
            Your Complete
            <span className="text-cyan-400"> Digital </span>
            Health Companion
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Securely store medical records, manage medicine reminders,
            appointments, insurance and emergency information—all in one
            intelligent platform.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="/signup"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>

            <a
              href="#features"
              className="rounded-xl border border-cyan-500 px-8 py-4 text-cyan-400 transition hover:bg-cyan-500/10"
            >
              Learn More
            </a>

          </div>

          <div className="mt-14 grid grid-cols-2 gap-5">

            <div className="rounded-xl bg-slate-900 p-5">
              <h3 className="text-3xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="mt-2 text-slate-400">
                Secure Storage
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-5">
              <h3 className="text-3xl font-bold text-cyan-400">
                24/7
              </h3>
              <p className="mt-2 text-slate-400">
                Emergency Access
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
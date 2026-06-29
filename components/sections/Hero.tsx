
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-slate-950 text-white flex items-center pt-24">

  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <Image
      src="/logos/health206-logo.png"
      alt="Health 206 Background"
      width={1000}
      height={1000}
      className="absolute right-[-150px] top-1/2 -translate-y-1/2 opacity-5 blur-sm scale-125"
      priority
    />
  </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

          <p className="text-cyan-400 uppercase tracking-[6px] text-sm font-semibold">
            Future of Healthcare
          </p>

          <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight">
            Your Complete
            <span className="text-cyan-400"> Digital </span>
            Health Companion
          </h1>

          <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
            Securely store medical records, manage medicine reminders,
            appointments, insurance and emergency information—all in one
            intelligent platform.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition">

              Get Started

              <ArrowRight size={20} />

            </button>

            <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500/10 transition">

              Learn More

            </button>

          </div>

          <div className="grid grid-cols-2 gap-5 mt-14">

            <div className="bg-slate-900 p-5 rounded-xl">
              <h3 className="text-3xl font-bold text-cyan-400">
                100%
              </h3>

              <p className="text-slate-400 mt-2">
                Secure Storage
              </p>
            </div>

            <div className="bg-slate-900 p-5 rounded-xl">
              <h3 className="text-3xl font-bold text-cyan-400">
                24/7
              </h3>

              <p className="text-slate-400 mt-2">
                Emergency Access
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logos/health206-logo.png"
            alt="Health 206"
            width={45}
            height={45}
            priority
          />

          <span className="text-2xl font-bold text-white">
            Health 206
          </span>

        </Link>

        <div className="hidden md:flex gap-8 text-slate-300">

          <a href="#features">Features</a>

          <a href="#about">About</a>

          <a href="#contact">Contact</a>

        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-xl text-white">
          Login
        </button>

      </nav>
    </header>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

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

        <div className="hidden md:flex items-center gap-8 text-slate-300">

          <a
            href="#features"
            className="transition hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#about"
            className="transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition hover:text-cyan-400"
          >
            Contact
          </a>

        </div>

        <div className="flex items-center gap-3">

          <Link
            href="/signup"
            className="hidden rounded-xl border border-cyan-500 px-5 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-white md:block"
          >
            Sign Up
          </Link>

          <Link
            href="/login"
            className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-400"
          >
            Login
          </Link>

        </div>

      </nav>
    </header>
  );
}
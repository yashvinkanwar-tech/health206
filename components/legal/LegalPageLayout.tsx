import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LEGAL_NAV = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#05080f]">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-cyan-500/10 bg-[#070b14]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
          >
            <div className="flex items-center gap-3">
  <Image
   src="/logos/health206-logo.png"
    alt="Health 206 Logo"
    width={40}
    height={40}
    priority
    className="rounded-full"
  />

  <div className="leading-tight">
    <h2 className="text-lg font-bold text-white">
      Health <span className="text-cyan-400">206</span>
    </h2>
    <p className="text-[11px] text-slate-400">
      India's Digital Health Companion
    </p>
  </div>
</div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Page hero */}
      <div className="border-b border-white/5 bg-linear-to-b from-[#0b1220] to-[#05080f]">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated:{" "}
            <time className="text-slate-400">{lastUpdated}</time>
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="space-y-10 text-slate-300">{children}</div>
      </main>

      {/* Bottom legal nav */}
      <footer className="border-t border-white/5 bg-[#070b14]">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-600">
            Legal Documents
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-8 text-xs text-slate-700">
            &copy; {new Date().getFullYear()} Health 206. All rights reserved.
            Health 206 is a health information management platform and does not
            provide medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
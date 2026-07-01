import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400">
              Health 206
            </h3>

            <p className="mt-3 text-slate-400">
              India's Digital Health Companion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms-and-conditions">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/disclaimer">
                  Disclaimer
                </Link>
              </li>

              <li>
                <Link href="/cookie-policy">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">
              Contact
            </h4>

            <p className="text-slate-400">
              📧 info@health206.com
            </p>

            <p className="mt-2 text-slate-400">
              Gurugram, Haryana, India
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-500">
          © {new Date().getFullYear()} Health 206. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
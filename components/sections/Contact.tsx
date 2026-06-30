"use client";

import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Contact Us
          </h2>

          <p className="mt-4 text-slate-400">
            We'd love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h3 className="mb-8 text-2xl font-semibold">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" size={24} />

                <div>
                  <p className="text-slate-400">Email</p>

                  <a
                    href="mailto:info@health206.com"
                    className="text-lg text-white hover:text-cyan-400"
                  >
                    info@health206.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" size={24} />

                <div>
                  <p className="text-slate-400">Location</p>

                  <p className="text-white">
                    Gurugram, Haryana, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h3 className="mb-6 text-2xl font-semibold">
              Send us a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-400"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
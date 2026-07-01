"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess("Your message has been sent successfully.");

      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Unable to send message.");
    }

    setLoading(false);
  }

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
            We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h3 className="mb-8 text-2xl font-semibold">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />

                <div>
                  <p className="text-slate-400">
                    Email
                  </p>

                  <a
                    href="mailto:info@health206.com"
                    className="text-white hover:text-cyan-400"
                  >
                    info@health206.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />

                <div>
                  <p className="text-slate-400">
                    Location
                  </p>

                  <p>
                    Gurugram, Haryana, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h3 className="mb-6 text-2xl font-semibold">
              Send us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />

              {success && (
                <p className="text-green-400">
                  {success}
                </p>
              )}

              {error && (
                <p className="text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-400 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
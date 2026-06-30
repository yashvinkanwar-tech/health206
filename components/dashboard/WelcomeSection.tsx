interface WelcomeSectionProps {
  fullName: string;
  email: string;
}

export default function WelcomeSection({
  fullName,
  email,
}: WelcomeSectionProps) {
  const displayName = fullName?.trim() || "there";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-[#0b1220] to-[#0a0f1a] p-6 sm:p-8 shadow-xl">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
          Welcome Back
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {displayName} 👋
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          {email}
        </p>

        <p className="mt-4 text-sm text-slate-300">
          Your health information is secure and always available whenever you need it.
        </p>

        <div className="mt-6 inline-flex rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          📅 {today}
        </div>
      </div>
    </section>
  );
}
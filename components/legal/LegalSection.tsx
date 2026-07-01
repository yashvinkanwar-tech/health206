interface LegalSectionProps {
  heading: string;
  children: React.ReactNode;
}

export default function LegalSection({ heading, children }: LegalSectionProps) {
  return (
    <section className="rounded-2xl border border-white/5 bg-[#0b1220] p-6 sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-white sm:text-xl">
        {heading}
      </h2>
      <div className="space-y-3 text-sm leading-7 text-slate-400">{children}</div>
    </section>
  );
}
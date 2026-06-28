export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">

        <p className="text-cyan-400 uppercase tracking-[8px]">
          Future of Healthcare
        </p>

        <h1 className="text-7xl font-black text-white mt-6">
          Health 206
        </h1>

        <p className="text-slate-400 mt-6 text-xl max-w-2xl mx-auto">
          Store medical records, manage medicines, book appointments,
          insurance and emergency information in one secure platform.
        </p>

        <div className="mt-12 flex justify-center gap-6">

          <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl font-bold transition">
            Get Started
          </button>

          <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}
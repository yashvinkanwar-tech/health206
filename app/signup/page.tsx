export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl">

        <div className="flex justify-center mb-6">
          <img
            src="/logos/health206-logo.png"
            alt="Health 206"
            className="w-20 h-20"
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-white">
          Create Account
        </h1>

        <p className="text-center text-slate-400 mt-2">
          Join Health 206 today
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
          />

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-400 py-3 rounded-xl text-white font-semibold"
          >
            Create Account
          </button>

        </form>

      </div>
    </main>
  );
}
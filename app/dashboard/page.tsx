export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold">
          Welcome to Health 206 👋
        </h1>

        <p className="text-slate-400 mt-2">
          Your Digital Health Dashboard
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900">
            <h2 className="text-xl font-semibold">
              Medical Records
            </h2>

            <p className="text-slate-400 mt-2">
              No records uploaded yet.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900">
            <h2 className="text-xl font-semibold">
              Medicine Reminder
            </h2>

            <p className="text-slate-400 mt-2">
              No reminders added.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900">
            <h2 className="text-xl font-semibold">
              Emergency Card
            </h2>

            <p className="text-slate-400 mt-2">
              Create your emergency profile.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
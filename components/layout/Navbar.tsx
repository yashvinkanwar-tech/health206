export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          Health 206
        </h1>

        <div className="hidden md:flex gap-8 text-white">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-lg text-white transition">
          Login
        </button>

      </div>
    </nav>
  );
}

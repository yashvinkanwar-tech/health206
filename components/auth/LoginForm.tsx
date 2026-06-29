"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      <div>
        <label className="block text-slate-300 mb-2">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
          required
        />
      </div>

      <div>
        <label className="block text-slate-300 mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
          required
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-600 transition py-3 rounded-xl font-semibold text-white"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
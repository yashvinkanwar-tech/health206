"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
       options: {
           emailRedirectTo: "http://localhost:3000/login",
            data: {
               full_name: fullName,
  },
},
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage(
      "Account created successfully! Please check your email to verify your account."
    );

    setLoading(false);

    setTimeout(() => {
      router.push("/login");
    }, 3000);
  }

  return (
    <form onSubmit={handleSignup} className="space-y-5">
      <div>
        <label className="block text-slate-300 mb-2">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-slate-300 mb-2">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-slate-300 mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
          required
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

      {message && (
        <p className="text-green-500 text-sm">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-600 transition py-3 rounded-xl font-semibold text-white"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}
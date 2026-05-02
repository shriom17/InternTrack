"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    const { data, error: err } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (err) {
      setError(err.message || "Login failed.");
      return;
    }

    // On success, redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        <div className="bg-white dark:bg-[#071022] rounded-2xl shadow-2xl p-8">
          <h1 className="text-2xl font-semibold mb-4 text-sky-900 dark:text-sky-100">Welcome back</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-zinc-600 dark:text-zinc-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-400 outline-none bg-white/80 dark:bg-transparent text-sky-900 dark:text-sky-100"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-zinc-600 dark:text-zinc-300">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-400 outline-none bg-white/80 dark:bg-transparent text-sky-900 dark:text-sky-100"
                placeholder="Password"
                required
              />
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-full shadow-lg disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">Don't have an account? <Link href="/signup" className="text-sky-600 dark:text-sky-300 font-semibold">Sign up</Link></p>
        </div>

        <aside className="hidden md:flex flex-col justify-center p-8 rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-600 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-3">Welcome back</h2>
          <p className="text-sm opacity-90">Access exclusive internships and manage your applications in one place.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>• Saved jobs</li>
            <li>• Application tracking</li>
            <li>• Company insights</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

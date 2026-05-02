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
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-md bg-white dark:bg-[#0b0b0b] p-8 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-transparent text-black dark:text-zinc-50"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-transparent text-black dark:text-zinc-50"
              placeholder="Password"
              required
            />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-foreground text-white rounded disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
          Don't have an account? <Link href="/signup" className="text-blue-600">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

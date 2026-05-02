"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function SignupPage() {
	const router = useRouter();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccess("");

		if (!email || !password) {
			setError("Email and password are required.");
			return;
		}
		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		setLoading(true);
		const { data, error: err } = await supabase.auth.signUp(
			{ email, password },
			{ data: { full_name: name } }
		);

		setLoading(false);
		if (err) {
			setError(err.message || "Signup failed.");
			return;
		}

		setSuccess("Signup successful. Check your email to confirm.");
		// Optional: redirect to login or dashboard after short delay
		setTimeout(() => router.push("/login"), 1200);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
			<div className="w-full max-w-md bg-white dark:bg-[#0b0b0b] p-8 rounded shadow">
				<h1 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Signup</h1>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">Full name</label>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full px-3 py-2 border rounded bg-transparent text-black dark:text-zinc-50"
							placeholder="Your name"
						/>
					</div>
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
					<div>
						<label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">Confirm password</label>
						<input
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							className="w-full px-3 py-2 border rounded bg-transparent text-black dark:text-zinc-50"
							placeholder="Confirm password"
							required
						/>
					</div>

					{error && <div className="text-sm text-red-600">{error}</div>}
					{success && <div className="text-sm text-green-600">{success}</div>}

					<div>
						<button
							type="submit"
							className="w-full py-2 px-4 bg-foreground text-white rounded disabled:opacity-60"
							disabled={loading}
						>
							{loading ? "Creating..." : "Sign up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

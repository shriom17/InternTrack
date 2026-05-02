"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Navbar() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		let mounted = true;

		async function loadUser() {
			const {
				data: { user: u },
			} = await supabase.auth.getUser();
			if (mounted) setUser(u);
		}

		loadUser();

		const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
			if (session && session.user) setUser(session.user);
			if (!session) setUser(null);
		});

		return () => {
			mounted = false;
			sub?.subscription?.unsubscribe?.();
		};
	}, []);

	const handleLogout = async () => {
		await supabase.auth.signOut();
		setUser(null);
		window.location.href = "/";
	};

	return (
		<nav className="w-full bg-blue-600 shadow-md">
			<div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-4">
				<Link href="/" className="text-xl font-bold text-white">
					InternTrack
				</Link>

				<div className="flex items-center gap-4">
					<Link href="/dashboard" className="text-sm text-white/90">
						Dashboard
					</Link>

					{!user ? (
						<>
							<Link href="/login" className="text-sm text-white/90">
								Login
							</Link>
							<Link href="/signup" className="text-sm text-white font-semibold">
								Sign up
							</Link>
						</>
					) : (
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-2">
								<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
									{user.email ? user.email.charAt(0).toUpperCase() : "U"}
								</div>
								<div className="text-sm text-white/90">{user.email?.split("@")[0]}</div>
							</div>

							<button
								onClick={handleLogout}
								className="text-sm bg-white/10 text-white px-3 py-1 rounded hover:bg-white/20"
							>
								Logout
							</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-full bg-transparent">
			<div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-4">
				<Link href="/" className="text-xl font-bold text-black dark:text-zinc-50">
					InternTrack
				</Link>

				<div className="flex items-center gap-4">
					<Link href="/dashboard" className="text-sm text-zinc-700 dark:text-zinc-300">
						Dashboard
					</Link>
					<Link href="/login" className="text-sm text-zinc-700 dark:text-zinc-300">
						Login
					</Link>
					<Link href="/signup" className="text-sm text-blue-600">
						Sign up
					</Link>
				</div>
			</div>
		</nav>
	);
}

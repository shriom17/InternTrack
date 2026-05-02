"use client";

export default function InternshipCard({ id, title, company, location, stipend, onApply }) {
	return (
		<article className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white via-sky-50 to-white dark:from-[#071022] dark:via-[#062033] dark:to-[#071022] shadow-lg border border-transparent hover:shadow-2xl transition-shadow">
			<div className="p-6 flex gap-4">
				<div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
					{company && company.charAt(0).toUpperCase()}
				</div>

				<div className="flex-1">
					<div className="flex items-start justify-between gap-4">
						<div>
							<h3 className="text-lg font-semibold text-sky-900 dark:text-sky-100">{title}</h3>
							<p className="text-sm text-zinc-600 dark:text-zinc-400">{company} · {location}</p>
						</div>

						<div className="text-sm font-semibold text-sky-700 dark:text-sky-300">{stipend}</div>
					</div>

					<p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Short role summary — responsibilities, tech stack, or perks.</p>

					<div className="mt-4 flex items-center justify-between">
						<div className="flex gap-2">
							<span className="px-2 py-1 text-xs bg-sky-100 text-sky-800 rounded-full">Remote</span>
							<span className="px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded-full">3 months</span>
						</div>

						<button
							onClick={() => onApply && onApply(id)}
							className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-md transition-colors"
						>
							Apply
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}

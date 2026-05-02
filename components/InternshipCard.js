"use client";

export default function InternshipCard({ id, title, company, location, stipend, description, responsibilities, perks, onApply, applied = false }) {
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

							{perks && Array.isArray(perks) && perks.length > 0 && (
								<div className="mt-2 flex gap-2">
									{perks.slice(0, 3).map((p, i) => (
										<span
											key={i}
											className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] bg-sky-50 text-sky-700 dark:bg-sky-800/30 dark:text-sky-100 rounded-md border border-sky-100 dark:border-sky-700/40"
										>
											{p}
										</span>
									))}
								</div>
							)}
						</div>

						<div className="text-sm font-semibold text-sky-700 dark:text-sky-300">{stipend}</div>
					</div>

					{description ? (
						<p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
					) : (
						<p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Short role summary — responsibilities, tech stack, or perks.</p>
					)}

					{responsibilities && (
						<div className="mt-3">
							<p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Responsibilities</p>
							{Array.isArray(responsibilities) ? (
								<ul className="mt-2 list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400">
									{responsibilities.map((r, i) => (
										<li key={i}>{r}</li>
									))}
								</ul>
							) : (
								<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{responsibilities}</p>
							)}
						</div>
					)}

				{perks && (
					<div className="mt-3">
						<p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Perks</p>
						<div className="mt-2 flex flex-wrap gap-2">
							{Array.isArray(perks)
								? perks.map((p, i) => (
									<span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] bg-sky-50 text-sky-700 dark:bg-sky-800/30 dark:text-sky-100 rounded-md border border-sky-100 dark:border-sky-700/40">{p}</span>
								))
								: (
									<span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] bg-sky-50 text-sky-700 dark:bg-sky-800/30 dark:text-sky-100 rounded-md border border-sky-100 dark:border-sky-700/40">{perks}</span>
								)}
						</div>
					</div>
				)}

					<div className="mt-4 flex items-center justify-between">
						<div className="flex gap-2">
							<span className="px-2 py-1 text-xs bg-sky-100 text-sky-800 rounded-full">Remote</span>
							<span className="px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded-full">3 months</span>
						</div>

						{applied ? (
							<div className="px-4 py-2 rounded-full bg-green-600 text-white font-semibold shadow">Applied</div>
						) : (
							<button
								onClick={() => onApply && onApply(id)}
								className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-md transition-colors"
							>
								Apply
							</button>
						)}
					</div>
				</div>
			</div>
		</article>
	);
}

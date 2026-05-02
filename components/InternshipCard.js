"use client";

export default function InternshipCard({ id, title, company, location, stipend, onApply }) {
	return (
		<article className="border rounded p-4 bg-white dark:bg-[#0b0b0b]">
			<div className="flex items-start justify-between">
				<div>
					<h3 className="text-lg font-semibold text-black dark:text-zinc-50">{title}</h3>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">{company} • {location}</p>
				</div>
				<div className="text-sm text-zinc-700 dark:text-zinc-300">{stipend}</div>
			</div>

			<div className="mt-4 flex justify-end">
				<button
					onClick={() => onApply && onApply(id)}
					className="px-3 py-2 bg-foreground text-white rounded"
				>
					Apply
				</button>
			</div>
		</article>
	);
}

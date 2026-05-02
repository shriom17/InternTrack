import InternshipCard from "./InternshipCard";

export default function ApplicationList({ internships = [], onApply }) {
	if (!internships || internships.length === 0) {
		return <div className="text-sm text-zinc-600 dark:text-zinc-400">No internships found.</div>;
	}

	return (
		<div className="grid gap-4">
			{internships.map((item) => (
				<InternshipCard
					key={item.id || item.title}
					id={item.id}
					title={item.title}
					company={item.company}
					location={item.location}
					stipend={item.stipend}
					onApply={onApply}
				/>
			))}
		</div>
	);
}

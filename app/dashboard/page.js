import ApplicationList from "../../components/ApplicationList";

const sample = [
  { id: "1", title: "Frontend Intern", company: "Amazon.", location: "Kolkata", stipend: "40k/mo" },
  { id: "2", title: "Backend Intern", company: "Flipkart", location: "Mumbai", stipend: "32k/mo" },
  { id: "3", title: "Data Intern", company: "Meta", location: "Bengalore", stipend: "80k/mo" },
];

export default function DashboardPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Dashboard</h1>
      <ApplicationList internships={sample} />
    </main>
  );
}

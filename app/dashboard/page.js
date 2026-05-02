import ApplicationList from "../../components/ApplicationList";

const sample = [
  { id: "1", title: "Frontend Intern", company: "Acme Co.", location: "Dhaka", stipend: "10k/mo" },
  { id: "2", title: "Backend Intern", company: "Beta Ltd.", location: "Chittagong", stipend: "12k/mo" },
  { id: "3", title: "Data Intern", company: "Gamma Inc.", location: "Sylhet", stipend: "8k/mo" },
];

export default function DashboardPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Dashboard</h1>
      <ApplicationList internships={sample} />
    </main>
  );
}

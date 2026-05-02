import ApplicationList from "../../components/ApplicationList";

const sample = [
  { id: "1", title: "Frontend Intern", company: "Amazon.", location: "Kolkata", stipend: "40k/mo" },
  { id: "2", title: "Backend Intern", company: "Flipkart", location: "Mumbai", stipend: "32k/mo" },
  { id: "3", title: "Data Intern", company: "Meta", location: "Bengaluru", stipend: "80k/mo" },
  { id: "4", title: "Mobile Dev Intern", company: "Delta Solutions", location: "Hyderabad", stipend: "25k/mo" },
  { id: "5", title: "ML Intern", company: "Epsilon Labs", location: "Pune", stipend: "30k/mo" },
  { id: "6", title: "UX/UI Intern", company: "Zeta Tech", location: "Chennai", stipend: "15k/mo" },
  { id: "7", title: "Product Intern", company: "Omega Partners", location: "Jaipur", stipend: "22k/mo" },
];

export default function DashboardPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Dashboard</h1>
      <ApplicationList internships={sample} />
    </main>
  );
}

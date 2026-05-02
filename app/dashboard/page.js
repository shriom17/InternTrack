"use client";

import { useState } from "react";
import ApplicationList from "../../components/ApplicationList";
import { supabase } from "../../lib/supabaseClient";

const sample = [
  {
    id: "1",
    title: "Frontend Intern",
    company: "Amazon.",
    location: "Kolkata",
    stipend: "40k/mo",
    description: "Work on customer-facing UI features using React and Next.js. Collaborate with designers to implement pixel-perfect interfaces.",
    responsibilities: [
      "Build and maintain frontend components",
      "Optimize UI for performance and accessibility",
      "Work with the design team to implement features",
    ],
    perks: ["Stipend", "Mentorship", "Flexible hours"],
  },
  {
    id: "2",
    title: "Backend Intern",
    company: "Flipkart",
    location: "Mumbai",
    stipend: "32k/mo",
    description: "Support backend services, APIs and data modeling using Node.js and PostgreSQL.",
    responsibilities: [
      "Design and implement RESTful APIs",
      "Write database migrations and queries",
      "Collaborate on system design and testing",
    ],
    perks: ["Stipend", "Company swag", "Learning allowance"],
  },
  {
    id: "3",
    title: "Data Intern",
    company: "Meta",
    location: "Bengaluru",
    stipend: "80k/mo",
    description: "Analyze large datasets to produce insights and build reporting dashboards.",
    responsibilities: [
      "Clean and analyze datasets",
      "Create visualizations and reports",
      "Assist in building ML-ready data pipelines",
    ],
    perks: ["High stipend", "Access to datasets", "Mentorship from seniors"],
  },
  {
    id: "4",
    title: "Mobile Dev Intern",
    company: "Delta Solutions",
    location: "Hyderabad",
    stipend: "25k/mo",
    description: "Build and test mobile features for Android/iOS using React Native or native stacks.",
    responsibilities: [
      "Implement mobile screens and navigation",
      "Ensure app performance on various devices",
      "Write unit and integration tests",
    ],
    perks: ["Device allowance", "Flexible schedule", "Project ownership"],
  },
  {
    id: "5",
    title: "ML Intern",
    company: "Epsilon Labs",
    location: "Pune",
    stipend: "30k/mo",
    description: "Develop and evaluate machine learning models for real-world tasks.",
    responsibilities: [
      "Preprocess data and feature engineering",
      "Train and evaluate ML models",
      "Document experiments and results",
    ],
    perks: ["Research mentorship", "GPU access", "Publication opportunities"],
  },
  {
    id: "6",
    title: "UX/UI Intern",
    company: "Zeta Tech",
    location: "Chennai",
    stipend: "15k/mo",
    description: "Design user flows, mockups, and prototypes for web and mobile.",
    responsibilities: [
      "Create wireframes and visual designs",
      "Conduct user research and testing",
      "Collaborate with developers to ship designs",
    ],
    perks: ["Design mentorship", "Access to design tools", "Portfolio review"],
  },
  {
    id: "7",
    title: "Product Intern",
    company: "Omega Partners",
    location: "Jaipur",
    stipend: "22k/mo",
    description: "Assist product managers with roadmaps, specs and stakeholder coordination.",
    responsibilities: [
      "Help define product requirements",
      "Coordinate with engineering and design",
      "Track metrics and user feedback",
    ],
    perks: ["Cross-functional exposure", "Mentorship", "Certificate of completion"],
  },
];

export default function DashboardPage() {
  const [internships, setInternships] = useState(sample.map((i) => ({ ...i, applied: false })));

  const handleApply = async (id) => {
    // optimistic UI update
    setInternships((prev) => prev.map((it) => (it.id === id ? { ...it, applied: true } : it)));

    // check logged-in user
    const {
      data: { user },
      error: userErr,
    } = await supabase.auth.getUser();

    if (userErr || !user) {
      // revert and redirect to login
      setInternships((prev) => prev.map((it) => (it.id === id ? { ...it, applied: false } : it)));
      window.location.href = "/login";
      return;
    }

    // store in 'applications' table
    const { error } = await supabase.from("applications").insert([
      {
        internship_id: id,
        user_id: user.id,
        user_email: user.email,
      },
    ]);

    if (error) {
      // revert on failure
      setInternships((prev) => prev.map((it) => (it.id === id ? { ...it, applied: false } : it)));
      // More detailed logging for debugging
      console.error("apply error:", error);
      try {
        console.error("apply error (string):", JSON.stringify(error));
      } catch (e) {
        console.error(e);
      }
      alert(error?.message || JSON.stringify(error) || "Could not save application. Try again.");
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Dashboard</h1>
      <ApplicationList internships={internships} onApply={handleApply} />
    </main>
  );
}

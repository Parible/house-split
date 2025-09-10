"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Transaction } from "@/lib/storage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  transactions: Transaction[];
};

export default function ContributionVsExpenseChart({ transactions }: Props) {
  const totalContributions = transactions
    .filter((t) => t.type === "contribution")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const data = {
    labels: ["Contributions", "Expenses"],
    datasets: [
      {
        label: "Amount (₵)",
        data: [totalContributions, totalExpenses],
        backgroundColor: ["#34d399", "#f87171"], // green, red
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Contributions vs Expenses</h2>
      <Bar data={data} />
    </div>
  );
}

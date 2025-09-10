"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Transaction } from "@/lib/storage";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  transactions: Transaction[];
};

export default function ExpenseCategoryChart({ transactions }: Props) {
  const expenses = transactions.filter((t) => t.type === "expense");

  const categories = Array.from(
    new Set(expenses.map((e) => e.category || "Other"))
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: categories.map((c) =>
          expenses
            .filter((e) => e.category === c)
            .reduce((acc, e) => acc + e.amount, 0)
        ),
        backgroundColor: [
          "#f87171", // red
          "#fbbf24", // yellow
          "#34d399", // green
          "#60a5fa", // blue
          "#a78bfa", // purple
          "#f472b6", // pink
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Expenses by Category</h2>
      <Pie data={data} />
    </div>
  );
}

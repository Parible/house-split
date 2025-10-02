// "use client";

// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Transaction } from "@/lib/storage";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// type Props = {
//   transactions: Transaction[];
// };

// export default function ContributionVsExpenseChart({ transactions }: Props) {
//   const totalContributions = transactions
//     .filter((t) => t.type === "contribution")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const totalExpenses = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const data = {
//     labels: ["Contributions", "Expenses"],
//     datasets: [
//       {
//         label: "Amount (₵)",
//         data: [totalContributions, totalExpenses],
//         backgroundColor: ["#34d399", "#f87171"], // green, red
//       },
//     ],
//   };

//   return (
//     <div className="p-4 bg-white rounded shadow">
//       <h2 className="text-lg font-semibold mb-2">Contributions vs Expenses</h2>
//       <Bar data={data} />
//     </div>
//   );
// }

// "use client";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import { Bar, Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement,
//   LineElement
// );

// interface Transaction {
//   type: "contribution" | "expense";
//   amount: number;
//   category?: string;
//   contributor?: string;
//   date?: string;
// }

// interface ChartsSectionProps {
//   transactions: Transaction[];
// }

// export default function ChartsSection({ transactions }: ChartsSectionProps) {
//   // --- Grouping helpers ---
//   const groupByCategory = (type: "contribution" | "expense") =>
//     transactions
//       .filter((t) => t.type === type)
//       .reduce((acc: Record<string, number>, t) => {
//         const key =
//           t.category ||
//           (t.type === "contribution" ? "General" : "Uncategorized");
//         acc[key] = (acc[key] || 0) + t.amount;
//         return acc;
//       }, {});

//   const groupByMonth = () =>
//     transactions.reduce(
//       (acc: Record<string, { contribution: number; expense: number }>, t) => {
//         const date = new Date(t.date || Date.now());
//         const monthLabel = date.toLocaleString("default", {
//           month: "short",
//           year: "numeric",
//         });

//         if (!acc[monthLabel]) acc[monthLabel] = { contribution: 0, expense: 0 };
//         acc[monthLabel][t.type] += t.amount;

//         return acc;
//       },
//       {}
//     );

//   // --- Data transforms ---
//   const expenseCategories = groupByCategory("expense");
//   const contributionCategories = groupByCategory("contribution");
//   const monthlyData = groupByMonth();

//   const expensesData = {
//     labels: Object.keys(expenseCategories),
//     datasets: [
//       {
//         label: "Expenses by Category",
//         data: Object.values(expenseCategories),
//         backgroundColor: "#0099ff",
//         borderRadius: 8,
//       },
//     ],
//   };

//   const contributionsData = {
//     labels: Object.keys(contributionCategories),
//     datasets: [
//       {
//         label: "Contributions by Category",
//         data: Object.values(contributionCategories),
//         backgroundColor: "#22c55e", // green-500
//         borderRadius: 8,
//       },
//     ],
//   };

//   const monthlyLineData = {
//     labels: Object.keys(monthlyData),
//     datasets: [
//       {
//         label: "Contributions",
//         data: Object.values(monthlyData).map((m) => m.contribution),
//         borderColor: "#22c55e",
//         backgroundColor: "rgba(34, 197, 94, 0.2)",
//         tension: 0.3,
//         fill: true,
//       },
//       {
//         label: "Expenses",
//         data: Object.values(monthlyData).map((m) => m.expense),
//         borderColor: "#0099ff",
//         backgroundColor: "rgba(0, 153, 255, 0.2)",
//         tension: 0.3,
//         fill: true,
//       },
//     ],
//   };

//   // --- Chart options ---
//   const commonOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         labels: { color: "#374151" }, // gray-700
//       },
//       title: { display: false },
//     },
//     scales: {
//       x: {
//         ticks: { color: "#6b7280" }, // gray-500
//         grid: { color: "rgba(209,213,219,0.2)" },
//       },
//       y: {
//         ticks: { color: "#6b7280" },
//         grid: { color: "rgba(209,213,219,0.2)" },
//       },
//     },
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto mt-12 space-y-12">
//       {/* Expenses by Category */}
//       {Object.keys(expenseCategories).length >= 4 && (
//         <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Expenses Breakdown
//           </h3>
//           <Bar data={expensesData} options={commonOptions} />
//         </div>
//       )}

//       {/* Contributions by Category */}
//       {Object.keys(contributionCategories).length >= 4 && (
//         <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Contributions Breakdown
//           </h3>
//           <Bar data={contributionsData} options={commonOptions} />
//         </div>
//       )}

//       {/* Month on Month */}
//       <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">
//           Month on Month
//         </h3>
//         <Line data={monthlyLineData} options={commonOptions} />
//       </div>
//     </div>
//   );
// }

"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

interface Transaction {
  type: "contribution" | "expense";
  amount: number;
  category?: string;
  contributor?: string;
  date?: string;
}

interface ChartsSectionProps {
  transactions: Transaction[];
}

export default function ChartsSection({ transactions }: ChartsSectionProps) {
  // --- Group by Category ---
  const groupByCategory = (type: "contribution" | "expense") =>
    transactions
      .filter((t) => t.type === type)
      .reduce((acc: Record<string, number>, t) => {
        const key =
          (t.category && t.category.trim()) ||
          (type === "contribution" ? "General" : "Uncategorized");
        acc[key] = (acc[key] || 0) + t.amount;
        return acc;
      }, {});

  // --- Group by Month ---
  const groupByMonth = () =>
    transactions.reduce(
      (acc: Record<string, { contribution: number; expense: number }>, t) => {
        const rawDate = t.date ? new Date(t.date) : new Date();
        const monthLabel = rawDate.toLocaleString("default", {
          month: "short",
          year: "numeric",
        });

        if (!acc[monthLabel]) acc[monthLabel] = { contribution: 0, expense: 0 };
        acc[monthLabel][t.type] += t.amount;

        return acc;
      },
      {}
    );

  const expenseCategories = groupByCategory("expense");
  const contributionCategories = groupByCategory("contribution");
  const monthlyData = groupByMonth();

  // --- Chart datasets ---
  const expensesData = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(expenseCategories),
        backgroundColor: "#0099ff",
        borderRadius: 8,
      },
    ],
  };

  const contributionsData = {
    labels: Object.keys(contributionCategories),
    datasets: [
      {
        label: "Contributions",
        data: Object.values(contributionCategories),
        backgroundColor: "#22c55e",
        borderRadius: 8,
      },
    ],
  };

  const monthlyLineData = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        label: "Contributions",
        data: Object.values(monthlyData).map((m) => m.contribution),
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Expenses",
        data: Object.values(monthlyData).map((m) => m.expense),
        borderColor: "#0099ff",
        backgroundColor: "rgba(0, 153, 255, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // --- Chart options ---
  const commonOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#374151" } },
    },
    scales: {
      x: {
        ticks: { color: "#6b7280" },
        grid: { color: "rgba(209,213,219,0.2)" },
      },
      y: {
        ticks: { color: "#6b7280" },
        grid: { color: "rgba(209,213,219,0.2)" },
      },
    },
  };

  // --- No data guard ---
  const hasData =
    Object.keys(expenseCategories).length > 0 ||
    Object.keys(contributionCategories).length > 0 ||
    Object.keys(monthlyData).length > 0;

  if (!hasData) {
    return null; // don’t render if completely empty
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 space-y-12">
      {/* Expenses by Category */}
      {Object.keys(expenseCategories).length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Expenses Breakdown
          </h3>
          <Bar data={expensesData} options={commonOptions} />
        </div>
      )}

      {/* Contributions by Category */}
      {Object.keys(contributionCategories).length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Contributions Breakdown
          </h3>
          <Bar data={contributionsData} options={commonOptions} />
        </div>
      )}

      {/* Month on Month */}
      {Object.keys(monthlyData).length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Month on Month
          </h3>
          <Line data={monthlyLineData} options={commonOptions} />
        </div>
      )}
    </div>
  );
}

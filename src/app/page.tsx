// // "use client";

// // import { getTransactions, clearTransactions } from "@/lib/storage";
// // import { useState, useEffect } from "react";
// // import ExpenseCategoryChart from "@/components/Charts/ExpenseCategoryChart";
// // import ContributionVsExpenseChart from "@/components/Charts/ContributionVsExpenseChart";

// // export default function Dashboard() {
// //   const [transactions, setTransactions] = useState<any[]>([]);

// //   useEffect(() => {
// //     setTransactions(getTransactions());
// //   }, []);

// //   const contributions = transactions
// //     .filter((t) => t.type === "contribution")
// //     .reduce((acc, t) => acc + t.amount, 0);

// //   const expenses = transactions
// //     .filter((t) => t.type === "expense")
// //     .reduce((acc, t) => acc + t.amount, 0);

// //   const balance = contributions - expenses;

// //   const handleClear = () => {
// //     clearTransactions();
// //     setTransactions([]);
// //   };

// //   return (
// //     <div className="space-y-6">
// //       <h1 className="text-2xl font-bold">Dashboard</h1>
// //       <div className="grid grid-cols-3 gap-4 text-center">
// //         <div className="p-4 bg-green-200 rounded">
// //           <p>Total Contributions</p>
// //           <p className="text-xl font-bold">₵{contributions}</p>
// //         </div>
// //         <div className="p-4 bg-red-200 rounded">
// //           <p>Total Expenses</p>
// //           <p className="text-xl font-bold">₵{expenses}</p>
// //         </div>
// //         <div className="p-4 bg-blue-200 rounded">
// //           <p>Balance</p>
// //           <p className="text-xl font-bold">₵{balance}</p>
// //         </div>
// //       </div>

// //       {/* Charts */}
// //       {transactions.length > 0 && (
// //         <div className="grid gap-6 md:grid-cols-2">
// //           <ExpenseCategoryChart transactions={transactions} />
// //           <ContributionVsExpenseChart transactions={transactions} />
// //         </div>
// //       )}

// //       <button
// //         onClick={handleClear}
// //         className="px-4 py-2 bg-gray-600 text-gray-800 rounded"
// //       >
// //         Reset Data
// //       </button>
// //     </div>
// //   );
// // }

// "use client";

// import { getTransactions, clearTransactions } from "@/lib/storage";
// import { useState, useEffect } from "react";
// import ExpenseCategoryChart from "@/components/Charts/ExpenseCategoryChart";
// import ContributionVsExpenseChart from "@/components/Charts/ContributionVsExpenseChart";
// import { TwitterIcon } from "lucide-react";

// export default function Dashboard() {
//   const [transactions, setTransactions] = useState<any[]>([]);

//   useEffect(() => {
//     setTransactions(getTransactions());
//   }, []);

//   const contributions = transactions
//     .filter((t) => t.type === "contribution")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const expenses = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const balance = contributions - expenses;

//   const handleClear = () => {
//     clearTransactions();
//     setTransactions([]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center">
//       {/* Header */}
//       <div className="w-full max-w-5xl flex justify-between px-6 py-4 text-sm text-gray-600">
//         <a href="#" className="underline">
//           Made with 💙 by Patrick Nyame
//         </a>
//         <span className="font-medium">Share</span>
//       </div>

//       {/* Logo */}
//       <div className="mt-6">
//         <div className="w-16 h-16 rounded-full bg-[#0099ff] flex items-center justify-center shadow-md">
//           <span className="text-white font-bold text-xl">₵</span>
//         </div>
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold mt-4 text-gray-800">
//         Track Your Finances
//       </h1>

//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 w-full max-w-5xl px-6">
//         <div className="bg-white rounded-xl shadow p-6 text-center border-t-4 border-green-400">
//           <p className="text-gray-600">Total Contributions</p>
//           <p className="text-2xl font-bold text-green-600">₵{contributions}</p>
//         </div>
//         <div className="bg-white rounded-xl shadow p-6 text-center border-t-4 border-red-400">
//           <p className="text-gray-600">Total Expenses</p>
//           <p className="text-2xl font-bold text-red-600">₵{expenses}</p>
//         </div>
//         <div className="bg-white rounded-xl shadow p-6 text-center border-t-4 border-[#0099ff]">
//           <p className="text-gray-600">Balance</p>
//           <p className="text-2xl font-bold text-[#0099ff]">₵{balance}</p>
//         </div>
//       </div>

//       {/* Charts */}
//       {transactions.length > 0 && (
//         <div className="grid gap-6 md:grid-cols-2 w-full max-w-5xl px-6 mt-10">
//           <div className="bg-white rounded-xl shadow p-4">
//             <ExpenseCategoryChart transactions={transactions} />
//           </div>
//           <div className="bg-white rounded-xl shadow p-4">
//             <ContributionVsExpenseChart transactions={transactions} />
//           </div>
//         </div>
//       )}

//       {/* Floating Reset Button */}
//       <div className="fixed bottom-10">
//         <button
//           onClick={handleClear}
//           className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 hover:scale-105 transition"
//         >
//           <span className="text-[#0099ff] font-bold">↻</span>
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { getTransactions, clearTransactions } from "@/lib/storage";
import { useState, useEffect } from "react";
import ExpenseCategoryChart from "@/components/Charts/ExpenseCategoryChart";
import ContributionVsExpenseChart from "@/components/Charts/ContributionVsExpenseChart";
import { Book } from "lucide-react";

export default function Dashboard() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    setTransactions(getTransactions());
  }, []);

  const contributions = transactions
    .filter((t) => t.type === "contribution")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = contributions - expenses;

  const handleClear = () => {
    clearTransactions();
    setTransactions([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Section (Gray Half) */}
      <div className="bg-gray-100 flex flex-col items-center py-16">
        {/* Header */}
        <div className="w-full max-w-5xl flex justify-between px-6 text-sm text-gray-600">
          <a href="#" className="underline">
            Made with 💙 by Patrick Nyame
          </a>
          <span className="font-medium">Share</span>
        </div>

        {/* Logo */}
        <div className="mt-6">
          <div className="w-16 h-16 rounded-full bg-[#0099ff] flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">₵</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mt-4 text-gray-800">
          Track Your Finances
        </h1>

        {/* Action Cards */}
        <div className="bg-white w-full max-w-5xl  px-6 mt-10 py-8 rounded-2xl shadow mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl px-6 mt-10 ">
            <div className="bg-gray-100  text-gray-800 rounded-xl shadow p-6 text-center cursor-pointer transition">
              <p className="font-semibold">
                Go to Pages <Book size={30} className="text-[#0099ff]" />
              </p>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-xl shadow p-6 text-center cursor-pointer transition">
              <p className="font-semibold">Add Expense</p>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-xl shadow p-6 text-center cursor-pointer transition">
              <p className="font-semibold">Add Contributor</p>
            </div>
            <div className="inline">
              <div className="w-16 h-16 rounded-full bg-[#0099ff] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">₵</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section (White) */}
      <div className="bg-white flex flex-col items-center py-16">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-10 max-w-5xl px-6">
          <div className="bg-white rounded-xl shadow p-6 text-center border-t-4 border-green-400">
            <p className="text-gray-600">Total Contributions</p>
            <p className="text-2xl font-bold text-green-600">
              ₵{contributions}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center border-t-4 border-red-400">
            <p className="text-gray-600">Total Expenses</p>
            <p className="text-2xl font-bold text-red-600">₵{expenses}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center border-t-4 border-[#0099ff]">
            <p className="text-gray-600">Balance</p>
            <p className="text-2xl font-bold text-[#0099ff]">₵{balance}</p>
          </div>
        </div>

        {/* Charts */}
        {transactions.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 w-full max-w-5xl px-6">
            <div className="bg-white rounded-xl shadow p-4">
              <ExpenseCategoryChart transactions={transactions} />
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <ContributionVsExpenseChart transactions={transactions} />
            </div>
          </div>
        )}
      </div>

      {/* Floating Reset Button */}
      <div className="fixed bottom-10 right-10">
        <button
          onClick={handleClear}
          className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 hover:scale-105 transition"
        >
          <span className="text-[#0099ff] font-bold">↻</span>
        </button>
      </div>
    </div>
  );
}

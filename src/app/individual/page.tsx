// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { getTransactions, clearTransactions } from "@/lib/storage";
// // // import TransactionModal from "@/components/TransactionModal";
// // // import { PlusCircle, UserPlus, Book, RotateCcw } from "lucide-react";

// // // export default function IndividualDashboard() {
// // //   const [transactions, setTransactions] = useState<any[]>([]);
// // //   const [showContributionModal, setShowContributionModal] = useState(false);
// // //   const [showExpenseModal, setShowExpenseModal] = useState(false);

// // //   useEffect(() => {
// // //     setTransactions(getTransactions().filter((t) => t.mode === "individual"));
// // //   }, []);

// // //   const contributions = transactions
// // //     .filter((t) => t.type === "contribution")
// // //     .reduce((acc, t) => acc + t.amount, 0);

// // //   const expenses = transactions
// // //     .filter((t) => t.type === "expense")
// // //     .reduce((acc, t) => acc + t.amount, 0);

// // //   const balance = contributions - expenses;

// // //   const handleClear = () => {
// // //     clearTransactions();
// // //     setTransactions([]);
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex flex-col">
// // //       <div className="bg-white flex flex-col items-center py-16 px-4">
// // //         {/* Stat Cards */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-10 max-w-5xl">
// // //           <div className="bg-white rounded-xl shadow p-6 text-center border-t-4 border-green-400">
// // //             <p className="text-gray-600">Total Contributions</p>
// // //             <p className="text-2xl font-bold text-green-600">
// // //               ₵{contributions}
// // //             </p>
// // //           </div>
// // //           <div className="bg-white rounded-xl shadow p-6 text-center border-t-4 border-red-400">
// // //             <p className="text-gray-600">Total Expenses</p>
// // //             <p className="text-2xl font-bold text-red-600">₵{expenses}</p>
// // //           </div>
// // //           <div className="bg-white rounded-xl shadow p-6 text-center border-t-4 border-[#0099ff]">
// // //             <p className="text-gray-600">Balance</p>
// // //             <p className="text-2xl font-bold text-[#0099ff]">₵{balance}</p>
// // //           </div>
// // //         </div>

// // //         {/* Quick Actions */}
// // //         <div className="flex gap-4 mb-10">
// // //           <button
// // //             onClick={() => setShowContributionModal(true)}
// // //             className="px-4 py-2 flex items-center gap-2 bg-blue-600 text-white rounded shadow"
// // //           >
// // //             <UserPlus size={18} /> Contribution
// // //           </button>
// // //           <button
// // //             onClick={() => setShowExpenseModal(true)}
// // //             className="px-4 py-2 flex items-center gap-2 bg-red-600 text-white rounded shadow"
// // //           >
// // //             <PlusCircle size={18} /> Expense
// // //           </button>
// // //           <a
// // //             href="/individual/history"
// // //             className="px-4 py-2 flex items-center gap-2 bg-gray-600 text-white rounded shadow"
// // //           >
// // //             <Book size={18} /> History
// // //           </a>
// // //         </div>
// // //       </div>

// // //       {/* Floating Reset Button */}
// // //       <div className="fixed bottom-10 right-10">
// // //         <button
// // //           onClick={handleClear}
// // //           className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 hover:scale-105 transition"
// // //           aria-label="Reset Transactions"
// // //         >
// // //           <RotateCcw className="text-[#0099ff]" size={22} />
// // //         </button>
// // //       </div>

// // //       {/* Modals */}
// // //       <TransactionModal
// // //         type="contribution"
// // //         mode="individual"
// // //         isOpen={showContributionModal}
// // //         onClose={() => setShowContributionModal(false)}
// // //       />
// // //       <TransactionModal
// // //         type="expense"
// // //         mode="individual"
// // //         isOpen={showExpenseModal}
// // //         onClose={() => setShowExpenseModal(false)}
// // //       />
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useState } from "react";
// // import { getTransactions, clearTransactions } from "@/lib/storage";
// // import TransactionModal from "@/components/TransactionModal";
// // import { PlusCircle, UserPlus, Book, RotateCcw } from "lucide-react";
// // import Link from "next/link";

// // export default function IndividualDashboard() {
// //   const [transactions, setTransactions] = useState<any[]>([]);
// //   const [showContributionModal, setShowContributionModal] = useState(false);
// //   const [showExpenseModal, setShowExpenseModal] = useState(false);

// //   useEffect(() => {
// //     setTransactions(getTransactions().filter((t) => t.mode === "individual"));
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
// //     <div className="min-h-screen flex flex-col bg-gray-100">
// //       {/* Hero Section */}
// //       <div className="flex flex-col items-center py-16 px-4">
// //         {/* Stat Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
// //           <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center hover:shadow-lg hover:border-green-400/50 transition">
// //             <p className="text-gray-500 text-sm">Total Contributions</p>
// //             <p className="mt-2 text-3xl font-extrabold text-green-600">
// //               ₵{contributions}
// //             </p>
// //           </div>

// //           <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center hover:shadow-lg hover:border-red-400/50 transition">
// //             <p className="text-gray-500 text-sm">Total Expenses</p>
// //             <p className="mt-2 text-3xl font-extrabold text-red-600">
// //               ₵{expenses}
// //             </p>
// //           </div>

// //           <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center hover:shadow-lg hover:border-[#0099ff]/50 transition">
// //             <p className="text-gray-500 text-sm">Balance</p>
// //             <p className="mt-2 text-3xl font-extrabold text-[#0099ff]">
// //               ₵{balance}
// //             </p>
// //           </div>
// //         </div>

// //         {/* Quick Actions */}
// //         <div className="flex flex-wrap gap-4 justify-center">
// //           <button
// //             onClick={() => setShowContributionModal(true)}
// //             className="px-5 py-2.5 flex items-center gap-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //           >
// //             <UserPlus size={18} /> Contribution
// //           </button>
// //           <button
// //             onClick={() => setShowExpenseModal(true)}
// //             className="px-5 py-2.5 flex items-center gap-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// //           >
// //             <PlusCircle size={18} /> Expense
// //           </button>
// //           <Link
// //             href="/individual/history"
// //             className="px-5 py-2.5 flex items-center gap-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
// //           >
// //             <Book size={18} /> History
// //           </Link>
// //         </div>
// //       </div>

// //       {/* Floating Reset Button */}
// //       <div className="fixed bottom-8 right-8">
// //         <button
// //           onClick={handleClear}
// //           className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0099ff]"
// //           aria-label="Reset Transactions"
// //         >
// //           <RotateCcw className="text-[#0099ff]" size={22} />
// //         </button>
// //       </div>

// //       {/* Modals */}
// //       <TransactionModal
// //         type="contribution"
// //         mode="individual"
// //         isOpen={showContributionModal}
// //         onClose={() => setShowContributionModal(false)}
// //       />
// //       <TransactionModal
// //         type="expense"
// //         mode="individual"
// //         isOpen={showExpenseModal}
// //         onClose={() => setShowExpenseModal(false)}
// //       />
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import {
//   getTransactions,
//   clearTransactions,
//   clearTransactionsByMode,
// } from "@/lib/storage";
// import TransactionModal from "@/components/TransactionModal";
// import { PlusCircle, UserPlus, Book, RotateCcw } from "lucide-react";
// import Link from "next/link";
// import Breadcrumb from "@/components/Breadcrumb";

// export default function IndividualDashboard() {
//   const [transactions, setTransactions] = useState<any[]>([]);
//   const [showContributionModal, setShowContributionModal] = useState(false);
//   const [showExpenseModal, setShowExpenseModal] = useState(false);

//   useEffect(() => {
//     setTransactions(getTransactions().filter((t) => t.mode === "individual"));
//   }, []);

//   const contributions = transactions
//     .filter((t) => t.type === "contribution")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const expenses = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const balance = contributions - expenses;

//   const handleClear = () => {
//     clearTransactionsByMode("individual");
//     setTransactions([]);
//   };
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Top Section */}

//       <div className="w-full max-w-5xl mx-auto px-6 pt-8">
//         <Breadcrumb
//           items={[{ label: "Home", href: "/" }, { label: "Individual" }]}
//         />
//         <h1 className="mt-4 text-3xl font-bold text-gray-800">Individual</h1>
//         <p className="mt-1 text-gray-500">Personal tracking</p>
//       </div>

//       <div className="flex flex-col items-center py-16 px-4">
//         {/* Stat Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
//           <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
//             <p className="text-sm text-gray-500">Contributions</p>
//             <p className="mt-2 text-3xl font-bold text-gray-800">
//               ₵{contributions}
//             </p>
//           </div>

//           <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
//             <p className="text-sm text-gray-500">Expenses</p>
//             <p className="mt-2 text-3xl font-bold text-gray-800">₵{expenses}</p>
//           </div>

//           <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
//             <p className="text-sm text-gray-500">Balance</p>
//             <p className="mt-2 text-3xl font-bold text-[#0099ff]">₵{balance}</p>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex flex-wrap gap-4 justify-center">
//           <button
//             onClick={() => setShowContributionModal(true)}
//             className="px-5 py-2.5 flex items-center gap-2 rounded-lg bg-[#0099ff] text-white font-medium hover:bg-[#0080d6] transition"
//           >
//             <UserPlus size={18} /> Add Contribution
//           </button>

//           <button
//             onClick={() => setShowExpenseModal(true)}
//             className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
//           >
//             <PlusCircle size={18} /> Add Expense
//           </button>

//           <Link
//             href="/individual/history"
//             className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
//           >
//             <Book size={18} /> History
//           </Link>
//         </div>
//       </div>

//       {/* Floating Reset */}
//       <div className="fixed bottom-8 right-8">
//         <button
//           onClick={handleClear}
//           className="px-4 py-2 flex items-center gap-2 rounded-full bg-white border border-gray-300 shadow-sm text-gray-700 hover:border-[#0099ff] hover:text-[#0099ff] transition"
//           aria-label="Reset Transactions"
//         >
//           <RotateCcw size={18} />
//           <span className="text-sm font-medium">Reset</span>
//         </button>
//       </div>

//       {/* Modals */}
//       <TransactionModal
//         type="contribution"
//         mode="individual"
//         isOpen={showContributionModal}
//         onClose={() => setShowContributionModal(false)}
//       />
//       <TransactionModal
//         type="expense"
//         mode="individual"
//         isOpen={showExpenseModal}
//         onClose={() => setShowExpenseModal(false)}
//       />
//     </div>
//   );
// }
import { Users } from "lucide-react";
import Dashboard from "@/components/Dashboard";

export default function IndividualDashboard() {
  return (
    <Dashboard
      mode="individual"
      title="Individual"
      description="Personal tracking"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Individual" }]}
    />
  );
}

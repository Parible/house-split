// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { getTransactions, clearTransactionsByMode } from "@/lib/storage";
// // // import TransactionModal from "@/components/TransactionModal";
// // // import { PlusCircle, UserPlus, Book, RotateCcw, Users } from "lucide-react";
// // // import Link from "next/link";
// // // import Breadcrumb from "@/components/Breadcrumb";

// // // interface DashboardProps {
// // //   mode: "individual" | "house";
// // //   title: string;
// // //   description: string;
// // //   breadcrumb: { label: string; href?: string }[];
// // //   extraLinks?: { href: string; label: string; icon: React.ReactNode }[];
// // // }

// // // export default function Dashboard({
// // //   mode,
// // //   title,
// // //   description,
// // //   breadcrumb,
// // //   extraLinks = [],
// // // }: DashboardProps) {
// // //   const [transactions, setTransactions] = useState<any[]>([]);
// // //   const [showContributionModal, setShowContributionModal] = useState(false);
// // //   const [showExpenseModal, setShowExpenseModal] = useState(false);

// // //   useEffect(() => {
// // //     setTransactions(getTransactions().filter((t) => t.mode === mode));
// // //   }, [mode]);

// // //   const contributions = transactions
// // //     .filter((t) => t.type === "contribution")
// // //     .reduce((acc, t) => acc + t.amount, 0);

// // //   const expenses = transactions
// // //     .filter((t) => t.type === "expense")
// // //     .reduce((acc, t) => acc + t.amount, 0);

// // //   const balance = contributions - expenses;

// // //   const handleClear = () => {
// // //     clearTransactionsByMode(mode);
// // //     setTransactions([]);
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex flex-col bg-gray-50">
// // //       {/* Top Section */}
// // //       <div className="w-full max-w-5xl mx-auto px-6 pt-8">
// // //         <Breadcrumb items={breadcrumb} />
// // //         <h1 className="mt-4 text-3xl font-bold text-gray-800">{title}</h1>
// // //         <p className="mt-1 text-gray-500">{description}</p>
// // //       </div>

// // //       <div className="flex flex-col items-center py-12 px-4">
// // //         {/* Stat Cards */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
// // //           <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
// // //             <p className="text-sm text-gray-500">Contributions</p>
// // //             <p className="mt-2 text-3xl font-bold text-gray-800">
// // //               ₵{contributions}
// // //             </p>
// // //           </div>
// // //           <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
// // //             <p className="text-sm text-gray-500">Expenses</p>
// // //             <p className="mt-2 text-3xl font-bold text-gray-800">₵{expenses}</p>
// // //           </div>
// // //           <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
// // //             <p className="text-sm text-gray-500">Balance</p>
// // //             <p className="mt-2 text-3xl font-bold text-[#0099ff]">₵{balance}</p>
// // //           </div>
// // //         </div>

// // //         {/* Actions */}
// // //         <div className="flex flex-wrap gap-4 justify-center">
// // //           <button
// // //             onClick={() => setShowContributionModal(true)}
// // //             className="px-5 py-2.5 flex items-center gap-2 rounded-lg bg-[#0099ff] text-white font-medium hover:bg-[#0080d6] transition"
// // //           >
// // //             <UserPlus size={18} /> Add Contribution
// // //           </button>

// // //           <button
// // //             onClick={() => setShowExpenseModal(true)}
// // //             className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
// // //           >
// // //             <PlusCircle size={18} /> Add Expense
// // //           </button>

// // //           <Link
// // //             href={`/${mode}/history`}
// // //             className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
// // //           >
// // //             <Book size={18} /> History
// // //           </Link>

// // //           {extraLinks.map((link, idx) => (
// // //             <Link
// // //               key={idx}
// // //               href={link.href}
// // //               className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
// // //             >
// // //               {link.icon}
// // //               {link.label}
// // //             </Link>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Floating Reset */}
// // //       <div className="fixed bottom-8 right-8">
// // //         <button
// // //           onClick={handleClear}
// // //           className="px-4 py-2 flex items-center gap-2 rounded-full bg-white border border-gray-300 shadow-sm text-gray-700 hover:border-[#0099ff] hover:text-[#0099ff] transition"
// // //           aria-label="Reset Transactions"
// // //         >
// // //           <RotateCcw size={18} />
// // //           <span className="text-sm font-medium">Reset</span>
// // //         </button>
// // //       </div>

// // //       {/* Modals */}
// // //       <TransactionModal
// // //         type="contribution"
// // //         mode={mode}
// // //         isOpen={showContributionModal}
// // //         onClose={() => setShowContributionModal(false)}
// // //       />
// // //       <TransactionModal
// // //         type="expense"
// // //         mode={mode}
// // //         isOpen={showExpenseModal}
// // //         onClose={() => setShowExpenseModal(false)}
// // //       />
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import { getTransactions, clearTransactionsByMode } from "@/lib/storage";
// // import TransactionModal from "@/components/TransactionModal";
// // import ConfirmModal from "@/components/ConfirmModal";
// // import { PlusCircle, UserPlus, Book, RotateCcw } from "lucide-react";
// // import Link from "next/link";
// // import Breadcrumb from "@/components/Breadcrumb";

// // interface DashboardProps {
// //   mode: "individual" | "house";
// //   title: string;
// //   description: string;
// //   breadcrumb: { label: string; href?: string }[];
// //   extraLinks?: { href: string; label: string; icon: React.ReactNode }[];
// // }

// // export default function Dashboard({
// //   mode,
// //   title,
// //   description,
// //   breadcrumb,
// //   extraLinks = [],
// // }: DashboardProps) {
// //   const [transactions, setTransactions] = useState<any[]>([]);
// //   const [showContributionModal, setShowContributionModal] = useState(false);
// //   const [showExpenseModal, setShowExpenseModal] = useState(false);
// //   const [showConfirmReset, setShowConfirmReset] = useState(false);

// //   useEffect(() => {
// //     setTransactions(getTransactions().filter((t) => t.mode === mode));
// //   }, [mode]);

// //   const contributions = transactions
// //     .filter((t) => t.type === "contribution")
// //     .reduce((acc, t) => acc + t.amount, 0);

// //   const expenses = transactions
// //     .filter((t) => t.type === "expense")
// //     .reduce((acc, t) => acc + t.amount, 0);

// //   const balance = contributions - expenses;

// //   const handleConfirmReset = () => {
// //     clearTransactionsByMode(mode);
// //     setTransactions([]);
// //     setShowConfirmReset(false);
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gray-50">
// //       {/* Top Section */}
// //       <div className="w-full max-w-5xl mx-auto px-6 pt-8">
// //         <Breadcrumb items={breadcrumb} />
// //         <h1 className="mt-4 text-3xl font-bold text-gray-800">{title}</h1>
// //         <p className="mt-1 text-gray-500">{description}</p>
// //       </div>

// //       <div className="flex flex-col items-center py-12 px-4">
// //         {/* Stat Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
// //           <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
// //             <p className="text-sm text-gray-500">Contributions</p>
// //             <p className="mt-2 text-3xl font-bold text-gray-800">
// //               ₵{contributions}
// //             </p>
// //           </div>
// //           <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
// //             <p className="text-sm text-gray-500">Expenses</p>
// //             <p className="mt-2 text-3xl font-bold text-gray-800">₵{expenses}</p>
// //           </div>
// //           <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
// //             <p className="text-sm text-gray-500">Balance</p>
// //             <p className="mt-2 text-3xl font-bold text-[#0099ff]">₵{balance}</p>
// //           </div>
// //         </div>

// //         {/* Actions */}
// //         <div className="flex flex-wrap gap-4 justify-center">
// //           <button
// //             onClick={() => setShowContributionModal(true)}
// //             className="px-5 py-2.5 flex items-center gap-2 rounded-lg bg-[#0099ff] text-white font-medium hover:bg-[#0080d6] transition"
// //           >
// //             <UserPlus size={18} /> Add Contribution
// //           </button>

// //           <button
// //             onClick={() => setShowExpenseModal(true)}
// //             className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
// //           >
// //             <PlusCircle size={18} /> Add Expense
// //           </button>

// //           <Link
// //             href={`/${mode}/history`}
// //             className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
// //           >
// //             <Book size={18} /> History
// //           </Link>

// //           {extraLinks.map((link, idx) => (
// //             <Link
// //               key={idx}
// //               href={link.href}
// //               className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
// //             >
// //               {link.icon}
// //               {link.label}
// //             </Link>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Floating Reset */}
// //       <div className="fixed bottom-8 right-8">
// //         <button
// //           onClick={() => setShowConfirmReset(true)}
// //           className="px-4 py-2 flex items-center gap-2 rounded-full bg-white border border-gray-300 shadow-sm text-gray-700 hover:border-[#0099ff] hover:text-[#0099ff] transition"
// //           aria-label="Reset Transactions"
// //         >
// //           <RotateCcw size={18} />
// //           <span className="text-sm font-medium">Reset</span>
// //         </button>
// //       </div>

// //       {/* Modals */}
// //       <TransactionModal
// //         type="contribution"
// //         mode={mode}
// //         isOpen={showContributionModal}
// //         onClose={() => setShowContributionModal(false)}
// //       />
// //       <TransactionModal
// //         type="expense"
// //         mode={mode}
// //         isOpen={showExpenseModal}
// //         onClose={() => setShowExpenseModal(false)}
// //       />

// //       <ConfirmModal
// //         isOpen={showConfirmReset}
// //         title="Reset All Transactions?"
// //         description="This will delete all contributions and expenses for this mode. This action cannot be undone."
// //         onConfirm={handleConfirmReset}
// //         onCancel={() => setShowConfirmReset(false)}
// //       />
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import { getTransactions, clearTransactionsByMode } from "@/lib/storage";
// import TransactionModal from "@/components/TransactionModal";
// import ConfirmModal from "@/components/ConfirmModal";
// import { useToast } from "@/components/ToastProvider";
// import { PlusCircle, UserPlus, Book, RotateCcw } from "lucide-react";
// import Link from "next/link";
// import Breadcrumb from "@/components/Breadcrumb";

// export default function IndividualDashboard() {
//   const [transactions, setTransactions] = useState<any[]>([]);
//   const [showContributionModal, setShowContributionModal] = useState(false);
//   const [showExpenseModal, setShowExpenseModal] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const { addToast } = useToast();

//   // Fetch data in real-time
//   const refreshData = () => {
//     setTransactions(getTransactions().filter((t) => t.mode === "individual"));
//   };

//   useEffect(() => {
//     refreshData();
//     const handleStorage = () => refreshData();
//     window.addEventListener("storage", handleStorage);
//     return () => window.removeEventListener("storage", handleStorage);
//   }, []);

//   const contributions = transactions
//     .filter((t) => t.type === "contribution")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const expenses = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const balance = contributions - expenses;

//   const handleConfirmReset = () => {
//     clearTransactionsByMode("individual");
//     refreshData();
//     addToast("Individual transactions cleared", "success");
//     setShowConfirm(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Breadcrumb + Title */}
//       <div className="w-full max-w-5xl mx-auto px-6 pt-8">
//         <Breadcrumb
//           items={[{ label: "Home", href: "/" }, { label: "Individual" }]}
//         />
//         <h1 className="mt-4 text-3xl font-bold text-gray-800">Individual</h1>
//         <p className="mt-1 text-gray-500">Track your personal finances</p>
//       </div>

//       {/* Stats */}
//       <div className="flex flex-col items-center py-12 px-4">
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

//       {/* Reset Button */}
//       <div className="fixed bottom-8 right-8">
//         <button
//           onClick={() => setShowConfirm(true)}
//           className="px-4 py-2 flex items-center gap-2 rounded-full bg-white border border-gray-300 shadow-sm text-gray-700 hover:border-[#0099ff] hover:text-[#0099ff] transition"
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
//         onClose={() => {
//           setShowContributionModal(false);
//           refreshData();
//         }}
//       />
//       <TransactionModal
//         type="expense"
//         mode="individual"
//         isOpen={showExpenseModal}
//         onClose={() => {
//           setShowExpenseModal(false);
//           refreshData();
//         }}
//       />

//       <ConfirmModal
//         isOpen={showConfirm}
//         title="Reset Individual Transactions?"
//         description="This will delete all contributions and expenses for Individual mode. This action cannot be undone."
//         onConfirm={handleConfirmReset}
//         onCancel={() => setShowConfirm(false)}
//       />
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { getTransactions, clearTransactionsByMode } from "@/lib/storage";
import TransactionModal from "@/components/TransactionModal";
import ConfirmModal from "@/components/ConfirmModal";
import { PlusCircle, UserPlus, Book, RotateCcw } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { useToast } from "@/components/ToastProvider";

export interface DashboardProps {
  mode: "individual" | "house";
  title: string;
  description: string;
  breadcrumb: { label: string; href?: string }[];
  extraLinks?: { href: string; label: string; icon: React.ReactNode }[];
}

export default function Dashboard({
  mode,
  title,
  description,
  breadcrumb,
  extraLinks = [],
}: DashboardProps) {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [showContributionModal, setShowContributionModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const { addToast } = useToast();

  // Load and sync transactions
  useEffect(() => {
    setTransactions(getTransactions().filter((t) => t.mode === mode));

    const sync = () => {
      setTransactions(getTransactions().filter((t) => t.mode === mode));
    };

    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [mode]);

  const contributions = transactions
    .filter((t) => t.type === "contribution")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = contributions - expenses;

  const handleConfirmReset = () => {
    clearTransactionsByMode(mode);
    setTransactions([]);
    addToast("All transactions have been reset.", "success");
    setShowConfirmReset(false);

    // Trigger manual storage event for real-time sync
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Section */}
      <div className="w-full max-w-5xl mx-auto px-6 pt-8">
        <Breadcrumb items={breadcrumb} />
        <h1 className="mt-4 text-3xl font-bold text-gray-800">{title}</h1>
        <p className="mt-1 text-gray-500">{description}</p>
      </div>

      <div className="flex flex-col items-center py-12 px-4">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-500">Contributions</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">
              ₵{contributions}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-500">Expenses</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">₵{expenses}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-500">Balance</p>
            <p className="mt-2 text-3xl font-bold text-[#0099ff]">₵{balance}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setShowContributionModal(true)}
            className="px-5 py-2.5 flex items-center gap-2 rounded-lg bg-[#0099ff] text-white font-medium hover:bg-[#0080d6] transition"
          >
            <UserPlus size={18} /> Add Contribution
          </button>

          <button
            onClick={() => setShowExpenseModal(true)}
            className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
          >
            <PlusCircle size={18} /> Add Expense
          </button>

          <Link
            href={`/${mode}/history`}
            className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
          >
            <Book size={18} /> History
          </Link>

          {extraLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="px-5 py-2.5 flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#0099ff] hover:text-[#0099ff] transition"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Reset */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setShowConfirmReset(true)}
          className="px-4 py-2 flex items-center gap-2 rounded-full bg-white border border-gray-300 shadow-sm text-gray-700 hover:border-[#0099ff] hover:text-[#0099ff] transition"
          aria-label="Reset Transactions"
        >
          <RotateCcw size={18} />
          <span className="text-sm font-medium">Reset</span>
        </button>
      </div>

      {/* Modals */}
      <TransactionModal
        type="contribution"
        mode={mode}
        isOpen={showContributionModal}
        onClose={() => setShowContributionModal(false)}
      />
      <TransactionModal
        type="expense"
        mode={mode}
        isOpen={showExpenseModal}
        onClose={() => setShowExpenseModal(false)}
      />

      <ConfirmModal
        isOpen={showConfirmReset}
        title="Reset All Transactions?"
        description="This will delete all contributions and expenses for this mode. This action cannot be undone."
        onConfirm={handleConfirmReset}
        onCancel={() => setShowConfirmReset(false)}
      />
    </div>
  );
}

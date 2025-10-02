// "use client";

// import { getTransactions, clearTransactions } from "@/lib/storage";
// import { useState, useEffect } from "react";
// import ExpenseCategoryChart from "@/components/Charts/ExpenseCategoryChart";
// import ContributionVsExpenseChart from "@/components/Charts/ContributionVsExpenseChart";
// import { Book, PlusCircle, UserPlus, RotateCcw } from "lucide-react";

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Top Section (Gray Half) */}
//       <div className="bg-gray-100 flex flex-col items-center py-8 px-4">
//         {/* Header */}
//         <div className="w-full max-w-5xl flex justify-between px-2 sm:px-6 text-sm text-gray-600">
//           <span className="hover:text-[#0099ff] transition">
//             Made with 💙 by
//           </span>
//           <a href="#" className="underline hover:text-[#0099ff] transition">
//             Patrick Nyame
//           </a>
//           <span className="font-medium cursor-pointer hover:text-[#0099ff] transition">
//             Share
//           </span>
//         </div>

//         {/* Logo */}
//         <div className="mt-8">
//           <div className="w-16 h-16 rounded-full bg-[#0099ff] flex items-center justify-center shadow-md">
//             <span className="text-white font-bold text-xl">₵</span>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl font-bold mt-4 text-gray-800 text-center">
//           Track Your Finances
//         </h1>

//         {/* Action Cards */}
//         <div className="bg-white w-full max-w-4xl px-4 sm:px-6 mt-10 py-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {/* Pages */}
//             <div className="bg-gray-100 text-gray-800 rounded-xl shadow-sm p-6 text-center cursor-pointer hover:shadow-md hover:scale-[1.02] transition">
//               <p className="font-semibold flex items-center justify-center gap-2">
//                 <Book size={22} className="text-[#0099ff]" />
//                 Go to Pages
//               </p>
//             </div>

//             {/* Add Expense */}
//             <div className="bg-gray-100 text-gray-800 rounded-xl shadow-sm p-6 text-center cursor-pointer hover:shadow-md hover:scale-[1.02] transition">
//               <p className="font-semibold flex items-center justify-center gap-2">
//                 <PlusCircle size={22} className="text-[#0099ff]" />
//                 Add Expense
//               </p>
//             </div>

//             {/* Add Contributor */}
//             <div className="bg-gray-100 text-gray-800 rounded-xl shadow-sm p-6 text-center cursor-pointer hover:shadow-md hover:scale-[1.02] transition">
//               <p className="font-semibold flex items-center justify-center gap-2">
//                 <UserPlus size={22} className="text-[#0099ff]" />
//                 Add Contributor
//               </p>
//             </div>
//           </div>

//           {/* Small Center Logo */}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import {
//   LogoHouseSplitA,
//   LogoHouseSplitB,
//   LogoHouseSplitC,
// } from "@/components/Logo";
// import {
//   Book,
//   PlusCircle,
//   UserPlus,
//   Share2,
//   User2,
//   Users2Icon,
// } from "lucide-react";
// import Link from "next/link";

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header */}
//       <header className="w-full max-w-6xl mx-auto flex justify-between items-center px-6 py-6 text-sm text-gray-600">
//         <span className="hover:text-[#0099ff] ">
//           Made with 💙 by{" "}
//           <a href="#" className="font-semibold underline hover:text-[#0099ff] ">
//             Patrick Nyame
//           </a>
//         </span>
//         <button className="flex items-center gap-1 hover:text-[#0099ff] ">
//           <Share2 size={16} />
//           Share
//         </button>
//       </header>

//       {/* Hero */}
//       <section className="flex flex-col items-center justify-center mt-12 px-4">
//         {/* Logo */}
//         <LogoHouseSplitA />

//         {/* Title */}
//         <h1 className="mt-8 text-4xl font-extrabold text-gray-800 text-center tracking-tight">
//           Track Your Finances
//         </h1>
//         <p className="mt-3 text-gray-500 text-center max-w-md text-lg">
//           A clean, minimal way to monitor your expenses and contributions.
//         </p>
//       </section>

//       {/* Action Cards */}
//       <section className="mt-16 w-full max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {/* Individual */}
//         <Link
//           href="/individual"
//           className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-[#0099ff]/50 hover:-translate-y-1.5 transition duration-300 transform flex flex-col"
//         >
//           <div className="flex items-center gap-3 font-semibold text-gray-700 group-hover:text-[#0099ff]">
//             <User2 size={22} className="text-[#0099ff]" />
//             Individual
//           </div>
//           <p className="mt-2 text-sm text-gray-500">
//             Track your personal contributions and expenses in one place.
//           </p>
//         </Link>

//         {/* House Split */}
//         <Link
//           href="/house-split"
//           className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-[#0099ff]/50 hover:-translate-y-1.5 transition duration-300 transform flex flex-col"
//         >
//           <div className="flex items-center gap-3 font-semibold text-gray-700 group-hover:text-[#0099ff]">
//             <Users2Icon size={22} className="text-[#0099ff]" />
//             House Split
//           </div>
//           <p className="mt-2 text-sm text-gray-500">
//             Manage shared expenses and group contributions seamlessly.
//           </p>
//         </Link>
//       </section>
//     </div>
//   );
// }
"use client";

import { LogoHouseSplitA, LogoHouseSplitB } from "@/components/Logo";
import { Share2, User2, Users2Icon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTransactions } from "@/lib/storage";

export default function Dashboard() {
  const [hasIndividualData, setHasIndividualData] = useState(false);
  const [hasHouseData, setHasHouseData] = useState(false);

  useEffect(() => {
    const txs = getTransactions();
    setHasIndividualData(txs.some((t) => t.mode === "individual"));
    setHasHouseData(txs.some((t) => t.mode === "house-split"));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center px-6 py-6 text-sm text-gray-600">
        <span className="hover:text-[#0099ff] ">
          Made with 💙 by{" "}
          <a href="#" className="font-semibold underline hover:text-[#0099ff] ">
            Patrick Nyame
          </a>
        </span>
        <button className="flex items-center gap-1 hover:text-[#0099ff] ">
          <Share2 size={16} />
          Share
        </button>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center mt-12 px-4">
        {/* Logo */}
        <LogoHouseSplitB />

        {/* Title */}
        <h1 className="mt-8 text-4xl font-extrabold text-gray-800 text-center tracking-tight">
          Track Your Finances
        </h1>
        <p className="mt-3 text-gray-500 text-center max-w-md text-lg">
          A clean, minimal way to monitor your expenses and contributions.
        </p>
      </section>

      {/* Action Cards */}
      <section className="mt-16 w-full max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Individual */}
        <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-[#0099ff]/50 hover:-translate-y-1.5 transition duration-300 transform flex flex-col">
          <div className="flex items-center gap-3 font-semibold text-gray-700 group-hover:text-[#0099ff]">
            <User2 size={22} className="text-[#0099ff]" />
            Individual
          </div>
          <p className="mt-2 text-sm text-gray-500 flex-1">
            Track your personal contributions and expenses in one place.
          </p>
          <div className="mt-4">
            {hasIndividualData ? (
              <Link
                href="/individual"
                className="inline-block px-4 py-2 bg-[#0099ff] text-white text-sm rounded-lg shadow hover:bg-[#0077cc] transition"
              >
                Continue
              </Link>
            ) : (
              <Link
                href="/individual"
                className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg shadow hover:bg-gray-300 transition"
              >
                Start
              </Link>
            )}
          </div>
        </div>

        {/* House Split */}
        <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-[#0099ff]/50 hover:-translate-y-1.5 transition duration-300 transform flex flex-col">
          <div className="flex items-center gap-3 font-semibold text-gray-700 group-hover:text-[#0099ff]">
            <Users2Icon size={22} className="text-[#0099ff]" />
            House Split
          </div>
          <p className="mt-2 text-sm text-gray-500 flex-1">
            Manage shared expenses and group contributions seamlessly.
          </p>
          <div className="mt-4">
            {hasHouseData ? (
              <Link
                href="/house-split"
                className="inline-block px-4 py-2 bg-[#0099ff] text-white text-sm rounded-lg shadow hover:bg-[#0077cc] transition"
              >
                Continue
              </Link>
            ) : (
              <Link
                href="/house-split"
                className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg shadow hover:bg-gray-300 transition"
              >
                Start
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

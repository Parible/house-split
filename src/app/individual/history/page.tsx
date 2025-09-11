// "use client";

// import Breadcrumb from "@/components/Breadcrumb";
// import { getTransactions } from "@/lib/storage";
// import { useEffect, useState } from "react";

// export default function IndividualHistoryPage() {
//   const [transactions, setTransactions] = useState<any[]>([]);

//   useEffect(() => {
//     setTransactions(getTransactions().filter((t) => t.mode === "individual"));
//   }, []);

//   return (
//     <div className="w-full max-w-5xl mx-auto p-6 pt-8">
//       {/* Breadcrumb */}
//       <Breadcrumb
//         items={[
//           { label: "Home", href: "/" },
//           { label: "Individual", href: "/individual" },
//           { label: "House Split" },
//         ]}
//       />

//       {/* Title */}
//       <h1 className="mt-4 text-3xl font-bold text-gray-800">
//         Transaction History
//       </h1>

//       {transactions.length === 0 ? (
//         <p className="text-gray-600">No transactions recorded yet.</p>
//       ) : (
//         <ul className="space-y-2">
//           {transactions.map((tx) => (
//             <li
//               key={tx.id}
//               className="p-3 border rounded bg-white flex justify-between"
//             >
//               <div>
//                 <p className="font-semibold">{tx.name}</p>
//                 {tx.category && (
//                   <p className="text-sm text-gray-600">{tx.category}</p>
//                 )}
//                 <p className="text-sm text-gray-500">
//                   {new Date(tx.date).toLocaleString()}
//                 </p>
//               </div>
//               <div
//                 className={
//                   tx.type === "contribution" ? "text-green-600" : "text-red-600"
//                 }
//               >
//                 {tx.type === "contribution" ? "+" : "-"}₵{tx.amount}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { getTransactions } from "@/lib/storage";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

export default function IndividualHistoryPage() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    setTransactions(getTransactions().filter((t) => t.mode === "individual"));
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 pt-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Individual", href: "/individual" },
          { label: "History" },
        ]}
      />

      {/* Title */}
      <h1 className="mt-4 text-3xl font-bold text-gray-800">
        Transaction History
      </h1>
      <p className="text-gray-500 mt-1">
        Review your past contributions and expenses.
      </p>

      {/* Transactions List */}
      <div className="mt-8">
        {transactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-gray-300 rounded-xl bg-gray-50">
            <FileText size={40} className="text-gray-400 mb-4" />
            <p className="text-gray-600 font-medium">
              No transactions recorded yet
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Add contributions or expenses to see them listed here.
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {transactions.map((tx) => (
              <li
                key={tx.id}
                className="p-4 rounded-xl border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]  flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-gray-800">{tx.name}</p>
                  {tx.category && (
                    <p className="text-sm text-gray-500">{tx.category}</p>
                  )}
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(tx.date).toLocaleString()}
                  </p>
                </div>
                <div
                  className={`font-semibold ${
                    tx.type === "contribution"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {tx.type === "contribution" ? "+" : "-"}₵{tx.amount}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

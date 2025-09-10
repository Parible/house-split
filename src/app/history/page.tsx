// "use client";

// import { getTransactions } from "@/lib/storage";
// import { useEffect, useState } from "react";

// export default function HistoryPage() {
//   const [transactions, setTransactions] = useState<any[]>([]);

//   useEffect(() => {
//     setTransactions(getTransactions());
//   }, []);

//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">Transaction History</h1>
//       <ul className="space-y-2">
//         {transactions.map((tx) => (
//           <li
//             key={tx.id}
//             className="p-3 border rounded bg-white flex justify-between"
//           >
//             <div>
//               <p className="font-semibold">{tx.name}</p>
//               <p className="text-sm text-gray-500">
//                 {new Date(tx.date).toLocaleString()}
//               </p>
//             </div>
//             <div
//               className={
//                 tx.type === "contribution" ? "text-green-600" : "text-red-600"
//               }
//             >
//               {tx.type === "contribution" ? "+" : "-"}₵{tx.amount}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
"use client";

import { getTransactions } from "@/lib/storage";
import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    setTransactions(getTransactions());
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Transaction History</h1>
      <ul className="space-y-2">
        {transactions.map((tx) => (
          <li
            key={tx.id}
            className="p-3 border rounded bg-white flex justify-between"
          >
            <div>
              <p className="font-semibold">{tx.name}</p>
              {tx.category && (
                <p className="text-sm text-gray-600">{tx.category}</p>
              )}
              <p className="text-sm text-gray-500">
                {new Date(tx.date).toLocaleString()}
              </p>
            </div>
            <div
              className={
                tx.type === "contribution" ? "text-green-600" : "text-red-600"
              }
            >
              {tx.type === "contribution" ? "+" : "-"}₵{tx.amount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { saveTransaction } from "@/lib/storage";
// import { useRouter } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";

// const categories = ["Food", "Utilities", "Transport", "Entertainment", "Other"];

// export default function ExpenseForm() {
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("Other");
//   const [amount, setAmount] = useState("");
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name || !amount) return;
//     saveTransaction({
//       id: uuidv4(),
//       type: "expense",
//       name,
//       category,
//       amount: Number(amount),
//       date: new Date().toISOString(),
//     });
//     router.push("/");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 space-y-4">
//       <input
//         type="text"
//         placeholder="Expense Name"
//         className="w-full p-2 border rounded"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <select
//         className="w-full p-2 border rounded"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         {categories.map((c) => (
//           <option key={c} value={c}>
//             {c}
//           </option>
//         ))}
//       </select>
//       <input
//         type="number"
//         placeholder="Amount (₵)"
//         className="w-full p-2 border rounded"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">
//         Save Expense
//       </button>
//     </form>
//   );
// }

"use client";

import { useState } from "react";
import { saveTransaction } from "@/lib/storage";
import { v4 as uuidv4 } from "uuid";

const categories = ["Food", "Utilities", "Transport", "Entertainment", "Other"];

export default function TransactionModal({
  type,
  mode,
  isOpen,
  onClose,
}: {
  type: "contribution" | "expense";
  mode: "individual" | "house";
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [contributor, setContributor] = useState("");
  const [category, setCategory] = useState("Other");
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || (mode === "house" && !contributor)) return;

    saveTransaction({
      id: uuidv4(),
      type,
      name,
      category: type === "expense" ? category : undefined,
      contributor: mode === "house" ? contributor : undefined,
      amount: Number(amount),
      date: new Date().toISOString(),
      mode,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4"
      >
        {mode === "house" && (
          <input
            type="text"
            placeholder="Contributor Name"
            className="w-full p-2 border rounded"
            value={contributor}
            onChange={(e) => setContributor(e.target.value)}
          />
        )}
        <input
          type="text"
          placeholder={
            type === "contribution" ? "Contribution Name" : "Expense Name"
          }
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {type === "expense" && (
          <select
            className="w-full p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        )}
        <input
          type="number"
          placeholder="Amount (₵)"
          className="w-full p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-4 py-2 rounded text-white ${
              type === "contribution" ? "bg-blue-600" : "bg-red-600"
            }`}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

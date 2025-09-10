// "use client";

// import { useState } from "react";
// import { saveTransaction } from "@/lib/storage";
// import { useRouter } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";

// export default function ExpenseForm() {
//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState("");
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name || !amount) return;
//     saveTransaction({
//       id: uuidv4(),
//       type: "expense",
//       name,
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
//       <input
//         type="number"
//         placeholder="Amount"
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
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const categories = ["Food", "Utilities", "Transport", "Entertainment", "Other"];

export default function ExpenseForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Other");
  const [amount, setAmount] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount) return;
    saveTransaction({
      id: uuidv4(),
      type: "expense",
      name,
      category,
      amount: Number(amount),
      date: new Date().toISOString(),
    });
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Expense Name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        className="w-full p-2 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount (₵)"
        className="w-full p-2 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">
        Save Expense
      </button>
    </form>
  );
}

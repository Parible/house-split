"use client";

import { getTransactions } from "@/lib/storage";
import { useEffect, useState } from "react";

export default function ContributorsPage() {
  const [contributors, setContributors] = useState<any[]>([]);

  useEffect(() => {
    const txs = getTransactions().filter((t) => t.mode === "house");
    const grouped: Record<string, { contributions: number; expenses: number }> =
      {};

    txs.forEach((t) => {
      const key = t.contributor || "Unknown";
      if (!grouped[key]) {
        grouped[key] = { contributions: 0, expenses: 0 };
      }
      if (t.type === "contribution") grouped[key].contributions += t.amount;
      if (t.type === "expense") grouped[key].expenses += t.amount;
    });

    setContributors(
      Object.entries(grouped).map(([name, vals]) => ({
        name,
        ...vals,
        balance: vals.contributions - vals.expenses,
      }))
    );
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">House Contributors</h1>
      {contributors.length === 0 ? (
        <p className="text-gray-600">No contributors yet.</p>
      ) : (
        <ul className="space-y-2">
          {contributors.map((c) => (
            <li
              key={c.name}
              className="p-4 border rounded bg-white flex justify-between"
            >
              <div>
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-gray-600">
                  Contributed ₵{c.contributions} | Spent ₵{c.expenses}
                </p>
              </div>
              <p
                className={`font-bold ${
                  c.balance >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ₵{c.balance}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

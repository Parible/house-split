"use client";

import { useState } from "react";
import { saveTransaction } from "@/lib/storage";
import { v4 as uuidv4 } from "uuid";
import { X } from "lucide-react";

const categories = ["Food", "Utilities", "Transport", "Entertainment", "Other"];

export default function TransactionModal({
  type,
  mode,
  isOpen,
  onClose,
}: {
  type: "contribution" | "expense";
  mode: "individual" | "house-split";
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
    if (!amount) return;
    if (mode === "house-split" && !contributor) return;

    saveTransaction({
      id: uuidv4(),
      type,
      name,
      category: type === "expense" ? category : undefined,
      contributor: mode === "house-split" ? contributor : undefined,
      amount: Number(amount),
      date: new Date().toISOString(),
      mode,
    });

    onClose();

    // Trigger global sync
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-5 animate-fadeIn"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {type === "contribution" ? "Add Contribution" : "Add Expense"}
          </h2>
          <p className="text-sm text-gray-500">
            {mode === "house-split"
              ? "For the shared house-split split"
              : "For your personal tracking"}
          </p>
        </div>

        {/* Contributor (House-split only, both contrib + expense) */}
        {mode === "house-split" && (
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Contributor
            </label>
            <input
              type="text"
              placeholder="Enter contributor name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#0099ff] focus:outline-none"
              value={contributor}
              onChange={(e) => setContributor(e.target.value)}
            />
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            {type === "contribution" ? "Contribution Name" : "Expense Name"}
          </label>
          <input
            type="text"
            placeholder={
              type === "expense"
                ? "e.g. Groceries, Rent"
                : "e.g. Spending, Housekeeping"
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#0099ff] focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Category (Expense only) */}
        {type === "expense" && (
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Category
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#0099ff] focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        )}

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Amount (₵)
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#0099ff] focus:outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-[#0099ff] text-white font-medium shadow hover:bg-[#0080d6] transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

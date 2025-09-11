// "use client";

// export type Transaction = {
//   id: string;
//   type: "contribution" | "expense";
//   name: string;
//   amount: number;
//   date: string;
// };

// const STORAGE_KEY = "houseSplitTransactions";

// export function getTransactions(): Transaction[] {
//   if (typeof window === "undefined") return [];
//   const data = localStorage.getItem(STORAGE_KEY);
//   return data ? JSON.parse(data) : [];
// }

// export function saveTransaction(tx: Transaction) {
//   const current = getTransactions();
//   localStorage.setItem(STORAGE_KEY, JSON.stringify([tx, ...current]));
// }

// export function clearTransactions() {
//   localStorage.removeItem(STORAGE_KEY);
// }
// "use client";

// export type Transaction = {
//   id: string;
//   type: "contribution" | "expense";
//   name: string;
//   category?: string;
//   amount: number;
//   date: string;
// };

// const STORAGE_KEY = "houseSplitTransactions";

// export function getTransactions(): Transaction[] {
//   if (typeof window === "undefined") return [];
//   const data = localStorage.getItem(STORAGE_KEY);
//   return data ? JSON.parse(data) : [];
// }

// export function saveTransaction(tx: Transaction) {
//   const current = getTransactions();
//   localStorage.setItem(STORAGE_KEY, JSON.stringify([tx, ...current]));
// }

// export function clearTransactions() {
//   localStorage.removeItem(STORAGE_KEY);
// }

"use client";

export type Transaction = {
  id: string;
  type: "contribution" | "expense";
  name: string; // expense/contribution label
  contributor?: string; // only used in house split mode
  category?: string;
  amount: number;
  date: string;
  mode: "individual" | "house";
};

const STORAGE_KEY = "transactions";

export function getTransactions(): Transaction[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTransaction(tx: Transaction) {
  const current = getTransactions();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([tx, ...current]));
}

export function clearTransactions() {
  localStorage.removeItem(STORAGE_KEY);
}

export function clearTransactionsByMode(mode: "individual" | "house") {
  const current = getTransactions();
  const filtered = current.filter((t) => t.mode !== mode);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

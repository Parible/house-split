// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="flex gap-6 p-4 bg-blue-600 text-white">
//       <Link href="/">Dashboard</Link>
//       <Link href="/add-contribution">Add Contribution</Link>
//       <Link href="/add-expense">Add Expense</Link>
//       <Link href="/history">History</Link>
//     </nav>
//   );
// }
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-[#0099FF] text-white font-medium">
      <Link href="/">Dashboard</Link>
      <Link href="/add-contribution">Add Contribution</Link>
      <Link href="/add-expense">Add Expense</Link>
      <Link href="/history">History</Link>
    </nav>
  );
}

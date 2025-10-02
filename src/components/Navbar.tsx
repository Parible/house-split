// // "use client";

// // import Link from "next/link";

// // export default function Navbar() {
// //   return (
// //     <nav className="flex gap-6 p-4 bg-[#0099FF] text-white font-medium">
// //       <Link href="/">Dashboard</Link>
// //       <Link href="/add-contribution">Add Contribution</Link>
// //       <Link href="/add-expense">Add Expense</Link>
// //       <Link href="/history">History</Link>
// //     </nav>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react"; // lightweight icons
// import { LogoHouseSplitA } from "./Logo";

// export default function Navbar() {
//   <Link
//     href="/"
//     className="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900"
//   >
//     <span className="inline">HouseSplit</span>
//     <LogoHouseSplitA className="w-10 h-10" />
//   </Link>;

//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Dashboard", href: "/" },
//     { name: "Individual", href: "/individual" },
//     { name: "House Split", href: "/house-split" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/60">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//         {/* Logo / Brand */}
//         <Link
//           href="/"
//           className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100"
//         >
//           <span className="mr-2 inline"> Find my Money</span>
//           <LogoHouseSplitA className="w-10 h-10" />
//         </Link>

//         {/* Desktop Menu */}
//         <motion.ul
//           className="hidden gap-8 md:flex"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0, y: -10 },
//             visible: {
//               opacity: 1,
//               y: 0,
//               transition: { staggerChildren: 0.1, ease: "easeOut" },
//             },
//           }}
//         >
//           {navItems.map((item) => (
//             <motion.li
//               key={item.name}
//               variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//             >
//               <Link
//                 href={item.href}
//                 className="relative text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
//               >
//                 {item.name}
//                 {/* Animated underline */}
//                 <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full dark:bg-blue-400" />
//               </Link>
//             </motion.li>
//           ))}
//         </motion.ul>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.3 }}
//           className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black md:hidden"
//         >
//           <ul className="flex flex-col gap-4 px-6 py-4">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="block text-base font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoHouseSplitA, LogoHouseSplitB } from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Individual", href: "/individual" },
    { name: "House Split", href: "/house-split" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ✅ Brand / Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <LogoHouseSplitB className="h-9 w-9 shrink-0" />
          <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Find my Money
          </span>
        </Link>

        {/* ✅ Desktop Menu */}
        <motion.ul
          className="hidden gap-8 md:flex"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1, ease: "easeOut" },
            },
          }}
        >
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <Link
                href={item.href}
                className="relative group text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {item.name}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full dark:bg-blue-400" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* ✅ Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ✅ Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black md:hidden"
        >
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}

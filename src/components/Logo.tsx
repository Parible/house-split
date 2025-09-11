// // import React from "react";

// // function Logo() {
// //   return (
// //     <div className="mt-8">
// //       <div className="w-20 h-20 rounded-full bg-[#0099ff] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
// //         <svg
// //           viewBox="0 0 100 100"
// //           xmlns="http://www.w3.org/2000/svg"
// //           className="w-12 h-12"
// //         >
// //           {/* Abstract wave curve, finance intent */}
// //           <path
// //             d="M10 60 C30 20, 70 20, 90 60 Q75 80, 50 90 Q25 80, 10 60Z"
// //             fill="url(#grad)"
// //           />
// //           <defs>
// //             <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
// //               <stop offset="0%" stopColor="#0099ff" />
// //               <stop offset="100%" stopColor="#00cc88" />
// //             </linearGradient>
// //           </defs>
// //         </svg>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Logo;

// // // <div className="mt-8">
// // //           <div className="w-18 h-18 rounded-full bg-[#0099ff] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
// // //             <span className="text-white font-bold text-2xl">₵</span>
// // //           </div>
// // //         </div>

// // components/LogoVariants.tsx
// "use client";
// import React from "react";

// /**
//  * Logo A — "Rising Bars + Arrow in Circle"
//  * Intent: Clear finance growth / chart metaphor. Uses geometric bars and an ascending arrow.
//  * Color: #0099ff (bars filled with full color; arrow is white negative-space).
//  */
// export function LogoA({ className = "w-20 h-20" }: { className?: string }) {
//   return (
//     <div
//       aria-label="Track Your Finances logo - rising bars"
//       className={`rounded-full bg-white/0 ${className} flex items-center justify-center`}
//     >
//       <svg
//         viewBox="0 0 120 120"
//         className="w-full h-full"
//         xmlns="http://www.w3.org/2000/svg"
//         role="img"
//         aria-hidden="false"
//       >
//         {/* outer ring */}
//         <circle
//           cx="60"
//           cy="60"
//           r="56"
//           fill="white"
//           stroke="#0099ff"
//           strokeWidth="6"
//         />
//         {/* bars (use opacity to create depth but same color) */}
//         <rect
//           x="28"
//           y="58"
//           width="10"
//           height="24"
//           rx="2"
//           fill="#0099ff"
//           opacity="0.9"
//         />
//         <rect
//           x="46"
//           y="46"
//           width="10"
//           height="36"
//           rx="2"
//           fill="#0099ff"
//           opacity="0.95"
//         />
//         <rect x="64" y="34" width="10" height="48" rx="2" fill="#0099ff" />
//         <rect
//           x="82"
//           y="46"
//           width="10"
//           height="36"
//           rx="2"
//           fill="#0099ff"
//           opacity="0.95"
//         />
//         {/* ascending arrow formed by white negative space / stroke */}
//         <path d="M32 60 L56 36 L88 36 L88 44 L64 44 L40 68 Z" fill="white" />
//         {/* small accent circle at tip to hint upward momentum */}
//         <circle cx="92" cy="32" r="4" fill="#0099ff" />
//       </svg>
//     </div>
//   );
// }

// /**
//  * Logo B — "Fluid Coin + Upward Curve"
//  * Intent: abstract coin with a rising curve (wave -> chart) inside; lightweight, organic.
//  * Color: #0099ff only (we use white cutouts to create the curve).
//  */
// export function LogoB({ className = "w-20 h-20" }: { className?: string }) {
//   return (
//     <div
//       aria-label="Track Your Finances logo - fluid coin"
//       className={`rounded-full ${className} flex items-center justify-center`}
//     >
//       <svg
//         viewBox="0 0 120 120"
//         className="w-full h-full"
//         xmlns="http://www.w3.org/2000/svg"
//         role="img"
//       >
//         {/* full circle filled with brand color */}
//         <circle cx="60" cy="60" r="56" fill="#0099ff" />
//         {/* rising curve cutout (white negative space) */}
//         <path
//           d="M16 68 C28 50, 46 46, 60 52 C74 58, 88 70, 104 62 L104 92 C86 100, 34 100, 16 92 Z"
//           fill="white"
//         />
//         {/* thin arc to suggest upward trend (same color as bg via smaller overlay) */}
//         <path
//           d="M24 74 C36 60, 52 56, 64 62 C76 68, 90 78, 100 72"
//           fill="none"
//           stroke="#0099ff"
//           strokeWidth="3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           opacity="0.25"
//         />
//         {/* subtle coin rim (inner stroke using white with low opacity to add depth) */}
//         <circle
//           cx="60"
//           cy="60"
//           r="46"
//           fill="none"
//           stroke="white"
//           strokeWidth="2"
//           opacity="0.06"
//         />
//       </svg>
//     </div>
//   );
// }

// /**
//  * Logo C — "Geometric Shield + ₵ monogram"
//  * Intent: Trust, stability, finance mark with a neat monogram. Minimal, bold and instantly recognizable.
//  * Color: #0099ff for the shield; white for the monogram cutout.
//  */
// export function LogoC({ className = "w-20 h-20" }: { className?: string }) {
//   return (
//     <div
//       aria-label="Track Your Finances logo - shield monogram"
//       className={`rounded-full ${className} flex items-center justify-center`}
//     >
//       <svg
//         viewBox="0 0 120 120"
//         className="w-full h-full"
//         xmlns="http://www.w3.org/2000/svg"
//         role="img"
//       >
//         {/* circular boundary */}
//         <circle
//           cx="60"
//           cy="60"
//           r="56"
//           fill="white"
//           stroke="#0099ff"
//           strokeWidth="6"
//         />
//         {/* geometric shield / badge in brand color */}
//         <path
//           d="M60 28 L86 40 V64 C86 82, 74 94, 60 98 C46 94, 34 82, 34 64 V40 Z"
//           fill="#0099ff"
//         />
//         {/* stylized ₵ as white cutout — keeps it subtle but clear */}
//         <g transform="translate(60,62) scale(0.9) translate(-60,-62)">
//           <path
//             d="M52 48 H68 C72 48, 76 52, 76 56 C76 60, 72 64, 68 64 H52 V72 H48 V64 H40 V60 H48 V56 H40 V52 H48 V44 H52 V48 Z"
//             fill="white"
//           />
//         </g>
//         {/* top notch (tiny accent) */}
//         <rect x="58" y="22" width="4" height="6" rx="1" fill="#0099ff" />
//       </svg>
//     </div>
//   );
// }

// export default { LogoA, LogoB, LogoC };

export function LogoHouseSplitA({
  className = "w-20 h-20",
}: {
  className?: string;
}) {
  return (
    <div
      className={`rounded-full bg-white ${className} flex items-center justify-center`}
    >
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Circle outline */}
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="white"
          stroke="#0099ff"
          strokeWidth="6"
        />
        {/* House shape */}
        <path d="M40 72 V52 L60 36 L80 52 V72 Z" fill="#0099ff" />
        {/* Split line inside house */}
        <line x1="60" y1="36" x2="60" y2="72" stroke="white" strokeWidth="4" />
      </svg>
    </div>
  );
}

export function LogoHouseSplitB({
  className = "w-20 h-20 shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
}: {
  className?: string;
}) {
  return (
    <div
      className={`rounded-full bg-white ${className} flex items-center justify-center`}
    >
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Coin circle */}
        <circle cx="60" cy="60" r="50" fill="#0099ff" />
        {/* Roof shape */}
        <path d="M40 70 L60 48 L80 70 Z" fill="white" />
        {/* Split under roof (suggests bills splitting) */}
        <rect x="52" y="70" width="4" height="20" fill="white" />
        <rect x="64" y="70" width="4" height="20" fill="white" />
      </svg>
    </div>
  );
}

export function LogoHouseSplitC({
  className = "w-20 h-20",
}: {
  className?: string;
}) {
  return (
    <div
      className={`rounded-full bg-white ${className} flex items-center justify-center`}
    >
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer circle */}
        <circle cx="60" cy="60" r="56" fill="#0099ff" />
        {/* Diagonal split */}
        <path d="M20 90 L90 20 L100 30 L30 100 Z" fill="white" />
        {/* Tiny roof hint */}
        <path d="M44 60 L60 46 L76 60 Z" fill="#0099ff" />
      </svg>
    </div>
  );
}

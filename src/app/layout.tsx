// import "./globals.css";
// import Navbar from "@/components/Navbar";

// export const metadata = {
//   title: "HouseSplit",
//   description: "Expense Splitter App",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-gray-100">
//         <Navbar />
//         <main className="max-w-7xl mx-auto">{children}</main>
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ToastProvider } from "@/components/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "HouseSplit",
  description: "Expense Splitter App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-gray-50 text-gray-800 antialiased font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="w-full">
          <ToastProvider>{children}</ToastProvider>
        </main>
      </body>
    </html>
  );
}

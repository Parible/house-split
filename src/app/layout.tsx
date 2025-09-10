import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

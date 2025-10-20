import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RelayProfit — Amazon Relay Profit Analyzer",
  description:
    "Upload Amazon Relay & fuel CSVs to see net profit per load and your most profitable lanes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-black text-white`}>
        {children}
      </body>
    </html>
  );
}

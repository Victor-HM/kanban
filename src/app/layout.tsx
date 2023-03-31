"use client";

import { Sidebar } from "@/components/Sidebar";
import "../style/global.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className="bg-[#7C3AED]">
        <div className="h-screen flex overflow-hidden">
          <Sidebar />

          <div className="w-full bg-[#FBFAFF] rounded-tl-3xl flex flex-col gap-8 pt-12 relative top-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

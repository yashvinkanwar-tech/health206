"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";

interface DashboardShellProps {
  fullName: string;
  email: string;
  children: ReactNode;
}

export default function DashboardShell({
  fullName,
  email,
  children,
}: DashboardShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#05080f]">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex flex-1 flex-col">
        <TopNav
          fullName={fullName}
          email={email}
          onMenuClick={() => setIsSidebarOpen((prev) => !prev)}
        />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
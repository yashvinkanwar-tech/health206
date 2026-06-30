import type { ReactNode } from "react";
import DashboardShell from "@/components/layout/DashboardShell";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <DashboardShell
      fullName="Health 206 User"
      email="user@health206.com"
    >
      {children}
    </DashboardShell>
  );
}
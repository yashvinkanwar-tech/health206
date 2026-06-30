"use client";

import { Menu } from "lucide-react";
import LogoutButton from "@/components/common/LogoutButton";

interface TopNavProps {
  fullName: string;
  email: string;
  onMenuClick: () => void;
}

function getInitials(name: string, email: string): string {
  const source = name?.trim() || email;
  const parts = source.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export default function TopNav({ fullName, email, onMenuClick }: TopNavProps) {
  const initials = getInitials(fullName, email);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-cyan-500/10 bg-[#070b14]/90 px-4 backdrop-blur-md sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-slate-200 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-sm font-medium text-slate-300 sm:text-base">
          Patient Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium text-slate-200">
            {fullName || "Unnamed Patient"}
          </p>
          <p className="text-xs text-slate-500">{email}</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-[0_0_12px_rgba(34,211,238,0.35)]">
          {initials}
        </div>
        <LogoutButton showLabel={false} className="sm:hidden" />
        <LogoutButton className="hidden sm:inline-flex" />
      </div>
    </header>
  );
}

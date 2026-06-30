"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  CalendarClock,
  Pill,
  ShieldCheck,
  Siren,
  UserCircle,
  Settings,
  Activity,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Medical Records", href: "/medical-records", icon: FileText },
  { label: "Appointments", href: "/appointments", icon: CalendarClock },
  { label: "Medicines", href: "/medicines", icon: Pill },
  { label: "Insurance", href: "/insurance", icon: ShieldCheck },
  { label: "Emergency", href: "/emergency", icon: Siren },
  { label: "Profile", href: "/profile", icon: UserCircle },
  { label: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
  /** Controls visibility on small screens. */
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-cyan-500/10 bg-[#070b14] transition-transform duration-200 ease-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-2 border-b border-cyan-500/10 px-6">
          <Activity className="text-cyan-400" size={24} />
          <span className="text-lg font-semibold tracking-wide text-white">
            Health <span className="text-cyan-400">206</span>
          </span>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-cyan-500/10 text-cyan-300 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.25)]"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                <Icon
                  size={18}
                  className={
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-500 group-hover:text-slate-300"
                  }
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-cyan-500/10 px-4 py-4 text-xs text-slate-600">
          Health 206 &middot; Patient Console
        </div>
      </aside>
    </>
  );
}

import type { ComponentType } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface DashboardCardProps {
  label: string;
  count: number;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  accent: "cyan" | "blue" | "violet" | "emerald" | "amber";
}

const ACCENT_STYLES: Record<
  DashboardCardProps["accent"],
  {
    icon: string;
    glow: string;
  }
> = {
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400",
    glow: "hover:shadow-cyan-500/20",
  },

  blue: {
    icon: "bg-blue-500/10 text-blue-400",
    glow: "hover:shadow-blue-500/20",
  },

  violet: {
    icon: "bg-violet-500/10 text-violet-400",
    glow: "hover:shadow-violet-500/20",
  },

  emerald: {
    icon: "bg-emerald-500/10 text-emerald-400",
    glow: "hover:shadow-emerald-500/20",
  },

  amber: {
    icon: "bg-amber-500/10 text-amber-400",
    glow: "hover:shadow-amber-500/20",
  },
};

export default function DashboardCard({
  label,
  count,
  href,
  icon: Icon,
  accent,
}: DashboardCardProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <Link
      href={href}
      className={`group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-[#0b1220] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20 hover:shadow-xl ${styles.glow}`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
        >
          <Icon size={22} />
        </div>

        <ArrowUpRight
          size={18}
          className="text-slate-600 transition group-hover:text-cyan-400"
        />
      </div>

      <div className="mt-8">
        <h3 className="text-3xl font-bold text-white">
          {count}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {label}
        </p>
      </div>
    </Link>
  );
}
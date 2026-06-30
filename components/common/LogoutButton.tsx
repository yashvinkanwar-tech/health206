"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface LogoutButtonProps {
  className?: string;
  showLabel?: boolean;
}

export default function LogoutButton({
  className = "",
  showLabel = true,
}: LogoutButtonProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function handleLogout() {
    setIsLoggingOut(true);

    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoggingOut}
      className={`inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      <LogOut size={16} />
      {showLabel && <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>}
    </button>
  );
}

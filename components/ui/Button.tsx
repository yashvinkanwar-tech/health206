import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-cyan-500 text-white hover:bg-cyan-400"
          : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
        className
      )}
    >
      {children}
    </button>
  );
}
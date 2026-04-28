import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "light" | "ghost";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97]";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:   "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 hover:shadow-md focus-visible:ring-indigo-500",
  secondary: "bg-slate-900 text-white shadow-sm hover:bg-slate-800 hover:shadow-md focus-visible:ring-slate-500",
  outline:   "border border-slate-300 bg-white text-slate-800 hover:border-indigo-400 hover:text-indigo-600 hover:shadow-sm focus-visible:ring-indigo-500",
  // For use on dark/coloured backgrounds — solid white button
  light:     "bg-white text-[#172a66] shadow-sm hover:bg-slate-100 hover:shadow-md focus-visible:ring-white",
  // For use on dark/coloured backgrounds — transparent with white border + text
  ghost:     "border border-white/60 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-indigo-700 focus-visible:ring-white",
};

export default function Button({
  href,
  target,
  rel,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  children
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

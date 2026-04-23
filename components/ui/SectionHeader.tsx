import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  rightSlot?: ReactNode;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  rightSlot
}: SectionHeaderProps) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 md:mb-14">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base md:text-lg">{subtitle}</p>
      </div>
      {rightSlot && <div className="hidden md:block">{rightSlot}</div>}
    </div>
  );
}

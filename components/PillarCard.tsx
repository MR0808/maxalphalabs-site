import { cn } from "@/lib/utils";

interface PillarCardProps {
  title: string;
  description: string;
  dark?: boolean;
}

export function PillarCard({ title, description, dark = false }: PillarCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6",
        dark
          ? "border-neutral-800 bg-neutral-900"
          : "border-neutral-200 bg-white"
      )}
    >
      <h3
        className={cn(
          "text-lg font-semibold tracking-tight",
          dark ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-3 text-sm leading-relaxed",
          dark ? "text-neutral-400" : "text-neutral-600"
        )}
      >
        {description}
      </p>
    </div>
  );
}

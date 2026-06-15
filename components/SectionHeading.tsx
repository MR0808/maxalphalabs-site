import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-neutral-400" : "text-neutral-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

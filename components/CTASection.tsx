import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  headline: string;
  buttonLabel: string;
  buttonHref?: string;
  description?: string;
  dark?: boolean;
  className?: string;
}

export function CTASection({
  headline,
  buttonLabel,
  buttonHref = "/contact",
  description,
  dark = false,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        dark ? "bg-neutral-900" : "bg-neutral-50",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-24">
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            dark ? "text-white" : "text-neutral-900"
          )}
        >
          {headline}
        </h2>
        {description && (
          <p
            className={cn(
              "mx-auto mt-4 max-w-xl text-lg",
              dark ? "text-neutral-400" : "text-neutral-600"
            )}
          >
            {description}
          </p>
        )}
        <Link
          href={buttonHref}
          className={cn(
            "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
            dark
              ? "bg-white text-neutral-900 hover:bg-neutral-100"
              : "bg-neutral-900 text-white hover:bg-neutral-800"
          )}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

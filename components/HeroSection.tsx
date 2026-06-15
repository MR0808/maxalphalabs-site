import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  showLogo?: boolean;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function HeroSection({
  headline,
  subheadline,
  showLogo = false,
  primaryCta,
  secondaryCta,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-neutral-200 bg-neutral-50",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.06),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 pt-32 lg:px-8 lg:py-32 lg:pt-40">
        {showLogo && (
          <div className="mb-10">
            <Image
              src="/logo/logo.png"
              alt="Max Alpha Labs"
              width={80}
              height={80}
              className="h-16 w-16 sm:h-20 sm:w-20"
              priority
            />
          </div>
        )}

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
          {headline}
        </h1>

        {subheadline && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            {subheadline}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

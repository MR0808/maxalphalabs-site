import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { APPROACH_SECTIONS } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Approach",
  description:
    "How Max Alpha Labs finds problems, validates ideas, builds lean products and scales what works.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 pt-32 lg:px-8 lg:py-28 lg:pt-40">
          <SectionHeading
            title="Our approach"
            subtitle="A disciplined model for building software companies that last."
          />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="space-y-12">
            {APPROACH_SECTIONS.map((section, index) => (
              <article
                key={section.title}
                className="grid gap-6 border-b border-neutral-200 pb-12 last:border-0 last:pb-0 lg:grid-cols-12 lg:gap-12"
              >
                <span className="text-sm font-medium text-[#8a7020] lg:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="lg:col-span-10">
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                    {section.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

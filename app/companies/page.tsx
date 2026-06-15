import type { Metadata } from "next";
import { CompanyGrid } from "@/components/CompanyGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Companies",
  description:
    "Explore the software companies built and scaled by Max Alpha Labs across compliance, finance, events and behaviour.",
  path: "/companies",
});

export default function CompaniesPage() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-20 pt-32 lg:px-8 lg:py-28 lg:pt-40">
        <SectionHeading
          title="Companies"
          subtitle="Practical software products we are building, launching and scaling."
        />
        <div className="mt-12">
          <CompanyGrid />
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { PersonCard } from "@/components/PersonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { PEOPLE, VALUES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Max Alpha Labs is a founder-led startup studio building practical software companies from zero to scale.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 pt-32 lg:px-8 lg:py-28 lg:pt-40">
          <SectionHeading
            title="About Max Alpha Labs"
            subtitle="A startup studio that builds, launches and scales software companies."
          />
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Founder-led studio
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-600">
                <p>
                  Max Alpha Labs is a startup studio focused on building
                  practical software products that solve real problems. We
                  create companies across compliance, finance, productivity and
                  operations, staying involved from first insight through
                  launch and growth.
                </p>
                <p>
                  Rather than chasing trends, we look for overlooked friction
                  in everyday workflows and build focused products that earn
                  trust through usefulness.
                </p>
              </div>
            </div>
            <div
              className="aspect-[4/3] rounded-xl border border-dashed border-neutral-300 bg-neutral-100"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading title="The team" />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {PEOPLE.map((person) => (
              <PersonCard key={person.name} name={person.name} bio={person.bio} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading title="What we value" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <h3 className="font-semibold text-neutral-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

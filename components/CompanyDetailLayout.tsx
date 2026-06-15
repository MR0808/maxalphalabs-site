import Link from "next/link";
import type { Company } from "@/lib/companies";
import { StatusBadge } from "./CompanyCard";
import { CTASection } from "./CTASection";

interface CompanyDetailLayoutProps {
  company: Company;
}

export function CompanyDetailLayout({ company }: CompanyDetailLayoutProps) {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 pt-32 lg:px-8 lg:py-28 lg:pt-40">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={company.status} />
            <span className="text-sm text-neutral-500">{company.category}</span>
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            {company.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-neutral-600">
            {company.hero}
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                The problem
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                {company.problem}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Our solution
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                {company.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Key features
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {company.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]"
                  aria-hidden="true"
                />
                <span className="text-sm text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-12 rounded-xl border border-dashed border-neutral-300 bg-white p-8 text-center"
            aria-hidden="true"
          >
            <div className="mx-auto h-48 max-w-lg rounded-lg bg-neutral-100" />
            <p className="mt-4 text-sm text-neutral-500">
              Product screenshot placeholder
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Roadmap
          </h2>
          <ol className="mt-8 space-y-6">
            {company.roadmap.map((item, index) => (
              <li
                key={item.phase}
                className="flex gap-6 rounded-xl border border-neutral-200 p-6"
              >
                <span className="text-sm font-medium text-[#8a7020]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900">{item.phase}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        headline="Interested in this product?"
        description="Whether you want early access, partnership or investment, we'd like to hear from you."
        buttonLabel="Start a conversation"
        buttonHref="/contact"
      />

      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <Link
          href="/companies"
          className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
        >
          ← Back to all companies
        </Link>
      </div>
    </>
  );
}

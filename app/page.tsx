import Link from "next/link";
import { CompanyCard } from "@/components/CompanyCard";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { PillarCard } from "@/components/PillarCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { companies } from "@/lib/companies";
import { PersonCard } from "@/components/PersonCard";
import {
  CREDIBILITY_ITEMS,
  getStats,
  PEOPLE,
  PHILOSOPHY_PILLARS,
  STUDIO_TIMELINE,
} from "@/lib/constants";

export default function HomePage() {
  const stats = getStats();
  return (
    <>
      <HeroSection
        showLogo
        headline="Building software companies from zero to scale."
        subheadline="Max Alpha Labs creates and grows practical software products that solve real-world problems across business, finance, productivity and operations."
        primaryCta={{ label: "Explore Companies", href: "/companies" }}
        secondaryCta={{ label: "Our Approach", href: "/approach" }}
      />

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              {CREDIBILITY_ITEMS.map((item) => (
                <p key={item} className="text-lg font-medium text-neutral-900">
                  {item}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-2xl font-bold tracking-tight text-neutral-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            title="Our companies"
            subtitle="Practical software products across compliance, finance, events and behaviour."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {companies.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/companies"
              className="text-sm font-medium text-neutral-900 hover:text-[#8a7020]"
            >
              View all companies →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            dark
            title="We build boring problems so others can focus on exciting things."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <PillarCard
                key={pillar.title}
                dark
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            title="The studio model"
            subtitle="From first insight to scaled product, we follow a disciplined path."
          />
          <div className="mt-12">
            <Timeline items={STUDIO_TIMELINE} />
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Founder-led. Operator-built.
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {PEOPLE.map((person) => (
              <PersonCard key={person.name} name={person.name} bio={person.bio} />
            ))}
          </div>
          <Link
            href="/about"
            className="mt-10 inline-flex text-sm font-medium text-neutral-900 hover:text-[#8a7020]"
          >
            Learn more about us →
          </Link>
        </div>
      </section>

      <CTASection
        headline="Let's build something worthwhile."
        buttonLabel="Start a conversation"
        buttonHref="/contact"
      />
    </>
  );
}

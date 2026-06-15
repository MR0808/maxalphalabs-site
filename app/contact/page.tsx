import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Max Alpha Labs to discuss partnerships, early access or building something worthwhile together.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 pt-32 lg:px-8 lg:py-28 lg:pt-40">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Let's talk"
              subtitle="Whether you're exploring a partnership, early access or a new product idea, we'd like to hear from you."
            />
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

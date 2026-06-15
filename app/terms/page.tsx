import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms",
  description: "Terms of use for Max Alpha Labs.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-20 pt-32 lg:px-8 lg:py-28 lg:pt-40">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Terms of Use
        </h1>
        <div className="mt-8 space-y-4 text-neutral-600 leading-relaxed">
          <p>
            This page will contain the terms of use for Max Alpha Labs website
            and services.
          </p>
          <p>
            For questions about these terms, please contact us through our
            contact page.
          </p>
        </div>
      </div>
    </section>
  );
}

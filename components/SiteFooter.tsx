import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mb-12">
          <p className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {SITE_NAME}
          </p>
          <p className="mt-3 text-neutral-600">
            Building companies from ideas to scale.
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-8 gap-y-3"
          aria-label="Footer"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-12 text-sm text-neutral-500">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

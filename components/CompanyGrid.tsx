"use client";

import { useState } from "react";
import type { CompanyStatus } from "@/lib/companies";
import { companies } from "@/lib/companies";
import { CompanyCard } from "./CompanyCard";
import { cn } from "@/lib/utils";

const filters: { label: string; value: CompanyStatus | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Alpha", value: "Alpha" },
  { label: "Building", value: "Building" },
  { label: "Concept", value: "Concept" },
];

export function CompanyGrid() {
  const [activeFilter, setActiveFilter] = useState<CompanyStatus | "All">("All");

  const filtered =
    activeFilter === "All"
      ? companies
      : companies.filter((c) => c.status === activeFilter);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              activeFilter === filter.value
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((company) => (
          <CompanyCard key={company.slug} company={company} />
        ))}
      </div>
    </>
  );
}

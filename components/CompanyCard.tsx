import Link from "next/link";
import type { Company, CompanyStatus } from "@/lib/companies";
import { cn } from "@/lib/utils";

const statusStyles: Record<CompanyStatus, string> = {
  Alpha: "bg-[#D4AF37]/10 text-[#8a7020] border-[#D4AF37]/30",
  Building: "bg-neutral-100 text-neutral-700 border-neutral-200",
  Concept: "bg-neutral-50 text-neutral-500 border-neutral-200",
};

export function StatusBadge({ status }: { status: CompanyStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status]
      )}
    >
      {status}
    </span>
  );
}

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-300 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-neutral-900 group-hover:text-neutral-700">
            {company.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{company.category}</p>
        </div>
        <StatusBadge status={company.status} />
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600">
        {company.description}
      </p>

      <span className="mt-6 text-sm font-medium text-neutral-900 group-hover:text-[#8a7020]">
        View company →
      </span>
    </Link>
  );
}

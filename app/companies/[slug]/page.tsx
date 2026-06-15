import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompanyDetailLayout } from "@/components/CompanyDetailLayout";
import { getAllCompanySlugs, getCompanyBySlug } from "@/lib/companies";
import { createPageMetadata } from "@/lib/metadata";

interface CompanyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCompanySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);

  if (!company) {
    return createPageMetadata({ title: "Company" });
  }

  return createPageMetadata({
    title: company.name,
    description: company.description,
    path: `/companies/${company.slug}`,
  });
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  return <CompanyDetailLayout company={company} />;
}

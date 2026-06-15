import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./constants";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
}

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
}: PageMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_AU",
      images: [
        {
          url: "/logo/logo.png",
          width: 512,
          height: 512,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: ["/logo/logo.png"],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const homeMetadata: Metadata = {
  title: "Max Alpha Labs | Startup Studio Building Software Companies",
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Max Alpha Labs | Startup Studio Building Software Companies",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/logo/logo.png",
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Max Alpha Labs | Startup Studio Building Software Companies",
    description: SITE_DESCRIPTION,
    images: ["/logo/logo.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

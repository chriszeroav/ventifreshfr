import type { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageMetadata): Metadata {
  const url = `https://ventifreshfr.com${path}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title: `${title} | Ventifresh FR`,
      description,
      url,
    },
    alternates: {
      canonical: url,
    },
  };
}

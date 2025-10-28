import { Brands, Gallery } from "@/components/layout";
import { Banner, Benefits, Hero, Info } from "@/components/services";
import { SERVICES } from "@/data/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = SERVICES.find((service) => service.slug === slug);

  if (!service) {
    return {
      title: "Servicio No Encontrado",
      description: "El servicio que buscas no existe.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `https://ventifreshfr.com/${slug}`;

  return {
    title: service.hero.title,
    description: service.hero.description,
    keywords: [
      "climatización",
      "ventilación mecánica",
      "mantenimiento",
      "instalación",
      service.hero.title.toLowerCase(),
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.hero.title} | Ventifresh FR`,
      description: service.hero.description,
      url: url,
      type: "website",
      locale: "es_PE",
      siteName: "Ventifresh FR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.hero.title} | Ventifresh FR`,
      description: service.hero.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = SERVICES.find((service) => service.slug === slug);

  if (!service) notFound();

  return (
    <main>
      <Hero {...service.hero} />
      <Benefits {...service.benefits} />
      <Info {...service.info} />
      <Brands />
      <Banner {...service.banner} />
      <Gallery />
    </main>
  );
}

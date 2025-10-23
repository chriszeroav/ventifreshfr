import { Brands, Gallery } from "@/components/layout";
import { Banner, Benefits, Hero, Info } from "@/components/services";
import { SERVICES } from "@/data/services";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = SERVICES.find((service) => service.slug === slug);

  if (!service) {
    return {
      title: "Servicio No Encontrado",
      description: "El servicio que buscas no existe.",
    };
  }

  return {
    title: service.hero.title,
    description: service.hero.description,
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

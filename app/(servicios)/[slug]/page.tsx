import { ServicesProvider } from "@/app/contexts";
import { Hero } from "@/components/services";
import { services } from "@/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Services({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <ServicesProvider service={service}>
      <main>
        <Hero />
      </main>
    </ServicesProvider>
  );
}

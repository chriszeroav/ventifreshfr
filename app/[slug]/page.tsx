import { Benefits, Hero } from "@/components/services";
import { notFound } from "next/navigation";

const SERVICES = [
  {
    slug: "mantenimiento-de-aire-acondicionado",
    hero: {
      title: "Mantenimiento de Aire Acondicionado",
      description:
        "Garantiza el rendimiento óptimo de tus equipos, mejora la calidad del aire y prolonga la vida útil de tus sistemas de climatización.",
      image: "/servicios/mantenimiento-de-aire-acondicionado-hero.webp",
      alt: "Mantenimiento de Aire Acondicionado",
    },
    benefits: {
      title: "Nuestros beneficios",
      items: [
        {
          id: "tecnicos-certificados",
          title: "Técnicos Certificados",
          description:
            "Contamos con personal especializado en mantenimiento preventivo y correctivo, capacitado en las principales marcas del mercado.",
        },
        {
          id: "eficiencia-energetica",
          title: "Mayor Eficiencia Energética",
          description:
            "Un equipo limpio y calibrado consume menos energía y enfría más rápido, ayudándote a ahorrar en tus facturas.",
        },
        {
          id: "aire-limpio",
          title: "Aire Limpio y Saludable",
          description:
            "Eliminamos polvo, moho y bacterias de tus filtros y serpentines para garantizar un ambiente saludable.",
        },
        {
          id: "mantenimiento-preventivo",
          title: "Mantenimiento Preventivo Completo",
          description:
            "Revisamos el sistema eléctrico, la presión del gas refrigerante y la limpieza profunda del equipo para evitar averías costosas.",
        },
        {
          id: "repuestos-originales",
          title: "Repuestos Originales y Garantizados",
          description:
            "Utilizamos insumos y repuestos certificados que aseguran el correcto funcionamiento del equipo.",
        },
        {
          id: "atencion-rapida",
          title: "Atención Rápida y Puntual",
          description:
            "Agendamos tu servicio con rapidez y cumplimos con los tiempos establecidos, sin retrasos.",
        },
      ],
    },
  },
];

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
    </main>
  );
}

import Link from "next/link";
import React, { FC } from "react";
import { buttonVariants } from "../shadcn";

interface ServicesProps {}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
    id: "instalacion-aire-acondicionado",
    title: "Instalación de Aire Acondicionado",
    description:
      "Diseñamos e instalamos sistemas de aire acondicionado adaptados a tus necesidades. Garantía de instalación profesional y asesoría personalizada.",
    image: "/servicios/instalacion-de-aire-acondicionado-hero.webp",
    alt: "Instalación de Aire Acondicionado",
  },
  {
    id: "mantenimiento-aire-acondicionado",
    title: "Mantenimiento de Aire Acondicionado",
    description:
      "Ofrecemos mantenimiento preventivo y correctivo para equipos residenciales, comerciales e industriales. Evita fallas y prolonga la vida útil de tus equipos.",
    image: "/servicios/mantenimiento-de-aire-acondicionado-hero.webp",
    alt: "Mantenimiento de Aire Acondicionado",
  },
  {
    id: "mantenimiento-tableros-electricos",
    title: "Mantenimiento de Tableros Eléctricos",
    description:
      "Revisamos, limpiamos y optimizamos tus tableros eléctricos para garantizar un funcionamiento seguro y eficiente de tus equipos de climatización.",
    image: "/servicios/mantenimiento-de-tableros-electricos-hero.webp",
    alt: "Mantenimiento de Tableros Eléctricos",
  },
  {
    id: "mantenimiento-ventilacion-mecanica",
    title: "Mantenimiento de Ventilación Mecánica",
    description:
      "Realizamos limpieza y calibración de sistemas de ventilación mecánica para mantener la calidad del aire y el rendimiento energético óptimo.",
    image: "/servicios/mantenimiento-de-ventilacion-mecanica-hero.webp",
    alt: "Mantenimiento de Ventilación Mecánica",
  },
];

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className="group bg-neutral-200/40">
      <div className="relative overflow-hidden">
        <img
          className="aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
          src={service.image}
          alt={service.alt}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="flex flex-col gap-6 p-8">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl text-primary-800">{service.title}</h3>
          <p className="text-neutral-600">{service.description}</p>
        </div>
        <Link
          href="#contacto"
          className={buttonVariants({
            className: "w-fit h-12 px-10 text-lg",
          })}
        >
          Contáctanos
        </Link>
      </div>
    </article>
  );
};

export const Services: FC<ServicesProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-5xl font-medium text-primary-900">
            Nuestros Servicios
          </h2>
          <p className="text-lg font-light text-neutral-500 text-balance">
            En Ventifresh FR, nos especializamos en ofrecer las siguientes
            soluciones
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

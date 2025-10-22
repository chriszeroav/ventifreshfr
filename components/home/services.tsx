"use client";

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import {
  buttonVariants,
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

interface ServicesProps {}

interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
    slug: "instalacion-de-aire-acondicionado",
    title: "Instalación de Aire Acondicionado",
    description:
      "Diseñamos e instalamos sistemas de aire acondicionado adaptados a tus necesidades. Garantía de instalación profesional y asesoría personalizada.",
    image: "/servicios/instalacion-de-aire-acondicionado-hero.webp",
    alt: "Instalación de Aire Acondicionado",
  },
  {
    slug: "mantenimiento-de-aire-acondicionado",
    title: "Mantenimiento de Aire Acondicionado",
    description:
      "Ofrecemos mantenimiento preventivo y correctivo para equipos residenciales, comerciales e industriales. Evita fallas y prolonga la vida útil de tus equipos.",
    image: "/servicios/mantenimiento-de-aire-acondicionado-hero.webp",
    alt: "Mantenimiento de Aire Acondicionado",
  },
  {
    slug: "mantenimiento-de-tableros-electricos",
    title: "Mantenimiento de Tableros Eléctricos",
    description:
      "Revisamos, limpiamos y optimizamos tus tableros eléctricos para garantizar un funcionamiento seguro y eficiente de tus equipos de climatización.",
    image: "/servicios/mantenimiento-de-tableros-electricos-hero.webp",
    alt: "Mantenimiento de Tableros Eléctricos",
  },
  {
    slug: "mantenimiento-de-ventilacion-mecanica",
    title: "Mantenimiento de Ventilación Mecánica",
    description:
      "Realizamos limpieza y calibración de sistemas de ventilación mecánica para mantener la calidad del aire y el rendimiento energético óptimo.",
    image: "/servicios/mantenimiento-de-ventilacion-mecanica-hero.webp",
    alt: "Mantenimiento de Ventilación Mecánica",
  },
];

interface CarouselIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideSelect: (index: number) => void;
}

const CarouselIndicators: FC<CarouselIndicatorsProps> = ({
  totalSlides,
  currentSlide,
  onSlideSelect,
}) => {
  return (
    <div className="flex justify-center gap-2 mt-10">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideSelect(index)}
          className={cn(
            "h-2 w-2 rounded-full transition-all duration-300",
            index === currentSlide
              ? "bg-primary-600 w-6"
              : "bg-primary-200 hover:bg-primary-300"
          )}
          aria-label={`Ir al slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export const Services: FC<ServicesProps> = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const autoplayPlugin = React.useRef(Autoplay({ delay: 4000 }));

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const handleMouseEnter = () => {
    if (autoplayPlugin.current) {
      autoplayPlugin.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplayPlugin.current) {
      autoplayPlugin.current.play();
    }
  };
  return (
    <section className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full",
          "flex flex-col gap-8 lg:gap-12",
          "mx-auto py-16 lg:py-20"
        )}
      >
        <div className="flex flex-col gap-2 text-center">
          <h2
            className={cn(
              "font-medium text-primary-900",
              "text-3xl lg:text-4xl xl:text-5xl"
            )}
          >
            Nuestros Servicios
          </h2>
          <p className="text-sm font-light text-neutral-500 text-balance">
            En Ventifresh FR, nos especializamos en ofrecer las siguientes
            soluciones
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem
                key={service.slug}
                className="flex flex-col md:basis-1/2 lg:basis-1/3"
              >
                <img
                  className="aspect-[1/0.7] object-cover"
                  src={service.image}
                  alt={service.alt}
                />

                <div className="flex flex-col gap-6 flex-1 p-4 bg-neutral-50">
                  <div className="flex flex-col gap-1 flex-1">
                    <h3 className="text-xl xl:text-2xl font-medium text-primary-900">
                      {service.title}
                    </h3>
                    <p className="text-base leading-snug font-light text-neutral-500">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      className={buttonVariants({
                        className: "",
                      })}
                      href="/contacto"
                    >
                      Contactar
                    </Link>
                    <Link
                      className={buttonVariants({
                        variant: "outline",
                        className: "",
                      })}
                      href={`/${service.slug}`}
                    >
                      Ver Detalle
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselIndicators
            totalSlides={services.length}
            currentSlide={current}
            onSlideSelect={goToSlide}
          />
        </Carousel>
      </div>
    </section>
  );
};

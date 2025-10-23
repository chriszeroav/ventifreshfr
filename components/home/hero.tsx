import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/shadcn";

interface HeroProps {}

interface Stat {
  id: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    id: "clientes",
    value: "+20",
    label: "clientes satisfechos",
  },
  {
    id: "experiencia",
    value: "+5",
    label: "años de experiencia",
  },
  {
    id: "equipos",
    value: "+100",
    label: "equipos instalados",
  },
];

interface StatItemProps {
  stat: Stat;
}

const StatItem: FC<StatItemProps> = ({ stat }) => {
  return (
    <li
      className={cn(
        "flex flex-col items-center text-center",
        "lg:items-start lg:text-left lg:gap-2"
      )}
    >
      <span
        className={cn(
          "relative text-3xl font-medium text-neutral-900 lg:text-5xl",
          "after:absolute after:bottom-0 after:right-0 after:-z-10",
          "after:h-1 after:w-1/2 after:rounded-full after:bg-primary-200"
        )}
      >
        {stat.value}
      </span>
      <span className="text-sm font-light text-neutral-900 lg:text-base">
        {stat.label}
      </span>
    </li>
  );
};

export const Hero: FC<HeroProps> = () => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full mx-auto pt-10 pb-16 lg:pb-20",
          "flex flex-col gap-8",
          "lg:grid lg:grid-cols-[3fr_2fr]",
          "xl:grid-cols-[4fr_3fr] xl:gap-16"
        )}
      >
        <div className="flex flex-col gap-10 lg:gap-20 xl:gap-36 lg:py-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 lg:gap-4">
              <h1
                className={cn(
                  "font-semibold text-primary-900 leading-tight",
                  "text-3xl lg:text-5xl xl:text-6xl"
                )}
              >
                Nos encargamos del clima ideal para tu hogar o negocio
              </h1>
              <p className="font-light text-neutral-700 lg:max-w-xl lg:text-lg">
                Más de 5 años ofreciendo instalación y mantenimiento profesional
                de sistemas de climatización, ventilación mecánica y tableros
                eléctricos. Confort, eficiencia y seguridad en cada proyecto.
              </p>
            </div>
            <div className="flex gap-2 lg:gap-6">
              <Link
                className={buttonVariants({
                  className: "lg:h-12 lg:px-12 lg:text-lg",
                })}
                href="/contacto"
              >
                Contactanos
              </Link>
              <Link
                className={buttonVariants({
                  variant: "secondary",
                  className: "lg:h-12 lg:px-12 lg:text-lg",
                })}
                href="#servicios"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
          <ul
            className={cn(
              "grid grid-cols-3 gap-6",
              "md:flex md:gap-10 xl:gap-16"
            )}
          >
            {stats.map((stat) => (
              <StatItem key={stat.id} stat={stat} />
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            className={cn(
              "object-cover w-full h-full",
              "aspect-[1/1.3] sm:aspect-video"
            )}
            src="/inicio.webp"
            alt="Hero Ventifresh FR"
          />
          <div
            className={cn(
              "absolute -bottom-10 right-5 w-[250px]",
              "border-t-8 border-primary-500",
              "bg-white p-4 shadow xl:w-[350px] xl:p-6"
            )}
          >
            <p className="text-primary-900 font-medium xl:text-xl">
              Instalación Profesional
            </p>
            <p className="text-sm text-neutral-600 font-light xl:text-base">
              Diseñamos sistemas eficientes adaptados a tu espacio y necesidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

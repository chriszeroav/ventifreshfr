import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface PromiseProps {}

export const Promise: FC<PromiseProps> = () => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full",
          "flex flex-col gap-8",
          "md:grid md:grid-cols-2 md:gap-16",
          "mx-auto py-16 lg:py-20"
        )}
      >
        <img
          className="aspect-square object-cover md:aspect-auto"
          src="/nosotros/about1.webp"
          alt=""
        />
        <div className="flex flex-col gap-8 md:justify-center">
          <h2
            className={cn(
              "text-primary-800 font-medium",
              "text-2xl md:text-3xl lg:text-4xl"
            )}
          >
            Cuidamos tus ambientes, cuidamos tu inversión
          </h2>
          <p className="text-neutral-600 font-light text-balance lg:text-lg">
            Nuestro objetivo es crear espacios cómodos y seguros que mejoren tu
            calidad de vida y la de quienes te rodean. Creemos que un
            mantenimiento responsable es clave para prolongar la vida útil de
            los equipos y reducir costos operativos.
          </p>
          <p
            className={cn(
              "text-neutral-600 font-medium px-6",
              "border-l-8 border-primary-500",
              "lg:text-lg text-balance"
            )}
          >
            La calidad del aire que respiras refleja el cuidado que ponemos en
            cada servicio.
          </p>
        </div>
      </div>
    </section>
  );
};

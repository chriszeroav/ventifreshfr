import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface CommitmentProps {}

export const Commitment: FC<CommitmentProps> = () => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full",
          "flex flex-col gap-8 lg:gap-12",
          "mx-auto py-16 lg:py-20"
        )}
      >
        <h2 className="text-primary-800 text-2xl md:text-3xl lg:text-4xl font-medium">
          Garantizamos tu confort y el rendimiento de tus equipos
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-16">
          <p className="text-neutral-600 lg:text-lg font-light text-balance">
            Trabajamos para asegurar que cada instalación o mantenimiento se
            realice con precisión, compromiso y materiales de alta calidad.
            Nuestros técnicos están capacitados para ofrecer soluciones que
            garantizan el confort y la eficiencia energética de tu hogar o
            empresa.
          </p>
          <p className="text-neutral-600 lg:text-lg font-light text-balance">
            Cada proyecto es tratado con la misma dedicación, sin importar su
            tamaño. Aplicamos procesos estandarizados, diagnóstico profesional y
            equipos modernos para que tus sistemas de aire acondicionado y
            ventilación funcionen como el primer día.
          </p>
        </div>
      </div>
    </section>
  );
};

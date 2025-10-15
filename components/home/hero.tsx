import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../shadcn";

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <section
      className={cn(
        "bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent),url('/inicio.webp')]",
        "bg-cover bg-center px-4"
      )}
    >
      <div className="max-w-7xl w-full mx-auto h-[70dvh] flex items-center">
        <div className="max-w-xl flex flex-col gap-4">
          <h1 className="text-5xl text-neutral-50 font-semibold">
            Soluciones integrales en{" "}
            <span className="text-primary-400">climatización</span> y{" "}
            <span className="text-primary-400">ventilación</span>
            profesional.
          </h1>
          <p className="text-neutral-50 text-lg">
            Servicio especializado en mantenimiento de equipos HVAC, ventilación
            mecánica y tableros eléctricos.
          </p>
          <Link
            className={buttonVariants({ className: "w-fit h-12 text-lg" })}
            href="#contacto"
          >
            Solicita tu presupuesto
          </Link>
        </div>
      </div>
    </section>
  );
};

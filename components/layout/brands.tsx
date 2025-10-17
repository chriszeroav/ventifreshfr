import React, { FC } from "react";
import { cn } from "@/lib/utils";

interface BrandsProps {}

export const Brands: FC<BrandsProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16 py-20">
        <h2
          className={cn(
            "text-2xl lg:text-3xl xl:text-5xl",
            "text-primary-900 text-center font-medium"
          )}
        >
          Ellos confían en nosotros
        </h2>
        <div
          className={cn(
            "flex flex-col items-center gap-20",
            "md:grid md:grid-cols-2 md:justify-items-center",
            "lg:grid-cols-4 lg:gap-28"
          )}
        >
          <img
            className="w-3/5 lg:w-full object-contain"
            src="/marcas/agr_climatizacion.png"
            alt="Agr Climatización"
          />
          <img
            className="w-3/5 lg:w-full object-contain"
            src="/marcas/falabella.svg"
            alt="Falabella"
          />
          <img
            className="w-3/5 lg:w-full object-contain"
            src="/marcas/confiaserv.svg"
            alt="Confiaserv"
          />
          <img
            className="w-3/5 lg:w-full object-contain"
            src="/marcas/konecta.svg"
            alt="Konecta"
          />
        </div>
      </div>
    </section>
  );
};

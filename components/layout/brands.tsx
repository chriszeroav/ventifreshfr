import React, { FC } from "react";
import { cn } from "@/lib/utils";

interface BrandsProps {}

export const Brands: FC<BrandsProps> = () => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full",
          "flex flex-col gap-8 sm:gap-12",
          "mx-auto py-10 lg:py-20"
        )}
      >
        <h2
          className={cn(
            "text-2xl sm:text-3xl lg:text-4xl",
            "text-primary-900 text-center font-semibold"
          )}
        >
          Empresas que ya confían en nosotros
        </h2>
        <div
          className={cn(
            "flex flex-col items-center gap-16",
            "sm:grid sm:grid-cols-2 sm:justify-items-center",
            "lg:grid-cols-4 lg:gap-28"
          )}
        >
          <img
            className="w-1/2 lg:w-3/4 object-contain"
            src="/marcas/falabella.svg"
            alt="Falabella"
          />
          <img
            className="w-1/2 lg:w-3/4 object-contain"
            src="/marcas/konecta.svg"
            alt="Konecta"
          />
          <img
            className="w-1/2 lg:w-3/4 object-contain"
            src="/marcas/agr_climatizacion.png"
            alt="Agr Climatización"
          />
          <img
            className="w-1/2 lg:w-3/4 object-contain"
            src="/marcas/confiaserv.svg"
            alt="Confiaserv"
          />
        </div>
      </div>
    </section>
  );
};

import React, { FC } from "react";

interface BrandsProps {}

export const Brands: FC<BrandsProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-16">
        <h2 className="text-5xl font-medium text-primary-900 text-center">
          Ellos confian en nosotros
        </h2>
        <ul className="grid grid-cols-4 gap-28">
          <li>
            <img
              className="w-full h-full object-contain"
              src="/marcas/agr_climatizacion.png"
              alt="Agr Climatización"
            />
          </li>
          <li>
            <img
              className="w-full h-full object-contain"
              src="/marcas/falabella.svg"
              alt="Falabella"
            />
          </li>
          <li>
            <img
              className="w-full h-full object-contain"
              src="/marcas/confiaserv.svg"
              alt="Confiaserv"
            />
          </li>
          <li>
            <img
              className="w-full h-full object-contain"
              src="/marcas/konecta.svg"
              alt="Konecta"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

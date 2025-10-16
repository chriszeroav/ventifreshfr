import Link from "next/link";
import React, { FC } from "react";
import { buttonVariants } from "@/components/shadcn";

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  return (
    <section className="px-4 bg-neutral-200/40">
      <div className="max-w-7xl w-full mx-auto py-20 grid grid-cols-2 gap-20">
        <img className="h-full object-cover" src="/nosotros.webp" alt="" />
        <div className="flex flex-col gap-6 ">
          <h2 className="text-5xl font-medium text-primary-900">
            Más de 5 Años de Experiencia en la Industria del Clima
          </h2>
          <div className="flex flex-col gap-2 text-neutral-600 text-lg font-light">
            <p>
              Somos una empresa especializada en ventilación, aire acondicionado
              y sistemas eléctricos, comprometida con la eficiencia, la
              seguridad y el confort de nuestros clientes.
            </p>
            <p>
              Nuestro equipo técnico está altamente capacitado y trabajamos con
              marcas líderes del mercado, garantizando resultados duraderos y un
              servicio de excelencia.
            </p>
          </div>
          <Link
            href="#contacto"
            className={buttonVariants({
              className: "h-12 text-lg w-fit px-10",
            })}
          >
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
};

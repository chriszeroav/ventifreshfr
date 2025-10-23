import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../shadcn";
import Link from "next/link";

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <section className="px-4 bg-cover bg-center bg-no-repeat relative bg-[url('/nosotros/inicio.webp')]">
      <div className="absolute inset-0 bg-gradient-to-r from-black" />
      <div
        className={cn(
          "max-w-7xl w-full min-h-[70dvh]",
          "sm:min-h-[60dvh] lg:min-h-[50dvh]",
          "flex items-center mx-auto relative"
        )}
      >
        <div className="max-w-md flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1
              className={cn(
                "font-semibold text-white",
                "text-2xl sm:text-3xl lg:text-5xl "
              )}
            >
              Sobre Nosotros
            </h1>
            <p
              className={cn(
                "text-neutral-200 font-light text-balance",
                "text-sm sm:text-base lg:text-lg"
              )}
            >
              Brindamos soluciones de aire acondicionado, ventilación y
              mantenimiento eléctrico para hogares y empresas.
            </p>
          </div>
          <div className="flex items-center gap-2 text-white sm:gap-4">
            <Link
              href="https://wa.me/51928844947?text=Hola%2C%20quiero%20solicitar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
              className={buttonVariants({
                size: "sm",
              })}
            >
              Habla con un asesor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/*
<section
      className={cn(
        "bg-[url('/nosotros/inicio.webp')]",
        "bg-cover bg-center bg-no-repeat",
        "bg-blend-darken bg-black/70",
        "px-4"
      )}
    >
      <div
        className={cn(
          "max-w-7xl w-full min-h-[50dvh] md:min-h-[40dvh]",
          "flex flex-col gap-4 justify-center",
          "mx-auto"
        )}
      >
        <h1
          className={cn(
            "font-semibold text-primary-400",
            "text-3xl lg:text-4xl xl:text-5xl"
          )}
        >
          Nosotros
        </h1>
        <p className="md:text-lg text-neutral-200 font-light max-w-md">
          Brindamos soluciones de aire acondicionado, ventilación y
          mantenimiento eléctrico para hogares y empresas.
        </p>
      </div>
    </section>
*/

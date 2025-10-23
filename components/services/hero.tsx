import React, { FC } from "react";
import { buttonVariants } from "../shadcn";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
  image: string;
}

export const Hero: FC<HeroProps> = ({ description, image, title }) => {
  return (
    <section
      className="px-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black" />
      <div
        className={cn(
          "max-w-7xl w-full min-h-[70dvh]",
          "sm:min-h-[60dvh] lg:min-h-[50dvh]",
          "flex items-center mx-auto relative"
        )}
      >
        <div className="max-w-2xl flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1
              className={cn(
                "font-semibold text-white",
                "text-2xl sm:text-3xl lg:text-5xl "
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "text-neutral-200 font-light text-balance",
                "text-sm sm:text-base lg:text-lg"
              )}
            >
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-white sm:gap-4">
            <Link href="/contacto" className={buttonVariants({ size: "sm" })}>
              Cotizar servicio
            </Link>
            <Link
              href="https://wa.me/51928844947?text=Hola%2C%20quiero%20solicitar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
              className={buttonVariants({
                size: "sm",
                variant: "outline",
              })}
            >
              Consulta rápida
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

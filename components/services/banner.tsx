import Link from "next/link";
import React, { FC } from "react";
import { buttonVariants } from "../shadcn";
import { cn } from "@/lib/utils";

interface BannerProps {
  title: string;
  description: string;
}

export const Banner: FC<BannerProps> = ({ title, description }) => {
  return (
    <section className="px-4 bg-primary-700">
      <div
        className={cn(
          "max-w-7xl w-full",
          "flex flex-col items-center gap-20",
          "lg:flex-row lg:items-end lg:justify-between lg:gap-10",
          "mx-auto pt-12 lg:p-0"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center gap-6",
            "lg:py-20 lg:items-start lg:gap-12 lg:max-w-2xl"
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-2",
              "text-center lg:text-start lg:gap-4"
            )}
          >
            <h2
              className={cn(
                "text-2xl sm:text-3xl lg:text-4xl",
                "font-semibold text-white"
              )}
            >
              {title}
            </h2>
            <p className="sm:text-lg text-white font-light">{description}</p>
          </div>
          <div className="flex items-center gap-4 text-white sm:gap-4">
            <Link
              href="https://wa.me/51928844947?text=Hola%2C%20quiero%20solicitar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
              className={buttonVariants({
                size: "sm",
                variant: "outline",
              })}
            >
              Consulta rápida
            </Link>
            <Link
              href="/contacto"
              className={buttonVariants({
                size: "sm",
                variant: "secondary",
              })}
            >
              Agendar servicio
            </Link>
          </div>
        </div>
        <img
          className="max-w-[200px] lg:max-w-[300px] xl:max-w-[400px]"
          src="/banner.webp"
          alt=""
        />
      </div>
    </section>
  );
};

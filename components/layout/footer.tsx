import React, { FC } from "react";
import { MailPlusIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full mx-auto py-10",
          "flex flex-col gap-10",
          "lg:gap-8 lg:flex-row lg:justify-between"
        )}
      >
        <div className="flex flex-col gap-6 lg:max-w-[400px]">
          <img
            className="w-[200px] h-[60px] object-contain"
            src="/logo.png"
            alt="Logo de Ventifresh F&R"
          />
          <p className="text-neutral-600">
            En VentifreshFR trabajamos para brindarte confort, eficiencia y aire
            limpio. Más de 5 años de experiencia en climatización y ventilación
            a tu servicio.
          </p>
        </div>

        <div
          className={cn(
            "flex flex-col gap-10",
            "md:grid md:grid-cols-3",
            "lg:flex lg:flex-row xl:gap-20"
          )}
        >
          <div
            className={cn(
              "grid grid-rows-[repeat(2,auto)] gap-6",
              "lg:grid-rows-[60px_auto]"
            )}
          >
            <h4 className="font-medium text-nowrap text-lg text-primary-700 self-end">
              Enlaces rápidos
            </h4>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-neutral-500 hover:text-neutral-600 transition-colors"
                href="#inicio"
              >
                Inicio
              </Link>
              <Link
                className="text-neutral-500 hover:text-neutral-600 transition-colors"
                href="#servicios"
              >
                Servicios
              </Link>
              <Link
                className="text-neutral-500 hover:text-neutral-600 transition-colors"
                href="#nosotros"
              >
                Nosotros
              </Link>
              <Link
                className="text-neutral-500 hover:text-neutral-600 transition-colors"
                href="#contacto"
              >
                Contacto
              </Link>
            </ul>
          </div>

          <div
            className={cn(
              "grid grid-rows-[repeat(2,auto)] gap-6",
              "lg:grid-rows-[60px_auto]"
            )}
          >
            <h4 className="font-medium text-lg text-primary-700 self-end">
              Nuestros servicios
            </h4>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-neutral-500 hover:text-neutral-600 transition-colors"
                href="#mantenimiento-tableros-electricos"
              >
                Tableros electricos
              </Link>
              <Link
                className="text-neutral-500 hover:text-neutral-600 transition-colors"
                href="#mantenimiento-ventilacion-mecanica"
              >
                Ventilación mecánica
              </Link>
              <Link
                className="text-neutral-500 hover:text-neutral-600 transition-colors"
                href="#mantenimiento-aire-acondicionado"
              >
                Aire acondicionado
              </Link>
            </ul>
          </div>

          <div
            className={cn(
              "grid grid-rows-[repeat(2,auto)] gap-6",
              "lg:grid-rows-[60px_auto]"
            )}
          >
            <h4 className="font-medium text-lg text-primary-700 self-end">
              Contacto
            </h4>
            <ul className="flex flex-col gap-2">
              <Link
                className="inline-flex gap-1 items-center text-neutral-500 hover:text-neutral-600 transition-colors"
                href="tel:+51928844947"
              >
                <PhoneCallIcon className="size-5" />
                +51 928 844 947
              </Link>
              <Link
                className="inline-flex gap-1 items-center text-neutral-500 hover:text-neutral-600 transition-colors"
                href="tel:+51910908935"
              >
                <PhoneCallIcon className="size-5" />
                +51 910 908 935
              </Link>
              <Link
                className="inline-flex gap-1 items-center text-neutral-500 hover:text-neutral-600 transition-colors"
                href="mailto:ventifresh.fr@gmail.com"
              >
                <MailPlusIcon className="size-5" />
                ventifresh.fr@gmail.com
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-neutral-400">
        Todos los derechos reservados &copy; Ventifresh F&amp;R 2025
      </div>
    </footer>
  );
};

import React, { FC } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/shadcn";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

interface HeaderProps {}

export const Header: FC<HeaderProps> = async () => {
  return (
    <header className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full mx-auto h-20 py-3",
          "flex items-center justify-between"
        )}
      >
        <img className="h-full" src="/logo.png" alt="" />

        <nav className="flex items-center gap-6">
          <HoverCard openDelay={50} closeDelay={100}>
            <HoverCardTrigger
              className={cn(
                "flex items-center cursor-pointer gap-2",
                "hover:text-primary-600 transition-colors",
                "data-[state=open]:text-primary-600 group"
              )}
            >
              Servicios
              <ChevronDownIcon
                className={cn(
                  "w-6 group-data-[state=open]:rotate-180",
                  "transition-transform duration-300"
                )}
              />
            </HoverCardTrigger>
            <HoverCardContent
              align="start"
              className="flex flex-col gap-2 text-center"
            >
              <Link
                className="hover:text-primary-600 transition-colors"
                href="#mantenimiento-de-aire-acondicionado"
              >
                Mantenimiento de aire acondicionado
              </Link>
              <Link
                className="hover:text-primary-600 transition-colors"
                href="#instalacion-de-aire-acondicionado"
              >
                Instalacion de aire acondicionado
              </Link>
              <Link
                className="hover:text-primary-600 transition-colors"
                href="#mantenimiento-de-tableros-electricos"
              >
                Mantenimiento de tableros eléctricos
              </Link>
              <Link
                className="hover:text-primary-600 transition-colors"
                href="#mantenimiento-de-ventilacion-mecanica"
              >
                Mantenimiento de ventilación mecánica
              </Link>
            </HoverCardContent>
          </HoverCard>
          <Link
            className="hover:text-primary-600 transition-colors"
            href="#nosotros"
          >
            Nosotros
          </Link>
          <Link
            href="#contacto"
            className="hover:text-primary-600 transition-colors"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

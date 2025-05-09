"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui";
import Link from "next/link";
import { FC, useState } from "react";
import { MenuIcon, ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [isOpenHoverCard, setIsOpenHoverCard] = useState(false);

  return (
    <header className="px-4 sm:px-6 md:px-8 lg:px-10 transition-all">
      <div className="max-w-7xl mx-auto h-20 py-2 md:py-3 flex justify-between transition-all">
        <Link className="block" href="/">
          <img className="h-full" src="/logo3.png" alt="" />
        </Link>
        <nav className="self-center">
          <section className="hidden  md:flex md:gap-5">
            <HoverCard
              open={isOpenHoverCard}
              onOpenChange={setIsOpenHoverCard}
              openDelay={50}
              closeDelay={100}
            >
              <HoverCardTrigger
                className={cn(
                  "flex items-center cursor-pointer gap-2 hover:text-custom-primary transition-colors",
                  isOpenHoverCard && "text-custom-primary"
                )}
              >
                Servicios
                <ChevronDownIcon
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isOpenHoverCard && "rotate-180"
                  )}
                />
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                className="flex flex-col gap-2 text-center"
              >
                <Link
                  className="hover:text-custom-primary transition-colors"
                  href="/mantenimiento-de-aire-acondicionado"
                >
                  Mantenimiento de aire acondicionado
                </Link>
                <Link
                  className="hover:text-custom-primary transition-colors"
                  href="/instalacion-de-aire-acondicionado"
                >
                  Instalacion de aire acondicionado
                </Link>
                <Link
                  className="hover:text-custom-primary transition-colors"
                  href="/mantenimiento-de-tableros-electricos"
                >
                  Mantenimiento de tableros eléctricos
                </Link>
                <Link
                  className="hover:text-custom-primary transition-colors"
                  href="/mantenimiento-de-ventilacion-mecanica"
                >
                  Mantenimiento de ventilación mecánica
                </Link>
              </HoverCardContent>
            </HoverCard>
            <Link
              className="hover:text-custom-primary transition-colors"
              href="/nosotros"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="hover:text-custom-primary transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/faq"
              className="hover:text-custom-primary transition-colors"
            >
              FAQ
            </Link>
          </section>
          <section className="flex md:hidden">
            <Drawer direction="right">
              <DrawerTrigger className="cursor-pointer">
                <MenuIcon className="size-8" />
              </DrawerTrigger>
              <DrawerContent className="w-[300px]">
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
                Hola
              </DrawerContent>
            </Drawer>
          </section>
        </nav>
      </div>
    </header>
  );
};

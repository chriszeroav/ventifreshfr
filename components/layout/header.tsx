"use client";

import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  buttonVariants,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/shadcn";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full mx-auto h-16 md:h-20 py-3",
          "flex items-center justify-between"
        )}
      >
        <Link className="h-full" href="/">
          <img className="h-full" src="/logo.png" alt="" />
        </Link>

        <nav>
          <div className="hidden md:flex items-center gap-6">
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
                className="flex flex-col gap-2 text-center bg-white shadow border border-neutral-100"
              >
                <Link
                  className="hover:text-primary-600 transition-colors"
                  href="/mantenimiento-de-aire-acondicionado"
                >
                  Mantenimiento de aire acondicionado
                </Link>
                <Link
                  className="hover:text-primary-600 transition-colors"
                  href="/instalacion-de-aire-acondicionado"
                >
                  Instalacion de aire acondicionado
                </Link>
                <Link
                  className="hover:text-primary-600 transition-colors"
                  href="/mantenimiento-de-tableros-electricos"
                >
                  Mantenimiento de tableros eléctricos
                </Link>
                <Link
                  className="hover:text-primary-600 transition-colors"
                  href="/mantenimiento-de-ventilacion-mecanica"
                >
                  Mantenimiento de ventilación mecánica
                </Link>
              </HoverCardContent>
            </HoverCard>
            <Link
              className="hover:text-primary-600 transition-colors"
              href="/nosotros"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="hover:text-primary-600 transition-colors"
            >
              Contacto
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <Drawer direction="right">
              <DrawerTrigger>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="sr-only">
                  <DrawerTitle>Menu</DrawerTitle>
                  <DrawerDescription>
                    Navegación principal del sitio
                  </DrawerDescription>
                </DrawerHeader>
                <div
                  className={cn(
                    "h-[60px] px-3",
                    "flex items-center justify-between",
                    "border-b border-neutral-300"
                  )}
                >
                  <h2 className="text-xl font-medium text-neutral-800">Menu</h2>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <XIcon className="size-8 text-neutral-800" />
                    </Button>
                  </DrawerClose>
                </div>
                <nav className="p-3 flex flex-col gap-5">
                  <DrawerClose asChild>
                    <Link
                      className={cn(
                        buttonVariants({ variant: "link" }),
                        "justify-start px-2"
                      )}
                      href="/nosotros"
                    >
                      Nosotros
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Link
                      className={cn(
                        buttonVariants({ variant: "link" }),
                        "justify-start px-2"
                      )}
                      href="/contacto"
                    >
                      Contacto
                    </Link>
                  </DrawerClose>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="servicios">
                      <AccordionTrigger>Servicios</AccordionTrigger>
                      <AccordionContent className="p-0">
                        <DrawerClose asChild>
                          <Link
                            className={cn(
                              buttonVariants({ variant: "link" }),
                              "justify-start h-auto"
                            )}
                            href="/mantenimiento-de-aire-acondicionado"
                          >
                            Mantenimiento de aire acondicionado
                          </Link>
                        </DrawerClose>
                        <DrawerClose asChild>
                          <Link
                            className={cn(
                              buttonVariants({ variant: "link" }),
                              "justify-start h-auto"
                            )}
                            href="/instalacion-de-aire-acondicionado"
                          >
                            Instalacion de aire acondicionado
                          </Link>
                        </DrawerClose>
                        <DrawerClose asChild>
                          <Link
                            className={cn(
                              buttonVariants({ variant: "link" }),
                              "justify-start h-auto"
                            )}
                            href="/mantenimiento-de-tableros-electricos"
                          >
                            Mantenimiento de tableros eléctricos
                          </Link>
                        </DrawerClose>
                        <DrawerClose asChild>
                          <Link
                            className={cn(
                              buttonVariants({ variant: "link" }),
                              "justify-start h-auto"
                            )}
                            href="/mantenimiento-de-ventilacion-mecanica"
                          >
                            Mantenimiento de ventilación mecánica
                          </Link>
                        </DrawerClose>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  );
};

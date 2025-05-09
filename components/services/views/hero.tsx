"use client";

import { useServices } from "@/app/contexts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  const { service } = useServices();

  return (
    <section className="relative">
      <img
        src={service.hero_img}
        className="h-[600px] w-full object-cover object-center"
        alt="Welcome Company Page"
      />
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 transition-all absolute inset-0 bg-gradient-to-r from-black to-black/20">
        <div className="max-w-7xl mx-auto h-full">
          <div className="max-w-2xl flex flex-col justify-center gap-6 h-full">
            <h1 className="text-white text-4xl font-semibold tracking-wide uppercase">
              {service.hero_title}
            </h1>
            <p className="text-neutral-100 text-lg">{service.hero_subtitle}</p>
            <Link
              className={cn(
                "w-44 h-10",
                "flex items-center justify-center",
                "bg-custom-primary rounded-lg text-white text-lg"
              )}
              href="/contacto"
            >
              Cotizar ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

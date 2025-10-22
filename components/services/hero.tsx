import React, { FC } from "react";
import { buttonVariants } from "../shadcn";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const Hero: FC<HeroProps> = ({ alt, description, image, title }) => {
  return (
    <section
      className="px-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60" />
      <div
        className={cn(
          "max-w-7xl w-full min-h-[50dvh]",
          "flex items-center mx-auto relative"
        )}
      >
        <div className="max-w-2xl flex flex-col gap-6">
          <h1 className="text-white text-5xl font-semibold">{title}</h1>
          <p className="text-neutral-200 font-light text-lg text-balance">
            {description}
          </p>
          <a
            href="/contacto"
            className={buttonVariants({ size: "lg", className: "w-fit" })}
          >
            Solicitar información
          </a>
        </div>
      </div>
    </section>
  );
};

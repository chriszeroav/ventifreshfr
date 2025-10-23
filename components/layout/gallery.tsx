"use client";

import React, { FC } from "react";
import { cn } from "@/lib/utils";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface GalleryProps {}

export const Gallery: FC<GalleryProps> = () => {
  const images = [
    "/proyectos/proyecto1.jpg",
    "/proyectos/proyecto5.jpg",
    "/proyectos/proyecto2.jpg",
    "/proyectos/proyecto3.jpg",
    "/proyectos/proyecto4.jpg",

    "/proyectos/proyecto6.jpg",
    "/proyectos/proyecto7.jpg",
  ];

  return (
    <section className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full",
          "flex flex-col gap-12 lg:gap-16",
          "mx-auto py-16 lg:py-20"
        )}
      >
        <h2
          className={cn(
            "font-semibold text-primary-900",
            "text-2xl sm:text-3xl lg:text-4xl",
            "text-center"
          )}
        >
          Nuestros proyectos
        </h2>
        <PhotoProvider>
          <div className="columns-1 md:columns-2 lg:columns-3">
            {images.map((item, index) => (
              <PhotoView key={index} src={item}>
                <img className="mb-5" src={item} alt="" />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

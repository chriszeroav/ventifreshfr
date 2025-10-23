import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface InfoProps {
  title: string;
  description: string[];
  points: string[];
  image: string;
  alt: string;
}

export const Info: FC<InfoProps> = ({
  title,
  description,
  points,
  image,
  alt,
}) => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full",
          "flex flex-col gap-12 lg:flex-row",
          "mx-auto py-16 lg:py-20"
        )}
      >
        <div className="lg:flex-3 xl:flex-1">
          <img
            className="w-full h-full object-cover shadow-lg"
            src={image}
            alt={alt}
          />
        </div>

        <div
          className={cn(
            "flex flex-col justify-center gap-6",
            "lg:flex-4 xl:flex-1"
          )}
        >
          <h2
            className={cn(
              "text-2xl sm:text-3xl lg:text-4xl",
              "text-primary-800 font-semibold text-balance"
            )}
          >
            {title}
          </h2>
          <div
            className={cn(
              "flex flex-col gap-4",
              "text-base xl:text-lg",
              "text-neutral-600 font-light text-balance"
            )}
          >
            {description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-neutral-800 font-medium">Lo que incluye:</p>
            <ul
              className={cn(
                "list-disc ml-5",
                "flex flex-col gap-2",
                "text-sm lg:text-base",
                "text-neutral-600 font-light text-balance"
              )}
            >
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

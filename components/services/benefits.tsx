import React, { FC } from "react";
import { SnowflakeIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  title: string;
  items: BenefitItem[];
}

interface BenefitsCardProps extends BenefitItem {
  active: boolean;
}

const BenefitsCard: FC<BenefitsCardProps> = ({
  title,
  description,
  active,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 p-6",
        active ? "bg-primary-600" : "bg-neutral-200/30"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center",
          "size-10 lg:size-12 rounded-full text-white",
          active ? "bg-white/30" : "bg-primary-600"
        )}
      >
        <SnowflakeIcon className="size-5 lg:size-6" />
      </div>
      <div className="flex flex-col gap-1">
        <h3
          className={cn(
            "text-lg font-medium lg:text-xl",
            active ? "text-white" : "text-primary-900"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-sm font-light text-balance lg:text-base",
            active ? "text-white" : "text-neutral-600"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const Benefits: FC<BenefitsProps> = ({ items, title }) => {
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
          {title}
        </h2>

        <div
          className={cn(
            "grid grid-cols-1 gap-8",
            "sm:grid-cols-2 gap-12",
            "lg:grid-cols-3 lg:auto-rows-[290px]"
          )}
        >
          {items.map((item) => (
            <BenefitsCard
              key={item.id}
              {...item}
              active={item.id === "tecnicos-certificados"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

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
          "size-12 rounded-full flex items-center justify-center text-white",
          active ? "bg-white/30" : "bg-primary-600"
        )}
      >
        <SnowflakeIcon className="size-6" />
      </div>
      <div className="flex flex-col gap-2">
        <h3
          className={cn(
            "text-lg font-medium",
            active ? "text-white" : "text-primary-900"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "leading-relaxed font-light",
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
          "flex flex-col gap-8 lg:gap-12",
          "mx-auto py-10 lg:py-20"
        )}
      >
        <h2
          className={cn(
            "font-medium text-primary-900",
            "text-3xl lg:text-4xl xl:text-5xl"
          )}
        >
          {title}
        </h2>

        <div
          className={cn(
            "grid grid-cols-1 gap-6",
            "sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
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

import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { HeartIcon, RocketIcon, TargetIcon } from "@/components/icons";

interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
}

const values: ValueItem[] = [
  {
    id: "mision",
    title: "Misión",
    description:
      "Ofrecer servicios profesionales de instalación y mantenimiento de aire acondicionado, ventilación mecánica y sistemas eléctricos, garantizando eficiencia, seguridad y satisfacción en cada proyecto.",
    icon: TargetIcon,
  },
  {
    id: "vision",
    title: "Visión",
    description:
      "Ser la empresa líder en soluciones de climatización y ventilación en la región, reconocida por su excelencia técnica, atención personalizada y compromiso con el medio ambiente.",
    icon: RocketIcon,
  },
  {
    id: "valores",
    title: "Valores",
    description:
      "Profesionalismo, responsabilidad y transparencia nos guían en cada servicio. Creemos en el trabajo bien hecho, en el respeto por nuestros clientes y en la mejora continua como camino hacia la confianza.",
    icon: HeartIcon,
  },
];

interface ValuesProps {}

export const Values: FC<ValuesProps> = () => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "max-w-7xl w-full",
          "flex flex-col gap-8 md:gap-12",
          "mx-auto py-16 lg:py-20"
        )}
      >
        <div className="flex flex-col items-center gap-1 text-center max-w-3xl mx-auto">
          <h2
            className={cn(
              "text-2xl md:text-3xl lg:text-4xl",
              "text-primary-800 font-medium"
            )}
          >
            Trabajamos para ofrecerte confort, eficiencia y confianza
          </h2>
          <p className="text-neutral-600 font-light">
            Nuestro compromiso es brindar soluciones integrales de climatización
            y ventilación que mejoren la vida de las personas
          </p>
        </div>
        <ul className="flex flex-col gap-10 md:grid md:grid-cols-3">
          {values.map(({ id, title, description, icon: Icon }) => (
            <li
              key={id}
              className={cn(
                "flex flex-col items-center gap-2",
                "text-center bg-neutral-50 p-6 md:bg-transparent"
              )}
            >
              <div
                className={cn(
                  "size-12 rounded-full flex items-center justify-center ",
                  "text-white bg-primary-600"
                )}
              >
                <Icon className="size-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800">
                {title}
              </h3>
              <p className="text-neutral-600 font-light">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

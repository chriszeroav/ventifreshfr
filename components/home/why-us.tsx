import React, { FC } from "react";
import {
  ShieldCheckIcon,
  TrophyIcon,
  EnergyLeafIcon,
  HandshakeIcon,
  HeadsetIcon,
  AirFilterIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

interface WhyUsProps {}

interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
}

const whyUsData: WhyUsItem[] = [
  {
    id: "profesionalismo",
    title: "Profesionalismo garantizado",
    description:
      "Técnicos certificados, herramientas especializadas y procesos estandarizados que aseguran resultados confiables en cada servicio.",
    icon: ShieldCheckIcon,
  },
  {
    id: "experiencia",
    title: "Experiencia comprobada",
    description:
      "Más de 5 años brindando soluciones en climatización, ventilación y mantenimiento eléctrico a hogares, empresas y proyectos industriales.",
    icon: TrophyIcon,
  },
  {
    id: "eficiencia",
    title: "Eficiencia energética",
    description:
      "Optimizamos tus sistemas de ventilación y aire acondicionado para reducir el consumo eléctrico y maximizar el rendimiento.",
    icon: EnergyLeafIcon,
  },
  {
    id: "atencion",
    title: "Atención personalizada",
    description:
      "Cada cliente es único. Evaluamos tus necesidades y diseñamos soluciones a medida para garantizar confort y durabilidad.",
    icon: HandshakeIcon,
  },
  {
    id: "soporte",
    title: "Soporte técnico continuo",
    description:
      "Ofrecemos mantenimiento preventivo y correctivo con seguimiento post-servicio, asegurando el funcionamiento ideal de tus equipos.",
    icon: HeadsetIcon,
  },
  {
    id: "calidad-aire",
    title: "Compromiso con la calidad del aire",
    description:
      "Promovemos ambientes saludables mediante la correcta limpieza y calibración de sistemas de ventilación mecánica.",
    icon: AirFilterIcon,
  },
];

interface WhyUsCardProps extends WhyUsItem {
  active: boolean;
}

const WhyUsCard: FC<WhyUsCardProps> = ({
  title,
  description,
  icon: IconComponent,
  active,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-6",
        active ? "bg-primary-600" : "bg-neutral-200/20"
      )}
    >
      <div className="flex flex-col gap-10">
        <div
          className={cn(
            "size-12 rounded-full flex items-center justify-center text-white",
            active ? "bg-white/30" : "bg-primary-600"
          )}
        >
          <IconComponent className="size-6" />
        </div>
        <h3
          className={cn(
            "text-xl font-medium",
            active ? "text-white" : "text-primary-900"
          )}
        >
          {title}
        </h3>
      </div>
      <p
        className={cn(
          "leading-relaxed font-light text-sm",
          active ? "text-white" : "text-neutral-600"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export const WhyUs: FC<WhyUsProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto w-full py-20 flex flex-col gap-16">
        <h2 className="text-2xl lg:text-3xl xl:text-5xl font-medium text-primary-900">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {whyUsData.map((item) => (
            <WhyUsCard
              key={item.id}
              {...item}
              active={item.id === "profesionalismo"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

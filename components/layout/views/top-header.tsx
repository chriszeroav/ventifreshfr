"use client";

import { FC } from "react";
import { EmailEditIcon, Phoneicon } from "@/icons";
import { buttonVariants } from "@/components/ui";
import Link from "next/link";
import { CircleCheckIcon } from "lucide-react";
import { toast } from "sonner";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  subLabel: string;
  value: string;
}

const ContactItem: FC<ContactItemProps> = ({
  icon,
  label,
  subLabel,
  value,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      toast.success(`${label} copiado al portapapeles`);
    });
  };

  return (
    <div
      onClick={handleCopy}
      className="flex items-center gap-1 lg:gap-3 hover:bg-neutral-100 cursor-pointer transition-colors"
    >
      {icon}
      <div className="flex flex-col">
        <span className="font-medium text-xs">{value}</span>
        <span className="font-light text-[10px] text-neutral-600">
          {subLabel}
        </span>
      </div>
    </div>
  );
};

export const TopHeader = () => {
  return (
    <section className="hidden transition-all md:block md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto h-14 [&>div]:px-2 lg:[&>div]:px-6 flex justify-end transition-all border-b">
        <ContactItem
          icon={
            <EmailEditIcon className="size-6 lg:size-8 text-custom-primary" />
          }
          label="Correo"
          value="ventifresh.fr@gmail.com"
          subLabel="Solicita tu cotización"
        />
        <ContactItem
          icon={<Phoneicon className="size-6 lg:size-8 text-custom-primary" />}
          label="Teléfono 1"
          value="+51 928 844 947"
          subLabel="Primer canal telefónico"
        />
        <ContactItem
          icon={<Phoneicon className="size-6 lg:size-8 text-custom-primary" />}
          label="Teléfono 2"
          value="+51 910 908 935"
          subLabel="Segundo canal telefónico"
        />
        <Link
          href="/contacto"
          className={buttonVariants({
            variant: "default",
            className: "h-full text-base lg:text-lg md:px-4 lg:px-6",
          })}
        >
          <CircleCheckIcon className="size-5" />
          ¡Cotiza ahora!
        </Link>
      </div>
    </section>
  );
};

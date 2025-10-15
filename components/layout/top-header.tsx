"use client";

import { FC } from "react";
import { PhoneIcon, MailIcon } from "lucide-react";
import { buttonVariants } from "@/components/shadcn";
import Link from "next/link";
import { CircleCheckIcon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

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
      className={cn(
        "flex items-center gap-3 px-6",
        "hover:bg-primary-50 transition-colors",
        "cursor-pointer select-none"
      )}
    >
      {icon}
      <div className="flex flex-col">
        <span className="font-medium text-sm">{value}</span>
        <span className="font-light text-xs text-neutral-600">{subLabel}</span>
      </div>
    </div>
  );
};

export const TopHeader = () => {
  return (
    <section className="px-4 hidden lg:block">
      <div className="max-w-7xl mx-auto w-full h-14 flex justify-end">
        <ContactItem
          icon={<MailIcon className="size-8 text-primary-600" />}
          label="Correo"
          value="ventifresh.fr@gmail.com"
          subLabel="Solicita tu cotización"
        />
        <ContactItem
          icon={<PhoneIcon className="size-8 text-primary-600" />}
          label="Teléfono 1"
          value="+51 928 844 947"
          subLabel="Primer canal telefónico"
        />
        <ContactItem
          icon={<PhoneIcon className="size-8 text-primary-600" />}
          label="Teléfono 2"
          value="+51 910 908 935"
          subLabel="Segundo canal telefónico"
        />
        <Link
          href="#contacto"
          className={buttonVariants({
            variant: "default",
            className: "h-full text-lg px-6",
          })}
        >
          <CircleCheckIcon className="size-5" />
          ¡Cotiza ahora!
        </Link>
      </div>
    </section>
  );
};

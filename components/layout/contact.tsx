import React, { FC } from "react";
import { Contact as ContactForm } from "@/forms/contact";
import { MailIcon, PhoneIcon } from "lucide-react";

interface ContactProps {}

export const Contact: FC<ContactProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-7xl w-full mx-auto py-20 grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-medium text-primary-900">
              Contactanos
            </h2>
            <p className="text-lg font-light text-neutral-500 text-balance">
              Nuestro equipo está listo para ayudarte con cualquier servicio de
              instalación o mantenimiento de aire acondicionado y ventilación.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-4">
              <div className="bg-primary-600 p-3 rounded-full">
                <MailIcon className="text-neutral-50 size-7" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-medium text-primary-950">Email</p>
                <p className="text-base font-light text-neutral-600">
                  ventifresh.fr@gmail.com
                </p>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="bg-primary-600 p-3 rounded-full">
                <PhoneIcon className="text-neutral-50 size-7" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-medium text-primary-950">
                  Teléfono / Whatsapp
                </p>
                <p className="text-base font-light text-neutral-600">
                  +51 928 844 947
                </p>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="bg-primary-600 p-3 rounded-full">
                <PhoneIcon className="text-neutral-50 size-7" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-medium text-primary-950">
                  Teléfono / Whatsapp
                </p>
                <p className="text-base font-light text-neutral-600">
                  +51 910 908 935
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-neutral-200/20 p-10 flex flex-col gap-8">
          <h3 className="text-4xl font-medium text-primary-900">
            Envianos un mensaje!
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

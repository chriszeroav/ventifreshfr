import { Contact } from "@/components/layout";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Contacto",
  description:
    "Ponte en contacto con nosotros para cualquier consulta o servicio relacionado con climatización y ventilación.",
  path: "/contacto",
  keywords: [
    "contacto",
    "consulta",
    "presupuesto",
    "climatización",
    "ventilación mecánica",
    "servicio técnico",
    "cotización",
  ],
});

export default function ContactPage() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <Contact />
    </main>
  );
}

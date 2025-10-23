import { Contact } from "@/components/layout";

export const metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con nosotros para cualquier consulta o servicio relacionado con climatización y ventilación.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <Contact />
    </main>
  );
}

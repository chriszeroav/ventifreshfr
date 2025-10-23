import { Commitment, Hero, Promise, Values } from "@/components/about";

export const metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce más sobre nuestro compromiso con la calidad y el servicio al cliente.",
};

export default function AboutUsPage() {
  return (
    <main>
      <Hero />
      <Commitment />
      <Promise />
      <Values />
    </main>
  );
}

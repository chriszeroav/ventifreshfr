import { Commitment, Hero, Promise, Values } from "@/components/about";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Sobre Nosotros",
  description:
    "Conoce más sobre nuestro compromiso con la calidad y el servicio al cliente.",
  path: "/nosotros",
  keywords: ["empresa", "compromiso", "calidad", "servicio al cliente"],
});

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

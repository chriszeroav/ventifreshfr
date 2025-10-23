import { Hero, Services, WhyUs } from "@/components/home";
import { Brands, Gallery } from "@/components/layout";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Brands />
      <WhyUs />
      <Gallery />
    </main>
  );
}

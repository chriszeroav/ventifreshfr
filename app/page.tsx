import { Hero, Services, WhyUs } from "@/components/home";
import { Brands, Contact } from "@/components/layout";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Brands />
      <WhyUs />
    </main>
  );
}

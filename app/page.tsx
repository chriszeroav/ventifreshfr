import { About, Hero, Services } from "@/components/home";
import { Brands, Contact } from "@/components/layout";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <Hero />
      <Services />
      <About />
      <Brands />
      <Contact />
    </main>
  );
}

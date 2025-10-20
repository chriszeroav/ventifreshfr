import { cn } from "@/lib/utils";

export default function AboutUsPage() {
  return (
    <main>
      <section
        className={cn(
          "bg-[url('/nosotros/inicio.webp')]",
          "bg-cover bg-center bg-no-repeat",
          "bg-blend-darken bg-black/70",
          "px-4"
        )}
      >
        <div
          className={cn(
            "max-w-7xl w-full min-h-[70dvh]",
            "flex flex-col gap-4 justify-center",
            "mx-auto"
          )}
        >
          <h1
            className={cn(
              "font-semibold text-primary-300",
              "text-3xl lg:text-4xl xl:text-5xl"
            )}
          >
            Sobre Nosotros
          </h1>
          <p className="text-neutral-200 font-light max-w-md">
            Brindamos soluciones de aire acondicionado, ventilación y
            mantenimiento eléctrico para hogares y empresas.
          </p>
        </div>
      </section>
    </main>
  );
}

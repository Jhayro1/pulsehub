import { Link } from "@heroui/link";
import { BarChart3 } from "lucide-react";

export default function HomePage() {
  return (
    <section className="text-center py-36 px-4 bg-background text-foreground">
      <div className="flex justify-center mb-6">
        <BarChart3 className="w-12 h-12 text-accent" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Encuestas en Tiempo Real, Simples y Potentes
      </h1>
      <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-8">
        Crea, comparte y analiza tus encuestas en segundos. Herramientas inteligentes, resultados al instante.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/about"
          className="rounded-md bg-primary px-6 py-3 text-white font-semibold text-sm hover:bg-primary/90 transition"
        >
          Saber más
        </Link>
        <Link
          href="/create"
          className="rounded-md border border-primary px-6 py-3 text-primary font-semibold text-sm hover:bg-primary/10 transition"
        >
          Hacer una encuesta
        </Link>
      </div>
    </section>
  );
}

import { Button } from "heroui";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Bienvenido a PulseHub</h1>
      <Button href="/auth">Ingresar</Button>
    </main>
  );
}

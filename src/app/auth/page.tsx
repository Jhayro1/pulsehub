import { Button, Input } from "heroui";
import { supabase } from "@/lib/supabaseClient";

async function handleSubmit(formData: FormData) {
  "use server";
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  await supabase.auth.signInWithPassword({ email, password });
}

export default function AuthPage() {
  return (
    <form action={handleSubmit} className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Input name="email" placeholder="Correo" type="email" required />
      <Input name="password" placeholder="Contraseña" type="password" required />
      <Button type="submit">Entrar</Button>
    </form>
  );
}

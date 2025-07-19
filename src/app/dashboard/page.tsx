import { supabase } from "@/lib/supabaseClient";

export default async function Dashboard() {
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Bienvenido {user?.email}</p>
    </main>
  );
}

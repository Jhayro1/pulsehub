// app/api/auth/magic-link/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Correo inválido' }, { status: 400 })
    }

    const supabase = await createClient()

    const { error, data } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    })

    if (error) {
      console.error('❌ Supabase Error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('❌ JSON Parse or Internal Error:', err)
    return NextResponse.json({ error: 'JSON inválido o error interno' }, { status: 400 })
  }
}

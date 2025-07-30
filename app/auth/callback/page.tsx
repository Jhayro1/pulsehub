import { type EmailOtpType } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function Callback({ searchParams }: { searchParams: Record<string, string> }) {
  const { token_hash, type } = searchParams

  if (!token_hash || !type) redirect('/auth/error')

  const supabase = await createClient()
  const { error, data } = await supabase.auth.verifyOtp({
    token_hash,
    type: type as EmailOtpType
  })

  if (error || !data.user?.email_confirmed_at) {
    return redirect('/auth/error')
  }

  redirect('/auth/complete')
}

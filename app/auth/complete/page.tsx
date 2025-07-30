'use client'
import { useState } from 'react'

export default function CompleteProfile() {
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/auth/set-password', {
      method: 'POST',
      body: JSON.stringify({ password }),
    })
    const data = await res.json()
    setMsg(data.error || 'Contraseña guardada. Redirigiendo...')
    if (!data.error) {
      window.location.href = '/dashboard'
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input
        type="password"
        placeholder="Elige una contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Guardar contraseña</button>
      {msg && <p>{msg}</p>}
    </form>
  )
}

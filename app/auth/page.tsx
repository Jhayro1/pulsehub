'use client'
import { useState } from 'react'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg('Enviando...')

    try {
      const res = await fetch('/api/auth/magic-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()
      setMsg(data.error || 'Revisa tu correo 📩')
    } catch (error) {
      setMsg('Ocurrió un error al enviar el enlace')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Enviar Magic Link
      </button>
      {msg && <p className="text-sm text-gray-600">{msg}</p>}
    </form>
  )
}

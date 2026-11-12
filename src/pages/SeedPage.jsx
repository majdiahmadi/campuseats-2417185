
import { useState } from 'react'
import { seedDemoData } from '../services/vendors.js'

function SeedPage() {
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)

  async function handleSeed() {
    setMessage('Seeding...')
    setBusy(true)

    try {
      const res = await fetch('/api/vendors.json')

      if (!res.ok) {
        throw new Error('Could not load vendors.json')
      }

      const vendors = await res.json()

      await seedDemoData(vendors)

      setMessage(
        `Done: ${vendors.length} vendors written to Firestore.`
      )
    } catch (err) {
      setMessage(`Failed: ${err.message}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="card">
      <h2 className="section-title">Seed Firestore</h2>

      <button
        type="button"
        className="btn"
        onClick={handleSeed}
        disabled={busy}
      >
        {busy ? 'Uploading...' : 'Load demo data'}
      </button>

      {message && <p>{message}</p>}
    </section>
  )
}

export default SeedPage

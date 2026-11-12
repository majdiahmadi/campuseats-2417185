
import { useState } from 'react'
import {
  changePickupTime,
  cancelOrder
} from '../services/orders.js'

// Allow students to update or cancel an order.
// This component is displayed only when status is Received.
function OrderActions({ order }) {

  // Store the selected pickup time.
  const [time, setTime] = useState(order.pickupTime)

  // Store errors from Firestore.
  const [error, setError] = useState('')

  // Prevent duplicate requests.
  const [busy, setBusy] = useState(false)

  // Update the pickup time in Firestore.
  async function handleSaveTime() {
    setError('')

    if (time < '07:00' || time > '22:00') {
      setError('Pickup must be between 7:00 am and 10:00 pm.')
      return
    }

    setBusy(true)

    try {
      await changePickupTime(order.id, time)
    } catch (err) {
      setError(`Could not change the time: ${err.message}`)
    } finally {
      setBusy(false)
    }
  }

  // Cancel the order after confirmation.
  async function handleCancel() {

    const confirmed = window.confirm(
      `Cancel your order from ${order.vendorName}?`
    )

    if (!confirmed) return

    setError('')
    setBusy(true)

    try {
      await cancelOrder(order.id)
    } catch (err) {
      setError(`Could not cancel the order: ${err.message}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="order-actions">

      <label htmlFor={`time-${order.id}`}>
        Pickup
      </label>

      <input
        id={`time-${order.id}`}
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        disabled={busy}
      />

      <button
        type="button"
        className="btn btn-small"
        onClick={handleSaveTime}
        disabled={busy || time === order.pickupTime}
      >
        {busy ? 'Saving...' : 'Save time'}
      </button>

      <button
        type="button"
        className="link danger"
        onClick={handleCancel}
        disabled={busy}
      >
        Cancel order
      </button>

      {error && (
        <p className="field-error" role="alert">
          {error}
        </p>
      )}

    </div>
  )
}

export default OrderActions

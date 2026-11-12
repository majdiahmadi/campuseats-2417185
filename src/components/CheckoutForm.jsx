
import { useState } from 'react'

const MAHALLAHS = [
  'Ali',
  'Aminah',
  'Faruq',
  'Asiah',
  'Bilal',
  'Hafsa',
  'Uthman',
  'Zubair'
]

// Validate checkout details.
function validate(values) {
  const errors = {}

  // Name must contain at least 3 characters.
  if (values.name.trim().length < 3) {
    errors.name = 'Enter your name (at least 3 characters).'
  }

  // Mahallah must be selected.
  if (!values.mahallah) {
    errors.mahallah = 'Please select your mahallah.'
  }

  // Pickup time must be between 07:00 and 22:00.
  if (
    !values.pickupTime ||
    values.pickupTime < '07:00' ||
    values.pickupTime > '22:00'
  ) {
    errors.pickupTime =
      'Choose a pickup time between 07:00 and 22:00.'
  }

  return errors
}

// CheckoutForm collects and validates order information.
function CheckoutForm({
  defaultName = '',
  onPlaceOrder,
  busy = false
}) {

  // Store form input values.
  const [values, setValues] = useState({
    name: defaultName,
    mahallah: '',
    pickupTime: ''
  })

  // Store form validation errors.
  const [errors, setErrors] = useState({})

  // Update input values when the user types.
  function handleChange(event) {
    const { name, value } = event.target

    setValues((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  // Validate and submit the form.
  function handleSubmit(event) {
    event.preventDefault()

    // Do not submit while an order is being saved.
    if (busy) return

    const found = validate(values)
    setErrors(found)

    // Submit only when all fields are valid.
    if (Object.keys(found).length === 0) {
      onPlaceOrder(values)
    }
  }

  return (
    <form
      className="card form"
      onSubmit={handleSubmit}
      noValidate
    >

      <h3>Checkout</h3>

      {/* Name field */}
      <label htmlFor="name">Name</label>

      <input
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Enter your name"
        disabled={busy}
      />

      {errors.name && (
        <p className="field-error">
          {errors.name}
        </p>
      )}

      {/* Mahallah field */}
      <label htmlFor="mahallah">Mahallah</label>

      <select
        id="mahallah"
        name="mahallah"
        value={values.mahallah}
        onChange={handleChange}
        disabled={busy}
      >
        <option value="">Select...</option>

        {MAHALLAHS.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      {errors.mahallah && (
        <p className="field-error">
          {errors.mahallah}
        </p>
      )}

      {/* Pickup time field */}
      <label htmlFor="pickupTime">
        Pickup time
      </label>

      <input
        id="pickupTime"
        name="pickupTime"
        type="time"
        value={values.pickupTime}
        onChange={handleChange}
        disabled={busy}
      />

      {errors.pickupTime && (
        <p className="field-error">
          {errors.pickupTime}
        </p>
      )}

      {/* Submit the order to Firestore. */}
      <button
        type="submit"
        className="btn"
        disabled={busy}
      >
        {busy ? 'Placing order...' : 'Place order'}
      </button>

    </form>
  )
}

export default CheckoutForm

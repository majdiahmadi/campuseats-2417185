
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

// Validate checkout details
function validate(values) {
  const errors = {}

  // Name must contain at least 3 characters
  if (values.name.trim().length < 3) {
    errors.name =
      'Enter your name (at least 3 characters).'
  }

  // Mahallah must be selected
  if (!values.mahallah) {
    errors.mahallah = 'Please select your mahallah.'
  }

  // Pickup time must be between 07:00 and 22:00
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

function CheckoutForm({ onPlaceOrder }) {
  const [values, setValues] = useState({
    name: '',
    mahallah: '',
    pickupTime: ''
  })

  const [errors, setErrors] = useState({})

  // Update input values
  function handleChange(event) {
    const { name, value } = event.target

    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault()

    const found = validate(values)
    setErrors(found)

    // Submit only when all inputs are valid
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

      {/* Name */}
      <label htmlFor="name">Name</label>

      <input
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      {errors.name && (
        <p className="field-error">
          {errors.name}
        </p>
      )}

      {/* Mahallah */}
      <label htmlFor="mahallah">Mahallah</label>

      <select
        id="mahallah"
        name="mahallah"
        value={values.mahallah}
        onChange={handleChange}
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

      {/* Pickup time */}
      <label htmlFor="pickupTime">
        Pickup time
      </label>

      <input
        id="pickupTime"
        name="pickupTime"
        type="time"
        value={values.pickupTime}
        onChange={handleChange}
      />

      {errors.pickupTime && (
        <p className="field-error">
          {errors.pickupTime}
        </p>
      )}

      <button type="submit" className="btn">
        Place order
      </button>
    </form>
  )
}

export default CheckoutForm

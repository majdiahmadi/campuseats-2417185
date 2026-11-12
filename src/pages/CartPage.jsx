
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

import CartItem from '../components/CartItem.jsx'
import CheckoutForm from '../components/CheckoutForm.jsx'

import { useCart } from '../hooks/useCart.js'
import { useAuth } from '../hooks/useAuth.js'
import { placeOrders } from '../services/orders.js'

// CartPage displays the shopping cart and checkout form.
// Week 6 saves completed orders in Cloud Firestore.
export default function CartPage() {

  // Access the shared cart data and functions.
  const {
    cart,
    total,
    changeQty,
    removeFromCart,
    clearCart
  } = useCart()

  // Get the currently signed-in Firebase user.
  const { user } = useAuth()

  // Navigate to the Orders page after successful checkout.
  const navigate = useNavigate()

  // Store any errors that happen while saving the order.
  const [error, setError] = useState('')

  // Prevent duplicate orders while Firestore is processing.
  const [busy, setBusy] = useState(false)

  // Save the order to Firestore after form validation.
  async function handlePlaceOrder(details) {

    // Prevent duplicate submissions.
    if (busy) return

    // Prevent empty orders or orders without a signed-in user.
    if (cart.length === 0 || !user) {
      setError('Please log in and add items before checkout.')
      return
    }

    // Clear previous errors and show processing state.
    setError('')
    setBusy(true)

    try {

      // Save orders to Cloud Firestore.
      await placeOrders(user, cart, details)

      // Only clear the cart after Firestore confirms success.
      clearCart()

      // Redirect to the live Orders page.
      navigate('/orders')

    } catch (err) {

      // Keep the cart if saving fails.
      setError(`Could not place the order: ${err.message}`)

    } finally {

      // Stop the processing state.
      setBusy(false)
    }
  }

  // Display an empty-cart message.
  if (cart.length === 0) {
    return (
      <section>
        <h2 className="section-title">Your Cart</h2>

        <div className="card">
          <p className="muted">
            Your cart is currently empty.
          </p>

          <Link to="/">Browse Restaurants</Link>
        </div>
      </section>
    )
  }

  return (
    <section>

      <h2 className="section-title">Your Cart</h2>

      <div className="cart-layout">

        {/* Display the selected cart items. */}
        <div className="card">

          <ul className="cart-list">
            {cart.map((line) => (
              <CartItem
                key={`${line.item.vendorId}-${line.item.id}`}
                line={line}
                onChangeQty={changeQty}
                onRemove={removeFromCart}
              />
            ))}
          </ul>

          {/* Display the calculated cart total. */}
          <p className="cart-total">
            Total: RM {total.toFixed(2)}
          </p>

        </div>

        {/* Checkout form with the signed-in user's name. */}
        <div>
          {error && (
            <p className="field-error" role="alert">
              {error}
            </p>
          )}

          <CheckoutForm
            defaultName={user?.displayName ?? ''}
            onPlaceOrder={handlePlaceOrder}
            busy={busy}
          />
        </div>

      </div>
    </section>
  )
}

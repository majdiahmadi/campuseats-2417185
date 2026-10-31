
import { Link, useNavigate } from 'react-router'
import CartItem from '../components/CartItem.jsx'
import CheckoutForm from '../components/CheckoutForm.jsx'
import { useCart } from '../hooks/useCart.js'

// CartPage displays the shopping cart and checkout form.
// It uses the shared CartProvider instead of receiving cart props.
export default function CartPage() {

  // Access the shared cart data and functions.
  const {
    cart,
    total,
    changeQty,
    removeFromCart,
    placeOrder
  } = useCart()

  // React Router hook for navigating after checkout.
  const navigate = useNavigate()

  // Handle checkout after CheckoutForm validates the input.
  function handlePlaceOrder(details) {

    // Prevent orders from being placed with an empty cart.
    if (cart.length === 0) {
      return
    }

    // Save the order and clear the cart through CartProvider.
    placeOrder(details)

    // Redirect the customer to the order history page.
    navigate('/orders')
  }

  // Display an empty-cart message when no items are selected.
  if (cart.length === 0) {
    return (
      <section>
        <h2 className="section-title">Your Cart</h2>

        <div className="card">
          <p className="muted">
            Your cart is currently empty.
          </p>

          {/* Return to the restaurant list. */}
          <Link to="/">Browse Restaurants</Link>
        </div>
      </section>
    )
  }

  return (
    <section>
      {/* Display the shopping cart heading. */}
      <h2 className="section-title">Your Cart</h2>

      <div className="cart-layout">

        {/* Display all items currently in the cart. */}
        <div className="card">
          <ul className="cart-list">
            {cart.map((line) => (
              <CartItem
                key={line.item.id}
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

        {/* Reuse the existing validated checkout form. */}
        <CheckoutForm onPlaceOrder={handlePlaceOrder} />

      </div>
    </section>
  )
}

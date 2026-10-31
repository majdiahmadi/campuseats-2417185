
import { Link } from 'react-router'
import { useCart } from '../hooks/useCart.js'

// OrdersPage displays the customer's previously placed orders.
// Orders are retrieved from the shared CartProvider.
export default function OrdersPage() {

  // Access the shared order history through the useCart hook.
  const { orders } = useCart()

  // Format prices consistently in Malaysian Ringgit.
  function formatPrice(price) {
    return `RM ${Number(price).toFixed(2)}`
  }

  // Format the date and time when an order was placed.
  function formatDate(date) {
    if (!date) return 'Date unavailable'

    return new Date(date).toLocaleString('en-MY')
  }

  return (
    <section>

      {/* Display the page heading. */}
      <h2 className="section-title">
        My Orders
      </h2>

      {/* Display a message when no orders have been placed. */}
      {orders.length === 0 ? (
        <div className="card">
          <h3>No orders yet</h3>

          <p className="muted">
            You have not placed any orders.
          </p>

          {/* Allow customers to return to the restaurant list. */}
          <Link to="/">
            Browse Restaurants
          </Link>
        </div>
      ) : (
        // Display the order history, newest order first.
        // CartProvider already saves new orders at the beginning.
        <div className="grid">
          {orders.map((order) => (
            <article className="card" key={order.id}>

              {/* Display the order reference and status. */}
              <h3>
                Order #{String(order.id).slice(0, 8)}
              </h3>

              <p className="muted">
                Placed: {formatDate(order.createdAt)}
              </p>

              <p>
                <strong>Status:</strong>{' '}
                <span className="tag">
                  {order.status ?? 'Received'}
                </span>
              </p>

              {/* Display the customer's checkout details. */}
              <p>
                <strong>Name:</strong> {order.name}
              </p>

              <p>
                <strong>Mahallah:</strong> {order.mahallah}
              </p>

              <p>
                <strong>Pickup Time:</strong>{' '}
                {order.pickupTime ?? 'Not specified'}
              </p>

              <hr />

              {/* Display the food items included in this order. */}
              <h4>Ordered Items</h4>

              <ul>
                {(order.items ?? []).map((line) => (
                  <li key={line.item.id}>
                    {line.item.name} × {line.qty}
                    {' — '}
                    {formatPrice(line.item.price * line.qty)}
                  </li>
                ))}
              </ul>

              {/* Display the total price of the order. */}
              <p className="price">
                Total: {formatPrice(order.total)}
              </p>

            </article>
          ))}
        </div>
      )}

    </section>
  )
}

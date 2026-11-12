
import { Link } from 'react-router'

import OrderStatus from '../components/OrderStatus.jsx'
import OrderActions from '../components/OrderActions.jsx'

import { Loading, ErrorMessage } from '../components/Status.jsx'
import { useMyOrders } from '../hooks/useMyOrders.js'

// Display the signed-in student's live Firestore orders.
export default function OrdersPage() {

  // Get the student's orders from Firestore.
  const { orders, loading, error } = useMyOrders()

  // Show a loading indicator while Firestore responds.
  if (loading) {
    return <Loading />
  }

  // Show any Firestore errors.
  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => window.location.reload()}
      />
    )
  }

  // Display a message when the student has no orders.
  if (orders.length === 0) {
    return (
      <section>
        <h2 className="section-title">Your Orders</h2>

        <div className="card">
          <p className="muted">
            You have not placed any orders yet.
          </p>

          <Link to="/">Browse Restaurants</Link>
        </div>
      </section>
    )
  }

  return (
    <section>

      <h2 className="section-title">
        Your Orders
      </h2>

      {/* Display every order belonging to this student. */}
      <ul className="order-list">
        {orders.map((order) => (
          <li
            key={order.id}
            className="card"
          >

            {/* Restaurant and pickup time */}
            <p className="cart-name">
              {order.vendorName} · pickup {order.pickupTime}
            </p>

            {/* List of ordered food items */}
            <p className="muted">
              {order.items
                .map((item) => `${item.qty}× ${item.name}`)
                .join(', ')}
            </p>

            {/* Date and time the order was created */}
            <p className="muted">
              Placed{' '}
              {order.createdAt
                ? order.createdAt.toDate().toLocaleString('en-MY')
                : 'just now'}
            </p>

            {/* Total amount */}
            <p className="price">
              RM {order.total.toFixed(2)}
            </p>

            {/* Real-time order progress */}
            <OrderStatus status={order.status} />

            {/* Allow changes only while the order is Received. */}
            {order.status === 'Received' && (
              <OrderActions order={order} />
            )}

          </li>
        ))}
      </ul>

    </section>
  )
}


// The four stages of an order.
const STEPS = [
  'Received',
  'Preparing',
  'Ready',
  'Collected'
]

// Show the current progress of an order.
function OrderStatus({ status }) {

  // Find the current position in the order process.
  const index = STEPS.indexOf(status)

  return (
    <ol
      className="status-steps"
      aria-label={`Status: ${status}`}
    >
      {STEPS.map((step, i) => (
        <li
          key={step}
          className={i <= index ? 'done' : ''}
        >
          {step}
        </li>
      ))}
    </ol>
  )
}

export default OrderStatus

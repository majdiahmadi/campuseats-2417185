
import { Link } from 'react-router'

// VendorCard displays information about one restaurant.
// Clicking the card navigates to that restaurant's menu page.
function VendorCard({ vendor }) {
  return (
    <Link
      // Navigate to the restaurant using its unique ID.
      to={`/vendor/${vendor.id}`}

      // Reuse the existing CampusEats card styling.
      className="card vendor-card"

      // Remove default link styling while preserving the card design.
      style={{
        color: 'inherit',
        textDecoration: 'none'
      }}
    >
      {/* Display the first letter of the restaurant name. */}
      <div className="thumb" aria-hidden="true">
        {vendor.name.charAt(0)}
      </div>

      <div>
        {/* Display the restaurant name. */}
        <h3>{vendor.name}</h3>

        {/* Display the restaurant location. */}
        <p className="muted">
          {vendor.location}
        </p>

        {/* Display the restaurant opening hours. */}
        <p className="muted">
          Open: {vendor.openHours}
        </p>

        {/* Display the restaurant's open or closed status. */}
        <span
          className={
            vendor.isOpen ? 'status open' : 'status closed'
          }
        >
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
    </Link>
  )
}

export default VendorCard

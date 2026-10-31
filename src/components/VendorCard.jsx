
import { Link } from 'react-router'

// VendorCard displays information about a restaurant.
// It supports both the old Week 3 navigation and the new Week 4 routing.
function VendorCard({ vendor, isSelected = false, onSelect }) {

  // Apply the selected style when using the old navigation system.
  const cardClass = isSelected
    ? 'card vendor-card selected'
    : 'card vendor-card'

  // Create the restaurant information.
  // This content is shared by both navigation methods.
  const cardContent = (
    <>
      {/* Display the first letter of the restaurant name. */}
      <div className="thumb" aria-hidden="true">
        {vendor.name.charAt(0)}
      </div>

      <div>
        {/* Display the restaurant name. */}
        <h3>{vendor.name}</h3>

        {/* Display the restaurant location. */}
        <p className="muted">{vendor.location}</p>

        {/* Display the restaurant opening hours. */}
        <p className="muted">
          Open: {vendor.openHours}
        </p>

        {/* Display whether the restaurant is open or closed. */}
        <span className={vendor.isOpen ? 'status open' : 'status closed'}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
    </>
  )

  // Temporarily support the existing Week 3 App.jsx.
  // The old app passes onSelect to change the selected restaurant.
  if (typeof onSelect === 'function') {
    return (
      <button
        type="button"
        className={cardClass}
        onClick={() => onSelect(vendor.id)}
      >
        {cardContent}
      </button>
    )
  }

  // Week 4: navigate directly to the restaurant's URL.
  // Link changes the page without reloading the browser.
  return (
    <Link
      to={`/vendor/${vendor.id}`}
      className={cardClass}
      style={{
        color: 'inherit',
        textDecoration: 'none'
      }}
    >
      {cardContent}
    </Link>
  )
}

export default VendorCard

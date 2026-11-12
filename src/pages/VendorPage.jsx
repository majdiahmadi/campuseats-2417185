
import { Link, useParams } from 'react-router'
import MenuList from '../components/MenuList.jsx'
import DailySpecial from '../components/DailySpecial.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'
import { useVendor } from '../hooks/useVendor.js'

// VendorPage displays one restaurant and its live menu.
export default function VendorPage() {

  // Get the restaurant ID from the URL.
  const { id } = useParams()

  // Load the restaurant and its menu from Firestore.
  const { vendor, menu, loading, error } = useVendor(id)

  // Display a loading indicator.
  if (loading) {
    return <Loading />
  }

  // Display any Firestore errors.
  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => window.location.reload()}
      />
    )
  }

  // Handle an invalid restaurant ID.
  if (!vendor) {
    return (
      <section>
        <h2 className="section-title">Vendor not found</h2>

        <p className="muted">
          The requested restaurant does not exist.
        </p>

        <Link to="/">Back to vendors</Link>
      </section>
    )
  }

  // Attach vendor details to every menu item.
  // This allows the cart to identify the restaurant.
  const items = menu.map((item) => ({
    ...item,
    vendorId: vendor.id,
    vendorName: vendor.name
  }))

  // Find the Daily Special using the Firestore special field.
  const specialItem = items.find(
    (item) => item.special === true
  )

  return (
    <section>

      {/* Navigation back to all restaurants. */}
      <p>
        <Link to="/">← All vendors</Link>
      </p>

      {/* Display restaurant information. */}
      <h2 className="section-title">
        {vendor.name}
      </h2>

      <p className="muted">
        {vendor.location} · {vendor.openHours}
      </p>

      {/* Display the Daily Special using Firestore Timestamp. */}
      {specialItem && (
        <DailySpecial item={specialItem} />
      )}

      {/* Display the live Firestore menu. */}
      <h2 className="section-title">
        Menu
      </h2>

      <MenuList items={items} />

    </section>
  )
}

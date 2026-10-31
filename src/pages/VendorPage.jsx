
import { Link, useParams } from 'react-router'
import MenuList from '../components/MenuList.jsx'
import DailySpecial from '../components/DailySpecial.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'
import { useVendors } from '../hooks/useVendors.js'

// VendorPage displays the menu of a specific restaurant.
// The restaurant is identified using its ID in the URL.
export default function VendorPage() {

  // Read the restaurant ID from the URL.
  // Example: /vendor/2417185-jackals-corner
  const { id } = useParams()

  // Fetch restaurant information using our custom hook.
  const { vendors, loading, error, reload } = useVendors()

  // Display a loading message while fetching restaurant data.
  if (loading) {
    return <Loading />
  }

  // Display an error message if fetching fails.
  if (error) {
    return <ErrorMessage message={error} onRetry={reload} />
  }

  // Find the restaurant whose ID matches the URL.
  const vendor = vendors.find((entry) => entry.id === id)

  // Handle an invalid restaurant ID.
  // Example: /vendor/zzz
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

  // Find Jackal's Corner's featured menu item.
  // This preserves our Week 3 Daily Special feature.
  const specialItem = vendor.id === '2417185-jackals-corner'
    ? (vendor.menu ?? []).find(
        (item) => item.id === '2417185-jc-1'
      )
    : null

  return (
    <section>

      {/* Allow users to return to the restaurant list. */}
      <p>
        <Link to="/">← All vendors</Link>
      </p>

      {/* Display the selected restaurant's name. */}
      <h2 className="section-title">
        {vendor.name}
      </h2>

      {/* Display the restaurant's location and opening hours. */}
      <p className="muted">
        {vendor.location} · {vendor.openHours}
      </p>

      {/* Display the Daily Special for Jackal's Corner. */}
      {specialItem && (
        <DailySpecial
          item={specialItem}
          endTime="22:00"
        />
      )}

      {/* Display the menu heading. */}
      <h2 className="section-title">
        Menu
      </h2>

      {/* Display all menu items for the selected restaurant. */}
      <MenuList items={vendor.menu ?? []} />

    </section>
  )
}

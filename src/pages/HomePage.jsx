
import { Link } from 'react-router'
import VendorCard from '../components/VendorCard.jsx'
import DailySpecial from '../components/DailySpecial.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'
import { useVendors } from '../hooks/useVendors.js'
import { useVendor } from '../hooks/useVendor.js'

// Unique ID for Jackal's Corner.
const SPECIAL_VENDOR_ID = '2417185-jackals-corner'

// HomePage displays live restaurants and today's special.
export default function HomePage() {

  // Load all restaurants from Firestore.
  const { vendors, loading, error, reload } = useVendors()

  // Load Jackal's Corner and its menu separately.
  const {
    menu: specialMenu,
    error: specialError
  } = useVendor(SPECIAL_VENDOR_ID)

  // Show loading while restaurant data is being retrieved.
  if (loading) {
    return <Loading />
  }

  // Show errors and allow the user to retry.
  if (error) {
    return <ErrorMessage message={error} onRetry={reload} />
  }

  // Find the featured menu item using its Firestore special field.
  const specialItem = specialMenu.find(
    (item) => item.special === true
  )

  // Keep Jackal's Corner first in the restaurant list.
  const sortedVendors = [...vendors].sort((a, b) => {
    if (a.id === SPECIAL_VENDOR_ID) return -1
    if (b.id === SPECIAL_VENDOR_ID) return 1
    return 0
  })

  return (
    <>
      {/* Show an error if the special menu cannot be loaded. */}
      {specialError && (
        <p className="field-error" role="alert">
          Could not load today's special: {specialError}
        </p>
      )}

      {/* Display the daily special using Firestore Timestamp. */}
      {specialItem && (
        <section>
          <DailySpecial item={specialItem} />

          <p>
            <Link to={`/vendor/${SPECIAL_VENDOR_ID}`}>
              View Jackal's Corner Menu
            </Link>
          </p>
        </section>
      )}

      {/* Display the list of restaurants from Firestore. */}
      <section>
        <h2 className="section-title">
          Campus Food Vendors
        </h2>

        {sortedVendors.length === 0 ? (
          <p className="muted">
            No restaurants are available at the moment.
          </p>
        ) : (
          <div className="vendor-grid">
            {sortedVendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
              />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

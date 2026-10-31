
import { Link } from 'react-router'
import VendorCard from '../components/VendorCard.jsx'
import DailySpecial from '../components/DailySpecial.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'
import { useVendors } from '../hooks/useVendors.js'

// HomePage displays the available restaurants and today's special.
// It also implements the Week 4 step of our personal feature.
export default function HomePage() {

  // Load restaurant data using our custom hook.
  const { vendors, loading, error, reload } = useVendors()

  // Show a loading message while fetching data.
  if (loading) {
    return <Loading />
  }

  // Show an error message with a retry option.
  if (error) {
    return <ErrorMessage message={error} onRetry={reload} />
  }

  // Find Jackal's Corner using its unique restaurant ID.
  const specialVendor = vendors.find(
    (vendor) => vendor.id === '2417185-jackals-corner'
  )

  // Find our featured menu item: Jackal's Signature Chicken Chop.
  // This is the same special used in our Week 3 App.jsx.
  const specialItem = specialVendor?.menu?.find(
    (item) => item.id === '2417185-jc-1'
  )

  // Create a copy of the vendor list and keep our restaurant first.
  // The original fetched array is not modified.
  const sortedVendors = [...vendors].sort((a, b) => {
    if (a.id === '2417185-jackals-corner') return -1
    if (b.id === '2417185-jackals-corner') return 1
    return 0
  })

  return (
    <>
      {/* Display today's featured menu item with a countdown. */}
      {specialItem && (
        <section>
          <h2 className="section-title">
            Today's Special
          </h2>

          {/* Reuse the existing Week 3 countdown component. */}
          <DailySpecial
            item={specialItem}
            endTime="22:00"
          />

          {/* Week 4 requirement: link the special to its vendor page. */}
          <p>
            <Link to={`/vendor/${specialVendor.id}`}>
              View Jackal's Corner Menu
            </Link>
          </p>
        </section>
      )}

      {/* Display the list of available restaurants. */}
      <section>
        <h2 className="section-title">
          Campus Food Vendors
        </h2>

        {/* Show a message when no restaurants exist. */}
        {sortedVendors.length === 0 ? (
          <p className="muted">
            No restaurants are available at the moment.
          </p>
        ) : (
          <div className="vendor-grid">
            {/* Render each restaurant using VendorCard. */}
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

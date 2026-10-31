
import VendorCard from '../components/VendorCard.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'
import { useVendors } from '../hooks/useVendors.js'

// HomePage displays the list of restaurants in CampusEats.
// It uses the useVendors custom hook to load restaurant data.
export default function HomePage() {

  // Get restaurant data and loading controls from useVendors.
  const { vendors, loading, error, reload } = useVendors()

  // Show the loading component while fetching restaurant data.
  if (loading) {
    return <Loading />
  }

  // Display the error message if the request fails.
  // The user can click Try Again to reload the restaurant data.
  if (error) {
    return <ErrorMessage message={error} onRetry={reload} />
  }

  // Create a copy of the vendor list.
  // Keep Jackal's Corner first, as required for the M1 report.
  const sortedVendors = [...vendors].sort((a, b) => {
    if (a.id === '2417185-jackals-corner') return -1
    if (b.id === '2417185-jackals-corner') return 1
    return 0
  })

  return (
    <section>
      {/* Display the page heading. */}
      <h2 className="section-title">
        Campus Food Vendors
      </h2>

      {/* Display a message if no restaurants are available. */}
      {sortedVendors.length === 0 ? (
        <p className="muted">
          No restaurants are available at the moment.
        </p>
      ) : (
        // Display each restaurant using the reusable VendorCard.
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
  )
}

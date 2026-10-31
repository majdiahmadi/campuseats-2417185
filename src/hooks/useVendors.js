
import { useEffect, useState } from 'react'

// Custom hook for loading restaurant data from the local API.
// It manages vendors, loading status, errors, and retry functionality.
export function useVendors() {

  // Store the list of restaurants retrieved from the API.
  const [vendors, setVendors] = useState([])

  // Track whether restaurant data is currently loading.
  const [loading, setLoading] = useState(true)

  // Store an error message if fetching fails.
  const [error, setError] = useState(null)

  // Changing this value allows the user to retry fetching.
  const [reloadKey, setReloadKey] = useState(0)

  // Fetch restaurant data when the hook first runs or reloadKey changes.
  useEffect(() => {

    // Create a controller to cancel unfinished requests.
    const controller = new AbortController()

    // Async function responsible for fetching restaurant data.
    async function loadVendors() {
      setLoading(true)
      setError(null)

      try {
        // Request restaurant data from the local JSON API.
        const response = await fetch('/api/vendors.json', {
          signal: controller.signal
        })

        // Detect HTTP errors such as 404 or 500.
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        // Convert the JSON response into JavaScript data.
        const data = await response.json()

        // Ensure that the API returns an array of restaurants.
        if (!Array.isArray(data)) {
          throw new Error('Invalid vendor data format')
        }

        // Save the retrieved restaurants into React state.
        if (!controller.signal.aborted) {
          setVendors(data)
        }

      } catch (err) {
        // Ignore errors caused by intentionally cancelling a request.
        if (!controller.signal.aborted) {
          setError(err.message)
        }

      } finally {
        // Stop displaying the loading indicator.
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    // Start loading the restaurant data.
    loadVendors()

    // Cancel the request when the component unmounts
    // or before the effect runs again.
    return () => controller.abort()

  }, [reloadKey])

  // Allow components to manually retry loading restaurant data.
  function reload() {
    setReloadKey((previous) => previous + 1)
  }

  // Provide restaurant data and fetch controls to components.
  return { vendors, loading, error, reload }
}

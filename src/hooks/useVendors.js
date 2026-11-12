
import { useEffect, useState } from 'react'
import { subscribeToVendors } from '../services/vendors.js'

// Custom hook for loading live restaurant data from Firestore.
// It manages vendors, loading status, errors, and retry functionality.
export function useVendors() {

  // Store the list of restaurants retrieved from Firestore.
  const [vendors, setVendors] = useState([])

  // Track whether restaurant data is currently loading.
  const [loading, setLoading] = useState(true)

  // Store an error message if the Firestore listener fails.
  const [error, setError] = useState(null)

  // Changing this value allows the user to retry the subscription.
  const [reloadKey, setReloadKey] = useState(0)

  // Subscribe to restaurant data when the hook first runs
  // or when reloadKey changes.
  useEffect(() => {

    // Start listening to the vendors collection in Firestore.
    const unsubscribe = subscribeToVendors(

      // This function runs whenever vendor data changes.
      (data) => {
        setVendors(data)
        setLoading(false)
      },

      // This function runs if Firestore encounters an error.
      (err) => {
        setError(err.message)
        setLoading(false)
      }
    )

    // Stop listening when the component unmounts
    // or before the effect runs again.
    return unsubscribe

  }, [reloadKey])

  // Allow components to manually retry the Firestore subscription.
  function reload() {
    setLoading(true)
    setError(null)
    setReloadKey((previous) => previous + 1)
  }

  // Provide restaurant data and subscription controls to components.
  return { vendors, loading, error, reload }
}

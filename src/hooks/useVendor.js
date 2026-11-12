
import { useEffect, useState } from 'react'
import {
  subscribeToVendor,
  subscribeToMenu
} from '../services/vendors.js'

// Custom hook for loading one restaurant and its menu.
// Both the restaurant and menu update live using Firestore.
export function useVendor(vendorId) {

  // undefined means the restaurant is still loading.
  // null means the restaurant does not exist.
  const [vendor, setVendor] = useState(undefined)

  // Store the restaurant's menu items.
  const [menu, setMenu] = useState([])

  // Store Firestore errors.
  const [error, setError] = useState(null)

  useEffect(() => {

    // Do not subscribe without a restaurant ID.
    if (!vendorId) {
      return
    }

    // Listen to the restaurant document.
    const stopVendor = subscribeToVendor(
      vendorId,
      setVendor,
      (err) => setError(err.message)
    )

    // Listen to the restaurant's menu subcollection.
    const stopMenu = subscribeToMenu(
      vendorId,
      setMenu,
      (err) => setError(err.message)
    )

    // Stop both listeners when the component unmounts.
    return () => {
      stopVendor()
      stopMenu()
    }

  }, [vendorId])

  // Return the restaurant, menu, loading state, and error.
  return {
    vendor,
    menu,
    loading: vendor === undefined && !error,
    error
  }
}

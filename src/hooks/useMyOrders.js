
import { useEffect, useState } from 'react'
import { subscribeToMyOrders } from '../services/orders.js'
import { useAuth } from './useAuth.js'

// Custom hook for loading the signed-in student's orders.
// Firestore automatically sends updates when order data changes.
export function useMyOrders() {

  // Get the currently signed-in Firebase user.
  const { user } = useAuth()

  // Store the user's orders retrieved from Firestore.
  const [orders, setOrders] = useState([])

  // Track whether the orders are being loaded.
  const [loading, setLoading] = useState(true)

  // Store any Firestore error messages.
  const [error, setError] = useState(null)

  useEffect(() => {

    // Do not subscribe if nobody is signed in.
    if (!user) return

    // Listen to orders belonging to the current user.
    const unsubscribe = subscribeToMyOrders(

      user.uid,

      // Update the orders whenever Firestore data changes.
      (data) => {
        setOrders(data)
        setLoading(false)
      },

      // Handle errors from Firestore.
      (err) => {
        setError(err.message)
        setLoading(false)
      }
    )

    // Stop listening when the component unmounts.
    return unsubscribe

  }, [user])

  // Share orders and loading status with the Orders page.
  return { orders, loading, error }
}

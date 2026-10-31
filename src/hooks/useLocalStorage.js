
import { useEffect, useState } from 'react'

// Custom hook that saves React state in the browser's localStorage.
// This allows data such as the cart and orders to survive page refreshes.
export function useLocalStorage(key, initialValue) {

  // Create state using data previously saved in localStorage.
  // The function runs only when the state is first initialized.
  const [value, setValue] = useState(() => {
    try {
      // Look for an existing value using the provided storage key.
      const savedValue = localStorage.getItem(key)

      // Convert saved JSON text back into JavaScript data.
      // If nothing was saved, use the initial value.
      return savedValue !== null
        ? JSON.parse(savedValue)
        : initialValue

    } catch (error) {
      // Prevent invalid stored data from crashing the application.
      console.error('Error reading localStorage:', error)
      return initialValue
    }
  })

  // Automatically save the latest value whenever it changes.
  useEffect(() => {
    try {
      // Convert JavaScript data into JSON text before saving.
      localStorage.setItem(key, JSON.stringify(value))

    } catch (error) {
      // Handle errors such as unavailable browser storage.
      console.error('Error saving localStorage:', error)
    }
  }, [key, value])

  // Return the state and its updater, just like useState.
  return [value, setValue]
}

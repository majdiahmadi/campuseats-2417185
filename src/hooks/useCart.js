
import { useContext } from 'react'
import { CartContext } from '../context/cart-context.js'

// Custom hook that provides access to the shared shopping cart.
// Every component using this hook reads the same CartProvider data.
export function useCart() {

  // Retrieve the shared cart data and functions from CartContext.
  const context = useContext(CartContext)

  // Ensure the hook is only used inside CartProvider.
  // This provides a clear error if the provider is missing.
  if (context === null) {
    throw new Error('useCart must be used inside <CartProvider>')
  }

  // Return the shared cart, orders, totals, and cart functions.
  return context
}

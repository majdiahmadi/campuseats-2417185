
import { CartContext } from './cart-context.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

// CartProvider manages the shared shopping cart.
// Completed orders are now stored in Cloud Firestore.
export function CartProvider({ children }) {

  // Store cart items in localStorage so they survive page refreshes.
  const [cart, setCart] = useLocalStorage('campuseats-cart', [])

  // Calculate the total quantity of all items in the cart.
  // Example: 2 burgers + 3 drinks = 5 items.
  const count = cart.reduce(
    (sum, line) => sum + line.qty,
    0
  )

  // Calculate the total cart price.
  // The total is derived from cart state, not stored separately.
  const total = cart.reduce(
    (sum, line) => sum + line.item.price * line.qty,
    0
  )

  // Add a menu item to the shopping cart.
  function addToCart(item) {

    // Do not add missing or unavailable menu items.
    if (!item || item.available === false) return

    setCart((previousCart) => {

      // Check whether the item already exists in the cart.
      const existingItem = previousCart.find(
        (line) => line.item.id === item.id
      )

      // If the item exists, increase its quantity by one.
      if (existingItem) {
        return previousCart.map((line) =>
          line.item.id === item.id
            ? { ...line, qty: line.qty + 1 }
            : line
        )
      }

      // Otherwise, add the item as a new cart line.
      return [...previousCart, { item, qty: 1 }]
    })
  }

  // Increase or decrease the quantity of a cart item.
  function changeQty(itemId, delta) {
    setCart((previousCart) =>
      previousCart
        .map((line) =>
          line.item.id === itemId
            ? { ...line, qty: line.qty + delta }
            : line
        )
        // Remove the item when its quantity reaches zero.
        .filter((line) => line.qty > 0)
    )
  }

  // Completely remove an item from the shopping cart.
  function removeFromCart(itemId) {
    setCart((previousCart) =>
      previousCart.filter(
        (line) => line.item.id !== itemId
      )
    )
  }

  // Empty the shopping cart after a successful Firestore order.
  function clearCart() {
    setCart([])
  }

  // Share cart data and functions with other components.
  const contextValue = {
    cart,
    count,
    total,
    addToCart,
    changeQty,
    removeFromCart,
    clearCart
  }

  // Make the shared cart available to all child components.
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

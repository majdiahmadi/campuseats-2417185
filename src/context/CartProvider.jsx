
import { CartContext } from './cart-context.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

// CartProvider manages the shared shopping cart and order history.
// All components inside this provider can access the same data.
export function CartProvider({ children }) {

  // Store cart items in localStorage so they survive page refreshes.
  const [cart, setCart] = useLocalStorage('campuseats-cart', [])

  // Store completed orders in localStorage.
  const [orders, setOrders] = useLocalStorage('campuseats-orders', [])

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

  // Save a completed order and clear the shopping cart.
  function placeOrder(details) {

    // Prevent an empty cart from creating an order.
    if (cart.length === 0) return

    // Create an order containing checkout details and cart items.
    const newOrder = {
      id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
      ...details,

      // Save a snapshot of the ordered items and quantities.
      items: cart.map((line) => ({
        item: { ...line.item },
        qty: line.qty
      })),

      total,

      // All new orders begin with Received status.
      status: 'Received',

      // Record when the order was placed.
      createdAt: new Date().toISOString()
    }

    // Add the new order at the beginning of the order history.
    setOrders((previousOrders) => [
      newOrder,
      ...previousOrders
    ])

    // Empty the shopping cart after placing the order.
    setCart([])
  }

  // Share the cart data and functions with other components.
  const contextValue = {
    cart,
    orders,
    count,
    total,
    addToCart,
    changeQty,
    removeFromCart,
    placeOrder
  }

  // Make the shared cart available to all child components.
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

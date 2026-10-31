
import { useContext } from 'react'
import { CartContext } from '../context/cart-context.js'
import MenuItemCard from './MenuItemCard.jsx'

// MenuList displays all food items belonging to a restaurant.
// It supports the old Week 3 cart and the new Week 4 Cart Context.
function MenuList({ items = [], onAdd }) {

  // Read the shared cart context if CartProvider is available.
  // During migration, the old App may not have a provider yet.
  const cartContext = useContext(CartContext)

  // Use the shared addToCart function when inside CartProvider.
  // Otherwise, temporarily use the old onAdd prop from Week 3.
  const handleAdd = cartContext?.addToCart ?? onAdd

  // Display a message when the restaurant has no menu items.
  if (items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>
  }

  return (
    <div className="grid">
      {/* Create one MenuItemCard for each menu item. */}
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onAdd={handleAdd}
        />
      ))}
    </div>
  )
}

export default MenuList

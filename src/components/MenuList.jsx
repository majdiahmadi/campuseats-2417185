
import MenuItemCard from './MenuItemCard.jsx'
import { useCart } from '../hooks/useCart.js'

// MenuList displays the menu items for a selected restaurant.
// It uses the shared Cart Context instead of receiving onAdd as a prop.
function MenuList({ items = [] }) {

  // Access the shared addToCart function from CartProvider.
  // All pages use the same shopping cart.
  const { addToCart } = useCart()

  // Display a message if the restaurant has no menu items.
  if (items.length === 0) {
    return (
      <p className="muted">
        No items on this menu yet.
      </p>
    )
  }

  return (
    <div className="grid">

      {/* Display each menu item using the reusable MenuItemCard. */}
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onAdd={addToCart}
        />
      ))}

    </div>
  )
}

export default MenuList

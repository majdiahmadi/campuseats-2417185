
import { NavLink } from 'react-router'
import { useCart } from '../hooks/useCart.js'

// Header displays the CampusEats title, navigation links,
// and the current number of items in the shopping cart.
function Header() {

  // Get the total cart quantity from the shared CartProvider.
  // The badge updates automatically whenever the cart changes.
  const { count } = useCart()

  // Highlight the navigation link for the currently active page.
  // Active links appear bold and underlined.
  function navLinkStyle({ isActive }) {
    return {
      fontWeight: isActive ? 700 : 400,
      textDecoration: isActive ? 'underline' : 'none'
    }
  }

  return (
    <header className="header">

      {/* Display the application name. */}
      <h1 className="logo">
        CampusEats
      </h1>

      {/* Display navigation links for the main application pages. */}
      <nav className="nav" aria-label="Main navigation">

        {/* Navigate to the restaurant list.
            The end prop prevents this link from being active
            on every page that starts with "/". */}
        <NavLink
          to="/"
          end
          style={navLinkStyle}
        >
          Vendors
        </NavLink>

        {/* Navigate to the customer's order history. */}
        <NavLink
          to="/orders"
          style={navLinkStyle}
        >
          My Orders
        </NavLink>

        {/* Navigate to the shopping cart.
            Display the current total quantity in the badge. */}
        <NavLink
          to="/cart"
          className="cart"
          style={navLinkStyle}
        >
          Cart <span className="badge">{count}</span>
        </NavLink>

      </nav>

    </header>
  )
}

export default Header

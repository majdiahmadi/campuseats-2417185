
import { useContext } from 'react'
import { NavLink, useInRouterContext } from 'react-router'
import { CartContext } from '../context/cart-context.js'

// Header displays the CampusEats title, navigation links,
// and the total number of items in the shopping cart.
//
// It temporarily supports both Week 3 and Week 4 navigation
// until the application is fully migrated to React Router.
function Header({ cartCount = 0, onShowMenu, onShowCart }) {

  // Check whether Header is currently inside BrowserRouter.
  // This allows the old application to continue working.
  const isRouted = useInRouterContext()

  // Read shared cart information when CartProvider is available.
  const cartContext = useContext(CartContext)

  // Use the shared cart count in Week 4.
  // Fall back to the old cartCount prop during migration.
  const count = cartContext?.count ?? cartCount

  // Highlight the navigation link for the current page.
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 700 : 400,
    textDecoration: isActive ? 'underline' : 'none'
  })

  return (
    <header className="header">

      {/* Display the application name. */}
      <h1 className="logo">
        CampusEats
      </h1>

      {/* Display the navigation menu. */}
      <nav className="nav" aria-label="Main navigation">

        {isRouted ? (
          <>
            {/* Navigate to the restaurant list. */}
            <NavLink to="/" end style={navLinkStyle}>
              Vendors
            </NavLink>

            {/* Navigate to the order history page. */}
            <NavLink to="/orders" style={navLinkStyle}>
              My Orders
            </NavLink>

            {/* Navigate to the shopping cart page. */}
            <NavLink
              to="/cart"
              className="cart"
              style={navLinkStyle}
            >
              Cart <span className="badge">{count}</span>
            </NavLink>
          </>
        ) : (
          <>
            {/* Temporary Week 3 navigation. */}
            <button
              type="button"
              className="link"
              onClick={onShowMenu}
            >
              Vendors
            </button>

            <button
              type="button"
              className="link cart"
              onClick={onShowCart}
            >
              Cart <span className="badge">{count}</span>
            </button>
          </>
        )}

      </nav>
    </header>
  )
}

export default Header

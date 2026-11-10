
import { NavLink, useNavigate } from 'react-router'
import { useCart } from '../hooks/useCart.js'
import { useAuth } from '../hooks/useAuth.js'

// Header displays the CampusEats title, navigation links,
// shopping cart count, and Firebase authentication status.
function Header() {

  // Get the total cart quantity from the shared CartProvider.
  // The badge updates automatically whenever the cart changes.
  const { count } = useCart()

  // Get the currently signed-in user and logout function
  // from the AuthProvider using our custom useAuth hook.
  const { user, logout } = useAuth()

  // useNavigate allows us to change pages using JavaScript.
  // We use it to return to the Home page after logout.
  const navigate = useNavigate()

  // Handle logout when the user clicks the Log out button.
  async function handleLogout() {
    try {

      // Ask Firebase Authentication to sign out the current user.
      await logout()

      // After successful logout, return to the Home page.
      navigate('/')

    } catch (error) {

      // Display an error if Firebase cannot complete the logout.
      console.error('Logout failed:', error)

      alert('Could not log out. Please try again.')
    }
  }

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

        {/* Show different navigation options depending
            on whether the user is logged in. */}
        {user ? (

          // If the user is logged in, show their name
          // and provide a button to log out.
          <>

            {/* Display the name saved in Firebase Authentication.
                If no display name exists, show the user's email. */}
            <span className="user-name">
              Hi, {user.displayName || user.email}
            </span>

            {/* Log out of Firebase when clicked. */}
            <button
              type="button"
              className="link"
              onClick={handleLogout}
            >
              Log out
            </button>

          </>

        ) : (

          // If the user is not logged in,
          // show a link to the Login page.
          <NavLink
            to="/login"
            style={navLinkStyle}
          >
            Log in
          </NavLink>

        )}

      </nav>

    </header>
  )
}

export default Header


import { BrowserRouter, Routes, Route } from 'react-router'

// Import the provider that manages the shared cart and orders.
import { CartProvider } from './context/CartProvider.jsx'

// Import the shared layout containing Header, Outlet, and Footer.
import Layout from './components/Layout.jsx'

// Import all five pages required for Week 4.
import HomePage from './pages/HomePage.jsx'
import VendorPage from './pages/VendorPage.jsx'
import CartPage from './pages/CartPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

// App is the main entry point for CampusEats.
//
// Week 4 architecture:
// BrowserRouter handles page navigation.
// CartProvider shares the cart and orders.
// Layout displays the Header and Footer.
// Routes determine which page appears in the Outlet.
function App() {
  return (
    <BrowserRouter>

      {/* Share shopping cart and order history across all pages. */}
      <CartProvider>

        {/* Define the application's routes. */}
        <Routes>

          {/* Use the same Header and Footer for every page. */}
          <Route element={<Layout />}>

            {/* Home page: display all restaurants. */}
            <Route
              index
              element={<HomePage />}
            />

            {/* Restaurant page: read the vendor ID from the URL. */}
            <Route
              path="vendor/:id"
              element={<VendorPage />}
            />

            {/* Shopping cart and checkout page. */}
            <Route
              path="cart"
              element={<CartPage />}
            />

            {/* Display previously placed orders. */}
            <Route
              path="orders"
              element={<OrdersPage />}
            />

            {/* Display a 404 page for unknown URLs. */}
            <Route
              path="*"
              element={<NotFoundPage />}
            />

          </Route>
        </Routes>

      </CartProvider>
    </BrowserRouter>
  )
}

export default App

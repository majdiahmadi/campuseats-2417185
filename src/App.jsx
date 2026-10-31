
import { BrowserRouter, Routes, Route } from 'react-router'

// Import the provider that manages the shared cart and order history.
import { CartProvider } from './context/CartProvider.jsx'

// Import the shared layout containing Header, Outlet, and Footer.
import Layout from './components/Layout.jsx'

// Import all five pages required for Week 4.
import HomePage from './pages/HomePage.jsx'
import VendorPage from './pages/VendorPage.jsx'
import CartPage from './pages/CartPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

// Main CampusEats application component.
//
// Week 4 architecture:
// 1. BrowserRouter manages navigation using URLs.
// 2. CartProvider shares the cart and orders across all pages.
// 3. Routes determines which page should be displayed.
// 4. Layout keeps the Header and Footer visible on every page.
function App() {
  return (
    <BrowserRouter>

      {/* Provide shared cart and order data to the entire application. */}
      <CartProvider>

        {/* Choose which page to display based on the current URL. */}
        <Routes>

          {/* Layout provides a shared Header, Outlet, and Footer. */}
          <Route element={<Layout />}>

            {/* Home page: displays restaurants and today's special. */}
            <Route
              index
              element={<HomePage />}
            />

            {/* Vendor page: displays the menu for the selected vendor ID. */}
            <Route
              path="vendor/:id"
              element={<VendorPage />}
            />

            {/* Cart page: displays cart items and the checkout form. */}
            <Route
              path="cart"
              element={<CartPage />}
            />

            {/* Orders page: displays previously placed orders. */}
            <Route
              path="orders"
              element={<OrdersPage />}
            />

            {/* Not Found page: handles URLs that do not match any route. */}
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

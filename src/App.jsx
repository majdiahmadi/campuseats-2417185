
import { BrowserRouter, Routes, Route } from 'react-router'

// Import the authentication provider for Firebase login and registration.
import { AuthProvider } from './context/AuthProvider.jsx'

// Import the provider that manages the shared cart and order history.
import { CartProvider } from './context/CartProvider.jsx'

// Import the shared layout containing Header, Outlet, and Footer.
import Layout from './components/Layout.jsx'

// Import the component that protects pages from guests.
import ProtectedRoute from './components/ProtectedRoute.jsx'

// Import all five pages from Week 4.
import HomePage from './pages/HomePage.jsx'
import VendorPage from './pages/VendorPage.jsx'
import CartPage from './pages/CartPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

// Import the two authentication pages from Week 5.
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

// Import the Firestore seeding page for Week 6.
import SeedPage from './pages/SeedPage.jsx'

// Main CampusEats application component.
//
// Week 6 architecture:
// 1. BrowserRouter manages navigation using URLs.
// 2. AuthProvider manages Firebase authentication.
// 3. CartProvider shares cart data across the application.
// 4. Routes determines which page to display.
// 5. Layout keeps Header and Footer visible.
// 6. ProtectedRoute restricts Cart and Orders to signed-in users.
// 7. SeedPage uploads demo vendors and menus into Firestore.
function App() {
  return (
    <BrowserRouter>

      {/* Share Firebase authentication across the entire application. */}
      <AuthProvider>

        {/* Share cart and order data across the entire application. */}
        <CartProvider>

          {/* Choose which page to display based on the current URL. */}
          <Routes>

            {/* Layout provides the shared Header, Outlet, and Footer. */}
            <Route element={<Layout />}>

              {/* PUBLIC PAGE: Everyone can view restaurants and daily specials. */}
              <Route
                index
                element={<HomePage />}
              />

              {/* PUBLIC PAGE: Everyone can view a restaurant's menu. */}
              <Route
                path="vendor/:id"
                element={<VendorPage />}
              />

              {/* PUBLIC PAGE: Users can log in with email or Google. */}
              <Route
                path="login"
                element={<LoginPage />}
              />

              {/* PUBLIC PAGE: Users can register a new account. */}
              <Route
                path="register"
                element={<RegisterPage />}
              />

              {/* DEVELOPMENT ONLY: Upload vendor and menu data to Firestore. */}
              {import.meta.env.DEV && (
                <Route
                  path="seed"
                  element={<SeedPage />}
                />
              )}

              {/* PROTECTED ROUTES: Only signed-in users can access these pages. */}
              <Route element={<ProtectedRoute />}>

                {/* PROTECTED PAGE: Shopping cart and checkout form. */}
                <Route
                  path="cart"
                  element={<CartPage />}
                />

                {/* PROTECTED PAGE: Previously placed orders. */}
                <Route
                  path="orders"
                  element={<OrdersPage />}
                />

              </Route>

              {/* NOT FOUND PAGE: Handles URLs that do not match any route. */}
              <Route
                path="*"
                element={<NotFoundPage />}
              />

            </Route>
          </Routes>

        </CartProvider>
      </AuthProvider>

    </BrowserRouter>
  )
}

export default App

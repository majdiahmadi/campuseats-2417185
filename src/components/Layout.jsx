
import { Outlet } from 'react-router'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// Layout provides a consistent structure for all CampusEats pages.
// The Header and Footer remain visible when users navigate between pages.
export default function Layout() {
  return (
    <>
      {/* Display the navigation header on every page. */}
      <Header />

      {/* Display the currently selected page inside the main area. */}
      <main className="container">
        <Outlet />
      </main>

      {/* Display the footer on every page. */}
      <Footer />
    </>
  )
}

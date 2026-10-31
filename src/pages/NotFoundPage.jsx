
import { Link } from 'react-router'

// NotFoundPage is displayed when a URL does not match any route.
// Example: /nothing or /invalid-page
export default function NotFoundPage() {
  return (
    <section>
      {/* Display the error heading. */}
      <h2 className="section-title">
        404 - Page Not Found
      </h2>

      {/* Explain why the user is seeing this page. */}
      <p className="muted">
        Sorry, the page you are looking for does not exist.
      </p>

      {/* Allow users to return to the CampusEats home page. */}
      <Link to="/">
        Back to Home
      </Link>
    </section>
  )
}

import { Link, useLocation } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'
import DailySpecial from './DailySpecial.jsx'

// This wrapper protects the visible Daily Special but preserves its own timer.
function DailySpecialGate(props) {
  const { user, loading } = useAuth()
  const location = useLocation()

  // Avoid temporarily showing guest or user content before Firebase answers.
  if (loading) {
    return <p>Checking sign-in…</p>
  }

  // Guests may browse CampusEats, but cannot see the special yet.
  if (!user) {
    return (
      <section className="daily-special-login">
        <p>Log in to see today's special.</p>
        <Link
          to="/login"
          state={{ from: location.pathname }}
        >
          Log in
        </Link>
      </section>
    )
  }

  // Signed-in users get their name AND the original Week 4 countdown.
  return (
    <section className="daily-special-member">
      <p>
        Today's special for {user.displayName || user.email}
      </p>
      <DailySpecial {...props} />
    </section>
  )
}

export default DailySpecialGate
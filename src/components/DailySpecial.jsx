
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'

// Convert seconds into HH:MM:SS.
function formatCountdown(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  return [hours, minutes, secs]
    .map((value) => String(value).padStart(2, '0'))
    .join(':')
}

// Display the special using a Firestore Timestamp.
function DailySpecial({ item }) {

  // Check the currently signed-in Firebase user.
  const { user, loading } = useAuth()

  // Store the current time for the countdown.
  const [now, setNow] = useState(() => Date.now())

  // Update the current time every second.
  useEffect(() => {

    const intervalId = setInterval(() => {
      setNow(Date.now())
    }, 1000)

    // Stop the interval when the component unmounts.
    return () => clearInterval(intervalId)

  }, [])

  // Do not display the component without an item.
  if (!item) {
    return null
  }

  // Wait for Firebase Authentication to finish.
  if (loading) {
    return null
  }

  // Guests must log in to see the special.
  if (!user) {
    return (
      <section className="card daily-special">
        <h2>Today's Special</h2>

        <p>
          <Link to="/login">
            Log in to see today's special
          </Link>
        </p>
      </section>
    )
  }

  // Read the ending time directly from Firestore.
  const endMilliseconds =
    item.specialEndsAt?.toMillis?.()

  // Make sure the Timestamp exists.
  if (endMilliseconds === undefined) {
    return (
      <section className="card daily-special">
        <h2>Today's Special</h2>

        <p className="field-error">
          Special ending time is not configured.
        </p>
      </section>
    )
  }

  // Calculate the remaining seconds.
  const remaining = Math.max(
    0,
    Math.ceil((endMilliseconds - now) / 1000)
  )

  return (
    <section className="card daily-special">

      <h2>
        Today's special for {user.displayName || user.email}
      </h2>

      <h3>{item.name}</h3>

      <p>{item.description}</p>

      <p>
        Price: RM {item.price.toFixed(2)}
      </p>

      {remaining > 0 ? (
        <p className="special-timer">
          Special ends in: {formatCountdown(remaining)}
        </p>
      ) : (
        <p className="special-expired">
          Today's special has ended.
        </p>
      )}

    </section>
  )
}

export default DailySpecial

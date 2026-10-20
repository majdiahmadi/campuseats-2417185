
import { useState, useEffect } from 'react'

// Calculate seconds until today's closing time
function getRemainingSeconds(endTime) {
  const now = new Date()
  const end = new Date()

  const [hours, minutes] = endTime.split(':').map(Number)

  end.setHours(hours, minutes, 0, 0)

  return Math.max(0, Math.floor((end - now) / 1000))
}

// Convert seconds to HH:MM:SS
function formatCountdown(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  return [hours, minutes, secs]
    .map((value) => String(value).padStart(2, '0'))
    .join(':')
}

function DailySpecial({ item, endTime = '22:00' }) {
  const [remaining, setRemaining] = useState(
    () => getRemainingSeconds(endTime)
  )

  useEffect(() => {
    function updateCountdown() {
      setRemaining(getRemainingSeconds(endTime))
    }

    // Update immediately
    updateCountdown()

    // Update every second
    const intervalId = setInterval(updateCountdown, 1000)

    // Cleanup when component unmounts
    return () => clearInterval(intervalId)
  }, [endTime])

  if (!item) {
    return null
  }

  return (
    <section className="card daily-special">
      <h2>Today's Special</h2>

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

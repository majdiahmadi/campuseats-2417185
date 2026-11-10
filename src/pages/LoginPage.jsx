import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'
import { authErrorMessage } from '../authErrors.js'

function LoginPage() {
  // Functions shared by our AuthProvider.
  const { login, loginWithGoogle } = useAuth()

  // React Router hooks: navigate somewhere and read the current location.
  const navigate = useNavigate()
  const location = useLocation()

  // If a guest tried to open /cart, remember /cart.
  // Otherwise send them to the homepage after login.
  const goTo = location.state?.from ?? '/'

  // The form's local input and feedback state.
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  // Runs when the email/password form is submitted.
  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setBusy(true)

    try {
      await login(email, password)
      navigate(goTo, { replace: true })
    } catch (err) {
      setError(authErrorMessage(err))
    } finally {
      setBusy(false)
    }
  }

  // Runs when the Continue with Google button is clicked.
  async function handleGoogle() {
    setError('')
    setBusy(true)

    try {
      await loginWithGoogle()
      navigate(goTo, { replace: true })
    } catch (err) {
      setError(authErrorMessage(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="auth-page">
      <form className="card form" onSubmit={handleSubmit}>
        <h2>Log in</h2>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {error && (
          <p className="field-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn" disabled={busy}>
          {busy ? 'Logging in…' : 'Log in'}
        </button>

        <button
          type="button"
          className="btn btn-outline"
          onClick={handleGoogle}
          disabled={busy}
        >
          Continue with Google
        </button>

        <p className="muted">
          No account?{' '}
          <Link to="/register" state={location.state}>
            Register
          </Link>
        </p>
      </form>
    </section>
  )
}

export default LoginPage
import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'
import { Loading } from './Status.jsx'

function ProtectedRoute() {
  // Get the account and first-load status from the AuthProvider.
  const { user, loading } = useAuth()

  // Remember the route the guest tried to visit.
  const location = useLocation()

  // IMPORTANT: do not redirect while Firebase is still checking.
  if (loading) {
    return <Loading />
  }

  // Guest: send to login and remember the requested route.
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    )
  }

  // Signed-in account: render the protected child route.
  return <Outlet />
}

export default ProtectedRoute
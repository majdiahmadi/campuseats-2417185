import { useContext } from 'react'
import { AuthContext } from '../context/auth-context.js'

// Custom hook: one convenient way to read our shared auth context.
export function useAuth() {
  const context = useContext(AuthContext)

  // If no Provider exists above the component, show a helpful error.
  if (!context) {
    throw new Error('useAuth must be used inside <AuthProvider>')
  }

  return context
}
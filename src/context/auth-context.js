import { createContext } from 'react'

// This is the shared channel through which components read auth data.
export const AuthContext = createContext(null)
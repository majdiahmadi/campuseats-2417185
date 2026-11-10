import { useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../firebase.js'
import { AuthContext } from './auth-context.js'

export function AuthProvider({ children }) {
  // null = no user currently in our React state.
  const [user, setUser] = useState(null)

  // true = we are still waiting for Firebase's FIRST answer.
  const [loading, setLoading] = useState(true)

  // Listen whenever Firebase restores a session, logs in, or logs out.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })

    // Remove listener when this Provider is unmounted.
    return unsubscribe
  }, [])

  // Create a new email/password account and save the student's name.
  async function register(name, email, password) {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    await updateProfile(credential.user, { displayName: name })

    // Update the visible name immediately after registration.
    setUser({ ...credential.user, displayName: name })
  }

  // Return the Promise so LoginPage can await it and handle failures.
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Opens the Firebase-managed Google sign-in pop-up.
  function loginWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider())
  }

  // Return the Promise so Header can await logout finishing.
  function logout() {
    return signOut(auth)
  }

  // Everything that components may access through useAuth().
  const value = {
    user,
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
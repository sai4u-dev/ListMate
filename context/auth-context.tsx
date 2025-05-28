"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"
import { auth } from "@/lib/firebase"
import { createUser } from "@/lib/supabase/users"

interface User {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name?: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
        })
      } else {
        // User is signed out
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (emailOrProvider: string, password?: string) => {
    setLoading(true)

    try {
      if (emailOrProvider === "google") {
        // Sign in with Google
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)

        // Create or update user in Supabase
        await createUser({
          id: result.user.uid,
          email: result.user.email || "",
          name: result.user.displayName || "",
          avatar_url: result.user.photoURL || "",
        })
      } else {
        // Sign in with email and password
        await signInWithEmailAndPassword(auth, emailOrProvider, password!)
      }
    } catch (error) {
      console.error("Sign in error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (emailOrProvider: string, password?: string, name?: string) => {
    setLoading(true)

    try {
      if (emailOrProvider === "google") {
        // Sign up with Google
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)

        // Create user in Supabase
        await createUser({
          id: result.user.uid,
          email: result.user.email || "",
          name: result.user.displayName || "",
          avatar_url: result.user.photoURL || "",
        })
      } else {
        // Sign up with email and password
        const result = await createUserWithEmailAndPassword(auth, emailOrProvider, password!)

        // Update profile with name if provided
        if (name) {
          await updateProfile(result.user, { displayName: name })
        }

        // Create user in Supabase
        await createUser({
          id: result.user.uid,
          email: result.user.email || "",
          name: name || "",
        })
      }
    } catch (error) {
      console.error("Sign up error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      await firebaseSignOut(auth)
    } catch (error) {
      console.error("Sign out error:", error)
      throw error
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

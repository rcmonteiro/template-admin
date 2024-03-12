'use client'

import firebase from "@/firebase/config"
import User from "@/model/User"
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword  } from "firebase/auth"
import { useRouter } from "next/navigation"
import { createContext, useEffect, useState } from "react"
import { getCookie, setCookie, deleteCookie  } from 'cookies-next';


const auth = getAuth(firebase)
const googleProvider = new GoogleAuthProvider();

interface AuthContextProps {
  user: User | null
  loginGoogle?: () => Promise<void> | null
  signin?: (email: string, password: string) => Promise<void> | null
  signup?: (email: string, password: string) => Promise<void> | null
  logout?: () => Promise<void> | null
}

const AuthContext = createContext<AuthContextProps>({ user: null })

const normalizeUser = (userFirebase: any): User => {
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    imageUrl: userFirebase.photoURL,
    token: userFirebase.accessToken,
    provider: userFirebase.providerData[0].providerId
  }
}

const manageCookie = (signed: boolean) => {
  if (signed) {
    setCookie(
      'admin-template-auth', 
      `${signed}`,
      {
        maxAge: 7 * 60 * 60 * 24
      }
    )
  } else {
    deleteCookie('admin-template-auth')
  }
}

export const AuthProvider = ({children}:any) => {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User|null>(null)
  
  const manageSession = (userFirebase: any) => {
    if (userFirebase?.email) {
      const user = normalizeUser(userFirebase)
      setUser(user)
      manageCookie(true)
      setLoading(false)
      return user.email
    } else {
      setUser(null)
      manageCookie(false)
      setLoading(true)
      return false
    }
  }

  const loginGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        manageSession(auth.currentUser)
        router.push('/')
      })
      .catch((error) => {
        console.log(error);
      });    
  }

  const signin = async (email: string, password: string) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        manageSession(auth.currentUser)
        router.push('/')
      })
      .catch((error) => {
        console.log(error);
        // throw "E-mail ou senha inválidos"
      });    
  }

  const signup = async (email: string, password: string) => {
    setLoading(true)
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      manageSession(auth.currentUser)
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    signOut(auth).then(() => {
      manageSession(false)
      setLoading(false)
      router.push('/auth')
    }).catch((error) => {
      setLoading(false)
      console.log(error);
    });
  }

  useEffect(() => {
    if (getCookie('admin-template-auth')) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          manageSession(user)
        } else {
          manageSession(false)
        }
      })
    }
  },[])

  return (
    <AuthContext.Provider value={{
      user,
      loginGoogle,
      signin, 
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
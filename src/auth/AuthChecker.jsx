import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

const AuthChecker = ({ children }) => {
    const navigate = useNavigate();
    const signInOnClick = async () => {
      const response = await signInWithRedirect(auth, Providers.google);
    }

    useEffect(() => {
      const auth_state = onAuthStateChanged(auth, (user) => {
        if (!user) {
          signInOnClick();
          navigate("/dashboard")
      }
      })
      return () => auth_state();
    }, [auth, navigate])
  return (
    <>{children}</>
  )
}
export default AuthChecker

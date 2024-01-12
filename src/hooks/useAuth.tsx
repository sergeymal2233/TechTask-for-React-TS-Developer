import { AuthContext } from '@/contexts/AuthContextProvider'
import { useContext } from 'react'

export const useAuth = () => {
  return useContext(AuthContext)
}

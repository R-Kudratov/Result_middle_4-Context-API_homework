import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

export const Logout = () => {
  const user = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    user.logout(() => {
      navigate('/', { replace: true })
    })
  }, [user, navigate])

  return null
}

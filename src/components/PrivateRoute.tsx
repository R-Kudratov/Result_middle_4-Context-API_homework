import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

export const PrivateRoute = () => {
  const user = useUser()
  const location = useLocation()

  if (user.username === null) {
    return <Navigate to='/login' replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}

import { Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { LogIn, LogOut } from 'iconoir-react'

export const UserStatus = () => {
  const user = useUser()

  if (user.username === null) {
    return (
      <Link to='/login' className='flex gap-0.5'>
        <span>Войти</span>
        <LogIn />
      </Link>
    )
  }

  return (
    <Link to='/logout' className='flex gap-0.5'>
      <span>{user.username}</span>
      <LogOut />
    </Link>
  )
}

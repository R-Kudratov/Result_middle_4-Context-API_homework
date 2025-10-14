import { useState } from 'react'
import { UserContext } from './UserContext'
import type { LoginType, LogoutType } from './types'

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string | null>(
    () => localStorage.getItem('username') || null
  )

  const login: LoginType = (newUsername, callback) => {
    setUsername(newUsername)
    localStorage.setItem('username', newUsername)
    callback()
  }

  const logout: LogoutType = (callback) => {
    setUsername(null)
    localStorage.removeItem('username')
    callback()
  }

  const contextValue = { username, login, logout }

  return <UserContext value={contextValue}>{children}</UserContext>
}

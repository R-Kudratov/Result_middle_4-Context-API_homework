export type LoginType = (newUsername: string, callback: () => void) => void

export type LogoutType = (callback: () => void) => void

export type ContextDefaultValueType = {
  username: string | null
  login: LoginType
  logout: LogoutType
}

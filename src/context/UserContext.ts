import { createContext } from 'react'
import type { ContextDefaultValueType } from './types'

const defaultValue: ContextDefaultValueType = {
  username: null,
  login: () => {},
  logout: () => {},
}
export const UserContext = createContext(defaultValue)

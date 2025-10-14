import { use } from 'react'
import { UserContext } from '../context/UserContext'

export const useUser = () => use(UserContext)

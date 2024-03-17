import { createContext } from 'react'
import { AvatarProps } from './types'

export const AvatarContext = createContext({} as Omit<AvatarProps, 'children'>)

import { ReactNode } from 'react'

export type AvatarFallbackProps = {
  name: FullName
}

export type AvatarProps = {
  children: ReactNode
  size?: 'sm' | 'md'
}

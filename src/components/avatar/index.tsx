import clsx from 'clsx'
import { View } from 'react-native'
import { AvatarFallback } from './fallback'
import { AvatarImage } from './image'
import { AvatarContext } from './model'
import { AvatarProps } from './types'

function Avatar({ children, size = 'md' }: AvatarProps) {
  const avatarStyle = clsx('bg-gray-900 rounded-full relative', {
    'h-8 w-8': size === 'sm',
    'h-10 w-10': size === 'md',
  })

  return (
    <AvatarContext.Provider value={{ size }}>
      <View className={avatarStyle}>{children}</View>
    </AvatarContext.Provider>
  )
}

Avatar.Fallback = AvatarFallback
Avatar.Image = AvatarImage

export { Avatar }

import clsx from 'clsx'
import { useContext } from 'react'
import { Text, View } from 'react-native'
import { AvatarContext } from './model'
import { AvatarProps } from './types'

export function AvatarFallback({ children }: Omit<AvatarProps, 'size'>) {
  const { size } = useContext(AvatarContext)

  const avatarFallbackStyle = clsx('text-white', {
    'text-lg font-subtitle': size === 'md',
    'text-base font-body': size === 'sm',
  })

  return (
    <View className="absolute inset-0 w-full h-full items-center justify-center">
      <Text className={avatarFallbackStyle}>{children}</Text>
    </View>
  )
}

import { useFallbackName } from '@/modules/core/hooks/use-fallback-name'
import clsx from 'clsx'
import { useContext } from 'react'
import { Text, View } from 'react-native'
import { AvatarContext } from './context'
import { AvatarFallbackProps } from './types'

export function AvatarFallback({ name }: AvatarFallbackProps) {
  const { size } = useContext(AvatarContext)

  const avatarFallbackContent = clsx('absolute inset-0 items-center justify-center', {
    'h-10 w-10': size === 'md',
    'h-8 w-8': size === 'sm',
  })

  const avatarFallbackStyle = clsx('text-white', {
    'text-lg font-subtitle': size === 'md',
    'text-base font-body': size === 'sm',
  })

  const fallback = useFallbackName(name)

  return (
    <View className={avatarFallbackContent}>
      <Text className={avatarFallbackStyle}>{fallback}</Text>
    </View>
  )
}

import { ActivityIndicator } from 'react-native'

export function Loading() {
  return (
    <ActivityIndicator
      size={'large'}
      className="flex-grow bg-gray-900 items-center justify-center"
    />
  )
}

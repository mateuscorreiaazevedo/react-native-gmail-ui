import { View } from 'react-native'
import { InputField } from './field'
import { InputContainerProps } from './types'

function Input({ children }: InputContainerProps) {
  return (
    <View className="w-full h-14 bg-gray-800 rounded-lg p-4 flex-row items-center gap-4">
      {children}
    </View>
  )
}

Input.Field = InputField

export { Input }

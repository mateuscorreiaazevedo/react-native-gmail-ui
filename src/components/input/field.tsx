import { colors } from '@/styles/colors'
import { TextInput, TextInputProps } from 'react-native'

export function InputField({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-grow font-normal text-base text-white"
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  )
}

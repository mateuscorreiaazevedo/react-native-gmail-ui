import { View } from 'react-native'
import { DrawerTrigger } from './trigger'
import { DrawerProps } from './types'

const Drawer = ({ children }: DrawerProps) => {
  return <View>{children}</View>
}

Drawer.Trigger = DrawerTrigger

export { Drawer }

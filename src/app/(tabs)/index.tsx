import { Drawer, Input } from '@/components'
import { View } from 'react-native'

export default function Home() {
  return (
    <View className="bg-gray-900 flex-1 pt-14 p-4">
      <Input>
        <Drawer>
          <Drawer.Trigger />
        </Drawer>
        <Input.Field placeholder="Pesquisar no e-mail" />
      </Input>
    </View>
  )
}

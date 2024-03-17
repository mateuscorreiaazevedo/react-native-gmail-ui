import { Input } from '@/components'
import { MenuDrawer } from './menu'
import { UserAvatar } from './user-avatar'

export function HeaderView() {
  return (
    <Input>
      <MenuDrawer />
      <Input.Field placeholder="Pesquisar no e-mail" />
      <UserAvatar />
    </Input>
  )
}

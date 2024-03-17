import { useUserAuthModel } from './model'
import { UserAvatarView } from './view'

export function UserAvatar() {
  const userData = useUserAuthModel()

  return <UserAvatarView {...userData} />
}

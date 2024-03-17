import { Avatar } from '@/components'
import { useUserAuthModel } from './model'

export function UserAvatarView({
  name,
  avatarUrl,
}: ReturnType<typeof useUserAuthModel>) {
  return (
    <Avatar>
      <Avatar.Fallback name={name} />
      <Avatar.Image source={{ uri: avatarUrl }} />
    </Avatar>
  )
}

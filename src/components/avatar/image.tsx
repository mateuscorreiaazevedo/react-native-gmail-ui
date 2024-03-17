import { Image, ImageProps } from 'react-native'

export function AvatarImage(props: ImageProps) {
  return <Image className="h-full w-full rounded-full" {...props} />
}

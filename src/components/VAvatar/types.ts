import type { VImageAlt, VImageSrc } from '../VImage/types'

export type VAvatarSize = 'xs' | 'sm' | 'bs' | 'md' | 'lg' | 'xl'

export interface VAvatarProps {
  label?: string
  src?: VImageSrc
  alt?: VImageAlt
  size?: VAvatarSize
}

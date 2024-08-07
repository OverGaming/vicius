import type { VImageAlt, VImageSrc } from '../VImage/types'

export type VAvatarSize = 'xs' | 'sm' | 'df' | 'md' | 'lg' | 'xl'

export interface VAvatarProps {
  label?: string
  src?: VImageSrc
  alt?: VImageAlt
  size?: VAvatarSize
}

import type { VImageAlt, VImageSrc } from '../VImage/types'

export type VAvatarLabel = string
export type VAvatarSrc = VImageSrc
export type VAvatarAlt = VImageAlt
export type VAvatarSize = 'xs' | 'sm' | 'bs' | 'md' | 'lg' | 'xl'

export interface VAvatarProps {
  label?: VAvatarLabel
  src?: VAvatarSrc
  alt?: VAvatarAlt
  size?: VAvatarSize
}

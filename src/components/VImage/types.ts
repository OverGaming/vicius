export type VImageSrc = string | undefined
export type VImageAlt = string

export interface VImageProps {
  src?: VImageSrc
  alt?: VImageAlt
  loading?: 'eager' | 'lazy'
  srcset?: string
  sizes?: string
  aspectRatio?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  position?: string
}

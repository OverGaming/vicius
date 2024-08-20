export type VImageSrc = string | undefined
export type VImageAlt = string
export type VImageLoading = 'eager' | 'lazy'
export type VImageSrcset = string
export type VImageSizes = string
export type VImageAspectRatio = string
export type VImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
export type VImagePosition = string

export interface VImageProps {
  src?: VImageSrc
  alt?: VImageAlt
  loading?: VImageLoading
  srcset?: VImageSrcset
  sizes?: VImageSizes
  aspectRatio?: VImageAspectRatio
  fit?: VImageFit
  position?: VImagePosition
}

import type { VTextProps } from '../VText/types'

export type VLinkAs = 'a' | 'button'
export type VLinkHref = string

export interface VLinkProps extends VTextProps {
  as?: VLinkAs
  href?: VLinkHref
}

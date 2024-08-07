import type { VTextProps } from '../VText/types'

export interface VLinkProps extends VTextProps {
  as?: 'a' | 'button'
  href?: string
}

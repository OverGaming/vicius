import type { VIconName } from '../VIcon/types'

export interface VButtonProps {
  type?: 'button' | 'submit' | 'reset'
  href?: string
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  noGap?: boolean
  color?: 'default' | 'primary'
  variant?: 'default' | 'text'
  size?: 'xs' | 'sm' | 'df'
  startIcon?: VIconName
  endIcon?: VIconName
}

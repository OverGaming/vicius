export type VButtonType = 'button' | 'submit' | 'reset'
export type VButtonColor = 'primary' | 'error' | 'success' | 'warning' | 'info'
export type VButtonVariant = 'ghost'
export type VButtonSize = 'xs' | 'sm' | 'bs'
export type VButtonHref = string
export type VButtonDisabled = boolean
export type VButtonLoading = boolean
export type VButtonFullWidth = boolean
export type VButtonGap = boolean

export interface VButtonProps {
  type?: VButtonType
  href?: VButtonHref
  disabled?: VButtonDisabled
  loading?: VButtonLoading
  fullWidth?: VButtonFullWidth
  gap?: VButtonGap
  color?: VButtonColor
  variant?: VButtonVariant
  size?: VButtonSize
}

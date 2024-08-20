export type VTextAs = string
export type VTextVariant = 'header' | 'body' | 'label'
export type VTextSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3' | 'b4'
export type VTextMinSize = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3' | 'b4'
export type VTextMaxSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3'
export type VTextSizeStart = number
export type VTextSizeEnd = number
export type VTextColor =
  | 'default'
  | 'low'
  | 'high'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
export type VTextEllipsis = boolean
export type VTextUppercase = boolean
export type VTextItalic = boolean
export type VTextInline = boolean
export type VTextPretty = boolean
export type VTextBalance = boolean
export type VTextMaxLines = number

export interface VTextProps {
  as?: VTextAs
  variant?: VTextVariant
  size?: VTextSize
  minSize?: VTextMinSize
  maxSize?: VTextMaxSize
  sizeStart?: VTextSizeStart
  sizeEnd?: VTextSizeEnd
  color?: VTextColor
  ellipsis?: VTextEllipsis
  uppercase?: VTextUppercase
  italic?: VTextItalic
  inline?: VTextInline
  pretty?: VTextPretty
  balance?: VTextBalance
  maxLines?: VTextMaxLines
}

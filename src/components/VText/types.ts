export interface VTextProps {
  as?: string
  variant?: 'header' | 'body' | 'label'
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3' | 'b4'
  minSize?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3' | 'b4'
  maxSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2' | 'b3'
  sizeStart?: number
  sizeEnd?: number
  color?: 'default' | 'low' | 'high' | 'primary' | 'info' | 'success' | 'warning' | 'error'
  ellipsis?: boolean
  uppercase?: boolean
  italic?: boolean
  inline?: boolean
  pretty?: boolean
  balance?: boolean
  maxLines?: number
}

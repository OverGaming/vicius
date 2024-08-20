export type VContainerAs = string
export type VContainerSize = 'xt' | 'tn' | 'xs' | 'sm' | 'bs' | 'md' | 'lg' | 'xl' | 'hg' | 'hd'

export interface VContainerProps {
  as?: VContainerAs
  size?: VContainerSize
}

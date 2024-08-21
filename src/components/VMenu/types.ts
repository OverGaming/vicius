export type VMenuItemHref = string
export type VMenuItemType = 'button' | 'submit' | 'reset'
export type VMenuItemActive = boolean

export interface VMenuItemProps {
  href?: VMenuItemHref
  type?: VMenuItemType
  active?: VMenuItemActive
}

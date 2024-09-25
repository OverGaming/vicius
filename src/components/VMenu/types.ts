export type VMenuItemHref = string
export type VMenuItemType = 'button' | 'submit' | 'reset'
export type VMenuItemActive = boolean
export type VMenuItemDisabled = boolean

export interface VMenuItemProps {
  href?: VMenuItemHref
  type?: VMenuItemType
  active?: VMenuItemActive
  disabled?: VMenuItemDisabled
}

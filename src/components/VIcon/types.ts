import type { Animate } from '@/types'

export type VIconName =
  | 'Add'
  | 'Bell'
  | 'Check'
  | 'CheckCircle'
  | 'ChevronBottom'
  | 'ChevronLeft'
  | 'ChevronTop'
  | 'ChevronRight'
  | 'Comment'
  | 'Comments'
  | 'Compass'
  | 'Discord'
  | 'Error'
  | 'Feather'
  | 'Gamepad'
  | 'GamepadCross'
  | 'Google'
  | 'House'
  | 'Info'
  | 'Loader'
  | 'Logout'
  | 'Mail'
  | 'Menu'
  | 'OverGaming'
  | 'Pencil'
  | 'Person'
  | 'Radio'
  | 'Search'
  | 'Settings'
  | 'Twitch'
  | 'Warning'
  | 'Close'

export type VIconSize = 'xs' | 'sm' | 'bs' | 'md' | 'lg' | 'xl'
export type VIconTitle = string
export type VIconAnimate = Animate

export interface VIconProps {
  name?: VIconName
  title?: VIconTitle
  size?: VIconSize
  animate?: VIconAnimate
}

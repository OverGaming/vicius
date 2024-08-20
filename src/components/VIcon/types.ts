import type { Animate } from '@/types'

export type VIconName =
  | 'Add'
  | 'Bell'
  | 'Check'
  | 'CheckCircle'
  | 'ChevronBottom'
  | 'ChevronLeft'
  | 'ChevronTop'
  | 'Close'
  | 'Comments'
  | 'Compass'
  | 'Discord'
  | 'Error'
  | 'Feather'
  | 'Gamepad'
  | 'GamepadCross'
  | 'Google'
  | 'House'
  | 'IconErrorLoad'
  | 'Info'
  | 'Loader'
  | 'Logout'
  | 'Mail'
  | 'Menu'
  | 'OverGaming'
  | 'Person'
  | 'Radio'
  | 'Search'
  | 'Settings'
  | 'SyncAlt'
  | 'Twitch'
  | 'Warning'

export type VIconSize = 'xs' | 'sm' | 'bs' | 'md' | 'lg' | 'xl'
export type VIconTitle = string
export type VIconAnimate = Animate

export interface VIconProps {
  name: VIconName
  title?: VIconTitle
  size?: VIconSize
  animate?: VIconAnimate
}

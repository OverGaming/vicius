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

export type VIconSize = 'xs' | 'sm' | 'df' | 'md' | 'lg' | 'xl'

export interface VIconProps {
  name: VIconName
  title?: string
  size?: VIconSize
  animate?: Animate
}

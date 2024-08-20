import type { Ref } from 'vue'

export type VDialogShowClose = boolean

export interface VDialogProps {
  showClose?: VDialogShowClose
}

export interface VDialogContext {
  isOpen: Ref<boolean>
  close: () => void
}

export type VDialogCloseStatic = boolean

export interface VDialogCloseProps {
  static?: VDialogCloseStatic
}

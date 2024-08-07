import type { Ref } from 'vue'

export interface VDialogProps {
  showClose?: boolean
}

export interface VDialogContext {
  isOpen: Ref<boolean>
  close: () => void
}

export interface VDialogCloseProps {
  static?: boolean
}

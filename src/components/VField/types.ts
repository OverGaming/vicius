import type { ComputedRef, Ref } from 'vue'

interface UpdateFieldParams {
  id: string | undefined
  invalid: boolean
  disabled: boolean
}

export interface VFieldContext {
  id: Ref<string | undefined>
  messageId: string
  isField: boolean
  isInvalid: Ref<boolean>
  isDisabled: Ref<boolean>
  hasMessage: ComputedRef<boolean>
  updateField: (params: UpdateFieldParams) => void
}

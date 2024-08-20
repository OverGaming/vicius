import type { ComputedRef, Ref } from 'vue'

export interface UpdateFieldParams {
  id: string | undefined
  invalid: boolean
  disabled: boolean
}

export type VFieldId = Ref<string | undefined>
export type VFieldMessageId = string
export type VFieldIsField = boolean
export type VFieldIsInvalid = Ref<boolean>
export type VFieldIsDisabled = Ref<boolean>
export type VFieldHasMessage = ComputedRef<boolean>

export interface VFieldContext {
  id: VFieldId
  messageId: VFieldMessageId
  isField: VFieldIsField
  isInvalid: VFieldIsInvalid
  isDisabled: VFieldIsDisabled
  hasMessage: VFieldHasMessage
  updateField: (params: UpdateFieldParams) => void
}

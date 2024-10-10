import type { MaybeRefOrGetter, Ref } from 'vue'

export type VFieldId = Ref<string | undefined>
export type VFieldMessageId = string
export type VFieldIsInvalid = Ref<boolean>
export type VFieldHasMessage = Ref<boolean>

export interface UpdateFieldOptions {
  id?: string
  isInvalid?: boolean
  hasMessage?: boolean
}

export interface VFieldContext {
  id: VFieldId
  messageId: VFieldMessageId
  isInvalid: VFieldIsInvalid
  hasMessage: VFieldHasMessage
  updateField: (params: UpdateFieldOptions) => void
}

export interface useFieldOptions {
  id?: MaybeRefOrGetter<string | undefined>
  isInvalid?: MaybeRefOrGetter<boolean>
  hasMessage?: MaybeRefOrGetter<boolean>
}

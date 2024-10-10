import { inject, ref, toValue, watchEffect } from 'vue'
import { VFieldContextKey } from './keys'
import { uuid } from '@/utils'
import type { useFieldOptions } from './types'

export const useField = ({ id, isInvalid, hasMessage }: useFieldOptions = {}) => {
  const context = inject(VFieldContextKey, {
    id: ref(uuid()),
    messageId: uuid(),
    isInvalid: ref(false),
    hasMessage: ref(false),
    updateField: () => {}
  })

  watchEffect(() => {
    context.updateField({
      id: toValue(id),
      isInvalid: toValue(isInvalid),
      hasMessage: toValue(hasMessage)
    })
  })

  return context
}

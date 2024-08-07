import { computed, inject, ref } from 'vue'
import { VFieldContextKey } from './keys'
import { uuid } from '@/utils'

export const useField = () => {
  return inject(VFieldContextKey, {
    id: ref(uuid()),
    messageId: uuid(),
    isField: false,
    isInvalid: ref(false),
    isDisabled: ref(false),
    hasMessage: computed(() => false),
    updateField: () => {}
  })
}

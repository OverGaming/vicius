import type { InjectionKey } from 'vue'
import type { VDialogContext } from './types'

export const VDialogKey = Symbol('VDialog') as InjectionKey<VDialogContext>

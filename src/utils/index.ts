import { v4 } from 'uuid'

export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined'

export const uuid = () => v4()

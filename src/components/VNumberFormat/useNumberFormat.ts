import type { MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'

export type UseNumberFormatValue = MaybeRefOrGetter<number>
export type UseNumberFormatDigits = MaybeRefOrGetter<number>

const formatNumber = (num: number, digits: number): string => {
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/

  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ]

  const i = si.findIndex(si => num < si.value) - 1

  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
}

export const useNumberFormat = (value: UseNumberFormatValue, digits: UseNumberFormatDigits) => {
  return computed(() => formatNumber(toValue(value), toValue(digits)))
}

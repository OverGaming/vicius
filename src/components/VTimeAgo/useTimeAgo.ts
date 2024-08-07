import { defaultNavigator } from '@/config'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'

export interface UseTimeAgoOptions extends Intl.RelativeTimeFormatOptions {
  locales?: Intl.LocalesArgument
}

export type UseTimeAgoDate = MaybeRefOrGetter<Date | number | string>

interface UnitAndValueDate {
  value: number
  unit: keyof typeof DATE_UNITS
}

const DATE_UNITS = {
  year: 31536000,
  month: 2592000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
} as const

const stringToDate = (date: string | Date | number): Date => {
  if (typeof date === 'string') {
    return new Date(date)
  } else if (typeof date === 'number') {
    return new Date(date)
  } else {
    return date
  }
}

const getSecondsDiff = (timestamp: number): number => (timestamp - Date.now()) / 1000

const getUnitAndValueDate = (secondsElapsed: number): UnitAndValueDate => {
  const isFuture = secondsElapsed > 0
  const absSecondsElapsed = Math.abs(secondsElapsed)

  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS) as [
    keyof typeof DATE_UNITS,
    number
  ][]) {
    if (absSecondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(absSecondsElapsed / secondsInUnit) * (isFuture ? 1 : -1)
      return { value, unit }
    }
  }

  // Fallback in case no unit is matched
  return { value: 0, unit: 'second' }
}

const getTimeAgo = (date: string | Date | number, options: UseTimeAgoOptions = {}): string => {
  const navigator = defaultNavigator

  try {
    const {
      locales = navigator?.language || 'en',
      localeMatcher = 'best fit',
      numeric = 'auto',
      style = 'short'
    } = options

    const rtf = new Intl.RelativeTimeFormat(locales, {
      localeMatcher,
      numeric,
      style
    })

    const timestamp = stringToDate(date).getTime()
    const secondsElapsed = getSecondsDiff(timestamp)
    const { value, unit } = getUnitAndValueDate(secondsElapsed)

    return rtf.format(value, unit)
  } catch (error) {
    return 'Invalid Date'
  }
}

export const useTimeAgo = (date: UseTimeAgoDate, options?: UseTimeAgoOptions) => {
  return computed(() => getTimeAgo(toValue(date), options))
}

export type VNumberFormatValue = number
export type VNumberFormatDigits = 0 | 1

export interface VNumberFormatProps {
  value: VNumberFormatValue
  digits?: VNumberFormatDigits
}

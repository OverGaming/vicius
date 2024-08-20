export type VCheckboxId = string
export type VCheckboxDisabled = boolean
export type VCheckboxRequired = boolean
export type VCheckboxName = string
export type VCheckboxValue = string
export type VCheckboxError = boolean

export interface VCheckboxProps {
  id?: VCheckboxId
  disabled?: VCheckboxDisabled
  required?: VCheckboxRequired
  value?: VCheckboxValue
  name?: VCheckboxName
  error?: VCheckboxError
}

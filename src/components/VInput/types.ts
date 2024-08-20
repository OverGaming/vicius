export type VInputId = string
export type VInputType = string
export type VInputRequired = boolean
export type VInputDisabled = boolean
export type VInputPlaceholder = string
export type VInputInvalid = boolean

export interface VInputProps {
  id?: VInputId
  type?: VInputType
  required?: VInputRequired
  disabled?: VInputDisabled
  placeholder?: VInputPlaceholder
  invalid?: VInputInvalid
}

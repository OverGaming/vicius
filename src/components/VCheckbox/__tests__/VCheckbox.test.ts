import { render, screen } from '@testing-library/vue'
import { userEvent } from '@testing-library/user-event'
import VCheckbox from '../VCheckbox.vue'

describe('VCheckbox', () => {
  it('should be required', () => {
    render(VCheckbox, { props: { required: true } })
    expect(screen.getByRole('checkbox')).toBeRequired()
  })

  it('should be disabled', () => {
    render(VCheckbox, { props: { disabled: true } })
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('should have a value', async () => {
    const text = 'Label text'
    const value = 'example'

    render(VCheckbox, { slots: { default: text }, props: { value } })

    const checkbox: HTMLInputElement = await screen.findByLabelText(text, { exact: false })
    expect(checkbox.value).toEqual(value)
  })

  it('should have a generated id', () => {
    const text = 'Label text'
    render(VCheckbox, { slots: { default: text } })
    expect(screen.getByLabelText(text, { exact: false }).id).toBeDefined()
  })

  it('should have a custom id', () => {
    const text = 'Label text'
    const id = 'example'

    render(VCheckbox, { slots: { default: text }, props: { id } })
    expect(screen.getByLabelText(text, { exact: false }).id).toEqual(id)
  })

  it('should toggle a check icon', async () => {
    const user = userEvent.setup()

    render(VCheckbox)

    const checkbox = screen.getByRole('checkbox')
    expect(screen.queryByRole('img')).not.toBeInTheDocument()

    await user.click(checkbox)
    expect(await screen.findByRole('img')).toBeVisible()

    await user.click(checkbox)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('should display error status', () => {
    const text = 'Label Text'

    render(VCheckbox, { slots: { default: text }, props: { error: true } })
    expect(screen.getByLabelText(text, { exact: false })).toHaveClass('v-checkbox__element--error')
  })

  it('should toggle checked if it has label text', async () => {
    const user = userEvent.setup()
    const text = 'Label text'

    render(VCheckbox, { slots: { default: text } })

    const checkbox = screen.getByLabelText(text, { exact: false })

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('should toggle checked without label text', async () => {
    const user = userEvent.setup()

    render(VCheckbox)

    const checkbox = screen.getByRole('checkbox')

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })
})

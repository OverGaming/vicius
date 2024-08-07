import { render, screen } from '@testing-library/vue'
import VMenu from '../VMenu.vue'

describe('VMenu', () => {
  it('should display the content', () => {
    const text = 'Text'
    render(VMenu, { slots: { default: text } })
    expect(screen.getByText(text)).toBeVisible()
  })

  it('should display the label content', () => {
    const text = 'Text'
    render(VMenu, { slots: { label: text } })
    expect(screen.getByText(text)).toBeVisible()
  })
})

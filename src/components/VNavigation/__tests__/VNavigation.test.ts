import { render, screen } from '@testing-library/vue'
import VNavigation from '../VNavigation.vue'

describe('VNavigation', () => {
  it('should display the content', () => {
    const text = 'Text'
    render(VNavigation, { slots: { default: text } })
    expect(screen.getByText(text)).toBeVisible()
  })

  it('should display the header', () => {
    const text = 'Text'
    render(VNavigation, { slots: { header: text } })
    expect(screen.getByText(text)).toBeVisible()
  })

  it('should display the footer', () => {
    const text = 'Text'
    render(VNavigation, { slots: { footer: text } })
    expect(screen.getByText(text)).toBeVisible()
  })
})

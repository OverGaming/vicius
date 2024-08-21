import { render, screen } from '@testing-library/vue'
import VNavigation from '../VNavigation.vue'

describe('VNavigation', () => {
  it('should display the content', () => {
    const text = 'Text'
    render(VNavigation, { slots: { default: text } })
    expect(screen.getByText(text)).toBeVisible()
  })
})

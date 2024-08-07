import { render, screen } from '@testing-library/vue'
import VLink from '../VLink.vue'

describe('VLink', () => {
  it('should display the content', () => {
    const text = 'Text'
    render(VLink, { slots: { default: text } })
    expect(screen.getByText(text)).toBeVisible()
  })

  it('should display as a link', () => {
    const text = 'Text'
    render(VLink, { slots: { default: text }, props: { href: '#test' } })
    expect(screen.getByRole('link')).toBeVisible()
  })
})

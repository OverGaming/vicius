import { render, screen } from '@testing-library/vue'
import VMenuItem from '../VMenuItem.vue'

describe('VMenuItem', () => {
  it('should be a button', () => {
    const text = 'Text'
    render(VMenuItem, { slots: { default: text } })
    expect(screen.getByRole('button')).toBeVisible()
  })

  it('should be a link if a "href" is passed', () => {
    const text = 'Text'
    render(VMenuItem, { slots: { default: text }, props: { href: '#' } })
    expect(screen.getByRole('link')).toBeVisible()
  })

  it('should display the content', () => {
    const text = 'Text'
    render(VMenuItem, { slots: { default: text } })
    expect(screen.getByText(text)).toBeVisible()
  })
})

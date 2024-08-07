import { render, screen } from '@testing-library/vue'
import VBanner from '../VBanner.vue'

describe('VBanner', () => {
  it('should display the content', () => {
    const text = 'Text'
    render(VBanner, { slots: { default: text } })
    expect(screen.getByText(text)).toBeVisible()
  })

  it('should display the image content', () => {
    const text = 'Text'
    render(VBanner, { slots: { image: text } })
    expect(screen.getByText(text)).toBeVisible()
  })
})

import { render, screen } from '@testing-library/vue'
import VContainer from '../VContainer.vue'

describe('VContainer', () => {
  it('should display the content', () => {
    const text = 'Text'
    render(VContainer, { slots: { default: text }, props: { size: 'hd' } })
    expect(screen.getByText(text)).toBeVisible()
  })
})

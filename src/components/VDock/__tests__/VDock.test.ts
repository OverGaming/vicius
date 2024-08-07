import { render, screen } from '@testing-library/vue'
import VDock from '../VDock.vue'

describe('VDock', () => {
  it('should display the content', () => {
    const text = 'Text'
    render(VDock, { slots: { default: text } })
    expect(screen.getByText(text)).toBeVisible()
  })
})

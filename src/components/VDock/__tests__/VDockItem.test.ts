import { render, screen } from '@testing-library/vue'
import VDockItem from '../VDockItem.vue'

describe('VDockItem', () => {
  it('should display the content', () => {
    const text = 'Text'
    render(VDockItem, { slots: { default: text } })
    expect(screen.getByText(text)).toBeVisible()
  })
})

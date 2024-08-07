import { render, screen } from '@testing-library/vue'
import VText from '../VText.vue'

describe('VText', () => {
  it('should show the text', () => {
    const text = 'Text'
    render(VText, { slots: { default: text } })
    expect(screen.getByText(text)).toBeVisible()
  })

  it('should be an HTML <p> tag', () => {
    const text = 'Text'
    render(VText, { props: { as: 'p' }, slots: { default: text } })
    expect(screen.getByText(text).nodeName).toBe('P')
  })
})

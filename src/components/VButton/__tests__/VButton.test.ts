import { render, screen } from '@testing-library/vue'
import VButton from '../VButton.vue'

describe('VButton', () => {
  it('should be a button', () => {
    const text = 'Text'
    render(VButton, { slots: { default: text } })
    expect(screen.getByRole('button')).toBeVisible()
  })

  it('should be a link if a "href" is passed', () => {
    const text = 'Text'
    render(VButton, { slots: { default: text }, props: { href: '#' } })
    expect(screen.getByRole('link')).toBeVisible()
  })

  it('should display the content', () => {
    const text = 'Text'
    render(VButton, { slots: { default: text } })
    expect(screen.getByText(text)).toBeVisible()
  })

  it('should display loading icon', async () => {
    render(VButton, { slots: { default: 'Text' }, props: { loading: true } })
    expect(await screen.findByRole('img', { description: 'Loader' })).toBeVisible()
  })
})

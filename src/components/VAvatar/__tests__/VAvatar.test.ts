import { render, screen } from '@testing-library/vue'
import VAvatar from '../VAvatar.vue'
import { mount } from '@vue/test-utils'
import type { VAvatarSize } from '../types'

describe('VAvatar', () => {
  const src = `${window.location.href}/images/avatar.webp`
  const alt = 'Example image'
  const label = 'John Doe'
  const sizes: VAvatarSize[] = ['xs', 'sm', 'bs', 'md', 'lg', 'xl']

  it('should render the avatar with correct src and alt', () => {
    render(VAvatar, { props: { src, alt } })

    const image: HTMLImageElement = screen.getByAltText(alt)

    expect(image).toBeVisible()
    expect(image.src).toEqual(src)
  })

  it('should render the initials if the image is broken or is not set', async () => {
    render(VAvatar, { props: { alt, label } })
    expect(await screen.findByText('JD')).toBeVisible()
  })

  it('should render an icon if the image is broken or is not set', async () => {
    render(VAvatar, { props: { alt } })
    expect(await screen.findByRole('img', { description: 'Person' })).toBeVisible()
  })

  it.each(sizes)('should apply the correct %s size class', size => {
    const wrapper = mount(VAvatar, { props: { alt, size } })
    expect(wrapper.classes(`v-avatar--${size}`)).toBeTruthy()
  })
})

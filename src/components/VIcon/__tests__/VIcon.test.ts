import { render, screen } from '@testing-library/vue'
import VIcon from '../VIcon.vue'
import { mount } from '@vue/test-utils'
import type { VIconSize } from '../types'

describe('VIcon', () => {
  const name = 'Bell'
  const title = 'Title text'
  const sizes: VIconSize[] = ['xs', 'sm', 'bs', 'md', 'lg', 'xl']

  it('should render the icon', async () => {
    render(VIcon, { props: { name } })
    expect(await screen.findByRole('img', { description: name })).toBeVisible()
  })

  it('should render the icon with the provided title', async () => {
    render(VIcon, { props: { name, title } })
    expect(await screen.findByRole('img', { description: title })).toBeVisible()
  })

  it.each(sizes)('should apply the correct %s size class', size => {
    const wrapper = mount(VIcon, { props: { name, size } })
    expect(wrapper.classes(`v-icon--${size}`)).toBeTruthy()
  })
})

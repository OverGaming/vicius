import type { Meta, StoryObj } from '@storybook/vue3'
import VLink from './VLink.vue'
import VTextStories from '../VText/VText.stories'

const meta = {
  title: 'Typography/VLink',
  component: VLink,
  argTypes: {
    ...VTextStories.argTypes,
    as: {
      control: 'select',
      options: ['a', 'button']
    }
  }
} satisfies Meta<typeof VLink>

export default meta

type Story = StoryObj<typeof VLink>

export const Default = {
  render: args => ({
    components: { VLink },
    setup() {
      return { args }
    },
    template: '<VLink v-bind="args">Link text</VLink>'
  })
} satisfies Story

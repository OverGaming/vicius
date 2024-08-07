import type { Meta, StoryObj } from '@storybook/vue3'
import VSkeleton from './VSkeleton.vue'

const meta = {
  title: 'Misc/VSkeleton',
  component: VSkeleton,
  argTypes: {
    aspectRatio: {
      control: 'text'
    },
    width: {
      control: 'text'
    },
    height: {
      control: 'text'
    }
  }
} satisfies Meta<typeof VSkeleton>

export default meta

type Story = StoryObj<typeof VSkeleton>

export const Default = {
  render: args => ({
    components: { VSkeleton },
    setup() {
      return { args }
    },
    template: '<VSkeleton v-bind="args" />'
  }),
  args: {
    height: '4rem'
  }
} satisfies Story

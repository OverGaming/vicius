import type { Meta, StoryObj } from '@storybook/vue3'
import VTimeAgo from './VTimeAgo.vue'

const meta = {
  title: 'Data/VTimeAgo',
  component: VTimeAgo,
  argTypes: {
    time: {
      control: 'date'
    }
  }
} satisfies Meta<typeof VTimeAgo>

export default meta

type Story = StoryObj<typeof VTimeAgo>

export const Default = {
  render: args => ({
    components: { VTimeAgo },
    setup() {
      return { args }
    },
    template: '<VTimeAgo v-bind="args" />'
  }),
  args: {
    time: new Date()
  }
} satisfies Story

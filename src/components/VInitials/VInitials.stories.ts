import type { Meta, StoryObj } from '@storybook/vue3'
import VInitials from './VInitials.vue'

const meta = {
  title: 'Data/VInitials',
  component: VInitials
} satisfies Meta<typeof VInitials>

export default meta

type Story = StoryObj<typeof VInitials>

const render: Story['render'] = args => ({
  components: { VInitials },
  setup() {
    return { args }
  },
  template: '<VInitials v-bind="args" />'
})

export const Default = {
  render,
  args: {
    name: 'John Doe'
  }
} satisfies Story

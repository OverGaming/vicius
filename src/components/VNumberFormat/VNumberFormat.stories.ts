import type { Meta, StoryObj } from '@storybook/vue3'
import VNumberFormat from './VNumberFormat.vue'

const meta = {
  title: 'Data/VNumberFormat',
  component: VNumberFormat,
  argTypes: {
    value: { control: 'number' },
    digits: { control: 'number' }
  }
} satisfies Meta<typeof VNumberFormat>

export default meta

type Story = StoryObj<typeof VNumberFormat>

export const Default = {
  render: args => ({
    components: { VNumberFormat },
    setup() {
      return { args }
    },
    template: '<VNumberFormat v-bind="args" />'
  }),
  args: {
    value: 213124,
    digits: 1
  }
} satisfies Story

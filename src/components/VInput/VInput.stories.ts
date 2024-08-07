import type { Meta, StoryObj } from '@storybook/vue3'
import VInput from './VInput.vue'

const meta = {
  title: 'Form/VInput',
  component: VInput
} satisfies Meta<typeof VInput>

export default meta

type Story = StoryObj<typeof VInput>

export const Default = {
  render: args => ({
    components: { VInput },
    setup() {
      return { args }
    },
    template: '<VInput v-bind="args" />'
  })
} satisfies Story
